import { areasA } from "./areas-a";
import { areasB } from "./areas-b";
import { areasC } from "./areas-c";
import type { Area } from "./areas-types";

export type { Area };

export const areas: Area[] = [...areasA, ...areasB, ...areasC];

/** URL putanja stranice za naselje, npr. /slep-sluzba-vozdovac */
export const areaPath = (slug: string) => `/slep-sluzba-${slug}`;

export const areaBySlug = (slug: string) => areas.find((a) => a.slug === slug);

/** Iz URL segmenta "slep-sluzba-vozdovac" izvlači "vozdovac" */
export function slugFromSegment(segment: string): string | null {
  const prefix = "slep-sluzba-";
  return segment.startsWith(prefix) ? segment.slice(prefix.length) : null;
}
