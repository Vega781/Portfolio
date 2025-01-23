import { techData } from "../data/technologies";

export function getTechColor(tech: string) {
    const normalizedTech = tech.toLowerCase().replace(/\s+/g, '').replace(/\./g, '');
    const techEntry = Object.values(techData).find(t => 
        t.name.toLowerCase().replace(/\s+/g, '').replace(/\./g, '') === normalizedTech
    );
    return techEntry?.bgColor || techEntry?.gradient || 'gray';
}