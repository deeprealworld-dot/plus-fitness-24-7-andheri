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
    <section id="trainers" className="scroll-mt-16 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            The Team
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Your Andheri coaching team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Certified, experienced, and obsessed with your progress. Meet the people in your corner.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
              className="group relative overflow-hidden rounded-xl border border-border"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={`${trainer.name}, ${trainer.role}`}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-6 pt-16">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {trainer.specialty}
                </p>
                <h3 className="mt-1 font-heading text-2xl font-bold uppercase tracking-wide">
                  {trainer.name}
                </h3>
                <div className="mt-1 flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{trainer.role}</p>
                  <a
                    href="#"
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
