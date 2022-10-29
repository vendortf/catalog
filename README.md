# Note

This is a fork of the original repo, which adresses performance issues with the `toFullSKU` function.

# Catalog • ![example workflow](https://github.com/automatedtf/catalog/actions/workflows/main.yml/badge.svg)

### 📖 Table of Contents

- [👋 Introduction](#-introduction)
- [🔌 Getting Started](#-getting-started)
  - [Example Usages](#example-usages)
- [🗂️ What makes a SKU?](#%EF%B8%8F-what-makes-a-sku)
  - [Base SKU](#base-sku)
  - [Components of a Base SKU](#components-of-a-base-sku)
  - [Examples of Base SKUs](#examples-of-base-skus)
  - [Full SKU](#full-sku)
  - [Examples of Full SKUs](#examples-of-full-skus)
- [💡 Improvements to Make](#-improvements-to-make)
- [📚 Helpful Resources](#-helpful-resources)

## 👋 Introduction

Catalog aims to provide an extensive standardised identifier system similar to a stock-keeping unit (SKU) system for TF2 items.

We may have data objects representing the full details of an item as large as [this](https://github.com/automatedtf/catalog/blob/b29f7491782576bbf001eac1a4a25adcf9e2d8ef/__tests__/constants/EconItems.ts#L1) but we can represent the object as minimally as `5918;6`. In this example, `5918` represents the item's `defindex` that tells us the item we have (a `Scream Fortress XII War Paint Case`) and `6` represents the item's `quality` of `Unique` quality in this case. Almost all other item details can (and should) be functionally determined from the SKU.

Other libraries such as [`tf2-sku`](https://github.com/Nicklason/node-tf2-sku) and [`tf2-item-format`](https://github.com/danocmx/node-tf2-item-format) already provide standards for keeping to this SKU system, however, there is currently not a standard for including item modifications e.g spells, parts etc.

This means that applications will need to continue holding onto complete item information within databases should they wish to account for item modifications. As such, this library provides an extension for item modifications on top of the current standard.

## 🔌 Getting Started

You can install this module with npm within your project by running the command:

```bash
npm install @automatedtf/catalog
```

##### Example Usages

There are a number of ways this module can be used.

```typescript
// Get an EconItem somehow e.g Steam Inventory JSON API
const econItem = { ... };

// Parse to a SKU
const baseSKU: string = toBaseSKU(econItem);
const fullSKU: string = toFullSKU(econItem);

// Get a human-readable item name
// NOTE: toName does not support full SKUs yet
const baseName: string = toName(baseSKU); // e.g Unique Brown Bomber
const theSameBaseName: string = toName(fullSKU);

// Parse a SKU into a ParsedSKUItem
const baseItemDetails: ParsedSKUItem = parseSKU(baseSKU);
const fullItemDetails: ParsedSKUItem = parseSKU(fullSKU); // includes item modifications

// Strip a full SKU into its base SKU
const _baseSKU: string = stripFullSKU(fullSKU); // remove item modifications
// Assertion: baseSKU === _baseSKU;
```

## 🗂️ What makes a SKU?

There are two concepts covered here when using this module: a _base_ SKU and a _full_ SKU.

##### Base SKU

A base SKU is the standard provided by other SKU libraries such as [`tf2-item-format`](https://github.com/danocmx/node-tf2-item-format) and [`tf2-sku`](https://github.com/Nicklason/node-tf2-sku). This library uses [`tf2-item-format`](https://github.com/danocmx/node-tf2-item-format) as it provides an intermediate object from `parseEconItem` that holds all information on item types and modifications. Calling `toSKU` from [`tf2-item-format`](https://github.com/danocmx/node-tf2-item-format) upon this object will create a _base_ SKU that considers the item type but not any modifications.

This can be used to identify items that are of the same type e.g an Unusual Green Confetti Brigade Helm and an Unusual Green Confetti Bridge Helm painted Australium Gold, however, won't take into account a modification such as paint.

This is more than sufficient for usage when one may not be concerned about item modifications within their item management system.

##### Components of a Base SKU

The regular expression for a base SKU roughly comes out to this:

```
[defindex];[quality](;uncraftable)?(;(u[effectenum])?(;[kt-X])?
```

- `defindex` - `number` representing the identifier for what the item; seen in the TF2 schema
- `quality` - `number` representing an item's quality; seen in the TF2 schema
- `uncraftable` - 'uncraftable' if item is uncraftable, nothing if not.
- `effectenum` - `number` representing the (generally Unusual) effect on an item; seen in the TF2 schema
- `kt-X` - Represents the killstreak tier on an item
  - `kt-1` - Killstreak
  - `kt-2` - Specialized Killstreak
  - `kt-3` - Professional Killstreak

##### Examples of Base SKUs

`🚧 TODO 🚧`

##### Full SKU

The full SKU is a concept introduced with this library that extends a base SKU to include string mappings for item modifications. This can be used for representing an item compactly by capturing every customisation for an item.

The regular expression for a full SKU is:

```
([base_sku])(;pnt[paintdefindex])?(;prt[partdefindex])*(;spl[spelldefindex])*(;shn[sheenenum])?(;ksr[killstreakerenum])?
```

- `base_sku` - Base SKU of item as previously
- `paintdefindex` - `number` representing the paint can used to paint the item; defindex seen in the TF2 schema
- `partdefindex` - `number` representing the part attached on Strange item; in TF2 schema. There may be multiple parts.
- `spelldefindex` - `number` representing the spells applied onto item, using spell's defindex in TF2 schema. All voice spells are treated as the defindex `8905` or the constant `HALLOWEEN_SPELL_FIRST_VOICE`. There may be multiple spells.
- `sheenenum` - `number` representing the sheen of a Specialized Killstreak'd or Professional Killstreak'd item
  - `0` - Agonizing Emerald
  - `1` - Deadly Daffodil
  - `2` - Hot Rod
  - `3` - Manndarin
  - `4` - MeanGreen
  - `5` - TeamShine
  - `6` - VillainousViolet
- `killstreakerenum` - `number` representing killstreaker of Professional Killstreak'd item
  - `0` - Cerebral Discharge
  - `1` - Fire Horns
  - `2` - Flames
  - `3` - Hypno-Beam
  - `4` - Incinerator
  - `5` - Singularity
  - `6` - Tornado

##### Examples of Full SKUs

`🚧 TODO 🚧`

## 💡 Improvements to Make

There are a number of ways that the module can be improved. This can include new functionalities, but some improvements can just be a refactoring - to reduce memory usage, minimise code duplication, and increase code hygiene.

##### Refactoring

There are several places in which a refactor _could_ take place for parsing or expansion, including techniques such as grouping constants together and functions together for better management.

These are:

- Prefix Constants
- Parse Functions
- Expander Functions
- Killstreaker / Part / Sheen / Spell Enums

##### toName supporting full SKUs

When representing an item as a SKU to be used later for the frontend, it may be helpful to differentiate an item's name based on its modifications e.g an 'Unusual Green Confetti Brigade Helm painted Australium Gold'. `toName` could be extended for full SKUs later down the line.

## 📚 Helpful Resources

- [tf2-item-format](https://github.com/danocmx/node-tf2-item-format)
- [tf2-sku](https://github.com/Nicklason/node-tf2-sku)
- [tf2-schema](https://github.com/Nicklason/node-tf2-schema)
- [tf2-enum](https://github.com/Bonfire/node-tf2-enum)
