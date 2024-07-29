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
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../../../../../common";

export interface BlackwingAaveDeployerInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "DEFAULT_ADMIN_ROLE"
      | "INVALID_ATOKEN_ERR"
      | "INVALID_POOL_ADDRESS_PROVIDER_ERR"
      | "NOT_ENOUGH_ATOKENS_TO_BURN"
      | "OWNER_ROLE"
      | "UNAUTHORIZED_ERR"
      | "UNREGISTERED_ASSET_ERR"
      | "VAULT_ROLE"
      | "deploy"
      | "getRoleAdmin"
      | "grantRole"
      | "hasRole"
      | "poolToken"
      | "registerVault"
      | "remove"
      | "renounceRole"
      | "revokeRole"
      | "supportsInterface"
      | "totalDeployedAmount"
      | "whitelistAsset"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "RoleAdminChanged" | "RoleGranted" | "RoleRevoked"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INVALID_ATOKEN_ERR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "INVALID_POOL_ADDRESS_PROVIDER_ERR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "NOT_ENOUGH_ATOKENS_TO_BURN",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OWNER_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNAUTHORIZED_ERR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "UNREGISTERED_ASSET_ERR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "VAULT_ROLE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "deploy",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getRoleAdmin",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "grantRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hasRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "poolToken",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "registerVault",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "remove",
    values: [AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "revokeRole",
    values: [BytesLike, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "totalDeployedAmount",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "whitelistAsset",
    values: [AddressLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "DEFAULT_ADMIN_ROLE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INVALID_ATOKEN_ERR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "INVALID_POOL_ADDRESS_PROVIDER_ERR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "NOT_ENOUGH_ATOKENS_TO_BURN",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "OWNER_ROLE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UNAUTHORIZED_ERR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "UNREGISTERED_ASSET_ERR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "VAULT_ROLE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deploy", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getRoleAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "hasRole", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "poolToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "registerVault",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "remove", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceRole",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revokeRole", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalDeployedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "whitelistAsset",
    data: BytesLike
  ): Result;
}

export namespace RoleAdminChangedEvent {
  export type InputTuple = [
    role: BytesLike,
    previousAdminRole: BytesLike,
    newAdminRole: BytesLike
  ];
  export type OutputTuple = [
    role: string,
    previousAdminRole: string,
    newAdminRole: string
  ];
  export interface OutputObject {
    role: string;
    previousAdminRole: string;
    newAdminRole: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleGrantedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace RoleRevokedEvent {
  export type InputTuple = [
    role: BytesLike,
    account: AddressLike,
    sender: AddressLike
  ];
  export type OutputTuple = [role: string, account: string, sender: string];
  export interface OutputObject {
    role: string;
    account: string;
    sender: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface BlackwingAaveDeployer extends BaseContract {
  connect(runner?: ContractRunner | null): BlackwingAaveDeployer;
  waitForDeployment(): Promise<this>;

  interface: BlackwingAaveDeployerInterface;

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

  DEFAULT_ADMIN_ROLE: TypedContractMethod<[], [string], "view">;

  INVALID_ATOKEN_ERR: TypedContractMethod<[], [string], "view">;

  INVALID_POOL_ADDRESS_PROVIDER_ERR: TypedContractMethod<[], [string], "view">;

  NOT_ENOUGH_ATOKENS_TO_BURN: TypedContractMethod<[], [string], "view">;

  OWNER_ROLE: TypedContractMethod<[], [string], "view">;

  UNAUTHORIZED_ERR: TypedContractMethod<[], [string], "view">;

  UNREGISTERED_ASSET_ERR: TypedContractMethod<[], [string], "view">;

  VAULT_ROLE: TypedContractMethod<[], [string], "view">;

  deploy: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  getRoleAdmin: TypedContractMethod<[role: BytesLike], [string], "view">;

  grantRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  hasRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;

  poolToken: TypedContractMethod<[asset: AddressLike], [string], "view">;

  registerVault: TypedContractMethod<
    [vault: AddressLike],
    [void],
    "nonpayable"
  >;

  remove: TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  renounceRole: TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;

  revokeRole: TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;

  supportsInterface: TypedContractMethod<
    [interfaceId: BytesLike],
    [boolean],
    "view"
  >;

  totalDeployedAmount: TypedContractMethod<
    [asset: AddressLike],
    [bigint],
    "view"
  >;

  whitelistAsset: TypedContractMethod<
    [asset: AddressLike, pap: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "DEFAULT_ADMIN_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "INVALID_ATOKEN_ERR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "INVALID_POOL_ADDRESS_PROVIDER_ERR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "NOT_ENOUGH_ATOKENS_TO_BURN"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "OWNER_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNAUTHORIZED_ERR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "UNREGISTERED_ASSET_ERR"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "VAULT_ROLE"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "deploy"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getRoleAdmin"
  ): TypedContractMethod<[role: BytesLike], [string], "view">;
  getFunction(
    nameOrSignature: "grantRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "hasRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [boolean],
    "view"
  >;
  getFunction(
    nameOrSignature: "poolToken"
  ): TypedContractMethod<[asset: AddressLike], [string], "view">;
  getFunction(
    nameOrSignature: "registerVault"
  ): TypedContractMethod<[vault: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "remove"
  ): TypedContractMethod<
    [asset: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "renounceRole"
  ): TypedContractMethod<
    [role: BytesLike, callerConfirmation: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "revokeRole"
  ): TypedContractMethod<
    [role: BytesLike, account: AddressLike],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "supportsInterface"
  ): TypedContractMethod<[interfaceId: BytesLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "totalDeployedAmount"
  ): TypedContractMethod<[asset: AddressLike], [bigint], "view">;
  getFunction(
    nameOrSignature: "whitelistAsset"
  ): TypedContractMethod<
    [asset: AddressLike, pap: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "RoleAdminChanged"
  ): TypedContractEvent<
    RoleAdminChangedEvent.InputTuple,
    RoleAdminChangedEvent.OutputTuple,
    RoleAdminChangedEvent.OutputObject
  >;
  getEvent(
    key: "RoleGranted"
  ): TypedContractEvent<
    RoleGrantedEvent.InputTuple,
    RoleGrantedEvent.OutputTuple,
    RoleGrantedEvent.OutputObject
  >;
  getEvent(
    key: "RoleRevoked"
  ): TypedContractEvent<
    RoleRevokedEvent.InputTuple,
    RoleRevokedEvent.OutputTuple,
    RoleRevokedEvent.OutputObject
  >;

  filters: {
    "RoleAdminChanged(bytes32,bytes32,bytes32)": TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;
    RoleAdminChanged: TypedContractEvent<
      RoleAdminChangedEvent.InputTuple,
      RoleAdminChangedEvent.OutputTuple,
      RoleAdminChangedEvent.OutputObject
    >;

    "RoleGranted(bytes32,address,address)": TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;
    RoleGranted: TypedContractEvent<
      RoleGrantedEvent.InputTuple,
      RoleGrantedEvent.OutputTuple,
      RoleGrantedEvent.OutputObject
    >;

    "RoleRevoked(bytes32,address,address)": TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
    RoleRevoked: TypedContractEvent<
      RoleRevokedEvent.InputTuple,
      RoleRevokedEvent.OutputTuple,
      RoleRevokedEvent.OutputObject
    >;
  };
}
