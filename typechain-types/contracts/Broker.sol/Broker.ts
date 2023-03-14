/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export declare namespace Broker {
  export type BookingStruct = {
    index: PromiseOrValue<BigNumberish>;
    offerIndex: PromiseOrValue<BigNumberish>;
    pricePerSecond: PromiseOrValue<BigNumberish>;
    bookedAt: PromiseOrValue<BigNumberish>;
    lastPayment: PromiseOrValue<BigNumberish>;
    provider: PromiseOrValue<string>;
    user: PromiseOrValue<string>;
  };

  export type BookingStructOutput = [
    number,
    number,
    number,
    number,
    number,
    string,
    string
  ] & {
    index: number;
    offerIndex: number;
    pricePerSecond: number;
    bookedAt: number;
    lastPayment: number;
    provider: string;
    user: string;
  };

  export type OfferStruct = {
    specsIpfsHash: PromiseOrValue<BytesLike>;
    provider: PromiseOrValue<string>;
    index: PromiseOrValue<BigNumberish>;
    pricePerSecond: PromiseOrValue<BigNumberish>;
    machinesTotal: PromiseOrValue<BigNumberish>;
    machinesBooked: PromiseOrValue<BigNumberish>;
  };

  export type OfferStructOutput = [
    string,
    string,
    number,
    number,
    number,
    number
  ] & {
    specsIpfsHash: string;
    provider: string;
    index: number;
    pricePerSecond: number;
    machinesTotal: number;
    machinesBooked: number;
  };
}

export interface BrokerInterface extends utils.Interface {
  functions: {
    "AddOffer(uint32,uint16,bytes32)": FunctionFragment;
    "AddTrial(address,uint64)": FunctionFragment;
    "Book(uint32)": FunctionFragment;
    "ClaimPayment(uint32)": FunctionFragment;
    "DepositCoin(uint256)": FunctionFragment;
    "FindBookingsByProvider(address)": FunctionFragment;
    "FindBookingsByUser(address)": FunctionFragment;
    "GetAvailableOffers()": FunctionFragment;
    "GetBooking(uint32)": FunctionFragment;
    "GetCoinBalance(address)": FunctionFragment;
    "GetOffer(uint32)": FunctionFragment;
    "GetProviderUrl(address)": FunctionFragment;
    "GetProvidersOffers(address)": FunctionFragment;
    "GetTime()": FunctionFragment;
    "GetTrialAmount(address)": FunctionFragment;
    "IsProviderRegistered(address)": FunctionFragment;
    "PROVIDER_REGISTRATION_FEE()": FunctionFragment;
    "REASON_COMMUNITY_TERMINATED()": FunctionFragment;
    "REASON_NON_PAYMENT()": FunctionFragment;
    "REASON_PROVIDER_TERMINATED()": FunctionFragment;
    "RegisterProvider()": FunctionFragment;
    "RemoveOffer(uint32)": FunctionFragment;
    "RemoveTrial(address)": FunctionFragment;
    "SECONDS_IN_WEEK()": FunctionFragment;
    "SetCoinAddress(address)": FunctionFragment;
    "SetCommunityContract(address)": FunctionFragment;
    "SetCommunityFee(uint16)": FunctionFragment;
    "SetProviderUrl(bytes32)": FunctionFragment;
    "Terminate(uint32,uint16)": FunctionFragment;
    "UpdateOffer(uint32,uint16,uint32)": FunctionFragment;
    "WithdrawCoin(uint256)": FunctionFragment;
    "coin()": FunctionFragment;
    "communityContract()": FunctionFragment;
    "communityFee()": FunctionFragment;
    "getTrustedAddress(address)": FunctionFragment;
    "setTrustedAddress(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "AddOffer"
      | "AddTrial"
      | "Book"
      | "ClaimPayment"
      | "DepositCoin"
      | "FindBookingsByProvider"
      | "FindBookingsByUser"
      | "GetAvailableOffers"
      | "GetBooking"
      | "GetCoinBalance"
      | "GetOffer"
      | "GetProviderUrl"
      | "GetProvidersOffers"
      | "GetTime"
      | "GetTrialAmount"
      | "IsProviderRegistered"
      | "PROVIDER_REGISTRATION_FEE"
      | "REASON_COMMUNITY_TERMINATED"
      | "REASON_NON_PAYMENT"
      | "REASON_PROVIDER_TERMINATED"
      | "RegisterProvider"
      | "RemoveOffer"
      | "RemoveTrial"
      | "SECONDS_IN_WEEK"
      | "SetCoinAddress"
      | "SetCommunityContract"
      | "SetCommunityFee"
      | "SetProviderUrl"
      | "Terminate"
      | "UpdateOffer"
      | "WithdrawCoin"
      | "coin"
      | "communityContract"
      | "communityFee"
      | "getTrustedAddress"
      | "setTrustedAddress"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "AddOffer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "AddTrial",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "Book",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "ClaimPayment",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "DepositCoin",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "FindBookingsByProvider",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "FindBookingsByUser",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetAvailableOffers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "GetBooking",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetCoinBalance",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetProviderUrl",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "GetProvidersOffers",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "GetTime", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "GetTrialAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "IsProviderRegistered",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "PROVIDER_REGISTRATION_FEE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REASON_COMMUNITY_TERMINATED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REASON_NON_PAYMENT",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "REASON_PROVIDER_TERMINATED",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RegisterProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RemoveOffer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "RemoveTrial",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "SECONDS_IN_WEEK",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "SetCoinAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "SetCommunityContract",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "SetCommunityFee",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "SetProviderUrl",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "Terminate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "UpdateOffer",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "WithdrawCoin",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "coin", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "communityContract",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "communityFee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTrustedAddress",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "setTrustedAddress",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "AddOffer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "AddTrial", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "Book", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ClaimPayment",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "DepositCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FindBookingsByProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "FindBookingsByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetAvailableOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GetBooking", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetCoinBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GetOffer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetProviderUrl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "GetProvidersOffers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "GetTime", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "GetTrialAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "IsProviderRegistered",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "PROVIDER_REGISTRATION_FEE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REASON_COMMUNITY_TERMINATED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REASON_NON_PAYMENT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "REASON_PROVIDER_TERMINATED",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RegisterProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RemoveOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RemoveTrial",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SECONDS_IN_WEEK",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SetCoinAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SetCommunityContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SetCommunityFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "SetProviderUrl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "Terminate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "UpdateOffer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "WithdrawCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "coin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "communityContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "communityFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTrustedAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setTrustedAddress",
    data: BytesLike
  ): Result;

  events: {
    "NewBooking(address,address,uint32,uint32)": EventFragment;
    "Termination(uint32,uint16)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewBooking"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Termination"): EventFragment;
}

export interface NewBookingEventObject {
  user: string;
  provider: string;
  bookingIndex: number;
  pps: number;
}
export type NewBookingEvent = TypedEvent<
  [string, string, number, number],
  NewBookingEventObject
>;

export type NewBookingEventFilter = TypedEventFilter<NewBookingEvent>;

export interface TerminationEventObject {
  bookingIndex: number;
  reason: number;
}
export type TerminationEvent = TypedEvent<
  [number, number],
  TerminationEventObject
>;

export type TerminationEventFilter = TypedEventFilter<TerminationEvent>;

export interface Broker extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BrokerInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    AddOffer(
      pricePerSecond: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      specsIpfsHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    AddTrial(
      user: PromiseOrValue<string>,
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Book(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    ClaimPayment(
      bookingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    DepositCoin(
      numTokens: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    FindBookingsByProvider(
      _provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Broker.BookingStructOutput[]] & {
        filteredBookings: Broker.BookingStructOutput[];
      }
    >;

    FindBookingsByUser(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Broker.BookingStructOutput[]] & {
        filteredBookings: Broker.BookingStructOutput[];
      }
    >;

    GetAvailableOffers(
      overrides?: CallOverrides
    ): Promise<
      [Broker.OfferStructOutput[]] & {
        filteredOffers: Broker.OfferStructOutput[];
      }
    >;

    GetBooking(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Broker.BookingStructOutput] & { booking: Broker.BookingStructOutput }
    >;

    GetCoinBalance(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { free: BigNumber; locked: BigNumber }>;

    GetOffer(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [Broker.OfferStructOutput] & { oneOffer: Broker.OfferStructOutput }
    >;

    GetProviderUrl(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    GetProvidersOffers(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<
      [Broker.OfferStructOutput[]] & {
        filteredOffers: Broker.OfferStructOutput[];
      }
    >;

    GetTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    GetTrialAmount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    IsProviderRegistered(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    PROVIDER_REGISTRATION_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    REASON_COMMUNITY_TERMINATED(overrides?: CallOverrides): Promise<[number]>;

    REASON_NON_PAYMENT(overrides?: CallOverrides): Promise<[number]>;

    REASON_PROVIDER_TERMINATED(overrides?: CallOverrides): Promise<[number]>;

    RegisterProvider(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    RemoveOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    RemoveTrial(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    SECONDS_IN_WEEK(overrides?: CallOverrides): Promise<[BigNumber]>;

    SetCoinAddress(
      newCoinAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    SetCommunityContract(
      newCommunityAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    SetCommunityFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    SetProviderUrl(
      url: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    Terminate(
      bookingId: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    UpdateOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      pps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    WithdrawCoin(
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    coin(overrides?: CallOverrides): Promise<[string]>;

    communityContract(overrides?: CallOverrides): Promise<[string]>;

    communityFee(overrides?: CallOverrides): Promise<[number]>;

    getTrustedAddress(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setTrustedAddress(
      trusted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  AddOffer(
    pricePerSecond: PromiseOrValue<BigNumberish>,
    machinesTotal: PromiseOrValue<BigNumberish>,
    specsIpfsHash: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  AddTrial(
    user: PromiseOrValue<string>,
    amt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Book(
    offerIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  ClaimPayment(
    bookingId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  DepositCoin(
    numTokens: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  FindBookingsByProvider(
    _provider: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Broker.BookingStructOutput[]>;

  FindBookingsByUser(
    _owner: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Broker.BookingStructOutput[]>;

  GetAvailableOffers(
    overrides?: CallOverrides
  ): Promise<Broker.OfferStructOutput[]>;

  GetBooking(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Broker.BookingStructOutput>;

  GetCoinBalance(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<[BigNumber, BigNumber] & { free: BigNumber; locked: BigNumber }>;

  GetOffer(
    index: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<Broker.OfferStructOutput>;

  GetProviderUrl(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  GetProvidersOffers(
    provider: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<Broker.OfferStructOutput[]>;

  GetTime(overrides?: CallOverrides): Promise<BigNumber>;

  GetTrialAmount(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  IsProviderRegistered(
    _user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  PROVIDER_REGISTRATION_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  REASON_COMMUNITY_TERMINATED(overrides?: CallOverrides): Promise<number>;

  REASON_NON_PAYMENT(overrides?: CallOverrides): Promise<number>;

  REASON_PROVIDER_TERMINATED(overrides?: CallOverrides): Promise<number>;

  RegisterProvider(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  RemoveOffer(
    offerIndex: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  RemoveTrial(
    user: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  SECONDS_IN_WEEK(overrides?: CallOverrides): Promise<BigNumber>;

  SetCoinAddress(
    newCoinAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  SetCommunityContract(
    newCommunityAddress: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  SetCommunityFee(
    fee: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  SetProviderUrl(
    url: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  Terminate(
    bookingId: PromiseOrValue<BigNumberish>,
    reason: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  UpdateOffer(
    offerIndex: PromiseOrValue<BigNumberish>,
    machinesTotal: PromiseOrValue<BigNumberish>,
    pps: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  WithdrawCoin(
    amt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  coin(overrides?: CallOverrides): Promise<string>;

  communityContract(overrides?: CallOverrides): Promise<string>;

  communityFee(overrides?: CallOverrides): Promise<number>;

  getTrustedAddress(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<string>;

  setTrustedAddress(
    trusted: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    AddOffer(
      pricePerSecond: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      specsIpfsHash: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    AddTrial(
      user: PromiseOrValue<string>,
      amt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    Book(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<number>;

    ClaimPayment(
      bookingId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    DepositCoin(
      numTokens: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    FindBookingsByProvider(
      _provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Broker.BookingStructOutput[]>;

    FindBookingsByUser(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Broker.BookingStructOutput[]>;

    GetAvailableOffers(
      overrides?: CallOverrides
    ): Promise<Broker.OfferStructOutput[]>;

    GetBooking(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Broker.BookingStructOutput>;

    GetCoinBalance(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber, BigNumber] & { free: BigNumber; locked: BigNumber }>;

    GetOffer(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<Broker.OfferStructOutput>;

    GetProviderUrl(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    GetProvidersOffers(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<Broker.OfferStructOutput[]>;

    GetTime(overrides?: CallOverrides): Promise<BigNumber>;

    GetTrialAmount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IsProviderRegistered(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    PROVIDER_REGISTRATION_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    REASON_COMMUNITY_TERMINATED(overrides?: CallOverrides): Promise<number>;

    REASON_NON_PAYMENT(overrides?: CallOverrides): Promise<number>;

    REASON_PROVIDER_TERMINATED(overrides?: CallOverrides): Promise<number>;

    RegisterProvider(overrides?: CallOverrides): Promise<void>;

    RemoveOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    RemoveTrial(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    SECONDS_IN_WEEK(overrides?: CallOverrides): Promise<BigNumber>;

    SetCoinAddress(
      newCoinAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    SetCommunityContract(
      newCommunityAddress: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    SetCommunityFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    SetProviderUrl(
      url: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    Terminate(
      bookingId: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    UpdateOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      pps: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    WithdrawCoin(
      amt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    coin(overrides?: CallOverrides): Promise<string>;

    communityContract(overrides?: CallOverrides): Promise<string>;

    communityFee(overrides?: CallOverrides): Promise<number>;

    getTrustedAddress(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<string>;

    setTrustedAddress(
      trusted: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "NewBooking(address,address,uint32,uint32)"(
      user?: PromiseOrValue<string> | null,
      provider?: PromiseOrValue<string> | null,
      bookingIndex?: null,
      pps?: null
    ): NewBookingEventFilter;
    NewBooking(
      user?: PromiseOrValue<string> | null,
      provider?: PromiseOrValue<string> | null,
      bookingIndex?: null,
      pps?: null
    ): NewBookingEventFilter;

    "Termination(uint32,uint16)"(
      bookingIndex?: null,
      reason?: PromiseOrValue<BigNumberish> | null
    ): TerminationEventFilter;
    Termination(
      bookingIndex?: null,
      reason?: PromiseOrValue<BigNumberish> | null
    ): TerminationEventFilter;
  };

  estimateGas: {
    AddOffer(
      pricePerSecond: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      specsIpfsHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    AddTrial(
      user: PromiseOrValue<string>,
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Book(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    ClaimPayment(
      bookingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    DepositCoin(
      numTokens: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    FindBookingsByProvider(
      _provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    FindBookingsByUser(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetAvailableOffers(overrides?: CallOverrides): Promise<BigNumber>;

    GetBooking(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetCoinBalance(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetOffer(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetProviderUrl(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetProvidersOffers(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    GetTime(overrides?: CallOverrides): Promise<BigNumber>;

    GetTrialAmount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    IsProviderRegistered(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    PROVIDER_REGISTRATION_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    REASON_COMMUNITY_TERMINATED(overrides?: CallOverrides): Promise<BigNumber>;

    REASON_NON_PAYMENT(overrides?: CallOverrides): Promise<BigNumber>;

    REASON_PROVIDER_TERMINATED(overrides?: CallOverrides): Promise<BigNumber>;

    RegisterProvider(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    RemoveOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    RemoveTrial(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    SECONDS_IN_WEEK(overrides?: CallOverrides): Promise<BigNumber>;

    SetCoinAddress(
      newCoinAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    SetCommunityContract(
      newCommunityAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    SetCommunityFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    SetProviderUrl(
      url: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    Terminate(
      bookingId: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    UpdateOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      pps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    WithdrawCoin(
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    coin(overrides?: CallOverrides): Promise<BigNumber>;

    communityContract(overrides?: CallOverrides): Promise<BigNumber>;

    communityFee(overrides?: CallOverrides): Promise<BigNumber>;

    getTrustedAddress(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setTrustedAddress(
      trusted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    AddOffer(
      pricePerSecond: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      specsIpfsHash: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    AddTrial(
      user: PromiseOrValue<string>,
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Book(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    ClaimPayment(
      bookingId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    DepositCoin(
      numTokens: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    FindBookingsByProvider(
      _provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    FindBookingsByUser(
      _owner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetAvailableOffers(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetBooking(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetCoinBalance(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetOffer(
      index: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetProviderUrl(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetProvidersOffers(
      provider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    GetTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    GetTrialAmount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    IsProviderRegistered(
      _user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    PROVIDER_REGISTRATION_FEE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REASON_COMMUNITY_TERMINATED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REASON_NON_PAYMENT(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    REASON_PROVIDER_TERMINATED(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    RegisterProvider(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    RemoveOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    RemoveTrial(
      user: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    SECONDS_IN_WEEK(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    SetCoinAddress(
      newCoinAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    SetCommunityContract(
      newCommunityAddress: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    SetCommunityFee(
      fee: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    SetProviderUrl(
      url: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    Terminate(
      bookingId: PromiseOrValue<BigNumberish>,
      reason: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    UpdateOffer(
      offerIndex: PromiseOrValue<BigNumberish>,
      machinesTotal: PromiseOrValue<BigNumberish>,
      pps: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    WithdrawCoin(
      amt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    coin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    communityContract(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    communityFee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTrustedAddress(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setTrustedAddress(
      trusted: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
