/**
 * @module models
 */
import Asset from "./asset";
/**
 * Symbol
 */
export default class Symbol {
    name: string;
    id: number;
    baseAsset: Asset;
    quoteAsset: Asset;
    constructor(id: any, name: string, baseAsset: Asset, quoteAsset: Asset);
}
