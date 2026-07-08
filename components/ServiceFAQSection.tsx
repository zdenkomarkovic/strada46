"use client";

import { useState } from "react";

export default function ServiceFAQSection({
  id,
  faqs,
}: {
  id: string;
  faqs: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <section id={id} className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Česta pitanja
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-primary mb-4">FAQ</h2>
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
