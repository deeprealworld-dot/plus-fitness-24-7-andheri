import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

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
    <section id="testimonials" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="font-display text-xs text-[var(--signal-red)]">Testimonials / 04</p>
            <h2 className="font-display mt-5 text-5xl leading-[0.9] sm:text-7xl">
              Real people. Real work.
            </h2>
          </div>
          <p className="border-l-4 border-[var(--acid)] pl-5 text-lg font-medium opacity-65 lg:col-span-4">
            Member experiences from the Andheri community.
          </p>
        </div>

        <div className="mt-14 grid gap-7 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <figure
              key={`${testimonial.name}-${index}`}
              className={cn(
                "hard-shadow flex min-h-72 flex-col border-2 border-[var(--ink)] p-6 sm:p-8",
                index === 1 || index === 2 ? "bg-[var(--acid)]" : "bg-[var(--paper)]",
              )}
            >
              <div className="flex items-center justify-between border-b-2 border-[var(--ink)] pb-4">
                <div className="flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="size-4 fill-current"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <span className="font-display text-xs">0{index + 1}</span>
              </div>
              <blockquote className="mt-7 flex-1 text-xl font-semibold leading-relaxed sm:text-2xl">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-7 flex items-end justify-between gap-4 border-t-2 border-[var(--ink)] pt-4">
                <p className="font-display text-sm">{testimonial.name}</p>
                <p className="text-xs font-bold uppercase tracking-[0.16em] opacity-55">
                  {testimonial.detail}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
