import { parseSKU as _parseBaseSKU, SKUAttributes, schema } from 'tf2-item-format';
import { SKUPrefix } from './enums/SKUPrefix';
import { getKillstreakerName } from './enums/Killstreaker';
import { Sheen, getSheenName } from './enums/Sheen';
import { getSpellName } from './enums/Spell';

type ParsedSKUItem = SKUAttributes & { 
    paint?: string;
    parts?: string[];
    spells?: string[];
    sheen?: string;
    killstreaker?: string;
    tradable: boolean;
}

export function parseSKU(sku: string): ParsedSKUItem {
    
    // Parse for base item
    let baseItem = _parseBaseSKU(sku);
    let finalItem: ParsedSKUItem = { ...baseItem, tradable: true};

    // Parse any modifications
    let skuComponents = sku.split(";");

    for (let component of skuComponents) {

        if (component == "untradable") {
            finalItem.tradable = false;
        }
        let prefix = component.substring(0, 3);
        let id = component.substring(3);
        switch (prefix) {
            case SKUPrefix.Killstreaker:
                finalItem.killstreaker = getKillstreakerName(parseInt(id));
                break;
            case SKUPrefix.Paint:
                finalItem.paint = schema.getName(id);
                break;
            case SKUPrefix.Part:
                finalItem.parts = (finalItem.parts) || [];
                finalItem.parts = [schema.getName(id).split("Strange Part: ")[1], ...(finalItem.parts || [])];
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