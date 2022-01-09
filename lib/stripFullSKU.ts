import { SKUPrefix } from "./enums/SKUPrefix";

export function stripFullSKU(fullSKU: string): string {
	const sku = fullSKU.split(";");
	const strippedSKU = [];

	for (const part of sku) {
		if (part.startsWith(SKUPrefix.Paint)) {
			continue;
		}
		if (part.startsWith(SKUPrefix.Part)) {
			continue;
		}
		if (part.startsWith(SKUPrefix.Spell)) {
			continue;
		}
		if (part.startsWith(SKUPrefix.Sheen)) {
			continue;
		}
		if (part.startsWith(SKUPrefix.Killstreaker)) {
			continue;
		}
		if (part === "untradable") {
			continue;
		}
		strippedSKU.push(part);
	}

	return strippedSKU.join(";");
}