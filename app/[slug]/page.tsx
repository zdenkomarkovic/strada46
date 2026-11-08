import Link from "next/link";
import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { SITE_URL, SITE_NAME, PHONE } from "@/lib/constants";
import { areas, areaBySlug, areaPath, slugFromSegment } from "@/lib/areas";
import { services, serviceBySlug } from "@/lib/services";
import Header from "@/components/Header";
import Breadcrumbs from "@/components/Breadcrumbs";
import ServiceHero from "@/components/ServiceHero";
import CheckList from "@/components/CheckList";
import ServiceFAQSection from "@/components/ServiceFAQSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Samo poznate stranice (naselja i usluge); sve ostalo je 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return [
    ...areas.map((a) => ({ slug: `slep-sluzba-${a.slug}` })),
    ...services.map((s) => ({ slug: s.slug })),
  ];
}

function getArea(segment: string) {
  const slug = slugFromSegment(segment);
  return slug ? areaBySlug(slug) : undefined;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = serviceBySlug(slug);
  if (service) {
    return buildMetadata({
      title: service.metaTitle,
      description: service.metaDesc,
      url: `${SITE_URL}/${service.slug}`,
    });
  }

  const area = getArea(slug);
  if (!area) return {};
  return buildMetadata({
    title: `Šlep Služba ${area.name} 24/7 — ${area.eta}`,
    description: `Šlep služba ${area.name}: ${area.heroSub} Dolazak ${area.loc} za ${area.eta}. Pozovite ${PHONE}.`,
    url: `${SITE_URL}${areaPath(area.slug)}`,
  });
}

const linkCls =
  "font-semibold text-primary underline decoration-accent decoration-2 underline-offset-4";

export default async function DynamicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = serviceBySlug(slug);
  if (service) return <ServicePage service={service} />;

  const area = getArea(slug);
  if (!area) notFound();
  return <AreaPage area={area} />;
}

/* ───────────────────────── Usluga ───────────────────────── */

function ServicePage({ service }: { service: NonNullable<ReturnType<typeof serviceBySlug>> }) {
  const pageUrl = `${SITE_URL}/${service.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: service.name,
        name: service.metaTitle,
        description: service.metaDesc,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_NAME,
          telephone: "+381649200200",
          url: SITE_URL,
        },
        areaServed: { "@type": "City", name: "Beograd" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: service.name, item: pageUrl },
        ],
      },
    ],
  };

  // Nekoliko naselja za interno linkovanje
  const featured = ["kumodraz", "vozdovac", "banjica", "rakovica", "centar", "zvezdara"]
    .map((s) => areaBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <Breadcrumbs current={service.name} />
        <ServiceHero
          eyebrow={service.eyebrow}
          title={
            <>
              {service.titleTop}
              <br />
              <span className="text-accent">{service.titleAccent}</span>
            </>
          }
          subtitle={service.heroSub}
          image={service.image}
          imageAlt={service.imageAlt}
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{service.name}</h2>
              {service.intro.map((p) => (
                <p key={p.slice(0, 30)} className="text-primary/70 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{service.whenTitle}</h2>
              <CheckList items={service.when} />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{service.howTitle}</h2>
              <p className="text-primary/70 text-lg leading-relaxed">{service.how}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
                {service.benefitsTitle}
              </h2>
              <CheckList items={service.benefits} />
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-6">Pogledajte i</h2>
              <ul className="space-y-2">
                {service.related.map((r) => (
                  <li key={r.href}>
                    <Link href={r.href} className={linkCls}>
                      {r.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-black text-primary mb-6">
                Gde sve radimo
              </h2>
              <p className="text-primary/70 mb-5">
                Uslugu pružamo u celom Beogradu. Evo nekoliko delova grada:
              </p>
              <div className="flex flex-wrap gap-3">
                {featured.map((a) => (
                  <Link
                    key={a.slug}
                    href={areaPath(a.slug)}
                    className="border-2 border-primary/15 hover:border-accent rounded-xl px-5 py-3 font-bold text-primary transition-colors"
                  >
                    Šlep služba {a.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <ServiceFAQSection id="faq" faqs={service.faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/* ───────────────────────── Naselje ───────────────────────── */

function AreaPage({ area }: { area: NonNullable<ReturnType<typeof areaBySlug>> }) {
  const pageUrl = `${SITE_URL}${areaPath(area.slug)}`;
  const near = area.near
    .map((s) => areaBySlug(s))
    .filter((a): a is NonNullable<typeof a> => Boolean(a));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        serviceType: "Šlep služba",
        name: `Šlep služba ${area.name}`,
        description: area.heroSub,
        provider: {
          "@type": "LocalBusiness",
          name: SITE_NAME,
          telephone: "+381649200200",
          url: SITE_URL,
        },
        areaServed: { "@type": "Place", name: `${area.name}, Beograd` },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Početna", item: SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: `Šlep služba ${area.name}`,
            item: pageUrl,
          },
        ],
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Header />
      <main>
        <Breadcrumbs current={`Šlep služba ${area.name}`} />
        <ServiceHero
          eyebrow={`Stižemo ${area.loc} za ${area.eta}`}
          title={
            <>
              ŠLEP SLUŽBA
              <br />
              <span className="text-accent">{area.name.toUpperCase()}</span>
            </>
          }
          subtitle={area.heroSub}
          image={area.image}
          imageAlt={`Šlep služba ${area.name} — vozilo Strada 46`}
        />

        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                Šlep {area.loc}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-primary mt-3 mb-6">
                Brza pomoć na putu: {area.name}
              </h2>
              {area.intro.map((p) => (
                <p key={p.slice(0, 30)} className="text-primary/70 text-lg leading-relaxed mb-5">
                  {p}
                </p>
              ))}
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{area.sitTitle}</h2>
              <CheckList items={area.situations} />
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">{area.roadsTitle}</h2>
              <p className="text-primary/70 text-lg leading-relaxed">{area.roads}</p>
            </div>

            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-primary mb-6">
                Usluge koje nudimo {area.loc}
              </h2>
              <p className="text-primary/70 text-lg leading-relaxed mb-6">
                Pored{" "}
                <Link href="/slep-vozila-beograd" className={linkCls}>
                  šlepovanja
                </Link>{" "}
                i{" "}
                <Link href="/deblokada-izvlacenje-vozila-beograd" className={linkCls}>
                  deblokade vozila
                </Link>
                , na ovoj lokaciji radimo i{" "}
                <Link href="/paljenje-akumulatora-beograd" className={linkCls}>
                  paljenje vozila kablovima
                </Link>{" "}
                i{" "}
                <Link href="/dostava-goriva-beograd" className={linkCls}>
                  dostavu goriva
                </Link>
                . Pozovite {PHONE} u bilo koje doba, a vozač kreće odmah.
              </p>
            </div>

            {near.length > 0 && (
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-primary mb-6">
                  Šlep služba u susednim naseljima
                </h2>
                <div className="flex flex-wrap gap-3">
                  {near.map((n) => (
                    <Link
                      key={n.slug}
                      href={areaPath(n.slug)}
                      className="border-2 border-primary/15 hover:border-accent rounded-xl px-5 py-3 font-bold text-primary transition-colors"
                    >
                      Šlep služba {n.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <ServiceFAQSection id="faq" faqs={area.faqs} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
