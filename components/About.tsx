const stats = [
  { value: "24/7", label: "Uvek dostupni" },
  { value: "~30'", label: "Vreme dolaska" },
  { value: "100%", label: "Zadovoljnih klijenata" },
  { value: "BG", label: "Beograd i okolina" },
];

const points = [
  "Iskusan i profesionalan tim vozača",
  "Savremena vozila i oprema za sve situacije",
  "Pažljivo rukovanje svakim vozilom",
  "Transparentne i povoljne cene",
  "Brz odgovor i dolazak na teren",
  "Pokrivamo ceo Beograd i širu okolinu",
];

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-[#000228]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Ko smo mi</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-3 mb-6">
              O nama
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Strada 46 je slep služba sa sedištem u Kumodražu, Beograd.
              Pružamo brzu i pouzdanu pomoć vozačima kojima je potrebna
              asistencija na putu — bilo da je u pitanju kvar, udes ili
              zapinjanje vozila.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-10">
              Naš tim je dostupan 24 sata dnevno, 7 dana u nedelji. Koristimo
              savremenu opremu i vozila kako bismo vaše vozilo bezbedno
              transportovali na željenu adresu.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-3 h-3 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map(({ value, label }) => (
              <div
                key={label}
                className="bg-[#000355] border border-primary/30 rounded-2xl p-8 text-center hover:border-accent/40 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-black text-accent mb-2">{value}</div>
                <div className="text-slate-400 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
