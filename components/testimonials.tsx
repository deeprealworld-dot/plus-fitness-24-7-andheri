import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Great gym with clean equipment, a motivating atmosphere and genuinely helpful trainers.",
    name: "Andheri Member",
    detail: "Google review",
  },
  {
    quote:
      "Clean space, great vibes and solid workouts. The best place to keep pushing toward your goals.",
    name: "Local Member",
    detail: "Google review",
  },
  {
    quote:
      "The facilities are well maintained and the overall ambience is hygienic, professional and welcoming.",
    name: "Verified Member",
    detail: "Google review",
  },
  {
    quote:
      "Knowledgeable trainers, personalised guidance and a layout that works for strength, cardio and functional workouts.",
    name: "Andheri Member",
    detail: "Google review",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Testimonials
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Real people, real results
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-xl border border-border bg-card p-8"
            >
              <div className="flex gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-foreground/90 text-pretty">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <p className="font-heading font-semibold uppercase tracking-wide">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.detail}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
