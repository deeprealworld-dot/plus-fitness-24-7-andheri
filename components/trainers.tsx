import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const trainers = [
  {
    name: "Sharad Shinde",
    role: "Personal Trainer",
    specialty: "Strength · Conditioning",
    image: "/images/trainer-1.png",
  },
  {
    name: "Jayesh Vavhal",
    role: "Personal Trainer",
    specialty: "Muscle Building · Fitness",
    image: "/images/trainer-2.png",
  },
  {
    name: "Danish Khan",
    role: "Personal Trainer",
    specialty: "Functional · Fat Loss",
    image: "/images/trainer-3.png",
  },
]

export function Trainers() {
  return (
    <section
      id="trainers"
      className="scroll-mt-20 border-y-2 border-[var(--ink)] bg-[var(--signal-red)] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-display text-xs text-[var(--acid)]">The team / 02</p>
            <h2 className="font-display mt-5 text-5xl leading-[0.9] sm:text-7xl">
              Coaches in your corner
            </h2>
          </div>
          <p className="border-l-4 border-[var(--acid)] pl-5 text-lg leading-relaxed text-white/70 lg:col-span-4">
            Certified, experienced and focused on helping you make measurable progress.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className="hard-shadow-lg group border-2 border-[var(--ink)] bg-[var(--paper)] text-[var(--ink)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden border-b-2 border-[var(--ink)] bg-[var(--muted-paper)]">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                />
                <span className="font-display absolute left-4 top-4 bg-[var(--acid)] px-3 py-2 text-xs">
                  0{index + 1}
                </span>
              </div>
              <div className="p-5 sm:p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--signal-red)]">
                  {trainer.specialty}
                </p>
                <h3 className="font-display mt-2 text-2xl">{trainer.name}</h3>
                <div className="mt-5 flex items-center justify-between border-t-2 border-[var(--ink)] pt-4">
                  <p className="text-sm font-bold uppercase">{trainer.role}</p>
                  <a
                    href="https://www.instagram.com/plusfitness24x7andheri/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} on Instagram`}
                    className="focus-ring flex size-11 items-center justify-center bg-[var(--ink)] text-white transition-colors hover:bg-[var(--acid)] hover:text-[var(--ink)]"
                  >
                    <ArrowUpRight className="size-5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
