import { EconItem, toSKU, parseEconItem } from 'tf2-item-format';

// Return base SKU of EconItem
export function toBaseSKU(econItem: EconItem): string {
    return toSKU(parseEconItem(econItem, true, true));
}