export interface Area {
  /** Deo URL-a: /slep-sluzba-{slug} */
  slug: string;
  name: string;
  /** Lokativ za tekst, npr. "na Voždovcu" */
  loc: string;
  /** Okvirno vreme dolaska, npr. "10–15 minuta" */
  eta: string;
  /** Slika iz /public */
  image: string;
  heroSub: string;
  /** Dva uvodna pasusa (jedinstveni za svaku stranicu) */
  intro: [string, string];
  sitTitle: string;
  situations: string[];
  roadsTitle: string;
  roads: string;
  faqs: { q: string; a: string }[];
  /** Slug-ovi susednih naselja za interno linkovanje */
  near: string[];
}
