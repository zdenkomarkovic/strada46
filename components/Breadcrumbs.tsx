import Link from "next/link";

export default function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="bg-white border-b border-primary/10 pt-16">
      <div className="max-w-7xl mx-auto px-4 py-3 text-sm text-primary/60 flex items-center gap-2">
        <Link href="/" className="hover:text-accent transition-colors">
          Početna
        </Link>
        <span>/</span>
        <span className="text-primary font-semibold">{current}</span>
      </div>
    </nav>
  );
}
