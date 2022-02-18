// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class CollSurplusPoolAddressChanged extends ethereum.Event {
  get params(): CollSurplusPoolAddressChanged__Params {
    return new CollSurplusPoolAddressChanged__Params(this);
  }
}

export class CollSurplusPoolAddressChanged__Params {
  _event: CollSurplusPoolAddressChanged;

  constructor(event: CollSurplusPoolAddressChanged) {
    this._event = event;
  }

  get _collSurplusPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class GasPoolAddressChanged extends ethereum.Event {
  get params(): GasPoolAddressChanged__Params {
    return new GasPoolAddressChanged__Params(this);
  }
}

export class GasPoolAddressChanged__Params {
  _event: GasPoolAddressChanged;

  constructor(event: GasPoolAddressChanged) {
    this._event = event;
  }

  get _gasPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnershipTransferred extends ethereum.Event {
  get params(): OwnershipTransferred__Params {
    return new OwnershipTransferred__Params(this);
  }
}

export class OwnershipTransferred__Params {
  _event: OwnershipTransferred;

  constructor(event: OwnershipTransferred) {
    this._event = event;
  }

  get previousOwner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get newOwner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class SortedTrovesAddressChanged extends ethereum.Event {
  get params(): SortedTrovesAddressChanged__Params {
    return new SortedTrovesAddressChanged__Params(this);
  }
}

export class SortedTrovesAddressChanged__Params {
  _event: SortedTrovesAddressChanged;

  constructor(event: SortedTrovesAddressChanged) {
    this._event = event;
  }

  get _sortedTrovesAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class StabilityPoolAddressChanged extends ethereum.Event {
  get params(): StabilityPoolAddressChanged__Params {
    return new StabilityPoolAddressChanged__Params(this);
  }
}

export class StabilityPoolAddressChanged__Params {
  _event: StabilityPoolAddressChanged;

  constructor(event: StabilityPoolAddressChanged) {
    this._event = event;
  }

  get _stabilityPoolAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TroveCreated extends ethereum.Event {
  get params(): TroveCreated__Params {
    return new TroveCreated__Params(this);
  }
}

export class TroveCreated__Params {
  _event: TroveCreated;

  constructor(event: TroveCreated) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get arrayIndex(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class TroveManagerAddressChanged extends ethereum.Event {
  get params(): TroveManagerAddressChanged__Params {
    return new TroveManagerAddressChanged__Params(this);
  }
}

export class TroveManagerAddressChanged__Params {
  _event: TroveManagerAddressChanged;

  constructor(event: TroveManagerAddressChanged) {
    this._event = event;
  }

  get _newTroveManagerAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class TroveUpdated extends ethereum.Event {
  get params(): TroveUpdated__Params {
    return new TroveUpdated__Params(this);
  }
}

export class TroveUpdated__Params {
  _event: TroveUpdated;

  constructor(event: TroveUpdated) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _debt(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get _coll(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get stake(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }

  get operation(): i32 {
    return this._event.parameters[5].value.toI32();
  }
}

export class VSTAStakingAddressChanged extends ethereum.Event {
  get params(): VSTAStakingAddressChanged__Params {
    return new VSTAStakingAddressChanged__Params(this);
  }
}

export class VSTAStakingAddressChanged__Params {
  _event: VSTAStakingAddressChanged;

  constructor(event: VSTAStakingAddressChanged) {
    this._event = event;
  }

  get _VSTAStakingAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VSTBorrowingFeePaid extends ethereum.Event {
  get params(): VSTBorrowingFeePaid__Params {
    return new VSTBorrowingFeePaid__Params(this);
  }
}

export class VSTBorrowingFeePaid__Params {
  _event: VSTBorrowingFeePaid;

  constructor(event: VSTBorrowingFeePaid) {
    this._event = event;
  }

  get _asset(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get _borrower(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get _VSTFee(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VSTTokenAddressChanged extends ethereum.Event {
  get params(): VSTTokenAddressChanged__Params {
    return new VSTTokenAddressChanged__Params(this);
  }
}

export class VSTTokenAddressChanged__Params {
  _event: VSTTokenAddressChanged;

  constructor(event: VSTTokenAddressChanged) {
    this._event = event;
  }

  get _vstTokenAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class VaultParametersBaseChanged extends ethereum.Event {
  get params(): VaultParametersBaseChanged__Params {
    return new VaultParametersBaseChanged__Params(this);
  }
}

export class VaultParametersBaseChanged__Params {
  _event: VaultParametersBaseChanged;

  constructor(event: VaultParametersBaseChanged) {
    this._event = event;
  }

  get newAddress(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Vesta extends ethereum.SmartContract {
  static bind(address: Address): Vesta {
    return new Vesta("Vesta", address);
  }

  DECIMAL_PRECISION(): BigInt {
    let result = super.call(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_DECIMAL_PRECISION(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "DECIMAL_PRECISION",
      "DECIMAL_PRECISION():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  ETH_REF_ADDRESS(): Address {
    let result = super.call(
      "ETH_REF_ADDRESS",
      "ETH_REF_ADDRESS():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_ETH_REF_ADDRESS(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "ETH_REF_ADDRESS",
      "ETH_REF_ADDRESS():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  NAME(): string {
    let result = super.call("NAME", "NAME():(string)", []);

    return result[0].toString();
  }

  try_NAME(): ethereum.CallResult<string> {
    let result = super.tryCall("NAME", "NAME():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  VSTAStaking(): Address {
    let result = super.call("VSTAStaking", "VSTAStaking():(address)", []);

    return result[0].toAddress();
  }

  try_VSTAStaking(): ethereum.CallResult<Address> {
    let result = super.tryCall("VSTAStaking", "VSTAStaking():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  VSTAStakingAddress(): Address {
    let result = super.call(
      "VSTAStakingAddress",
      "VSTAStakingAddress():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_VSTAStakingAddress(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "VSTAStakingAddress",
      "VSTAStakingAddress():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  VSTToken(): Address {
    let result = super.call("VSTToken", "VSTToken():(address)", []);

    return result[0].toAddress();
  }

  try_VSTToken(): ethereum.CallResult<Address> {
    let result = super.tryCall("VSTToken", "VSTToken():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getCompositeDebt(_asset: Address, _debt: BigInt): BigInt {
    let result = super.call(
      "getCompositeDebt",
      "getCompositeDebt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_asset),
        ethereum.Value.fromUnsignedBigInt(_debt)
      ]
    );

    return result[0].toBigInt();
  }

  try_getCompositeDebt(
    _asset: Address,
    _debt: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getCompositeDebt",
      "getCompositeDebt(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(_asset),
        ethereum.Value.fromUnsignedBigInt(_debt)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEntireSystemColl(_asset: Address): BigInt {
    let result = super.call(
      "getEntireSystemColl",
      "getEntireSystemColl(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );

    return result[0].toBigInt();
  }

  try_getEntireSystemColl(_asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEntireSystemColl",
      "getEntireSystemColl(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getEntireSystemDebt(_asset: Address): BigInt {
    let result = super.call(
      "getEntireSystemDebt",
      "getEntireSystemDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );

    return result[0].toBigInt();
  }

  try_getEntireSystemDebt(_asset: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getEntireSystemDebt",
      "getEntireSystemDebt(address):(uint256)",
      [ethereum.Value.fromAddress(_asset)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  isInitialized(): boolean {
    let result = super.call("isInitialized", "isInitialized():(bool)", []);

    return result[0].toBoolean();
  }

  try_isInitialized(): ethereum.CallResult<boolean> {
    let result = super.tryCall("isInitialized", "isInitialized():(bool)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sortedTroves(): Address {
    let result = super.call("sortedTroves", "sortedTroves():(address)", []);

    return result[0].toAddress();
  }

  try_sortedTroves(): ethereum.CallResult<Address> {
    let result = super.tryCall("sortedTroves", "sortedTroves():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  troveManager(): Address {
    let result = super.call("troveManager", "troveManager():(address)", []);

    return result[0].toAddress();
  }

  try_troveManager(): ethereum.CallResult<Address> {
    let result = super.tryCall("troveManager", "troveManager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  vestaParams(): Address {
    let result = super.call("vestaParams", "vestaParams():(address)", []);

    return result[0].toAddress();
  }

  try_vestaParams(): ethereum.CallResult<Address> {
    let result = super.tryCall("vestaParams", "vestaParams():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }
}

export class AddCollCall extends ethereum.Call {
  get inputs(): AddCollCall__Inputs {
    return new AddCollCall__Inputs(this);
  }

  get outputs(): AddCollCall__Outputs {
    return new AddCollCall__Outputs(this);
  }
}

export class AddCollCall__Inputs {
  _call: AddCollCall;

  constructor(call: AddCollCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetSent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class AddCollCall__Outputs {
  _call: AddCollCall;

  constructor(call: AddCollCall) {
    this._call = call;
  }
}

export class AdjustTroveCall extends ethereum.Call {
  get inputs(): AdjustTroveCall__Inputs {
    return new AdjustTroveCall__Inputs(this);
  }

  get outputs(): AdjustTroveCall__Outputs {
    return new AdjustTroveCall__Outputs(this);
  }
}

export class AdjustTroveCall__Inputs {
  _call: AdjustTroveCall;

  constructor(call: AdjustTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _assetSent(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _maxFeePercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _collWithdrawal(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _VSTChange(): BigInt {
    return this._call.inputValues[4].value.toBigInt();
  }

  get _isDebtIncrease(): boolean {
    return this._call.inputValues[5].value.toBoolean();
  }

  get _upperHint(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class AdjustTroveCall__Outputs {
  _call: AdjustTroveCall;

  constructor(call: AdjustTroveCall) {
    this._call = call;
  }
}

export class ClaimCollateralCall extends ethereum.Call {
  get inputs(): ClaimCollateralCall__Inputs {
    return new ClaimCollateralCall__Inputs(this);
  }

  get outputs(): ClaimCollateralCall__Outputs {
    return new ClaimCollateralCall__Outputs(this);
  }
}

export class ClaimCollateralCall__Inputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ClaimCollateralCall__Outputs {
  _call: ClaimCollateralCall;

  constructor(call: ClaimCollateralCall) {
    this._call = call;
  }
}

export class CloseTroveCall extends ethereum.Call {
  get inputs(): CloseTroveCall__Inputs {
    return new CloseTroveCall__Inputs(this);
  }

  get outputs(): CloseTroveCall__Outputs {
    return new CloseTroveCall__Outputs(this);
  }
}

export class CloseTroveCall__Inputs {
  _call: CloseTroveCall;

  constructor(call: CloseTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class CloseTroveCall__Outputs {
  _call: CloseTroveCall;

  constructor(call: CloseTroveCall) {
    this._call = call;
  }
}

export class MoveETHGainToTroveCall extends ethereum.Call {
  get inputs(): MoveETHGainToTroveCall__Inputs {
    return new MoveETHGainToTroveCall__Inputs(this);
  }

  get outputs(): MoveETHGainToTroveCall__Outputs {
    return new MoveETHGainToTroveCall__Outputs(this);
  }
}

export class MoveETHGainToTroveCall__Inputs {
  _call: MoveETHGainToTroveCall;

  constructor(call: MoveETHGainToTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _amountMoved(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _borrower(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _upperHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class MoveETHGainToTroveCall__Outputs {
  _call: MoveETHGainToTroveCall;

  constructor(call: MoveETHGainToTroveCall) {
    this._call = call;
  }
}

export class OpenTroveCall extends ethereum.Call {
  get inputs(): OpenTroveCall__Inputs {
    return new OpenTroveCall__Inputs(this);
  }

  get outputs(): OpenTroveCall__Outputs {
    return new OpenTroveCall__Outputs(this);
  }
}

export class OpenTroveCall__Inputs {
  _call: OpenTroveCall;

  constructor(call: OpenTroveCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _tokenAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _maxFeePercentage(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _VSTAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[5].value.toAddress();
  }
}

export class OpenTroveCall__Outputs {
  _call: OpenTroveCall;

  constructor(call: OpenTroveCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall extends ethereum.Call {
  get inputs(): RenounceOwnershipCall__Inputs {
    return new RenounceOwnershipCall__Inputs(this);
  }

  get outputs(): RenounceOwnershipCall__Outputs {
    return new RenounceOwnershipCall__Outputs(this);
  }
}

export class RenounceOwnershipCall__Inputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RenounceOwnershipCall__Outputs {
  _call: RenounceOwnershipCall;

  constructor(call: RenounceOwnershipCall) {
    this._call = call;
  }
}

export class RepayVSTCall extends ethereum.Call {
  get inputs(): RepayVSTCall__Inputs {
    return new RepayVSTCall__Inputs(this);
  }

  get outputs(): RepayVSTCall__Outputs {
    return new RepayVSTCall__Outputs(this);
  }
}

export class RepayVSTCall__Inputs {
  _call: RepayVSTCall;

  constructor(call: RepayVSTCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _VSTAmount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class RepayVSTCall__Outputs {
  _call: RepayVSTCall;

  constructor(call: RepayVSTCall) {
    this._call = call;
  }
}

export class SetAddressesCall extends ethereum.Call {
  get inputs(): SetAddressesCall__Inputs {
    return new SetAddressesCall__Inputs(this);
  }

  get outputs(): SetAddressesCall__Outputs {
    return new SetAddressesCall__Outputs(this);
  }
}

export class SetAddressesCall__Inputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }

  get _troveManagerAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _stabilityPoolManagerAddress(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get _gasPoolAddress(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _collSurplusPoolAddress(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _sortedTrovesAddress(): Address {
    return this._call.inputValues[4].value.toAddress();
  }

  get _vstTokenAddress(): Address {
    return this._call.inputValues[5].value.toAddress();
  }

  get _VSTAStakingAddress(): Address {
    return this._call.inputValues[6].value.toAddress();
  }

  get _vestaParamsAddress(): Address {
    return this._call.inputValues[7].value.toAddress();
  }
}

export class SetAddressesCall__Outputs {
  _call: SetAddressesCall;

  constructor(call: SetAddressesCall) {
    this._call = call;
  }
}

export class SetVestaParametersCall extends ethereum.Call {
  get inputs(): SetVestaParametersCall__Inputs {
    return new SetVestaParametersCall__Inputs(this);
  }

  get outputs(): SetVestaParametersCall__Outputs {
    return new SetVestaParametersCall__Outputs(this);
  }
}

export class SetVestaParametersCall__Inputs {
  _call: SetVestaParametersCall;

  constructor(call: SetVestaParametersCall) {
    this._call = call;
  }

  get _vaultParams(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class SetVestaParametersCall__Outputs {
  _call: SetVestaParametersCall;

  constructor(call: SetVestaParametersCall) {
    this._call = call;
  }
}

export class TransferOwnershipCall extends ethereum.Call {
  get inputs(): TransferOwnershipCall__Inputs {
    return new TransferOwnershipCall__Inputs(this);
  }

  get outputs(): TransferOwnershipCall__Outputs {
    return new TransferOwnershipCall__Outputs(this);
  }
}

export class TransferOwnershipCall__Inputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class TransferOwnershipCall__Outputs {
  _call: TransferOwnershipCall;

  constructor(call: TransferOwnershipCall) {
    this._call = call;
  }
}

export class WithdrawCollCall extends ethereum.Call {
  get inputs(): WithdrawCollCall__Inputs {
    return new WithdrawCollCall__Inputs(this);
  }

  get outputs(): WithdrawCollCall__Outputs {
    return new WithdrawCollCall__Outputs(this);
  }
}

export class WithdrawCollCall__Inputs {
  _call: WithdrawCollCall;

  constructor(call: WithdrawCollCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _collWithdrawal(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class WithdrawCollCall__Outputs {
  _call: WithdrawCollCall;

  constructor(call: WithdrawCollCall) {
    this._call = call;
  }
}

export class WithdrawVSTCall extends ethereum.Call {
  get inputs(): WithdrawVSTCall__Inputs {
    return new WithdrawVSTCall__Inputs(this);
  }

  get outputs(): WithdrawVSTCall__Outputs {
    return new WithdrawVSTCall__Outputs(this);
  }
}

export class WithdrawVSTCall__Inputs {
  _call: WithdrawVSTCall;

  constructor(call: WithdrawVSTCall) {
    this._call = call;
  }

  get _asset(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _maxFeePercentage(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get _VSTAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get _upperHint(): Address {
    return this._call.inputValues[3].value.toAddress();
  }

  get _lowerHint(): Address {
    return this._call.inputValues[4].value.toAddress();
  }
}

export class WithdrawVSTCall__Outputs {
  _call: WithdrawVSTCall;

  constructor(call: WithdrawVSTCall) {
    this._call = call;
  }
}
