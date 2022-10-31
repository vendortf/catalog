import {
	EconItem,
	toSKU,
	ParsedEconNameAtributes,
	ItemDefindexes,
	ItemAttributesInNumbers,
	MetaEconAttributes,
	AddionalEconItemAttributes,
} from "tf2-item-format";
import { parseEconItem } from "tf2-item-format/static";
import { getQualityEnum } from "./enums/Quality";

type ParsedEconItem = ParsedEconNameAtributes &
	ItemDefindexes &
	ItemAttributesInNumbers &
	MetaEconAttributes &
	AddionalEconItemAttributes;

// Return base SKU of EconItem
export function toBaseSKU(econItem: EconItem): string {
	const parsedEconItem = parseEconItem(econItem, true, true);

	return toBaseFromParsedEcon(parsedEconItem, econItem);
}

export function toBaseFromParsedEcon(
	parsedEconItem: ParsedEconItem,
	econItem: EconItem
): string {
	// fallback defindex
	if (parsedEconItem.defindex == null) {
		const regex =
			/http:\/\/wiki\.teamfortress\.com\/scripts\/itemredirect\.php\?id=([0-9]*)&lang=en_US/g;
		parsedEconItem.defindex =
			parseInt(regex.exec(econItem.actions?.[0].link)[1]) || null;
	}

	if (parsedEconItem.quality == null) {
		const extractedQuality =
			econItem.tags.find((tag) => tag.category == "Quality")?.internal_name ||
			null;
		(parsedEconItem as any).quality = getQualityEnum(extractedQuality);
	}

	return toSKU(parsedEconItem);
}
