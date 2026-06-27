const testimonials = [
  {
    text: "Pukla mi guma noću na Voždovcu i auto je bio neupotrebljiv. Pozvao sam Strada 46 i šlep vozilo je stiglo za nekih 20 minuta. Ekipa je profesionalno utovarila auto i odvezla ga do servisa u Rakovici. Brza slep služba, preporučujem svima u južnom Beogradu.",
    name: "Marko J.",
    location: "Voždovac, Beograd",
  },
  {
    text: "Imao sam kvar na motoru negde između Ripnja i Pinosave — automobil se jednostavno ugasio usred puta. Strada 46 je jedina slep služba koja je bez problema prihvatila da dođe na to mesto. Stigli su brzo, utovar je bio pažljiv i vozilo su dostavili na tačnu adresu. Solidna firma.",
    name: "Stefan P.",
    location: "Ripanj, Beograd",
  },
  {
    text: "Koristim šlep usluge Strada 46 već nekoliko godina — i za lični auto i za vozila firme. Svaki put isti rezultat: tačno vreme dolaska, pažljivo rukovanje vozilom i poštena cena bez iznenađenja na kraju. Za prevoz i šlep vozila na teritoriji Beograda, ovo mi je prva i jedina opcija.",
    name: "Milica R.",
    location: "Braće Jerković, Beograd",
  },
  {
    text: "Zapeo sam u blatu na makadamu kod Kaluđerice posle kiše. Ni jedno drugo vozilo nije moglo da priđe. Ekipa iz Strada 46 je donela pravu opremu za izvlačenje i za manje od sat vremena auto je bio na asfaltu. Izvlačenje vozila iz terena im ide od ruke, znaju šta rade.",
    name: "Nikola V.",
    location: "Kaluđerica, Beograd",
  },
];

export default function Testimonials() {
  return (
    <section id="recenzije" className="py-24 bg-[#000355]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Iskustva klijenata
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">
            Šta kažu naši klijenti
          </h2>
          <p className="text-white text-lg max-w-xl mx-auto">
            Hiljade zadovoljnih vozača u Beogradu veruju nam svoja vozila.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map(({ text, name, location }) => (
            <div
              key={name}
              className="bg-primary rounded-2xl p-6 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <p className="text-white/85 leading-relaxed flex-1">"{text}"</p>
              <div className="border-t border-white/10 pt-4">
                <div className="font-bold text-accent">{name}</div>
                <div className="text-white/50 text-sm">{location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
