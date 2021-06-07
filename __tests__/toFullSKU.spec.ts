import { toFullSKU } from '../lib/toFullSKU';
import { SpelledAndPaintedFukushima, TeamShinePartedCarbonando, AustraliumGoldUnusualAviator, StrangeKritzKriegWithPart } from './constants/EconItems';


test("paint passed along correctly", () => {
    let sku = toFullSKU(SpelledAndPaintedFukushima);
    expect(sku.includes("pnt5046")).toBeTruthy();

    let sku2 = toFullSKU(AustraliumGoldUnusualAviator);
    expect(sku2.includes("pnt5037")).toBeTruthy();
});

test("parts passed along correctly", () => {
    let sku = toFullSKU(StrangeKritzKriegWithPart);
    console.log(sku);
    expect(sku.split("prt").length).toBe(3); // 2 parts
    expect(sku.includes("prt6058")).toBeTruthy();
    expect(sku.includes("prt-1")).toBeTruthy();
});

test("VFB spell passed along correctly", () => {
    let sku = toFullSKU(SpelledAndPaintedFukushima);
    expect(sku.includes("spl8905")).toBeTruthy();
});

test("sheen passed along correctly", () => {
    let sku = toFullSKU(TeamShinePartedCarbonando);
    expect(sku.includes("shn5")).toBeTruthy();
});

test("killstreaker passed along correctly", () => {
    let sku = toFullSKU(TeamShinePartedCarbonando);
    expect(sku.includes("ksr")).toBeFalsy();
});