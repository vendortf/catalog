import Format from "@piman51277/fast-format";

const PART_PREFIX = "Strange Part:";

export function getPartName(defindex: number) {
	if (defindex == -1) return `${PART_PREFIX} Ubers`;
	return Format.schema.getName(defindex);
}

export function getPartDefindex(name: string) {
	if (name == `${PART_PREFIX} Ubers`) return -1;
	return Format.schema.getDefindex(name);
}
