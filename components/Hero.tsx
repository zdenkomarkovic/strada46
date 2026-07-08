import Image from "next/image";
import { PHONE } from "@/lib/constants";
import PhoneLink from "./PhoneLink";

const features = [
  { icon: "🚗", text: "Sva putnička vozila" },
  { icon: "⚡", text: "Dolazak ~30 min" },
  { icon: "🔋", text: "Paljenje akumulatora" },
  { icon: "⛽", text: "Dostava goriva" },
  { icon: "📍", text: "Beograd i okolina" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/20230828_193840-1-1024x576.jpg"
          alt="Slep vozilo Strada 46"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/40 to-primary/15" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/50 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          Dostupni 24 sata, 7 dana u nedelji
        </div>

        <h1 className="text-5xl md:text-7xl font-black leading-none mb-4 tracking-tight">
          ŠLEP SLUŽBA
          <br />
          <span className="text-accent">STRADA 46 </span>
          <br />
          BEOGRAD
        </h1>

        <p className="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto">
          Brza i pouzdana pomoć na putu — šlep, deblokada, paljenje akumulatora kablovima i
          dostava goriva. Kumodraz, Beograd.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <PhoneLink className="flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary font-black text-2xl md:text-3xl px-8 py-4 rounded-xl shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-100">
            <PhoneIcon className="w-7 h-7" />
            {PHONE}
          </PhoneLink>
          <a
            href="#usluge"
            className="flex items-center gap-2 border-2 border-white/30 hover:border-accent text-white hover:text-accent font-semibold px-6 py-4 rounded-xl transition-colors"
          >
            Naše usluge
            <ArrowRightIcon />
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-6 text-sm text-white">
          {features.map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2">
              <span className="text-base">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-accent/50"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 8l4 4m0 0l-4 4m4-4H3"
      />
    </svg>
  );
}
