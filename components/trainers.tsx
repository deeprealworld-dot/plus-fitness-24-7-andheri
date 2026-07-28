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
    <section id="trainers" className="scroll-mt-20 border-y border-white/[0.06] bg-card/30 py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.8fr] lg:items-end">
          <div>
          <span className="section-kicker text-primary">
            The Team
          </span>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] text-balance sm:text-6xl">
            Your Andheri coaching team
          </h2>
          </div>
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty lg:justify-self-end">
            Certified, experienced, and obsessed with your progress. Meet the people in your corner.
          </p>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {trainers.map((trainer, index) => (
            <div
              key={trainer.name}
              className={`group premium-card relative overflow-hidden rounded-2xl border border-border ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"}`}
            >
              <div className={`relative overflow-hidden ${index === 0 ? "aspect-[4/5] lg:aspect-[5/6]" : "aspect-[4/5]"}`}>
                <Image
                  src={trainer.image || "/placeholder.svg"}
                  alt={`${trainer.name}, ${trainer.role}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="size-full object-cover saturate-[0.82] transition duration-700 group-hover:scale-105 group-hover:saturate-100"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent p-6 pt-24">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-primary">
                  {trainer.specialty}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-wide">
                  {trainer.name}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{trainer.role}</p>
                  <a
                    href="https://www.instagram.com/plusfitness24x7andheri/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} on Instagram`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span
                      aria-hidden="true"
                      className="block size-5 bg-current"
                      style={{
                        maskImage: "url(/icons/instagram.svg)",
                        WebkitMaskImage: "url(/icons/instagram.svg)",
                        maskSize: "contain",
                        WebkitMaskSize: "contain",
                        maskRepeat: "no-repeat",
                        WebkitMaskRepeat: "no-repeat",
                        maskPosition: "center",
                        WebkitMaskPosition: "center",
                      }}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
import Image from "next/image"
