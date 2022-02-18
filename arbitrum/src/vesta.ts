import { Address, BigDecimal, BigInt } from "@graphprotocol/graph-ts"

import {
  OpenTroveCall,
  CloseTroveCall,
  AdjustTroveCall,
  Vesta
} from "../generated/Contract/Vesta"

import { DailyCollateralVesta } from "../generated/schema"
import { GOHM_CONTRACT, VESTA_CONTRACT } from "./utils/Constants";
import { dayFromTimestamp } from "./utils/Dates";
import { toDecimal } from "./utils/Decimals";

export function handleVestaOpen(call: OpenTroveCall): void {
  handleVesta(call.block.timestamp);
}

export function handleVestaClose(call: CloseTroveCall): void {
  handleVesta(call.block.timestamp);
}

export function handleVestaAdjust(call: AdjustTroveCall): void {
  handleVesta(call.block.timestamp);
}

export function handleVesta(timestamp: BigInt): void {
  let dayTimestamp = dayFromTimestamp(timestamp);

  //Load document from DB
  let dailyVesta = DailyCollateralVesta.load(dayTimestamp)
  if (dailyVesta == null) {
    dailyVesta = new DailyCollateralVesta(dayTimestamp)
    dailyVesta.timestamp = timestamp
    dailyVesta.depositedGOHM  = BigDecimal.fromString("0")
    dailyVesta.depositedGOHMValue = BigDecimal.fromString("0")
    dailyVesta.save()
  }

  //Update metrics
  let vestaContract = Vesta.bind(Address.fromString(VESTA_CONTRACT))
  dailyVesta.depositedGOHM = toDecimal(vestaContract.getEntireSystemColl(Address.fromString(GOHM_CONTRACT)), 18)
  //TODO USD
  dailyVesta.save()
}
