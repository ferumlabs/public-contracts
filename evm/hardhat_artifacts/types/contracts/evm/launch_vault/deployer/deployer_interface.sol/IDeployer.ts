/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface IDeployerInterface extends Interface {
  getFunction(
    nameOrSignature: "deploy" | "poolToken" | "remove" | "totalDeployedAmount"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "deploy",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "poolToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDeployedAmount",
    values: [AddressLike]
  ): string;

  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolToken", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "totalDeployedAmount",
    data: BytesLike
  ): Result;
}

export interface IDeployer extends BaseContract {
  connect(runner?: ContractRunner | null): IDeployer;
  waitForDeployment(): Promise<this>;

  interface: IDeployerInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  deploy: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  poolToken: TypedContractMethod<[asset: AddressLike], [string], "view">;

  remove: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  totalDeployedAmount: TypedContractMethod<
    [asset: AddressLike],
    [bigint],
    "view"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "deploy"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "poolToken"
  ): TypedContractMethod<[asset: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "totalDeployedAmount"
  ): TypedContractMethod<[asset: AddressLike], [bigint], "view">;

  filters: {};
}
