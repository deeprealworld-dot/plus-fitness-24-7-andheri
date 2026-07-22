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
    <section id="memberships" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Memberships
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Membership built around you
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
            Contact the Andheri club for current membership offers and a plan that fits your routine.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-xl border p-8",
                plan.featured
                  ? "border-primary bg-card shadow-[0_0_0_1px] shadow-primary/40"
                  : "border-border bg-card",
              )}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">
                {plan.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {plan.description}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-heading text-5xl font-bold">{plan.price}</span>
              </div>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
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
                className="mt-8 h-11 w-full font-heading font-semibold uppercase tracking-wide"
                render={<a href="#contact" />}
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
