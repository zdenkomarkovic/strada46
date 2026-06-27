import Image from "next/image";

const images = [
  { src: "/20230828_193840-1-1024x576.jpg", alt: "Šlep vozilo na terenu" },
  { src: "/20240131_215459-1024x576.jpg", alt: "Noćna intervencija" },
  { src: "/20240131_215533-1024x576.jpg", alt: "Prevoz vozila" },
  { src: "/20240603_180854-1024x576.jpg", alt: "Deblokada vozila" },
  { src: "/20241030_192609-1024x576.jpg", alt: "Šlep u akciji" },
] as const;

const [featured, second, ...rest] = images;

export default function Gallery() {
  return (
    <section id="galerija" className="py-24 bg-[#000355]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block bg-accent text-primary text-sm font-bold px-4 py-1 rounded-full uppercase tracking-widest mb-4">
            Naš rad
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-accent mb-4">Galerija</h2>
          <p className="text-white text-lg max-w-xl mx-auto">
            Pogledajte naša vozila i intervencije na terenu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 relative aspect-video rounded-2xl overflow-hidden group border-2 border-primary/10 hover:border-accent transition-colors">
            <Image
              src={featured.src}
              alt={featured.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 66vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          <div className="relative aspect-video rounded-2xl overflow-hidden group border-2 border-primary/10 hover:border-accent transition-colors">
            <Image
              src={second.src}
              alt={second.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

          {rest.map(({ src, alt }) => (
            <div
              key={src}
              className="relative aspect-video rounded-2xl overflow-hidden group border-2 border-primary/10 hover:border-accent transition-colors"
            >
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
