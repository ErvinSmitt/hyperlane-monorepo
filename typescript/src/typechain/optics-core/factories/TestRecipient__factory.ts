/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { TestRecipient, TestRecipientInterface } from "../TestRecipient";

const _abi = [
  {
    stateMutability: "nonpayable",
    type: "fallback",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "handle",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "message",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "callProcessed",
        type: "bool",
      },
    ],
    name: "processCall",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "processed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_str",
        type: "string",
      },
    ],
    name: "receiveString",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000805460ff1916905534801561001a57600080fd5b5061039c8061002a6000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c806356d5d4751161005057806356d5d475146101cf578063c0a58a4d14610289578063e21f37ce146102a857610067565b80632ce5c284146100ce5780634e376c5d146100ea575b604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600860248201527f46616c6c6261636b000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b6100d66102b0565b604080519115158252519081900360200190f35b61015a6004803603602081101561010057600080fd5b81019060208101813564010000000081111561011b57600080fd5b82018360208201111561012d57600080fd5b8035906020019184600183028401116401000000008311171561014f57600080fd5b5090925090506102b9565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561019457818101518382015260200161017c565b50505050905090810190601f1680156101c15780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610287600480360360608110156101e557600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561021257600080fd5b82018360208201111561022457600080fd5b8035906020019184600183028401116401000000008311171561024657600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506102f9945050505050565b005b6102876004803603602081101561029f57600080fd5b503515156102fe565b61015a61032f565b60005460ff1681565b606082828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929695505050505050565b505050565b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016911515919091179055565b60408051808201909152601081527f6d6573736167652072656365697665640000000000000000000000000000000060208201529056fea26469706673582212200f197e5e391a9f0a9c1c2996359aeef685342b1ca815259c98aef63ad72bb16464736f6c63430007060033";

export class TestRecipient__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TestRecipient> {
    return super.deploy(overrides || {}) as Promise<TestRecipient>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): TestRecipient {
    return super.attach(address) as TestRecipient;
  }
  connect(signer: Signer): TestRecipient__factory {
    return super.connect(signer) as TestRecipient__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestRecipientInterface {
    return new utils.Interface(_abi) as TestRecipientInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestRecipient {
    return new Contract(address, _abi, signerOrProvider) as TestRecipient;
  }
}
