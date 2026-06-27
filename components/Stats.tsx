const stats = [
  { value: "5000+", label: "Uspešno prevezenih vozila" },
  { value: "10+", label: "Godina iskustva" },
  { value: "~30'", label: "Prosečan dolazak" },
  { value: "24/7", label: "Dostupnost" },
  { value: "365", label: "Dana godišnje" },
];

export default function Stats() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-accent mb-2">
                {value}
              </div>
              <div className="text-white/70 text-sm font-medium leading-tight">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
