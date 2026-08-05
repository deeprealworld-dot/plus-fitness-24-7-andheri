import Image from "next/image"

const images = [
  {
    src: "/images/gallery-1.png",
    alt: "Racks of dumbbells and kettlebells",
    className: "sm:col-span-2 sm:row-span-2",
  },
  { src: "/images/gallery-2.png", alt: "Athlete training with battle ropes", className: "" },
  { src: "/images/gallery-4.png", alt: "Athlete doing pull-ups on a rig", className: "" },
  {
    src: "/images/gallery-3.png",
    alt: "Indoor cycling studio with mood lighting",
    className: "sm:col-span-2",
  },
]

export function Gallery() {
  return (
    <section id="gallery" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-display text-xs text-[var(--signal-red)]">The space / 03</p>
            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.9] sm:text-7xl">
              Built for the work
            </h2>
          </div>
          <p className="border-l-4 border-[var(--acid)] pl-5 text-lg font-medium leading-relaxed opacity-65 lg:col-span-4">
            Cardio, strength and functional equipment in a clean, spacious Andheri club.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[190px] grid-cols-2 gap-5 sm:auto-rows-[250px] sm:grid-cols-4">
          {images.map((image, index) => (
            <figure
              key={image.src}
              className={`hard-shadow group relative overflow-hidden border-2 border-[var(--ink)] bg-[var(--muted-paper)] ${image.className}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
              <figcaption className="font-display absolute bottom-0 left-0 bg-[var(--acid)] px-3 py-2 text-[10px]">
                Frame 0{index + 1}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
