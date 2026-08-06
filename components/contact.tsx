"use client"

import { useState } from "react"
import { CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react"

const details = [
  {
    icon: MapPin,
    label: "Location",
    value:
      "12A, Chandak Unicorn, Dattaji Salve Marg, Off Veera Desai Rd, Andheri West, Mumbai 400053",
  },
  { icon: Phone, label: "Phone", value: "+91 90820 92919" },
  { icon: Mail, label: "Website", value: "plusfitness.co.in" },
  {
    icon: Clock,
    label: "Staffed hours",
    value: "Mon–Sat 7am–10pm · Sunday 11am–8pm · Member access 24/7",
  },
]

export function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <p className="font-display text-xs text-[var(--signal-red)]">Visit / Call / Train</p>
          <h2 className="font-display mt-5 text-4xl leading-[0.95] sm:text-6xl">
            Talk to the Andheri team
          </h2>
          <p className="mt-5 max-w-xl border-l-4 border-[var(--acid)] pl-5 text-lg leading-relaxed opacity-65">
            Leave your details and we will help arrange your first session and club tour.
          </p>

          <dl className="mt-10 border-t-2 border-[var(--ink)]">
            {details.map((detail, index) => (
              <div
                key={detail.label}
                className="grid grid-cols-[44px_1fr] gap-4 border-b-2 border-[var(--ink)] py-5"
              >
                <span className="flex size-11 items-center justify-center bg-[var(--acid)]">
                  <detail.icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <dt className="font-display text-[10px] text-[var(--signal-red)]">
                    0{index + 1} / {detail.label}
                  </dt>
                  <dd className="mt-1 text-sm font-medium leading-relaxed">{detail.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>

        <div
          id="free-pass-form"
          className="hard-shadow-lg scroll-mt-28 border-2 border-[var(--ink)] bg-[var(--acid)] p-6 sm:p-8 lg:col-span-7"
        >
          {submitted ? (
            <div
              className="flex min-h-[480px] flex-col items-center justify-center border-2 border-[var(--ink)] bg-[var(--paper)] p-8 text-center"
              aria-live="polite"
            >
              <CheckCircle2 className="size-16" strokeWidth={1.75} aria-hidden="true" />
              <h3 className="font-display mt-5 text-3xl">You&apos;re in</h3>
              <p className="mt-3 max-w-sm font-medium leading-relaxed opacity-65">
                Thanks for reaching out. A coach will contact you within 24 hours to set up your
                free pass.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="flex items-end justify-between gap-4 border-b-2 border-[var(--ink)] pb-5">
                <h3 className="font-display text-2xl sm:text-3xl">Claim a free pass</h3>
                <span className="font-display text-xs">01 / 01</span>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="First name" name="firstName" placeholder="Deep" />
                <Field label="Last name" name="lastName" placeholder="Kamble" />
              </div>
              <Field label="Email" name="email" type="email" placeholder="you@email.com" />
              <Field label="Phone" name="phone" type="tel" placeholder="+91 98765 43210" />
              <label className="block" htmlFor="goal">
                <span className="font-display mb-2 block text-[10px]">Your main goal</span>
                <select
                  id="goal"
                  name="goal"
                  className="focus-ring h-12 w-full border-2 border-[var(--ink)] bg-[var(--paper)] px-3 text-sm font-medium outline-none"
                >
                  <option>Build strength</option>
                  <option>Lose weight</option>
                  <option>Improve conditioning</option>
                  <option>General fitness</option>
                </select>
              </label>
              <label className="block" htmlFor="message">
                <span className="font-display mb-2 block text-[10px]">Message / optional</span>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  placeholder="Tell us what you are looking for…"
                  className="focus-ring w-full border-2 border-[var(--ink)] bg-[var(--paper)] px-3 py-3 text-sm font-medium outline-none placeholder:opacity-45"
                />
              </label>
              <button
                type="submit"
                className="btn-press focus-ring hard-shadow font-display min-h-13 w-full border-2 border-[var(--ink)] bg-[var(--ink)] px-5 text-sm text-white hover:bg-[var(--paper)] hover:text-[var(--ink)]"
              >
                Claim free pass ↗
              </button>
            </form>
          )}
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
    <label className="block" htmlFor={name}>
      <span className="font-display mb-2 block text-[10px]">{label}</span>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="focus-ring h-12 w-full border-2 border-[var(--ink)] bg-[var(--paper)] px-3 text-sm font-medium outline-none placeholder:opacity-45"
      />
    </label>
  )
}
