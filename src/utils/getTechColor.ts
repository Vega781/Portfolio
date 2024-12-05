import { technologyColors } from "../data/technologyColors";

export function getTechColor(tech: string) {
    return technologyColors[(tech.replace(/\s+/g, '').replace(/\./g, '')) as keyof typeof technologyColors];
}