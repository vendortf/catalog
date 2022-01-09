import { schema } from "tf2-item-format";

const PART_PREFIX = "Strange Part:";

export function getPartName(defindex: number) {
	if (defindex == -1) return `${PART_PREFIX} Ubers`;
	return schema.getName(defindex);
}

export function getPartDefindex(name: string) {
	if (name == `${PART_PREFIX} Ubers`) return -1;
	return schema.getDefindex(name);
}