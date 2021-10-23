export enum Quality {
    Normal = 0,
    Genuine = 1,
    Vintage = 3,
    Unusual = 5,
    Unique = 6,
    Strange = 11,
    Haunted = 13,
    Collectors = 14,
}

const QualityEnums = {
    "Normal": Quality.Normal,
    "Genuine": Quality.Genuine,
    "Vintage": Quality.Vintage,
    "Unusual": Quality.Unusual,
    "Unique": Quality.Unique,
    "Strange": Quality.Strange,
    "Haunted": Quality.Haunted,
    "Collectors": Quality.Collectors,

    [Quality.Normal]: "Normal",
    [Quality.Genuine]: "Genuine",
    [Quality.Vintage]: "Vintage",
    [Quality.Unusual]: "Unusual",
    [Quality.Unique]: "Unique",
    [Quality.Strange]: "Strange",
    [Quality.Haunted]: "Haunted",
    [Quality.Collectors]: "Collectors",
};

export function getQualityEnum(quality: string): Quality {
    if (quality in QualityEnums) return QualityEnums[quality];
    throw "Quality not found";
}

export function getQualityName(qualityEnum: Quality): string {
    if (qualityEnum in QualityEnums) return QualityEnums[qualityEnum];
    throw "QualityEnum not found";
}