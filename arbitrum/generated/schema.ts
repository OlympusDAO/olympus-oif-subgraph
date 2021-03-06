// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DailyCollateralVesta extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(
      id !== null,
      "Cannot save DailyCollateralVesta entity without an ID"
    );
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyCollateralVesta entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyCollateralVesta", id.toString(), this);
  }

  static load(id: string): DailyCollateralVesta | null {
    return store.get("DailyCollateralVesta", id) as DailyCollateralVesta | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get depositedGOHM(): BigDecimal {
    let value = this.get("depositedGOHM");
    return value.toBigDecimal();
  }

  set depositedGOHM(value: BigDecimal) {
    this.set("depositedGOHM", Value.fromBigDecimal(value));
  }

  get depositedGOHMValue(): BigDecimal {
    let value = this.get("depositedGOHMValue");
    return value.toBigDecimal();
  }

  set depositedGOHMValue(value: BigDecimal) {
    this.set("depositedGOHMValue", Value.fromBigDecimal(value));
  }
}
