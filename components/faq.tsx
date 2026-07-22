"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    q: "Do I need to sign a long-term contract?",
    a: "Membership options and current offers can change. Contact the Andheri club and the team will help you choose the most suitable plan.",
  },
  {
    q: "What are your opening hours?",
    a: "Members enjoy 24/7 gym access. Staffed hours are Monday to Saturday 7am–10pm and Sunday 11am–8pm.",
  },
  {
    q: "Is there a free trial or day pass?",
    a: "Yes. Submit the enquiry form to request a free day pass and the club team will confirm availability.",
  },
  {
    q: "Do you offer personal training?",
    a: "Yes. The Andheri team includes experienced personal trainers who can build a plan around your goals and ability.",
  },
  {
    q: "Which passes do you accept?",
    a: "Plus Fitness Andheri welcomes Fitpass, Cultpass and District by Zomato members. Contact the club to confirm current access terms.",
  },
]

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="scroll-mt-16 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            FAQ
          </span>
          <h2 className="mt-3 font-heading text-4xl font-bold uppercase tracking-tight text-balance sm:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-lg font-semibold uppercase tracking-wide">
                    {faq.q}
                  </span>
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-muted text-foreground">
                    {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-base leading-relaxed text-muted-foreground text-pretty">
                    {faq.a}
                  </p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
