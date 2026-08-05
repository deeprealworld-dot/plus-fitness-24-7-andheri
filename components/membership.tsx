import Link from "next/link"
import { ArrowUpRight, Check } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Flexible Access",
    description: "A straightforward membership for consistent training.",
    features: [
      "Full gym floor access",
      "Locker room and showers",
      "Modern cardio and strength zones",
      "Fitness assessment",
    ],
    featured: false,
  },
  {
    name: "Plus Membership",
    description: "Train any time and get the complete Plus Fitness experience.",
    features: [
      "24/7 unlimited access",
      "Unlimited group classes",
      "Access to 200+ gyms",
      "Functional training zone",
      "Showers, parking and water station",
    ],
    featured: true,
  },
  {
    name: "Personal Training",
    description: "One-to-one coaching built around your fitness goals.",
    features: [
      "Personal fitness assessment",
      "Dedicated coaching sessions",
      "Custom programming",
      "Technique and form guidance",
      "Progress support",
    ],
    featured: false,
  },
]

export function Membership() {
  return (
    <section
      id="memberships"
      className="scroll-mt-20 border-y-2 border-[var(--ink)] bg-[var(--dark-surface)] py-20 text-white sm:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="font-display text-xs text-[var(--acid)]">Memberships / 01</p>
            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.9] sm:text-7xl">
              Pick your way to train
            </h2>
          </div>
          <p className="border-l-4 border-[var(--acid)] pl-5 text-lg leading-relaxed text-white/65 lg:col-span-5 lg:justify-self-end">
            Ask the Andheri team about current offers and the plan that fits your routine.
          </p>
        </div>

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <article
              key={plan.name}
              className={cn(
                "hard-shadow-lg relative flex min-h-[520px] flex-col border-2 border-[var(--ink)] p-7 text-[var(--ink)] sm:p-8",
                plan.featured ? "bg-[var(--acid)] lg:-translate-y-4" : "bg-[var(--paper)]",
              )}
            >
              <div className="flex items-start justify-between gap-4 border-b-2 border-[var(--ink)] pb-5">
                <span className="font-display text-sm">0{index + 1}</span>
                {plan.featured ? (
                  <span className="bg-[var(--signal-red)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                    Most popular
                  </span>
                ) : (
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] opacity-55">
                    Available now
                  </span>
                )}
              </div>

              <h3 className="font-display mt-9 text-3xl leading-[0.95]">{plan.name}</h3>
              <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed opacity-65">
                {plan.description}
              </p>
              <p className="font-display mt-8 border-b-2 border-[var(--ink)] pb-6 text-3xl">
                Enquire
              </p>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm font-medium">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center bg-[var(--ink)] text-white">
                      <Check className="size-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={cn(
                  "btn-press focus-ring hard-shadow font-display mt-8 flex min-h-12 items-center justify-between border-2 border-[var(--ink)] px-4 text-xs",
                  plan.featured
                    ? "bg-[var(--paper)]"
                    : "bg-[var(--ink)] text-white hover:bg-[var(--acid)] hover:text-[var(--ink)]",
                )}
              >
                Ask about membership
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
