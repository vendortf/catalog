export enum Killstreaker {
    CerebralDischarge, 
    FireHorns,
    Flames,
    HypnoBeam,
    Incinerator,
    Singularity,
    Tornado
}

const KillstreakerEnums = {
    "Cerebral Discharge": Killstreaker.CerebralDischarge,
    "Fire Horns": Killstreaker.FireHorns,
    "Flames": Killstreaker.Flames,
    "Hypno-Beam": Killstreaker.HypnoBeam,
    "Incinerator": Killstreaker.Incinerator,
    "Singularity": Killstreaker.Singularity,
    "Tornado": Killstreaker.Tornado,

    [Killstreaker.CerebralDischarge]: "Cerebral Discharge",
    [Killstreaker.FireHorns]: "Fire Horns",
    [Killstreaker.Flames]: "Flames",
    [Killstreaker.HypnoBeam]: "Hypno-Beam",
    [Killstreaker.Incinerator]: "Incinerator",
    [Killstreaker.Singularity]: "Singularity",
    [Killstreaker.Tornado]: "Tornado"
}

export function getKillstreakerEnum(killstreaker: string): Killstreaker {
    if (killstreaker in KillstreakerEnums) return KillstreakerEnums[killstreaker];
    throw "Killstreaker not found";
}

export function getKillstreakerName(killstreakEnum: Killstreaker): string {
    if (killstreakEnum in KillstreakerEnums) return KillstreakerEnums[killstreakEnum];
    throw "KillstreakerEnum not found";
}