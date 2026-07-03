"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PHONE } from "@/lib/constants";
import PhoneLink from "./PhoneLink";

const navLinks = [
  { href: "/", label: "Početna" },
  { href: "#usluge", label: "Usluge" },
  { href: "#zasto-mi", label: "Zašto mi?" },
  { href: "#proces", label: "Kako radimo" },
  { href: "#oblast", label: "Oblast" },
  { href: "#galerija", label: "Galerija" },
  { href: "#o-nama", label: "O nama" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-primary/15 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Strada 46"
            width={280}
            height={96}
            className="object-contain h-30 w-auto"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-primary/70 hover:text-primary text-xs font-semibold transition-colors whitespace-nowrap"
            >
              {label}
            </a>
          ))}
        </nav>

        <PhoneLink className="hidden lg:flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold px-4 py-2 rounded-lg text-sm transition-colors">
          <PhoneIcon />
          {PHONE}
        </PhoneLink>

        <div className="flex lg:hidden items-center gap-2">
          <PhoneLink className="flex items-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold px-3 py-2 rounded-lg text-xs transition-colors">
            <PhoneIcon />
            <span>{PHONE}</span>
          </PhoneLink>
          <button
            className="text-primary p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="Otvori meni"
          >
            {open ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-primary/15 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-primary/70 hover:text-primary font-semibold py-2 border-b border-primary/10"
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
          <PhoneLink className="flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold py-3 rounded-lg mt-2 transition-colors">
            <PhoneIcon />
            {PHONE}
          </PhoneLink>
        </div>
      )}
    </header>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
