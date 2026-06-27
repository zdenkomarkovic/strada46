const steps = [
  {
    title: "Pozovete nas",
    desc: "Jedan poziv na 064/9-200-200 i odmah se javljamo. Dostupni smo 24 sata dnevno, svakog dana.",
  },
  {
    title: "Kažete lokaciju",
    desc: "Saopštite nam gde se nalazite. Poznajemo svaki kraj Beograda i okoline — bez gubljenja vremena.",
  },
  {
    title: "Dobijate okvirnu cenu",
    desc: "Odmah vam dajemo procenu cene pre nego što krenemo. Bez iznenađenja i skrivenih troškova.",
  },
  {
    title: "Krećemo odmah",
    desc: "Čim završimo razgovor, naš vozač kreće ka vama. Prosečno vreme dolaska je oko 30 minuta.",
  },
  {
    title: "Utovar vozila",
    desc: "Profesionalno i pažljivo utovara vaše vozilo na šlep prikolicu. Koristimo opremu koja ne oštećuje auto.",
  },
  {
    title: "Transport",
    desc: "Vozilo bezbedno transportujemo do željene destinacije — servisa, parkinga, tehničkog ili vaše adrese.",
  },
  {
    title: "Istovar na željenoj adresi",
    desc: "Pažljivo istovaramo vozilo na tačno mestu koje ste naveli. Kraj posla — bez oštećenja, bez stresa.",
  },
];

export default function Process() {
  return (
    <section id="proces" className="py-24 bg-[#000355]">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Kako radimo
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">
            Proces rada
          </h2>
          <p className="text-white text-lg max-w-xl mx-auto">
            Jednostavno, brzo i transparentno — evo šta se dešava od vašeg
            poziva do isporuke vozila.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {steps.map(({ title, desc }, i) => (
            <div key={title} className="flex gap-5 items-start">
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center font-black text-primary text-sm">
                  {i + 1}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-accent/25 mt-1" />
                )}
              </div>
              <div className="pb-2">
                <h3 className="text-accent font-bold text-lg mb-1">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
