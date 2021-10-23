import { EconItem, toSKU, parseEconItem } from 'tf2-item-format';
import { getQualityEnum } from './enums/Quality';

// Return base SKU of EconItem
export function toBaseSKU(econItem: EconItem): string {
    let parsedEconItem = parseEconItem(econItem, true, true);

    // fallback defindex
    if (parsedEconItem.defindex == null) {
        const regex = /http:\/\/wiki\.teamfortress\.com\/scripts\/itemredirect\.php\?id=([0-9]*)&lang=en_US/g;
        parsedEconItem.defindex = parseInt(regex.exec(econItem.actions?.[0].link)[1]) || null;
    }

    if (parsedEconItem.quality == null) {
        const extractedQuality = econItem.tags.find(tag => tag.category == 'Quality')?.internal_name || null;
        (parsedEconItem as any).quality = getQualityEnum(extractedQuality);
    }

    return toSKU(parsedEconItem);
}