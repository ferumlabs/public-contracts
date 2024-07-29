/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IPoolAddressesProviderRegistry,
  IPoolAddressesProviderRegistryInterface,
} from "../../../../../@aave/core-v3/contracts/interfaces/IPoolAddressesProviderRegistry";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addressesProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "AddressesProviderRegistered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "addressesProvider",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "AddressesProviderUnregistered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "getAddressesProviderAddressById",
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
    inputs: [
      {
        internalType: "address",
        name: "addressesProvider",
        type: "address",
      },
    ],
    name: "getAddressesProviderIdByAddress",
    outputs: [
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
    name: "getAddressesProvidersList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "registerAddressesProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "provider",
        type: "address",
      },
    ],
    name: "unregisterAddressesProvider",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IPoolAddressesProviderRegistry__factory {
  static readonly abi = _abi;
  static createInterface(): IPoolAddressesProviderRegistryInterface {
    return new Interface(_abi) as IPoolAddressesProviderRegistryInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IPoolAddressesProviderRegistry {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as IPoolAddressesProviderRegistry;
  }
}
