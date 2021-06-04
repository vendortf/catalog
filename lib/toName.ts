import { parseSKU, stringify } from "tf2-item-format";

export function toBaseName(sku: string) {
    return stringify(parseSKU(sku));
}