import { PHONE, PHONE_HREF, ADDRESS, MAPS_URL } from "@/lib/constants";
import PhoneLink from "./PhoneLink";

const contactItems = [
  {
    label: "Telefon",
    value: PHONE,
    href: PHONE_HREF,
    icon: PhoneIcon,
    note: "Dostupni 24/7",
  },
  {
    label: "Adresa",
    value: ADDRESS,
    href: MAPS_URL,
    icon: LocationIcon,
    note: "Otvori na mapi",
  },
  {
    label: "Radno vreme",
    value: "0 — 24h",
    href: null,
    icon: ClockIcon,
    note: "Svakog dana",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="py-24 bg-accent">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#000355] font-semibold text-sm uppercase tracking-widest">Kontaktirajte nas</span>
          <h2 className="text-3xl md:text-5xl font-black text-[#000228] mt-3 mb-4">
            Pozovite odmah
          </h2>
          <p className="text-[#000355] text-lg max-w-xl mx-auto">
            Jedna uzbuna, i mi smo na putu. Dostupni smo svaki dan — danju i noću.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <PhoneLink className="flex items-center gap-4 bg-primary hover:bg-primary-dark text-white font-black text-3xl md:text-4xl px-10 py-5 rounded-2xl shadow-2xl transition-colors">
            <PhoneIcon className="w-9 h-9" />
            {PHONE}
          </PhoneLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactItems.map(({ label, value, href, icon: Icon, note }) => (
            <div
              key={label}
              className="bg-[#ccff00]/20 backdrop-blur-sm border border-[#000228]/20 rounded-2xl p-6 text-center"
            >
              <div className="w-12 h-12 bg-[#000228]/15 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-[#000228]" />
              </div>
              <div className="text-[#000355] text-sm font-medium mb-1">{label}</div>
              {href === PHONE_HREF ? (
                <PhoneLink className="text-[#000228] font-bold text-lg hover:text-primary transition-colors">
                  {value}
                </PhoneLink>
              ) : href ? (
                <a href={href} className="text-[#000228] font-bold text-lg hover:text-primary transition-colors">
                  {value}
                </a>
              ) : (
                <div className="text-[#000228] font-bold text-lg">{value}</div>
              )}
              <div className="text-[#000355] text-sm mt-1">{note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function ClockIcon({ className }: { className?: string }) {
  return (
    <svg className={className ?? "w-5 h-5"} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
