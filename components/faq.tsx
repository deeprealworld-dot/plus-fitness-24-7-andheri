"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  Clock3,
  Menu,
  MessageCircle,
  Minus,
  Plus,
  X,
} from "lucide-react"
import { SiteFooter } from "@/components/site-footer"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Memberships", href: "/memberships" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
]

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

export function FaqPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="brutalist-page relative min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="noise-overlay" aria-hidden="true" />

      <header className="hard-shadow sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-1 px-4 sm:gap-2 sm:px-6">
          <Link
            href="/"
            className="focus-ring flex min-h-11 shrink-0 items-center"
            aria-label="Plus Fitness Andheri home"
          >
            <span className="font-display hidden text-2xl tracking-tighter md:block">
              <span className="text-[var(--acid)]">+</span> Plus Fitness / 24·7 Andheri
            </span>
            <span className="font-display text-[13px] leading-tight tracking-tighter sm:text-[15px] md:hidden">
              <span className="text-[var(--acid)]">+</span> Plus Fitness
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.18em] xl:flex xl:gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="focus-ring py-3 transition-colors hover:text-[var(--acid)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/contact"
              className="btn-press focus-ring hard-shadow font-display flex h-11 items-center whitespace-nowrap border-2 border-[var(--ink)] bg-[var(--acid)] px-3 text-[10px] sm:h-12 sm:px-5 sm:text-[11px] md:text-xs"
            >
              <span className="hidden sm:inline">Start free trial</span>
              <span className="sm:hidden">Free trial</span>
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="btn-press focus-ring hard-shadow flex size-11 items-center justify-center border-2 border-[var(--ink)] bg-white sm:size-12 xl:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            className="absolute inset-x-0 top-20 border-b-2 border-[var(--ink)] bg-[var(--acid)] px-4 py-3 xl:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring font-display flex min-h-12 items-center justify-between border-b-2 border-[var(--ink)] py-3 text-base last:border-0"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">0{index + 1}</span>
              </Link>
            ))}
          </nav>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden border-b-2 border-[var(--ink)] px-4 py-12 sm:px-6 md:py-20">
          <div className="halftone absolute inset-0 opacity-[0.06]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
            <div className="stagger-reveal col-span-12 flex flex-col justify-center lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="bg-[var(--signal-red)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  Member desk
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-55">
                  Before your first rep
                </span>
              </div>

              <h1 className="font-display text-[42px] leading-[0.9] sm:text-[76px] sm:leading-[0.88] lg:text-[102px] xl:text-[124px]">
                Your questions.
                <br />
                <span className="text-[var(--acid)]">Answered.</span>
              </h1>

              <p className="mt-7 max-w-2xl border-l-4 border-[var(--ink)] pl-5 text-lg font-medium leading-relaxed opacity-70 md:text-xl">
                The straight answers on access, trials, coaching and passes—before you step onto the
                training floor.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#answers"
                  className="btn-press focus-ring hard-shadow-lg font-display flex h-14 items-center justify-center gap-3 bg-[var(--ink)] px-8 text-sm text-[var(--acid)]"
                >
                  Read the answers
                  <ArrowRight className="size-5" aria-hidden="true" />
                </a>
                <Link
                  href="/contact"
                  className="btn-press focus-ring hard-shadow font-display flex h-14 items-center justify-center border-2 border-[var(--ink)] bg-white px-8 text-sm"
                >
                  Ask the team
                </Link>
              </div>
            </div>

            <aside className="col-span-12 lg:col-span-4" aria-label="At a glance">
              <div className="hard-shadow-lg flex h-full min-h-[360px] flex-col justify-between border-2 border-[var(--ink)] bg-[var(--ink)] p-6 text-white md:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-white/50">
                    Quick read
                  </span>
                  <MessageCircle className="size-8 text-[var(--acid)]" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-[104px] leading-none text-[var(--acid)]">
                    {String(faqs.length).padStart(2, "0")}
                  </div>
                  <p className="mt-2 max-w-xs text-sm font-bold uppercase tracking-[0.18em] text-white/60">
                    Essential answers. No fine print.
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t border-white/20 pt-5 text-xs font-bold uppercase tracking-[0.15em]">
                  <Clock3 className="size-5 text-[var(--acid)]" aria-hidden="true" />
                  Member access: 24/7
                </div>
              </div>
            </aside>
          </div>
        </section>

        <div className="marquee-container border-b-2 border-[var(--ink)] bg-[var(--acid)] py-4">
          <div className="marquee-content font-display text-xl text-[var(--ink)] md:text-3xl">
            {[0, 1].map((set) => (
              <span className="marquee-group" key={set} aria-hidden={set === 1}>
                <span>No guesswork</span>
                <span className="opacity-35">/</span>
                <span>24/7 access</span>
                <span className="opacity-35">/</span>
                <span>Flexible membership</span>
                <span className="opacity-35">/</span>
                <span>Real local support</span>
                <span className="opacity-35">/</span>
              </span>
            ))}
          </div>
        </div>

        <section
          id="answers"
          className="scroll-mt-20 border-b-2 border-[var(--ink)] bg-[var(--muted-paper)] px-4 py-16 sm:px-6 md:py-24"
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-55">
                  01 — The essentials
                </span>
                <h2 className="font-display mt-4 text-4xl leading-none sm:text-5xl lg:text-6xl">
                  Know before
                  <br />
                  you go.
                </h2>
                <p className="mt-6 max-w-sm text-base font-medium leading-relaxed opacity-65">
                  Tap any question for the direct answer. If your situation is different, the
                  Andheri team is one message away.
                </p>
              </div>
            </div>

            <div className="col-span-12 space-y-5 lg:col-span-8">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index
                const answerId = `faq-answer-${index}`
                const questionId = `faq-question-${index}`

                return (
                  <article
                    key={faq.q}
                    className={`border-2 border-[var(--ink)] bg-[var(--paper)] transition-shadow ${
                      isOpen ? "hard-shadow-lg" : "hard-shadow"
                    }`}
                  >
                    <h3>
                      <button
                        id={questionId}
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="focus-ring flex min-h-20 w-full items-center gap-4 px-4 py-5 text-left sm:gap-6 sm:px-6 md:min-h-24 md:px-8"
                        aria-expanded={isOpen}
                        aria-controls={answerId}
                      >
                        <span className="font-display shrink-0 text-sm text-[var(--signal-red)] sm:text-base">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-display flex-1 text-base leading-tight sm:text-xl md:text-2xl">
                          {faq.q}
                        </span>
                        <span
                          className={`flex size-11 shrink-0 items-center justify-center border-2 border-[var(--ink)] ${
                            isOpen
                              ? "bg-[var(--ink)] text-[var(--acid)]"
                              : "bg-[var(--acid)] text-[var(--ink)]"
                          }`}
                          aria-hidden="true"
                        >
                          {isOpen ? <Minus className="size-5" /> : <Plus className="size-5" />}
                        </span>
                      </button>
                    </h3>

                    {isOpen ? (
                      <div
                        id={answerId}
                        role="region"
                        aria-labelledby={questionId}
                        className="border-t-2 border-[var(--ink)] bg-[var(--acid)] px-4 py-5 sm:px-6 md:px-8 md:py-7"
                      >
                        <p className="max-w-3xl text-base font-semibold leading-relaxed md:text-lg">
                          {faq.a}
                        </p>
                      </div>
                    ) : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-[var(--ink)] px-4 py-16 text-white sm:px-6 md:py-20">
          <div className="mx-auto grid max-w-[1440px] items-end gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-[var(--acid)]">
                Still unsure?
              </span>
              <h2 className="font-display mt-4 max-w-4xl text-4xl leading-none sm:text-6xl lg:text-7xl">
                Talk to a human.
                <br />
                Not a chatbot.
              </h2>
            </div>
            <Link
              href="/contact"
              className="btn-press focus-ring hard-shadow-lg font-display flex h-16 items-center justify-center gap-3 bg-[var(--acid)] px-8 text-base text-[var(--ink)]"
            >
              Contact the club
              <ArrowRight className="size-5" aria-hidden="true" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
