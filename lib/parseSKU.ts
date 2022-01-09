import { parseSKU as _parseBaseSKU, SKUAttributes, schema } from "tf2-item-format";
import { SKUPrefix } from "./enums/SKUPrefix";
import { getKillstreakerName } from "./enums/Killstreaker";
import { getSheenName } from "./enums/Sheen";
import { getSpellName } from "./enums/Spell";
import { getPartName } from "./enums/Part";

type ParsedSKUItem = SKUAttributes & { 
    paint?: string;
    parts?: string[];
    spells?: string[];
    sheen?: string;
    killstreaker?: string;
    tradable: boolean;
}

export function parseSKU(sku: string): ParsedSKUItem {

	const skuComponents = sku.split(";");
	let finalItem: ParsedSKUItem = { tradable: true, defindex: null, quality: null, craftable: null };

	// === Preprocessing ===
	// Process any sku components that may interfere with parsing the base sku
	for (const component of skuComponents) {
		if (component == "untradable") {
			finalItem.tradable = false;
			skuComponents.splice(skuComponents.indexOf("untradable"), 1);
		}
	}

	// === Process into a base SKU ===
	const baseItem = _parseBaseSKU(skuComponents.join(";"));
	finalItem = { ...finalItem, ...baseItem };

	// === Postprocessing ===
	// Apply any additional modifications onto parsed SKU
	for (const component of skuComponents) {

		const prefix = component.substring(0, 3);
		const id = component.substring(3);
		switch (prefix) {
		case SKUPrefix.Killstreaker:
			finalItem.killstreaker = getKillstreakerName(parseInt(id));
			break;
		case SKUPrefix.Paint:
			finalItem.paint = schema.getName(id);
			break;
		case SKUPrefix.Part:
			finalItem.parts = (finalItem.parts) || [];
			finalItem.parts = [getPartName(parseInt(id)).split("Strange Part: ")[1], ...(finalItem.parts || [])];
			break;
		case SKUPrefix.Sheen:
			finalItem.sheen = getSheenName(parseInt(id));
			break;
		case SKUPrefix.Spell:
			finalItem.spells = [getSpellName(parseInt(id)).split("Halloween Spell: ")[1], ...(finalItem.spells || [])];
			break;
		}
	}

	return finalItem;
}