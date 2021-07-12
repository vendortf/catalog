# Catalog

### 📖 Table of Contents
- [👋 Introduction](#-introduction)
- [🔌 Getting Started](#-getting-started)
- [🗂️ What makes a SKU?](#%EF%B8%8F-what-makes-a-sku)
- [💡 Improvements to Make](#-improvements-to-make)
- [📚 Helpful Resources](#-helpful-resources)

## 👋 Introduction
Catalog aims to provide an extensive standardised identifier system similar to a stock-keeping unit (SKU) system for TF2 items.

We may have data objects representing the full details of an item as large as [this](https://github.com/automatedtf/catalog/blob/b29f7491782576bbf001eac1a4a25adcf9e2d8ef/__tests__/constants/EconItems.ts#L1) but we can represent the object as minimally as `5918;6`. In this example, `5918` represents the item's `defindex` that tells us the item we have (a `Scream Fortress XII War Paint Case`) and `6` represents the item's `quality` of `Unique` quality in this case. Almost all other item details can (and should) be functionally determined from the SKU.

Other libraries such as `tf2-sku` and `tf2-item-format` already provide standards for keeping to this SKU system, however, there is currently not a standard for including item modifications e.g spells, parts etc.

This means that applications will need to continue holding onto complete item information within databases should they wish to account for item modifications. As such, this library provides an extension for item modifications on top of the current standard.

## 🔌 Getting Started
`🚧 TODO 🚧`
## 🗂️ What makes a SKU?
`🚧 TODO 🚧`

[defindex];[quality];[uncraftable]?;u[effectenum]?;[kt-X]?;

Additional: pnt[paintdefindex]?;prt[partdefindex]*;spl[spelldefindex]?;shn[sheenenum]?;ksr[killstreakerenum]?

## 💡 Improvements to Make
`🚧 TODO 🚧`
## 📚 Helpful Resources
`🚧 TODO 🚧`