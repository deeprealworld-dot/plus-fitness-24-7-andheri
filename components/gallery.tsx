const images = [
  { src: "/images/gallery-1.png", alt: "Racks of dumbbells and kettlebells", className: "sm:col-span-2 sm:row-span-2" },
  { src: "/images/gallery-2.png", alt: "Athlete training with battle ropes", className: "" },
  { src: "/images/gallery-4.png", alt: "Athlete doing pull-ups on a rig", className: "" },
  { src: "/images/gallery-3.png", alt: "Indoor cycling studio with mood lighting", className: "sm:col-span-2" },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-16 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Space
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Inside Plus Fitness Andheri
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Modern cardio, strength and functional equipment in a clean, spacious workout environment.
          </p>
        </div>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-4 sm:auto-rows-[240px] sm:grid-cols-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`group overflow-hidden rounded-xl border border-border ${img.className}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
