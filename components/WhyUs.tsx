const reasons = [
  {
    icon: ClockIcon,
    title: "Dostupni 24/7 — bez izuzetka",
    desc: "Kvar ne bira vreme. Strada 46 je dostupna usred noći, vikendom i na praznike. Jedan poziv je dovoljan — odmah krećemo.",
  },
  {
    icon: ZapIcon,
    title: "Dolazak za ~30 minuta",
    desc: "Na teritoriji Beograda i okoline stižemo u proseku za 30 minuta. Brza reakcija znači manje čekanja i manje stresa za vas.",
  },
  {
    icon: ShieldIcon,
    title: "Pažljivo rukovanje vozilom",
    desc: "Vaše vozilo je u sigurnim rukama. Koristimo savremenu opremu za utovar i prevoz koja ne ostavlja ogrebotine ni oštećenja.",
  },
  {
    icon: TruckIcon,
    title: "Oprema za svaku situaciju",
    desc: "Šlep vozila, izvlačenje iz blata i snega, prevoz na veće distance — imamo pravu opremu za svaki tip kvara ili udesa.",
  },
  {
    icon: StarIcon,
    title: "Višegodišnje iskustvo",
    desc: "Ekipa Strada 46 ima dugogodišnje iskustvo u pružanju slep usluga na beogradskim ulicama, magistralama i terenima.",
  },
  {
    icon: PriceIcon,
    title: "Fer cena bez iznenađenja",
    desc: "Cenu saopštavamo pre dolaska. Nema skrivenih troškova, nema iznenađenja na kraju. Transparentno i pošteno.",
  },
];

export default function WhyUs() {
  return (
    <section id="zasto-mi" className="py-24 bg-[#000355]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Naše prednosti
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">
            Zašto Strada 46?
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto">
            Kada ostanete bez auta, bitno je koga zovete. Evo zašto nam
            vozači u Beogradu godinama veruju.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 bg-primary/60 rounded-2xl p-6 border border-primary/40 hover:border-accent/50 transition-colors">
              <div className="flex-shrink-0 w-11 h-11 bg-accent/20 rounded-xl flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <h3 className="text-accent font-bold text-lg mb-2 leading-tight">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}

function ZapIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

function TruckIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18H5a2 2 0 01-2-2v-1M3 10V7a2 2 0 012-2h9a2 2 0 012 2v7m0 0h-3m3 0h1a2 2 0 002-2v-3a2 2 0 00-.586-1.414l-3-3A2 2 0 0016.414 4H15" />
      <circle cx="6.5" cy="18" r="1.5" strokeWidth={2} />
      <circle cx="18.5" cy="18" r="1.5" strokeWidth={2} />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function PriceIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z" />
    </svg>
  );
}
