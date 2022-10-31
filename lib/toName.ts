import { parseSKU } from "tf2-item-format";
import { stringify } from "tf2-item-format/static";

export function toBaseName(sku: string) {
	return stringify(parseSKU(sku));
}
