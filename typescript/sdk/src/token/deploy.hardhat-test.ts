import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers.js';
import { expect } from 'chai';
import hre from 'hardhat';

import {
  ERC20Test,
  ERC20Test__factory,
  Mailbox,
  Mailbox__factory,
} from '@hyperlane-xyz/core';
import { IsmType, RouterConfig, TestChainName } from '@hyperlane-xyz/sdk';
import { objMap } from '@hyperlane-xyz/utils';

import { TestCoreApp } from '../core/TestCoreApp.js';
import { TestCoreDeployer } from '../core/TestCoreDeployer.js';
import { EvmERC20WarpCrudModule } from '../crud/EvmWarpCrudModule.js';
import { HyperlaneProxyFactoryDeployer } from '../deploy/HyperlaneProxyFactoryDeployer.js';
import { HyperlaneIsmFactory } from '../ism/HyperlaneIsmFactory.js';
import { MultiProvider } from '../providers/MultiProvider.js';
import { randomAddress } from '../test/testUtils.js';
import { ChainMap } from '../types.js';

import {
  // TokenRouterConfig,
  // HypERC20CollateralConfig,
  HypERC20Config,
  TokenConfig,
  TokenType,
} from './config.js';
import { HypERC20Deployer } from './deploy.js';
import { DerivedTokenType, EvmERC20WarpRouteReader } from './read.js';
import {
  /*TokenRouterConfig,*/
  WarpRouteDeployConfig,
} from './types.js';

describe('TokenDeployer', async () => {
  const TOKEN_NAME = 'fake';
  const TOKEN_SUPPLY = '100000000000000000000';
  const TOKEN_DECIMALS = 18;
  const GAS = 65_000;
  const chain = TestChainName.test1;
  let erc20Factory: ERC20Test__factory;
  let token: ERC20Test;
  let signer: SignerWithAddress;
  let deployer: HypERC20Deployer;
  let multiProvider: MultiProvider;
  let coreApp: TestCoreApp;
  let routerConfigMap: ChainMap<RouterConfig>;
  let config: WarpRouteDeployConfig;
  let baseConfig: RouterConfig;

  before(async () => {
    [signer] = await hre.ethers.getSigners();
    multiProvider = MultiProvider.createTestMultiProvider({ signer });
    const ismFactoryDeployer = new HyperlaneProxyFactoryDeployer(multiProvider);
    const factories = await ismFactoryDeployer.deploy(
      multiProvider.mapKnownChains(() => ({})),
    );
    const ismFactory = new HyperlaneIsmFactory(factories, multiProvider);
    coreApp = await new TestCoreDeployer(multiProvider, ismFactory).deployApp();
    routerConfigMap = coreApp.getRouterConfig(signer.address);
    config = objMap(
      routerConfigMap,
      (chain, c): HypERC20Config => ({
        type: TokenType.synthetic,
        name: chain,
        symbol: `u${chain}`,
        decimals: TOKEN_DECIMALS,
        totalSupply: TOKEN_SUPPLY,
        gas: GAS,
        ...c,
      }),
    );

    erc20Factory = new ERC20Test__factory(signer);
    token = await erc20Factory.deploy(
      TOKEN_NAME,
      TOKEN_NAME,
      TOKEN_SUPPLY,
      TOKEN_DECIMALS,
    );

    baseConfig = routerConfigMap[TestChainName.test1];
  });

  beforeEach(async () => {
    deployer = new HypERC20Deployer(multiProvider);
  });

  it('deploys', async () => {
    await deployer.deploy(config as ChainMap<TokenConfig & RouterConfig>);
  });

  describe('ERC20WarpRouterReader', async () => {
    const chainName = Chains.test1;
    // let config: WarpRouteDeployConfig;
    let mailbox: Mailbox;
    // let warpRoute: any;
    let evmERC20WarpRouteReader: EvmERC20WarpRouteReader;

    before(async () => {
      mailbox = Mailbox__factory.connect(baseConfig.mailbox, signer);
      evmERC20WarpRouteReader = new EvmERC20WarpRouteReader(
        multiProvider,
        chainName,
      );
    });

    it.only('should derive a token type from contract', async () => {
      const typesToDerive: DerivedTokenType[] = [
        TokenType.collateral,
        // TokenType.collateralVault, @todo add collateralVault by deploying a vault instead of erc20
        TokenType.synthetic,
        TokenType.native,
      ];

      await Promise.all(
        typesToDerive.map(async (type) => {
          // Create config
          const config = {
            [TestChainName.test1]: {
              type,
              token: token.address,
              hook: await mailbox.defaultHook(),
              name: TOKEN_NAME,
              symbol: TOKEN_NAME,
              decimals: TOKEN_DECIMALS,
              totalSupply: TOKEN_SUPPLY,
              gas: GAS,
              ...baseConfig,
            },
          };
          // Deploy warp route with config
          const warpRoute = await deployer.deploy(
            config as ChainMap<TokenConfig & RouterConfig>,
          );
          const derivedTokenType =
            await evmERC20WarpRouteReader.deriveTokenType(
              warpRoute[chainName][type].address,
            );
          expect(derivedTokenType).to.equal(type);
        }),
      );
    });
    it('should derive TokenRouterConfig from collateral correctly', async () => {
      // Create config
      const config = {
        [TestChainName.test1]: {
          type: TokenType.collateral,
          token: token.address,
          hook: await mailbox.defaultHook(),
          ...baseConfig,
        },
      };
      // Deploy with config
      const warpRoute = await deployer.deploy(
        config as ChainMap<TokenConfig & RouterConfig>,
      );

      // Derive config and check if each value matches
      const derivedConfig =
        (await evmERC20WarpRouteReader.deriveWarpRouteConfig(
          warpRoute[TestChainName.test1].collateral.address,
        )) as CollateralConfig;

      for (const [key, value] of Object.entries(derivedConfig)) {
        const deployedValue = (config[TestChainName.test1] as any)[key];
        if (deployedValue) expect(deployedValue).to.equal(value);
      }

      // Check if token values matches
      expect(derivedConfig.name).to.equal(TOKEN_NAME);
      expect(derivedConfig.symbol).to.equal(TOKEN_NAME);
      expect(derivedConfig.decimals).to.equal(TOKEN_DECIMALS);
    });
  });

  describe('EvmERC20WarpRouteReader', async () => {
    let config: TokenRouterConfig;
    let mailbox: Mailbox;

    before(async () => {
      mailbox = Mailbox__factory.connect(baseConfig.mailbox, signer);
      config = {
        type: TokenType.collateral,
        token: token.address,
        hook: await mailbox.defaultHook(),
        ...baseConfig,
      };
    });
    describe('Create', async () => {
      it('should create with a config', async () => {
        // Deploy using WarpCrudModule
        const evmERC20WarpCrudModule = await EvmERC20WarpCrudModule.create({
          chain,
          config,
          multiProvider,
        });

        // Let's derive it's onchain token type
        const { collateral } = evmERC20WarpCrudModule.serialize();
        const tokenType: TokenType =
          await evmERC20WarpCrudModule.reader.deriveTokenType(
            collateral.address,
          );
        expect(tokenType).to.equal(TokenType.collateral);
      });
    });

    describe('Update', async () => {
      it('should update existing ISM when provided an ISM string', async () => {
        // Deploy using WarpCrudModule
        const evmERC20WarpCrudModule = await EvmERC20WarpCrudModule.create({
          chain,
          config,
          multiProvider,
        });
        const warpRouteAddress =
          evmERC20WarpCrudModule.serialize()[TokenType.collateral];

        // Update ISM and compare onchain values
        const ismToUpdate = await mailbox.defaultIsm();
        const tx = await evmERC20WarpCrudModule.update({
          ...config,
          interchainSecurityModule: ismToUpdate,
        });

        await multiProvider.sendTransaction(chain, tx[0].transaction);
        const updatedIsm = (
          await evmERC20WarpCrudModule.read(warpRouteAddress.address)
        ).interchainSecurityModule;
        expect(updatedIsm?.address).to.equal(ismToUpdate);
      });

      it.only('should deploy given with an ISM object with a type different than onchain', async () => {
        // Deploy using WarpCrudModule
        const evmERC20WarpCrudModule = await EvmERC20WarpCrudModule.create({
          chain,
          config,
          multiProvider,
        });
        const warpRouteAddress =
          evmERC20WarpCrudModule.serialize()[TokenType.collateral];

        // Update ISM and compare onchain values
        const ismToUpdate = await mailbox.defaultIsm();
        let tx = await evmERC20WarpCrudModule.update({
          ...config,
          interchainSecurityModule: ismToUpdate,
        });

        await multiProvider.sendTransaction(chain, tx[0].transaction);
        let updatedIsm = (
          await evmERC20WarpCrudModule.read(warpRouteAddress.address)
        ).interchainSecurityModule;
        expect(updatedIsm?.address).to.equal(ismToUpdate);

        // Update to a different ISM type
        tx = await evmERC20WarpCrudModule.update({
          ...config,
          interchainSecurityModule: {
            type: IsmType.PAUSABLE,
            paused: false,
            owner: randomAddress(),
          },
        });

        await multiProvider.sendTransaction(chain, tx[0].transaction);
        updatedIsm = (
          await evmERC20WarpCrudModule.read(warpRouteAddress.address)
        ).interchainSecurityModule;
        expect(updatedIsm?.address).to.equal(ismToUpdate);
      });
    });

    it('should update existing Hook when provided an Hook string', async () => {
      // Deploy using WarpCrudModule
      const evmERC20WarpCrudModule = await EvmERC20WarpCrudModule.create({
        chain,
        config,
        multiProvider,
      });
      const warpRouteAddress =
        evmERC20WarpCrudModule.serialize()[TokenType.collateral];

      // Update Hook and compare onchain values
      const hookToUpdate = await mailbox.defaultHook();
      const tx = await evmERC20WarpCrudModule.update({
        ...config,
        hook: hookToUpdate,
      });

      await multiProvider.sendTransaction(chain, tx[0].transaction);
      const updatedHook = (
        await evmERC20WarpCrudModule.read(warpRouteAddress.address)
      ).hook;
      expect(updatedHook).to.equal(hookToUpdate);
    });
  });
});
