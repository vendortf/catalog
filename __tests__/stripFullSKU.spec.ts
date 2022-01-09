import { SKUPrefix } from "../lib/enums/SKUPrefix";
import { stripFullSKU } from "../lib/stripFullSKU";


test("strip untradable", () => {
	const fullSKU = "30187;5;u14;untradable";

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

test("strip paint", () => {
	const fullSKU = `30187;5;u14;${SKUPrefix.Paint}132`;

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

test("strip part", () => {
	const fullSKU = `30187;5;u14;${SKUPrefix.Part}132`;

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

test("strip spell", () => {
	const fullSKU = `30187;5;u14;${SKUPrefix.Spell}132`;

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

test("strip sheen", () => {
	const fullSKU = `30187;5;u14;${SKUPrefix.Sheen}132`;

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

test("strip killstreaker", () => {
	const fullSKU = `30187;5;u14;${SKUPrefix.Killstreaker}132`;

	const strippedSKU = stripFullSKU(fullSKU);
	expect(strippedSKU).toEqual("30187;5;u14");
});

