"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

const details = [
  { icon: MapPin, label: "Location", value: "12A, Chandak Unicorn, Dattaji Salve Marg, Off Veera Desai Rd, Andheri West, Mumbai 400053" },
  { icon: Phone, label: "Phone", value: "+91 90820 92919" },
  { icon: Mail, label: "Website", value: "plusfitness.co.in" },
  { icon: Clock, label: "Staffed Hours", value: "Mon–Sat 7am–10pm · Sunday 11am–8pm · Member access 24/7" },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-16 bg-card/40 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">
              Get Started
            </span>
            <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
              Claim your free day pass
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
              Drop your details and our team will reach out to schedule your first session and tour.
              No pressure, no commitment.
            </p>

            <dl className="mt-10 space-y-6">
              {details.map((d) => (
                <div key={d.label} className="flex items-start gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <d.icon className="size-5" />
                  </span>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                      {d.label}
                    </dt>
                    <dd className="mt-0.5 text-base text-foreground">{d.value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                <CheckCircle2 className="size-14 text-primary" />
                <h3 className="mt-4 font-heading text-2xl font-bold uppercase tracking-wide">
                  You&apos;re in!
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground text-pretty">
                  Thanks for reaching out. A coach will contact you within 24 hours to set up your
                  free pass.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="First name" name="firstName" placeholder="Deep" />
                  <Field label="Last name" name="lastName" placeholder="Kamble" />
                </div>
                <Field label="Email" name="email" type="email" placeholder="you@email.com" />
                <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
                <div>
                  <label
                    htmlFor="goal"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Your main goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                  >
                    <option>Build strength</option>
                    <option>Lose weight</option>
                    <option>Improve conditioning</option>
                    <option>General fitness</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
                  >
                    Message <span className="normal-case">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Tell us a bit about what you're looking for…"
                    className="w-full rounded-lg border border-input bg-background px-3 py-2 text-sm text-foreground outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="h-12 w-full font-heading text-base font-semibold uppercase tracking-wide"
                >
                  Claim Free Pass
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="h-11 w-full rounded-lg border border-input bg-background px-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/60 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/30"
      />
    </div>
  )
}
