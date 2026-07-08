import type { ReactNode } from "react";
import Image from "next/image";
import { PHONE } from "@/lib/constants";
import PhoneLink from "./PhoneLink";

export default function ServiceHero({
  eyebrow,
  title,
  subtitle,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} alt={imageAlt} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/50 to-primary/20" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto pt-16">
        <div className="inline-flex items-center gap-2 bg-accent/15 border border-accent/50 text-accent text-sm font-bold px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          {eyebrow}
        </div>

        <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 tracking-tight">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-white mb-10 max-w-xl mx-auto">
          {subtitle}
        </p>

        <PhoneLink className="inline-flex items-center gap-3 bg-accent hover:bg-accent-hover text-primary font-black text-2xl md:text-3xl px-8 py-4 rounded-xl shadow-2xl shadow-accent/20 transition-all hover:scale-105 active:scale-100">
          <PhoneIcon className="w-7 h-7" />
          {PHONE}
        </PhoneLink>
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
