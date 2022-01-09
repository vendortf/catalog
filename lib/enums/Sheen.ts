export enum Sheen {
    AgonizingEmerald,
    DeadlyDaffodil,
    HotRod,
    Manndarin,
    MeanGreen,
    TeamShine,
    VillainousViolet
}

const SheenEnums = {
	"Agonizing Emerald": Sheen.AgonizingEmerald,
	"Deadly Daffodil": Sheen.DeadlyDaffodil,
	"Hot Rod": Sheen.HotRod,
	"Manndarin": Sheen.Manndarin,
	"Mean Green": Sheen.MeanGreen,
	"Team Shine": Sheen.TeamShine,
	"Villainous Violet": Sheen.VillainousViolet,

	[Sheen.AgonizingEmerald]: "Agonizing Emerald",
	[Sheen.DeadlyDaffodil]: "Deadly Daffodil",
	[Sheen.HotRod]: "Hot Rod",
	[Sheen.Manndarin]: "Manndarin",
	[Sheen.MeanGreen]: "Mean Green",
	[Sheen.TeamShine]: "Team Shine",
	[Sheen.VillainousViolet]: "Villainous Violet"
};

export function getSheenEnum(sheen: string): Sheen {
	if (sheen in SheenEnums) return SheenEnums[sheen];
	throw "Sheen not found";
}

export function getSheenName(sheenEnum: Sheen): string {
	if (sheenEnum in SheenEnums) return SheenEnums[sheenEnum];
	throw "SheenEnum not found";
}