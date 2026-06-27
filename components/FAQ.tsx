"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Koliko košta usluga šlepa?",
    a: "Cena zavisi od rastojanja i tipa vozila. Pozovite nas na 064/9-200-200 za besplatnu procenu — uvek nudimo fer i transparentne cene bez skrivenih troškova.",
  },
  {
    q: "Koje oblasti Beograda pokrivate?",
    a: "Primarno pokrivamo Kumodraž i sva okolna naselja u krugu od 10 kilometara — Voždovac, Banjicu, Braće Jerković, Kaluđericu, Ripanj, Rakovicu, Žarkovo, Lešće, Konjarnik, Dedinje, Košutnjak i Medaković. Za lokacije van ove zone pozovite nas — dolazimo i dalje uz prethodni dogovor.",
  },
  {
    q: "Da li radite noću i vikendom?",
    a: "Da, dostupni smo 24 sata dnevno, 7 dana u nedelji, uključujući praznike. Jedna uzbuna i mi smo na putu ka vama.",
  },
  {
    q: "Koliko brzo možete da stignete?",
    a: "U proseku stižemo za oko 30 minuta na bilo koji deo Beograda. Odmah po vašem pozivu naš tim kreće na put.",
  },
  {
    q: "Koja vozila šlepujete?",
    a: "Šlepujemo sva putnička vozila, kombije i motocikle. Imamo odgovarajuću opremu i iskustvo za svaki tip vozila bez obzira na stanje.",
  },
  {
    q: "Šta je deblokada i izvlačenje vozila?",
    a: "Deblokada je usluga izvlačenja vozila iz teških pozicija — blato, sneg, pesak, rov ili drugi nepristupačni tereni. Koristimo specijalizovanu opremu da bezbedno izvučemo vaše vozilo.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Česta pitanja
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">
            FAQ
          </h2>
          <p className="text-primary/60 text-lg">
            Odgovori na najčešća pitanja naših klijenata.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={i} className="border-2 border-primary/15 rounded-2xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-primary/5 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-bold text-primary">{q}</span>
                <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center transition-transform ${open === i ? "rotate-45" : ""}`}>
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-primary/70 leading-relaxed border-t border-primary/10 pt-4">
                  {a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
