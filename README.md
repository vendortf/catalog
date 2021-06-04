# Catalog
`Module - :warning: In Development`
`Documentation - :warning: In Development`

Catalog aims to provide a standardised identifier system similar to a stock-keeping unit (SKU) system for TF2 items. Other libraries such as `node/tf2-sku` provide some standards but do not include item-specific modifications e.g spells, parts etc.

Currently, this means that applications will need to continue holding onto complete item information within databases. Providing identification for item-specific modifications will, as a result, remove this redundancy from being able to map all details of an item from just its identifier / SKU.

## SKU Components

[defindex];[quality];[uncraftable]?;u[effectenum]?;[kt-X]?;

Additional: pnt[paintdefindex]?;prt[partdefindex]*;spl[spelldefindex]?;shn[sheenenum]?;ksr[killstreakerenum]?

## Functions
