import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Flexible Access",
    price: "Enquire",
    description: "A straightforward membership for consistent training.",
    features: [
      "Full gym floor access",
      "Locker room & showers",
      "Modern cardio & strength zones",
      "Fitness assessment",
    ],
    featured: false,
  },
  {
    name: "Plus Membership",
    price: "Enquire",
    description: "Train any time and enjoy the complete Plus Fitness experience.",
    features: [
      "24/7 unlimited access",
      "Unlimited group classes",
      "Access to 200+ gyms",
      "Functional training zone",
      "Showers, parking & water station",
    ],
    featured: true,
  },
  {
    name: "Personal Training",
    price: "Enquire",
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
    <section id="memberships" className="scroll-mt-20 border-t border-white/[0.06] py-24 sm:py-32">
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
          <span className="section-kicker text-primary">
            Memberships
          </span>
          <h2 className="mt-5 max-w-3xl font-heading text-5xl font-bold uppercase leading-[0.92] tracking-[-0.035em] text-balance sm:text-6xl">
            Membership built around you
          </h2>
          </div>
          <p className="max-w-xl border-l border-white/10 pl-6 text-lg leading-relaxed text-muted-foreground text-pretty lg:justify-self-end">
            Contact the Andheri club for current membership offers and a plan that fits your routine.
          </p>
        </div>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={cn(
                "premium-card relative flex min-h-[520px] flex-col rounded-2xl border p-7 sm:p-8",
                plan.featured
                  ? "brand-panel border-primary/50 lg:-translate-y-4"
                  : "border-border bg-card/65",
              )}
            >
              <span className="number-watermark absolute right-5 top-7">0{index + 1}</span>
              {plan.featured && (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-[0.16em] text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="relative mt-28 font-heading text-3xl font-bold uppercase tracking-[-0.02em]">
                {plan.name}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-7 flex items-baseline gap-1 border-b border-white/10 pb-6">
                <span className="font-heading text-4xl font-bold">{plan.price}</span>
              </div>

              <ul className="mt-6 flex flex-1 flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-foreground/90">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                variant={plan.featured ? "default" : "outline"}
                className="mt-8 h-11 w-full rounded-lg font-heading font-semibold uppercase tracking-[0.1em]"
                render={<a href="/contact" />}
              >
                Ask About Membership
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
