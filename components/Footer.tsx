import Image from "next/image";
import { PHONE, PHONE_HREF, ADDRESS, SITE_NAME } from "@/lib/constants";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#zasto-mi", label: "Zašto mi?" },
  { href: "#proces", label: "Kako radimo" },
  { href: "#oblast", label: "Oblast pokrivenosti" },
  { href: "#galerija", label: "Galerija" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#o-nama", label: "O nama" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#00010a] border-t border-primary/30">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <Image
              src="/logo.png"
              alt="Strada 46"
              width={480}
              height={168}
              className="object-contain h-40 w-auto mb-4"
            />
            <p className="text-slate-500 text-sm leading-relaxed">
              Brza i pouzdana pomoć na putu. Šlep, deblokada i prevoz vozila na teritoriji Beograda
              i okoline.
            </p>
          </div>

          <div>
            <h3 className="text-slate-300 font-bold mb-4">Navigacija</h3>
            <ul className="space-y-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-accent text-sm transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-slate-300 font-bold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-2 text-slate-400 hover:text-accent transition-colors text-sm"
              >
                <PhoneIcon />
                {PHONE}
              </a>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <LocationIcon />
                {ADDRESS}
              </div>
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <ClockIcon />
                Radno vreme: 0–24h
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-600">
          <span>
            © {year} {SITE_NAME}. Sva prava zadržana.
          </span>
          <span>
            Izrada sajta{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-accent transition-colors"
            >
              Manikam Web Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
