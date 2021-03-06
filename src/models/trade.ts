/**
 * @module models
 */
import {OrderSide, Order} from "./order";

/**
 * Trade
 */
export default interface Trade {
  tx: string;
  symbolId: number;
  price: number;
  filled: number;
  time?: number;
  side: OrderSide;
  fromWallet: string;
  toWallet: string;
}

