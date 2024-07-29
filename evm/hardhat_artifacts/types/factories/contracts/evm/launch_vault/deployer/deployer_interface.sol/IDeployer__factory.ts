/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IDeployer,
  IDeployerInterface,
} from "../../../../../../contracts/evm/launch_vault/deployer/deployer_interface.sol/IDeployer";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deploy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "asset",
        type: "address",
      },
    ],
    name: "poolToken",
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
        internalType: "contract IERC20",
        name: "asset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "remove",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "asset",
        type: "address",
      },
    ],
    name: "totalDeployedAmount",
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
] as const;

export class IDeployer__factory {
  static readonly abi = _abi;
  static createInterface(): IDeployerInterface {
    return new Interface(_abi) as IDeployerInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IDeployer {
    return new Contract(address, _abi, runner) as unknown as IDeployer;
  }
}
