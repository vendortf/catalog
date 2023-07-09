import { parseSKU } from "tf2-item-format";
import Format from "@piman51277/fast-format";

export function toBaseName(sku: string) {
	return Format.stringify(parseSKU(sku), { useDefindexes: true });
}
