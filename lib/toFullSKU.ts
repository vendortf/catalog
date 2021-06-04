import { EconItem, parseEconItem, parseString, schema } from 'tf2-item-format';
import { toBaseSKU } from './toBaseSKU';
import { getSheenEnum } from './enums/Sheen';
import { getKillstreakerEnum } from './enums/Killstreaker';
import { SKUPrefix } from './enums/SKUPrefix';
import { getSpellDefindex } from './enums/Spell';

/**
 * Return full SKU of EconItem
 */
export function toFullSKU(econItem: EconItem): string {
    let { paint, parts, spells, sheen, killstreaker, tradable } = parseEconItem(econItem, true, true);
    let sku = toBaseSKU(econItem);

    function attachToSKU(component) {
        sku = `${sku};${component}`;
    }

    console.log(paint, parts, spells, sheen, killstreaker, tradable);
    if (paint != null) attachToSKU(`${SKUPrefix.Paint}${schema.getDefindex(paint)}`);

    if (parts != null) {
        let partsDefindices = [];
        for (let part of parts) partsDefindices.push(schema.getDefindex(`Strange Part: ${part}`));
        partsDefindices.sort();
        for (let partDefindex of partsDefindices) attachToSKU(`${SKUPrefix.Part}${partDefindex}`);
    }

    if (spells != null) {
        let spellsDefindices = [];
        for (let spell of spells) spellsDefindices.push(getSpellDefindex(`Halloween Spell: ${spell}`));
        spellsDefindices.sort();
        for (let spellDefindex of spellsDefindices) attachToSKU(`${SKUPrefix.Spell}${spellDefindex}`);
    }

    if (sheen != null) attachToSKU(`${SKUPrefix.Sheen}${getSheenEnum(sheen)}`);
    if (killstreaker != null) attachToSKU(`${SKUPrefix.Killstreaker}${getKillstreakerEnum(killstreaker)}`);

    if (!tradable) attachToSKU("untradable");

    return sku;
}