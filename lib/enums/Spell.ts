export enum Spell {
	PutrescentPigmentation = 8900,
	DieJob = 8901,
	ChromaticCorruption = 8902,
	SpectralSpectrum = 8903,
	SinisterStaining = 8904,
	VoicesFromBelow = 8905,
	TeamSpiritFootprints = 8914,
	GangreenFootprints = 8915,
	CorpseGrayFootprints = 8916,
	ViolentVioletFootprints = 8917,
	RottenOrangeFootprints = 8918,
	BruisedPurpleFootprints = 8919,
	HeadlessHorseshoes = 8920,
	Exorcism = 8921,
	PumpkinBombs = 8922,
	HalloweenFire = 8923,
}

const SpellEnums = {
	"Putrescent Pigmentation": Spell.PutrescentPigmentation,
	"Die Job": Spell.DieJob,
	"Chromatic Corruption": Spell.ChromaticCorruption,
	"Spectral Spectrum": Spell.SpectralSpectrum,
	"Sinister Staining": Spell.SinisterStaining,
	"Voices From Below": Spell.VoicesFromBelow,
	"Team Spirit Footprints": Spell.TeamSpiritFootprints,
	"Gangreen Footprints": Spell.GangreenFootprints,
	"Corpse Gray Footprints": Spell.CorpseGrayFootprints,
	"Violent Violet Footprints": Spell.ViolentVioletFootprints,
	"Rotten Orange Footprints": Spell.RottenOrangeFootprints,
	"Bruised Purple Footprints": Spell.BruisedPurpleFootprints,
	"Headless Horseshoes": Spell.HeadlessHorseshoes,
	Exorcism: Spell.Exorcism,
	"Pumpkin Bombs": Spell.PumpkinBombs,
	"Halloween Fire": Spell.HalloweenFire,

	[Spell.PutrescentPigmentation]: "Putrescent Pigmentation",
	[Spell.DieJob]: "Die Job",
	[Spell.ChromaticCorruption]: "Chromatic Corruption",
	[Spell.SpectralSpectrum]: "Spectral Spectrum",
	[Spell.SinisterStaining]: "Sinister Staining",
	[Spell.VoicesFromBelow]: "Voices From Below",
	[Spell.TeamSpiritFootprints]: "Team Spirit Footprints",
	[Spell.GangreenFootprints]: "Gangreen Footprints",
	[Spell.CorpseGrayFootprints]: "Corpse Gray Footprints",
	[Spell.ViolentVioletFootprints]: "Violent Violet Footprints",
	[Spell.RottenOrangeFootprints]: "Rotten Orange Footprints",
	[Spell.BruisedPurpleFootprints]: "Bruised Purple Footprints",
	[Spell.HeadlessHorseshoes]: "Headless Horseshoes",
	[Spell.Exorcism]: "Exorcism",
	[Spell.PumpkinBombs]: "Pumpkin Bombs",
	[Spell.HalloweenFire]: "Halloween Fire",
};

export function getSpellEnum(spell: string): Spell {
	const spellName = spell.replace("Halloween Spell: ", "");
	if (spellName in SpellEnums) return SpellEnums[spellName];
	throw "Spell not found";
}

export function getSpellName(spellEnum: Spell): string {
	if (spellEnum in SpellEnums)
		return "Halloween Spell: " + SpellEnums[spellEnum];
	throw "SpellEnum not found";
}
