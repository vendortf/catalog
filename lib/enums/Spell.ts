import { schema } from "tf2-item-format";

// Defindex constants
const HALLOWEEN_SPELL_FIRST_VOICE = 8905;
const HALLOWEEN_SPELL_LAST_VOICE = HALLOWEEN_SPELL_FIRST_VOICE + (9 - 1); // 9 classes, - 1
const HALLOWEEN_FIRST_SPELL = HALLOWEEN_SPELL_FIRST_VOICE;
const HALLOWEEN_LAST_SPELL = 8925;
const HALLOWEEN_PREFIX = "Halloween Spell:";
const HALLOWEEN_VFB_NAME = "Voices From Below";


export function getSpellName(defindex: number) {
    if (defindex < HALLOWEEN_FIRST_SPELL || defindex > HALLOWEEN_LAST_SPELL) throw "Not a spell";
    if (defindex >= HALLOWEEN_SPELL_FIRST_VOICE && defindex <= HALLOWEEN_SPELL_LAST_VOICE) return `${HALLOWEEN_PREFIX} ${HALLOWEEN_VFB_NAME}`;
    return schema.getName(defindex);
}

export function getSpellDefindex(name: string) {
    if (name == `${HALLOWEEN_PREFIX} ${HALLOWEEN_VFB_NAME}`) return HALLOWEEN_SPELL_FIRST_VOICE;
    return schema.getDefindex(name);
}