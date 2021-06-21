/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  GovernanceRouter,
  GovernanceRouterInterface,
} from "../GovernanceRouter";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_localDomain",
        type: "uint32",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "previousRouter",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "newRouter",
        type: "bytes32",
      },
    ],
    name: "SetRouter",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint32",
        name: "previousGovernorDomain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "newGovernorDomain",
        type: "uint32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "previousGovernor",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newGovernor",
        type: "address",
      },
    ],
    name: "TransferGovernor",
    type: "event",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callLocal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_destination",
        type: "uint32",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "to",
            type: "bytes32",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        internalType: "struct GovernanceMessage.Call[]",
        name: "_calls",
        type: "tuple[]",
      },
    ],
    name: "callRemote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "domains",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governor",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "governorDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_origin",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_sender",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_message",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "routers",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_router",
        type: "bytes32",
      },
    ],
    name: "setRouterDuringSetup",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_xAppConnectionManager",
        type: "address",
      },
    ],
    name: "setXAppConnectionManager",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_newDomain",
        type: "uint32",
      },
      {
        internalType: "address",
        name: "_newGovernor",
        type: "address",
      },
    ],
    name: "transferGovernor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "xAppConnectionManager",
    outputs: [
      {
        internalType: "contract XAppConnectionManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620031593803806200315983398101604081905262000034916200004a565b60e01b6001600160e01b03191660805262000077565b6000602082840312156200005c578081fd5b815163ffffffff8116811462000070578182fd5b9392505050565b60805160e01c6130b5620000a460003980610872528061097e52806109af52806113ce52506130b56000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c806356d5d4751161008c5780638d3638f4116100665780638d3638f4146101be578063c4d66de8146101c6578063db2021ae146101d9578063e8c6f83a146101ec576100ea565b806356d5d4751461018557806366cf8fab146101985780637d8dfc33146101ab576100ea565b806341bdc8b5116100c857806341bdc8b5146101355780634626abee1461014a5780634fedbbb51461015d5780635585416c14610170576100ea565b80630c340a24146100ef5780632ead72f61461010d5780633339df961461012d575b600080fd5b6100f76101ff565b6040516101049190612c07565b60405180910390f35b61012061011b3660046129dc565b61021b565b6040516101049190612c28565b6100f761022d565b61014861014336600461292c565b61024f565b005b610148610158366004612948565b6102f6565b61014861016b366004612a4c565b61038f565b610178610518565b6040516101049190612dbe565b610148610193366004612aca565b61053e565b6101786101a63660046129c4565b6107d7565b6101486101b9366004612a9f565b610811565b610178610870565b6101486101d436600461292c565b610894565b6101486101e7366004612a14565b610ae5565b6101486101fa366004612a9f565b610b7f565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60026020526000908152604090205481565b60005462010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff1633146102a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b60405180910390fd5b6000805473ffffffffffffffffffffffffffffffffffffffff90921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055565b60015473ffffffffffffffffffffffffffffffffffffffff163314610347576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b60005b8181101561038a5761038183838381811061036157fe5b90506020028101906103739190612e4b565b61037c90612f02565b610bf1565b5060010161034a565b505050565b60015473ffffffffffffffffffffffffffffffffffffffff1633146103e0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b60006103eb84610cb4565b905060006104016103fc8486612ea2565b610d06565b9050600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561046b57600080fd5b505afa15801561047f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104a391906129a8565b73ffffffffffffffffffffffffffffffffffffffff1663d34686398684846040518463ffffffff1660e01b81526004016104df93929190612dcf565b600060405180830381600087803b1580156104f957600080fd5b505af115801561050d573d6000803e3d6000fd5b505050505050505050565b600054760100000000000000000000000000000000000000000000900463ffffffff1681565b6000546040517f5190bc530000000000000000000000000000000000000000000000000000000081526201000090910473ffffffffffffffffffffffffffffffffffffffff1690635190bc5390610599903390600401612c07565b60206040518083038186803b1580156105b157600080fd5b505afa1580156105c5573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105e99190612988565b61061f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612cab565b828261062b8282610edb565b610661576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612c3f565b600061066d8482610f2d565b905061069a7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216610f51565b156106d7576106d26106cd7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316610fac565b610ffa565b6107cf565b6107027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611093565b1561073a576106d26107357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000083166110f1565b61110b565b6107657fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008216611196565b1561079d576106d26107987fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831661119f565b6111b9565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d50565b505050505050565b600381815481106107e757600080fd5b9060005260206000209060089182820401919006600402915054906101000a900463ffffffff1681565b60015473ffffffffffffffffffffffffffffffffffffffff163314610862576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b61086c828261122a565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600054610100900460ff16806108ad57506108ad6112bb565b806108bb575060005460ff16155b610910576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e815260200180612f90602e913960400191505060405180910390fd5b600054610100900460ff1615801561097657600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff909116610100171660011790555b3360016109a47f000000000000000000000000000000000000000000000000000000000000000083836112cc565b6109ad8461024f565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff16600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16638d3638f46040518163ffffffff1660e01b815260040160206040518083038186803b158015610a3c57600080fd5b505afa158015610a50573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a7491906129f8565b63ffffffff1614610ab1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612c76565b5050801561086c57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff1690555050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610b36576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b6000610b41836113cc565b9050610b4e8383836112cc565b8015610b5a575061086c565b6000610b6e84610b69856113fb565b611414565b9050610b7981611441565b50505050565b60015473ffffffffffffffffffffffffffffffffffffffff163314610bd0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d87565b610bda828261122a565b6000610be68383611638565b905061038a81611441565b60606000610c028360000151611660565b905060008173ffffffffffffffffffffffffffffffffffffffff168460200151604051610c2f9190612b5f565b6000604051808303816000865af19150503d8060008114610c6c576040519150601f19603f3d011682016040523d82523d6000602084013e610c71565b606091505b509350905080610cad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612ce2565b5050919050565b63ffffffff811660009081526002602052604090205480610d01576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090612d19565b919050565b805160609060006002820167ffffffffffffffff81118015610d2757600080fd5b50604051908082528060200260200182016040528015610d51578160200160208202803683370190505b509050610d9f60006001604051602001610d6b9190612b7b565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe081840301815291905290610f2d565b81600081518110610dac57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101820152604051610df291600091610d6b91869101612bd7565b81600181518110610dff57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009092166020928302919091019091015260005b82811015610ec9576000858281518110610e4957fe5b602002602001015190506000610e7c600083600001518460200151518560200151604051602001610d6b93929190612b32565b905080846002850181518110610e8e57fe5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000909216602092830291909101909101525050600101610e33565b50610ed381611663565b949350505050565b6000805463ffffffff84811676010000000000000000000000000000000000000000000090920416148015610f24575063ffffffff831660009081526002602052604090205482145b90505b92915050565b815160009060208401610f4864ffffffffff851682846116b3565b95945050505050565b60006001610f5e83611714565b60ff16148015610f2757506040610f967fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611744565b6bffffffffffffffffffffffff16101592915050565b6000610fb782610f51565b15610ff257610feb60015b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000841690611758565b9050610d01565b610f2761177e565b80600161102b815b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416906117a2565b5060006110597fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611922565b905060005b815181101561108c5761108382828151811061107657fe5b6020026020010151610bf1565b5060010161105e565b5050505050565b600060025b60ff166110a483611714565b60ff16148015610f27575060256110dc7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416611744565b6bffffffffffffffffffffffff161492915050565b60006110fc82611093565b15610ff257610feb6002610fc2565b80600261111781611002565b5060006111457fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611ac5565b9050600061117c6111777fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008716611af6565b611660565b90506000611189836113cc565b90506107cf8383836112cc565b60006003611098565b60006111aa82611196565b15610ff257610feb6003610fc2565b8060036111c581611002565b5060006111f37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611ac5565b905060006112227fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008616611af6565b905061108c82825b63ffffffff8216600081815260026020526040908190205490519091907fe1cc453e5e6d48a5e3dd7dc6c72117211d2bea20fbb91fd980ebc3e7f73fe546906112769084908690612c31565b60405180910390a2816112925761128c83611b27565b5061086c565b806112a0576112a083611bce565b5063ffffffff91909116600090815260026020526040902055565b60006112c630611c2e565b15905090565b806112dc576112da83610cb4565b505b6000816112ea5760006112ec565b825b600080547fffffffffffff00000000ffffffffffffffffffffffffffffffffffffffffffff1676010000000000000000000000000000000000000000000063ffffffff88811682029290921792839055600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff8681169182179283905560405196975090959116937f4daaa39e87dee84708195369c30e97baa0665dc8562ac10535a0f3a9329943aa936113be9390910416908990612e34565b60405180910390a350505050565b7f000000000000000000000000000000000000000000000000000000000000000063ffffffff90811691161490565b73ffffffffffffffffffffffffffffffffffffffff1690565b6060610f2461143c611437600060028787604051602001610d6b93929190612b90565b611c34565b611c69565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16639fa92f9d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156114aa57600080fd5b505afa1580156114be573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114e291906129a8565b905060005b60035481101561038a57600063ffffffff166003828154811061150657fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff1614611630578173ffffffffffffffffffffffffffffffffffffffff1663d34686396003838154811061155857fe5b90600052602060002090600891828204019190066004029054906101000a900463ffffffff16600260006003868154811061158f57fe5b6000918252602080832060088304015463ffffffff6004600790941684026101000a909104168452830193909352604091820190205490517fffffffff0000000000000000000000000000000000000000000000000000000060e086901b1681526115fd9392899101612dcf565b600060405180830381600087803b15801561161757600080fd5b505af115801561162b573d6000803e3d6000fd5b505050505b6001016114e7565b6060610f2461143c61165b600060038787604051602001610d6b93929190612b90565b611cad565b90565b60405160609060006116788460208401611cbb565b9050600061168582611744565b6bffffffffffffffffffffffff16905060006116a083611d33565b9184525082016020016040525092915050565b6000806116c08484611d47565b90506040518111156116d0575060005b806116fe577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000091505061170d565b611709858585611db9565b9150505b9392505050565b6000610f277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826001611dcc565b60181c6bffffffffffffffffffffffff1690565b60d81b7affffffffffffffffffffffffffffffffffffffffffffffffffffff9091161790565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00000090565b60006117ae8383611ded565b61191b5760006117cc6117c085611e0f565b64ffffffffff16611e15565b91505060006117e18464ffffffffff16611e15565b604080517f5479706520617373657274696f6e206661696c65642e20476f742030780000006020808301919091527fffffffffffffffffffff0000000000000000000000000000000000000000000060b088811b8216603d8501527f2e20457870656374656420307800000000000000000000000000000000000000604785015285901b1660548301528251603e818403018152605e8301938490527f08c379a000000000000000000000000000000000000000000000000000000000909352606282018181528351608284015283519496509294508493839260a2019185019080838360005b838110156118e05781810151838201526020016118c8565b50505050905090810190601f16801561190d5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5090919050565b606060006119547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008416600180611dcc565b905060006119c56002806119897fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816611744565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008816929190611ee9565b905060008260ff1667ffffffffffffffff811180156119e357600080fd5b50604051908082528060200260200182016040528015611a1d57816020015b611a0a6127e0565b815260200190600190039081611a025790505b50905060005b6000611a507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008516611744565b6bffffffffffffffffffffffff161115611abc57611a6d83611f79565b828281518110611a7957fe5b602090810291909101015152611a8e83611fa9565b828281518110611a9a57fe5b602002602001015160200181905250611ab283611fe8565b9250600101611a23565b50949350505050565b6000610f277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660016004611dcc565b6000610f277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000831660056020612073565b63ffffffff811660009081526002602052604081208190555b60035481101561086c578163ffffffff1660038281548110611b5e57fe5b6000918252602090912060088204015460079091166004026101000a900463ffffffff161415611bc35760038181548110611b9557fe5b90600052602060002090600891828204019190066004026101000a81549063ffffffff021916905550611bcb565b600101611b40565b50565b600380546001810182556000919091527fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b6008820401805460079092166004026101000a63ffffffff818102199093169390921691909102919091179055565b3b151590565b6000610f27611c42836110f1565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000166121e1565b6060600080611c7784611744565b6bffffffffffffffffffffffff1690506040519150819250611c9c848360200161225b565b508181016020016040529052919050565b6000610f27611c428361119f565b600060405182811115611cce5760206060fd5b506000805b8451811015611d26576000858281518110611cea57fe5b60200260200101519050611d008184870161225b565b50611d0a81611744565b6bffffffffffffffffffffffff16929092019150600101611cd3565b50610ed360008483611db9565b6000611d3e82612387565b60200292915050565b81810182811015610f2757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f4f766572666c6f7720647572696e67206164646974696f6e2e00000000000000604482015290519081900360640190fd5b606092831b9190911790911b1760181b90565b60008160200360080260ff16611de3858585612073565b901c949350505050565b60008164ffffffffff16611e0084611e0f565b64ffffffffff16149392505050565b60d81c90565b600080601f5b600f8160ff161115611e7d5760ff600882021684901c611e3a816123bb565b61ffff16841793508160ff16601014611e5557601084901b93505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611e1b565b50600f5b60ff8160ff161015611ee35760ff600882021684901c611ea0816123bb565b61ffff16831792508160ff16600014611ebb57601083901b92505b507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01611e81565b50915091565b600080611ef5866123eb565b6bffffffffffffffffffffffff169050611f0e866123ff565b611f2285611f1c8489611d47565b90611d47565b1115611f51577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000915050610ed3565b611f5b8186611d47565b9050611f6f8364ffffffffff1682866116b3565b9695505050505050565b6000610f277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316826020612073565b6060610f2761143c6040611fbc85612429565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000861691906004611ee9565b6000816001611ff681611002565b50600061200285612429565b6040019050610f4881806120377fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916611744565b6bffffffffffffffffffffffff160360017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008916929190611ee9565b600060ff82166120855750600061170d565b61208e84611744565b6bffffffffffffffffffffffff166120a98460ff8516611d47565b111561214b576120ea6120bb856123eb565b6bffffffffffffffffffffffff166120d286611744565b6bffffffffffffffffffffffff16858560ff16612459565b6040517f08c379a00000000000000000000000000000000000000000000000000000000081526020600482018181528351602484015283519092839260449091019190850190808383600083156118e05781810151838201526020016118c8565b60208260ff1611156121a8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252603a815260200180612fbe603a913960400191505060405180910390fd5b6008820260006121b7866123eb565b6bffffffffffffffffffffffff16905060006121d2836125b4565b91909501511695945050505050565b60006121ec826125fd565b61225757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601960248201527f56616c696469747920617373657274696f6e206661696c656400000000000000604482015290519081900360640190fd5b5090565b60006122668361263a565b6122bb576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401808060200182810382526028815260200180612ff86028913960400191505060405180910390fd5b6122c4836125fd565b612319576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602b815260200180613020602b913960400191505060405180910390fd5b600061232484611744565b6bffffffffffffffffffffffff169050600061233f856123eb565b6bffffffffffffffffffffffff16905060006040519050848111156123645760206060fd5b8285848460045afa50611f6f61237987611e0f565b64ffffffffff168685611db9565b600060206123ad602061239985611744565b6bffffffffffffffffffffffff1690611d47565b816123b457fe5b0492915050565b60006123cd60048360ff16901c61264c565b60ff161760081b62ffff00166123e28261264c565b60ff1617919050565b60781c6bffffffffffffffffffffffff1690565b600061240a82611744565b612413836123eb565b016bffffffffffffffffffffffff169050919050565b6000610f277fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000008316602080612073565b6060600061246686611e15565b915050600061247486611e15565b915050600061248286611e15565b915050600061249086611e15565b91505083838383604051602001808061304b603591397fffffffffffff000000000000000000000000000000000000000000000000000060d087811b821660358401527f2077697468206c656e6774682030780000000000000000000000000000000000603b84015286901b16604a8201526050016021612f6f82397fffffffffffff000000000000000000000000000000000000000000000000000060d094851b811660218301527f2077697468206c656e677468203078000000000000000000000000000000000060278301529290931b9091166036830152507f2e00000000000000000000000000000000000000000000000000000000000000603c82015260408051601d818403018152603d90920190529b9a5050505050505050505050565b7f80000000000000000000000000000000000000000000000000000000000000007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091011d90565b600061260882611e0f565b64ffffffffff1664ffffffffff141561262357506000610d01565b600061262e836123ff565b60405110199392505050565b6000612645826127b8565b1592915050565b600060f08083179060ff82161415612668576030915050610d01565b8060ff1660f1141561267e576031915050610d01565b8060ff1660f21415612694576032915050610d01565b8060ff1660f314156126aa576033915050610d01565b8060ff1660f414156126c0576034915050610d01565b8060ff1660f514156126d6576035915050610d01565b8060ff1660f614156126ec576036915050610d01565b8060ff1660f71415612702576037915050610d01565b8060ff1660f81415612718576038915050610d01565b8060ff1660f9141561272e576039915050610d01565b8060ff1660fa1415612744576061915050610d01565b8060ff1660fb141561275a576062915050610d01565b8060ff1660fc1415612770576063915050610d01565b8060ff1660fd1415612786576064915050610d01565b8060ff1660fe141561279c576065915050610d01565b8060ff1660ff14156127b2576066915050610d01565b50919050565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0000009081161490565b60408051808201909152600081526060602082015290565b60008083601f840112612809578182fd5b50813567ffffffffffffffff811115612820578182fd5b602083019150836020808302850101111561283a57600080fd5b9250929050565b600082601f830112612851578081fd5b813567ffffffffffffffff81111561286557fe5b61289660207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601612e7e565b8181528460208386010111156128aa578283fd5b816020850160208301379081016020019190915292915050565b6000604082840312156128d5578081fd5b6040516040810167ffffffffffffffff82821081831117156128f357fe5b8160405282935084358352602085013591508082111561291257600080fd5b5061291f85828601612841565b6020830152505092915050565b60006020828403121561293d578081fd5b813561170d81612f3a565b6000806020838503121561295a578081fd5b823567ffffffffffffffff811115612970578182fd5b61297c858286016127f8565b90969095509350505050565b600060208284031215612999578081fd5b8151801515811461170d578182fd5b6000602082840312156129b9578081fd5b815161170d81612f3a565b6000602082840312156129d5578081fd5b5035919050565b6000602082840312156129ed578081fd5b813561170d81612f5c565b600060208284031215612a09578081fd5b815161170d81612f5c565b60008060408385031215612a26578182fd5b8235612a3181612f5c565b91506020830135612a4181612f3a565b809150509250929050565b600080600060408486031215612a60578081fd5b8335612a6b81612f5c565b9250602084013567ffffffffffffffff811115612a86578182fd5b612a92868287016127f8565b9497909650939450505050565b60008060408385031215612ab1578182fd5b8235612abc81612f5c565b946020939093013593505050565b600080600060608486031215612ade578283fd5b8335612ae981612f5c565b925060208401359150604084013567ffffffffffffffff811115612b0b578182fd5b612b1786828701612841565b9150509250925092565b60058110612b2b57fe5b60f81b9052565b60008482528360208301528251612b50816040850160208701612f0e565b91909101604001949350505050565b60008251612b71818460208701612f0e565b9190910192915050565b6000612b878284612b21565b50600101919050565b6000612b9c8286612b21565b5060e09290921b7fffffffff000000000000000000000000000000000000000000000000000000001660018301526005820152602501919050565b60f89190911b7fff0000000000000000000000000000000000000000000000000000000000000016815260010190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b90815260200190565b918252602082015260400190565b6020808252600f908201527f21676f7665726e6f72526f757465720000000000000000000000000000000000604082015260600190565b6020808252818101527f58417070436f6e6e656374696f6e4d616e616765722062616420646f6d61696e604082015260600190565b60208082526008908201527f217265706c696361000000000000000000000000000000000000000000000000604082015260600190565b6020808252600b908201527f63616c6c206661696c6564000000000000000000000000000000000000000000604082015260600190565b60208082526007908201527f21726f7574657200000000000000000000000000000000000000000000000000604082015260600190565b60208082526013908201527f2176616c6964206d657373616765207479706500000000000000000000000000604082015260600190565b6020808252601a908201527f43616c6c6572206973206e6f742074686520676f7665726e6f72000000000000604082015260600190565b63ffffffff91909116815260200190565b600063ffffffff85168252836020830152606060408301528251806060840152612e00816080850160208701612f0e565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01691909101608001949350505050565b63ffffffff92831681529116602082015260400190565b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc1833603018112612b71578182fd5b60405181810167ffffffffffffffff81118282101715612e9a57fe5b604052919050565b600067ffffffffffffffff831115612eb657fe5b6020612ec58182860201612e7e565b8481528181019084845b87811015612ef657612ee436833589016128c4565b84529284019290840190600101612ecf565b50909695505050505050565b6000610f2736836128c4565b60005b83811015612f29578181015183820152602001612f11565b83811115610b795750506000910152565b73ffffffffffffffffffffffffffffffffffffffff81168114611bcb57600080fd5b63ffffffff81168114611bcb57600080fdfe2e20417474656d7074656420746f20696e646578206174206f6666736574203078496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a656454797065644d656d566965772f696e646578202d20417474656d7074656420746f20696e646578206d6f7265207468616e20333220627974657354797065644d656d566965772f636f7079546f202d204e756c6c20706f696e74657220646572656654797065644d656d566965772f636f7079546f202d20496e76616c696420706f696e74657220646572656654797065644d656d566965772f696e646578202d204f76657272616e2074686520766965772e20536c696365206973206174203078a264697066735822122043414c0dee20343b11a46cc7ed8869c6ae7914bcf55001a2f577bbdb5fcdd27f64736f6c63430007060033";

export class GovernanceRouter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<GovernanceRouter> {
    return super.deploy(
      _localDomain,
      overrides || {}
    ) as Promise<GovernanceRouter>;
  }
  getDeployTransaction(
    _localDomain: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_localDomain, overrides || {});
  }
  attach(address: string): GovernanceRouter {
    return super.attach(address) as GovernanceRouter;
  }
  connect(signer: Signer): GovernanceRouter__factory {
    return super.connect(signer) as GovernanceRouter__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GovernanceRouterInterface {
    return new utils.Interface(_abi) as GovernanceRouterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GovernanceRouter {
    return new Contract(address, _abi, signerOrProvider) as GovernanceRouter;
  }
}
