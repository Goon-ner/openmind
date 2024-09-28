/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { NonPayableOverrides } from "../common";
import type { NewNFTMarket, NewNFTMarketInterface } from "../NewNFTMarket";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_token",
        type: "address",
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
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "seller",
        type: "address",
      },
    ],
    name: "NFTAdded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    inputs: [],
    name: "_getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "_balance",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_price",
        type: "uint256",
      },
    ],
    name: "add",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "buy",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "deleteNft",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "getNft",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOnSale",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "items",
    outputs: [
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "owners",
    outputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561000f575f80fd5b50604051610b6c380380610b6c83398101604081905261002e91610060565b60018054336001600160a01b0319918216179091555f80549091166001600160a01b039290921691909117905561008d565b5f60208284031215610070575f80fd5b81516001600160a01b0381168114610086575f80fd5b9392505050565b610ad28061009a5f395ff3fe608060405260043610610083575f3560e01c8063bfb231d211610055578063bfb231d21461013d578063d96a094a14610176578063da78bc6914610189578063efff5e2f146101aa578063f6b157a8146101bc57005b8063025e7c271461008c5780633ccfd60b146100dd57806341f63bfd146100f1578063771602f71461011e57005b3661008a57005b005b348015610097575f80fd5b506100c06100a6366004610866565b60036020525f90815260409020546001600160a01b031681565b6040516001600160a01b0390911681526020015b60405180910390f35b3480156100e8575f80fd5b5061008a6101db565b3480156100fc575f80fd5b5061011061010b366004610866565b61022a565b6040516100d492919061089f565b348015610129575f80fd5b5061008a6101383660046108d9565b6102b4565b348015610148575f80fd5b50610168610157366004610866565b60026020525f908152604090205481565b6040519081526020016100d4565b61008a610184366004610866565b610517565b348015610194575f80fd5b5061019d610706565b6040516100d491906108f9565b3480156101b5575f80fd5b5047610168565b3480156101c7575f80fd5b5061008a6101d6366004610866565b61075c565b6001546001600160a01b031633146101f1575f80fd5b6001546040516001600160a01b03909116904780156108fc02915f818181858888f19350505050158015610227573d5f803e3d5ffd5b50565b5f805460405163c87b56dd60e01b8152600481018490526060929182916001600160a01b039091169063c87b56dd906024015f60405180830381865afa158015610276573d5f803e3d5ffd5b505050506040513d5f823e601f3d908101601f1916820160405261029d9190810190610950565b5f9485526002602052604090942054939492505050565b5f80546040516331a9108f60e11b8152600481018590526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156102fb573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061031f91906109f8565b90506001600160a01b0381163314610335575f80fd5b5f5460405163e985e9c560e01b81526001600160a01b0383811660048301523060248301529091169063e985e9c590604401602060405180830381865afa158015610382573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906103a69190610a25565b8061042157505f5460405163020604bf60e21b81526004810185905230916001600160a01b03169063081812fc90602401602060405180830381865afa1580156103f2573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061041691906109f8565b6001600160a01b0316145b6104655760405162461bcd60e51b8152602060048201526011602482015270696e76616c696420617070726f76616c2160781b604482015260640160405180910390fd5b5f8211610470575f80fd5b5f8381526002602090815260408083208590556003825280832080546001600160a01b0319166001600160a01b0386169081179091556004805460018101825594527f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90930186905580518581529182019290925284917f90cb21d5235a673aa1ffd63bf09c73d28454d541af736a13618a551f5774ca6e910160405180910390a2505050565b5f80546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa15801561055e573d5f803e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061058291906109f8565b6001600160a01b031603610594575f80fd5b5f818152600260205260409020546105aa575f80fd5b5f818152600360209081526040808320546002909252909120546001600160a01b0390911690806105e3670de0b6b3a764000034610a44565b146105ec575f80fd5b5f54604051632142170760e11b81526001600160a01b03848116600483015233602483015260448201869052909116906342842e0e906064015f604051808303815f87803b15801561063c575f80fd5b505af115801561064e573d5f803e3d5ffd5b50505050816001600160a01b03166108fc60643461066c9190610a44565b6106769034610a63565b6040518115909202915f818181858888f1935050505015801561069b573d5f803e3d5ffd5b506106a58361075c565b5f826001600160a01b0316826040515f6040518083038185875af1925050503d805f81146106ee576040519150601f19603f3d011682016040523d82523d5f602084013e6106f3565b606091505b5050905080610700575f80fd5b50505050565b6060600480548060200260200160405190810160405280929190818152602001828054801561075257602002820191905f5260205f20905b81548152602001906001019080831161073e575b5050505050905090565b5f80546040516331a9108f60e11b8152600481018490526001600160a01b0390911690636352211e90602401602060405180830381865afa1580156107a3573d5f803e3d5ffd5b505050506040513d601f19601f820116820180604052508101906107c791906109f8565b90506001600160a01b03811633146107dd575f80fd5b5f8281526002602090815260408083208390556003909152902080546001600160a01b031916905561080e82610812565b5050565b5f5b60045481101561080e57816004828154811061083257610832610a88565b905f5260205f2001540361085e576004818154811061085357610853610a88565b5f9182526020822001555b600101610814565b5f60208284031215610876575f80fd5b5035919050565b5f5b8381101561089757818101518382015260200161087f565b50505f910152565b604081525f83518060408401526108bd81606085016020880161087d565b602083019390935250601f91909101601f191601606001919050565b5f80604083850312156108ea575f80fd5b50508035926020909101359150565b602080825282518282018190525f9190848201906040850190845b8181101561093057835183529284019291840191600101610914565b50909695505050505050565b634e487b7160e01b5f52604160045260245ffd5b5f60208284031215610960575f80fd5b815167ffffffffffffffff80821115610977575f80fd5b818401915084601f83011261098a575f80fd5b81518181111561099c5761099c61093c565b604051601f8201601f19908116603f011681019083821181831017156109c4576109c461093c565b816040528281528760208487010111156109dc575f80fd5b6109ed83602083016020880161087d565b979650505050505050565b5f60208284031215610a08575f80fd5b81516001600160a01b0381168114610a1e575f80fd5b9392505050565b5f60208284031215610a35575f80fd5b81518015158114610a1e575f80fd5b5f82610a5e57634e487b7160e01b5f52601260045260245ffd5b500490565b81810381811115610a8257634e487b7160e01b5f52601160045260245ffd5b92915050565b634e487b7160e01b5f52603260045260245ffdfea26469706673582212205d01249a163c24654df9e9496583df81c1aaec9230dcc9e96b633f4eae82237a64736f6c63430008180033";

type NewNFTMarketConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: NewNFTMarketConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class NewNFTMarket__factory extends ContractFactory {
  constructor(...args: NewNFTMarketConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(_token, overrides || {});
  }
  override deploy(
    _token: AddressLike,
    overrides?: NonPayableOverrides & { from?: string }
  ) {
    return super.deploy(_token, overrides || {}) as Promise<
      NewNFTMarket & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): NewNFTMarket__factory {
    return super.connect(runner) as NewNFTMarket__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): NewNFTMarketInterface {
    return new Interface(_abi) as NewNFTMarketInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): NewNFTMarket {
    return new Contract(address, _abi, runner) as unknown as NewNFTMarket;
  }
}
