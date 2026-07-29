"use client"

import Image from "next/image"
import Link from "next/link"
import { FormEvent, useState } from "react"
import {
  ArrowRight,
  Check,
  LockKeyhole,
  MapPin,
  Menu,
  MessageCircle,
  Navigation,
  Phone,
  ShieldCheck,
  X,
} from "lucide-react"

const phoneNumber = "+91 90820 92919"
const whatsappUrl = "https://wa.me/919082092919"
const directionsUrl =
  "https://www.google.com/maps/dir/?api=1&destination=Plus%20Fitness%2024%2F7%20Andheri%2C%2012A%20Chandak%20Unicorn%2C%20Dattaji%20Salve%20Marg%2C%20Off%20Veera%20Desai%20Road%2C%20Jeevan%20Nagar%2C%20Andheri%20West%2C%20Mumbai%20400053"
const mapUrl =
  "https://www.google.com/maps?q=Plus%20Fitness%2024%2F7%20Andheri%2C%2012A%20Chandak%20Unicorn%2C%20Dattaji%20Salve%20Marg%2C%20Off%20Veera%20Desai%20Road%2C%20Jeevan%20Nagar%2C%20Andheri%20West%2C%20Mumbai%20400053&output=embed"

const navLinks = [
  { label: "Memberships", href: "#membership" },
  { label: "Classes", href: "#classes" },
  { label: "Trainers", href: "#trainers" },
  { label: "Location", href: "#location" },
]

const plans = [
  {
    name: "The Rookie",
    term: "Monthly rolling",
    price: "₹3,499",
    featured: false,
    features: [
      { label: "24/7 Access", active: true },
      { label: "All Club Access", active: true },
      { label: "Mobile App Tools", active: true },
      { label: "Personal Training", active: false },
    ],
  },
  {
    name: "The Lifer",
    term: "12 months upfront",
    price: "₹2,499",
    featured: true,
    features: [
      { label: "24/7 Access", active: true },
      { label: "2x PT Sessions Included", active: true },
      { label: "Global Reciprocity", active: true },
      { label: "Zero Joining Fee", active: true },
    ],
  },
  {
    name: "The Grinder",
    term: "3 months upfront",
    price: "₹2,999",
    featured: false,
    features: [
      { label: "24/7 Access", active: true },
      { label: "All Group Classes", active: true },
      { label: "App Locker Access", active: true },
      { label: "Personal Training", active: false },
    ],
  },
]

const schedule = [
  {
    time: "07:00",
    sessions: [
      ["HIIT Burn", "Coach Aryan"],
      ["Power Lift", "Coach Sameer"],
      ["HIIT Burn", "Coach Aryan"],
      ["Yoga Flow", "Coach Neha"],
    ],
  },
  {
    time: "18:00",
    sessions: [
      ["Boxing", "Coach Vikram"],
      ["Zumba", "Coach Sarah"],
      ["Boxing", "Coach Vikram"],
      ["Tabata", "Coach Aryan"],
    ],
  },
]

const trainers = [
  {
    name: "Sam Ratore",
    specialty: "Head Coach / Strength",
    bio: "10+ years of experience in competitive bodybuilding and functional movement.",
    image: "/images/trainer-1.png",
    featured: true,
  },
  {
    name: "Reema Shah",
    specialty: "HIIT & Fat Loss",
    bio: "Specialising in high-intensity metabolic conditioning and weight management.",
    image: "/images/trainer-2.png",
    featured: false,
  },
  {
    name: "Aryan Khan",
    specialty: "Athletic Performance",
    bio: "Certified strength and conditioning specialist for performance-focused athletes.",
    image: "/images/trainer-3.png",
    featured: false,
  },
]

export function BrutalistHome() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      "Hi Plus Fitness Andheri, I'd like to book a complimentary session.",
      `Name: ${data.get("name")}`,
      `Mobile: ${data.get("mobile")}`,
      `Goal: ${data.get("goal")}`,
    ].join("\n")

    window.open(
      `${whatsappUrl}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    )
  }

  return (
    <div className="brutalist-page relative min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="noise-overlay" aria-hidden="true" />

      <header className="hard-shadow sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--paper)]">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-2 px-4 sm:px-6">
          <Link href="/" className="focus-ring shrink-0" aria-label="Plus Fitness Andheri home">
            <span className="font-display hidden text-2xl tracking-tighter md:block">
              <span className="text-[var(--signal-red)]">+</span> Plus Fitness / 24·7 Andheri
            </span>
            <span className="font-display text-[15px] leading-tight tracking-tighter md:hidden">
              <span className="text-[var(--signal-red)]">+</span> Plus Fitness
            </span>
          </Link>

          <nav
            className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.18em] lg:flex xl:gap-8"
            aria-label="Primary navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="focus-ring py-3 transition-colors hover:text-[var(--signal-red)]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="tel:+919082092919"
              className="focus-ring hidden h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper)] px-4 text-xs font-bold transition-colors hover:bg-[var(--muted-paper)] xl:flex"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call now
            </a>
            <a
              href="#trial"
              className="btn-press focus-ring hard-shadow font-display flex h-12 items-center whitespace-nowrap border-2 border-[var(--ink)] bg-[var(--acid)] px-4 text-[11px] sm:px-5 md:text-xs"
            >
              <span className="hidden sm:inline">Start free trial</span>
              <span className="sm:hidden">Free trial</span>
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="btn-press focus-ring hard-shadow flex size-12 items-center justify-center border-2 border-[var(--ink)] bg-white lg:hidden"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav
            className="absolute inset-x-0 top-20 border-b-2 border-[var(--ink)] bg-[var(--acid)] px-4 py-3 lg:hidden"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="focus-ring font-display flex min-h-12 items-center justify-between border-b-2 border-[var(--ink)] py-3 text-base last:border-0"
              >
                <span>{link.label}</span>
                <span aria-hidden="true">0{index + 1}</span>
              </a>
            ))}
          </nav>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 md:pb-24 md:pt-16">
          <div className="mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
            <div className="stagger-reveal col-span-12 flex flex-col justify-center lg:col-span-7">
              <div className="mb-4 flex items-center gap-2 md:mb-6 md:gap-3">
                <span className="bg-[var(--signal-red)] px-2 py-1 text-[9px] font-bold uppercase tracking-[0.2em] text-white md:px-3 md:text-[11px]">
                  Open now
                </span>
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] opacity-60 md:text-[11px]">
                  Andheri West, Mumbai
                </span>
              </div>
              <h1 className="font-display mb-6 text-[44px] leading-[0.9] sm:text-[60px] md:mb-8 lg:text-[88px] xl:text-[112px] xl:leading-[0.85]">
                No excuses.
                <br />
                Open 24/7.
              </h1>
              <p className="mb-8 max-w-xl text-lg font-medium leading-snug opacity-80 md:mb-12 md:text-2xl md:leading-relaxed">
                Andheri&apos;s training floor never sleeps. High-spec equipment, elite coaching and
                absolute access whenever your life allows.
              </p>
              <div className="mb-12 flex flex-col gap-4 sm:mb-0 sm:flex-row sm:flex-wrap">
                <a
                  href="#trial"
                  className="btn-press focus-ring hard-shadow-lg font-display flex h-14 w-full items-center justify-center gap-3 bg-[var(--ink)] px-8 text-base text-[var(--acid)] sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
                >
                  Join the club <ArrowRight className="size-5" aria-hidden="true" />
                </a>
                <a
                  href="#membership"
                  className="btn-press focus-ring hard-shadow font-display flex h-14 w-full items-center justify-center border-2 border-[var(--ink)] bg-[var(--paper)] px-8 text-base sm:h-16 sm:w-auto sm:px-10 sm:text-lg"
                >
                  View plans
                </a>
              </div>
            </div>

            <div className="relative col-span-12 lg:col-span-5">
              <div className="hard-shadow-lg relative aspect-square overflow-hidden border-2 border-[var(--ink)] bg-[var(--muted-paper)] lg:aspect-[4/5] lg:border-[3px]">
                <Image
                  src="/images/hero-gym.png"
                  alt="Athlete deadlifting on the Plus Fitness strength floor"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover grayscale contrast-125"
                />
                <div className="halftone absolute inset-0" aria-hidden="true" />
                <div className="hard-shadow font-display absolute right-3 top-3 z-10 rotate-6 border-2 border-[var(--ink)] bg-[var(--acid)] p-2 text-center md:right-5 md:top-5 md:p-4">
                  <div className="text-[8px] tracking-widest md:text-xs">Access</div>
                  <div className="text-lg md:text-2xl">24/7/365</div>
                </div>
                <div className="hard-shadow absolute bottom-4 left-4 right-4 flex items-center border border-white bg-[var(--ink)] p-4 text-white sm:right-auto md:bottom-8 md:left-8 md:gap-6 md:border-2 md:p-6">
                  <div className="flex-1 text-center">
                    <div className="font-display text-2xl text-[var(--acid)] md:text-4xl">500+</div>
                    <div className="text-[8px] uppercase tracking-widest opacity-60 md:text-[10px]">
                      Active members
                    </div>
                  </div>
                  <div className="h-8 w-px bg-white/20 md:h-12" aria-hidden="true" />
                  <div className="flex-1 text-center">
                    <div className="font-display text-2xl text-[var(--acid)] md:text-4xl">4.8</div>
                    <div className="text-[8px] uppercase tracking-widest opacity-60 md:text-[10px]">
                      Google rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="marquee-container relative z-20 border-y-2 border-[var(--ink)] bg-[var(--ink)] py-4 md:py-6">
          <div className="marquee-content font-display flex gap-8 text-xl text-[var(--acid)] md:gap-12 md:text-4xl">
            {[0, 1].map((set) => (
              <span className="contents" key={set} aria-hidden={set === 1}>
                <span>Built for performance</span>
                <span className="opacity-40">/</span>
                <span>No long-term contracts</span>
                <span className="opacity-40">/</span>
                <span>Global access</span>
                <span className="opacity-40">/</span>
                <span>Elite equipment</span>
                <span className="opacity-40">/</span>
              </span>
            ))}
          </div>
        </div>

        <section className="mx-auto max-w-[1440px] px-4 py-16 sm:px-6 md:py-24">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-16 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.3em] opacity-60 md:mb-4 md:text-sm">
                01 — Facilities
              </span>
              <h2 className="font-display text-[36px] leading-none sm:text-5xl lg:text-7xl">
                Built for
                <br />
                <span className="bg-[var(--ink)] px-2 py-1 text-[var(--acid)] md:px-4">
                  Every rep
                </span>
              </h2>
            </div>
            <p className="max-w-md border-l-4 border-[var(--ink)] pl-4 text-base font-medium md:max-w-xs md:pl-6 md:text-lg">
              Premium facilities designed for serious training, from heavy lifting to high-output
              cardio.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
            <article className="hard-shadow-lg group relative aspect-[3/2] overflow-hidden border-2 border-[var(--ink)] bg-[var(--ink)] md:col-span-8 md:aspect-[2/1]">
              <Image
                src="/images/gallery-1.png"
                alt="Plus Fitness strength training area"
                fill
                sizes="(min-width: 768px) 66vw, 100vw"
                className="object-cover grayscale transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white md:bottom-8 md:left-8">
                <h3 className="font-display mb-2 text-2xl md:text-4xl">Strength floor</h3>
                <p className="text-[9px] uppercase tracking-widest md:text-sm">
                  Power racks / Dumbbells to 60kg / Hammer Strength
                </p>
              </div>
              <div className="font-display absolute right-6 top-5 text-6xl text-[var(--acid)] opacity-20 md:right-8 md:top-8 md:text-8xl">
                01
              </div>
            </article>

            <article className="hard-shadow-lg flex min-h-40 flex-col justify-between border-2 border-[var(--ink)] bg-[var(--acid)] p-6 md:col-span-4 md:p-8">
              <div className="font-display text-2xl md:text-3xl">Cardio lab</div>
              <div className="font-display text-4xl text-black/10">02</div>
              <div className="space-y-3 md:space-y-4">
                <p className="text-sm font-bold md:text-base">
                  Treadmills, cycles and stair masters with personal screens.
                </p>
                <div className="h-0.5 w-12 bg-[var(--ink)]" />
              </div>
            </article>

            <article className="hard-shadow-lg relative min-h-40 overflow-hidden border-2 border-[var(--ink)] bg-[var(--paper)] p-6 md:col-span-4 md:p-8">
              <div className="font-display relative z-10 mb-8 text-2xl md:mb-12 md:text-3xl">
                Personal
                <br />
                training
              </div>
              <p className="mb-5 text-sm font-medium">
                Custom roadmaps for fat loss, muscle gain or athletic performance.
              </p>
              <a href="#trial" className="focus-ring py-2 text-xs font-bold tracking-widest underline md:text-sm">
                Book session
              </a>
            </article>

            <article className="hard-shadow-lg group relative min-h-56 overflow-hidden border-2 border-[var(--ink)] md:col-span-4">
              <Image
                src="/images/gallery-2.png"
                alt="Group class at Plus Fitness Andheri"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover grayscale transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[var(--ink)]/50" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white md:p-8">
                <div className="font-display text-2xl md:text-3xl">Group X</div>
                <p className="mt-2 text-xs uppercase tracking-widest">HIIT / Yoga / Functional</p>
              </div>
            </article>

            <article className="hard-shadow-lg flex min-h-56 flex-col items-center justify-center bg-[var(--ink)] p-6 text-center text-white md:col-span-4 md:p-8">
              <div className="mb-6 flex size-16 items-center justify-center bg-[var(--acid)] text-[var(--ink)]">
                <ShieldCheck className="size-8" aria-hidden="true" />
              </div>
              <div className="font-display mb-4 text-2xl">Secure access</div>
              <p className="text-sm text-white/60">
                Member-only access with 24/7 CCTV monitoring and emergency points.
              </p>
            </article>
          </div>
        </section>

        <section
          id="membership"
          className="relative scroll-mt-20 overflow-hidden bg-[var(--dark-surface)] py-16 text-white md:py-24"
        >
          <div className="font-display absolute right-0 top-0 hidden -translate-y-1/2 select-none text-[300px] leading-none text-white/5 lg:block">
            Plans
          </div>
          <div className="relative z-10 mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="mb-14 text-center md:mb-20">
              <h2 className="font-display mb-5 text-[40px] leading-none sm:text-6xl lg:text-8xl">
                Pick your power
              </h2>
              <p className="mx-auto max-w-xl text-base text-white/60 md:text-lg">
                Transparent pricing. No hidden fees. Pure performance.
              </p>
            </div>
            <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`hard-shadow-lg relative flex flex-col border-2 border-[var(--ink)] p-6 text-[var(--ink)] md:p-10 ${
                    plan.featured
                      ? "bg-[var(--acid)] lg:scale-105"
                      : "bg-[var(--paper)]"
                  }`}
                >
                  {plan.featured ? (
                    <div className="hard-shadow font-display absolute -top-5 left-1/2 -translate-x-1/2 -rotate-2 whitespace-nowrap bg-[var(--signal-red)] px-5 py-2 text-xs text-white md:-top-6 md:px-6 md:text-sm">
                      Best value
                    </div>
                  ) : null}
                  <h3 className="font-display mb-2 text-2xl">{plan.name}</h3>
                  <p className="mb-8 text-xs uppercase tracking-widest opacity-60 md:mb-10 md:text-sm">
                    {plan.term}
                  </p>
                  <div className="mb-8 flex flex-wrap items-baseline gap-2 md:mb-10">
                    <span className="font-display text-4xl sm:text-5xl">{plan.price}</span>
                    <span className="text-xs font-bold">/month</span>
                  </div>
                  <ul className="mb-10 flex-grow space-y-4 md:mb-12">
                    {plan.features.map((feature) => (
                      <li
                        key={feature.label}
                        className={`flex items-center gap-3 text-sm font-bold ${
                          feature.active ? "" : "opacity-30"
                        }`}
                      >
                        {feature.active ? (
                          <Check
                            className={`size-4 ${plan.featured ? "" : "text-[var(--signal-red)]"}`}
                            aria-hidden="true"
                          />
                        ) : (
                          <X className="size-4" aria-hidden="true" />
                        )}
                        {feature.label}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#trial"
                    className="btn-press focus-ring hard-shadow font-display flex h-14 w-full items-center justify-center border-2 border-[var(--ink)] bg-[var(--ink)] text-white"
                  >
                    Choose plan
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="classes"
          className="mx-auto max-w-[1440px] scroll-mt-20 px-4 py-16 sm:px-6 md:py-24"
        >
          <div className="mb-10 md:mb-16">
            <h2 className="font-display mb-3 text-[40px] leading-none sm:text-6xl">Weekly drill</h2>
            <p className="text-xs font-bold uppercase tracking-widest opacity-60 md:text-base">
              Class schedule — Andheri West
            </p>
          </div>
          <p className="font-display mb-3 flex items-center gap-2 text-[10px] md:hidden">
            Swipe to view <ArrowRight className="size-4" aria-hidden="true" />
          </p>
          <div
            className="schedule-scroll overflow-x-auto border-2 border-[var(--ink)]"
            role="region"
            aria-label="Weekly class schedule. Scroll horizontally to view all days."
            tabIndex={0}
          >
            <table className="w-full min-w-[860px] border-collapse">
              <thead>
                <tr className="bg-[var(--ink)] text-white">
                  {["Time", "Monday", "Tuesday", "Wednesday", "Thursday"].map((heading) => (
                    <th
                      key={heading}
                      scope="col"
                      className="font-display border-r-2 border-white/20 p-5 text-left last:border-r-0 md:p-6"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white">
                {schedule.map((row, rowIndex) => (
                  <tr
                    key={row.time}
                    className={rowIndex < schedule.length - 1 ? "border-b-2 border-[var(--ink)]" : ""}
                  >
                    <th
                      scope="row"
                      className="border-r-2 border-[var(--ink)] bg-[var(--muted-paper)] p-5 text-left font-bold md:p-6"
                    >
                      {row.time}
                    </th>
                    {row.sessions.map(([session, coach], sessionIndex) => (
                      <td
                        key={`${row.time}-${sessionIndex}`}
                        className={`border-r-2 border-[var(--ink)] p-5 last:border-r-0 md:p-6 ${
                          (rowIndex === 0 && sessionIndex === 1) ||
                          (rowIndex === 1 && sessionIndex === 2)
                            ? "bg-[var(--acid)]"
                            : ""
                        }`}
                      >
                        <div className="font-display text-sm">{session}</div>
                        <div className="mt-1 text-[10px] uppercase opacity-60">{coach}</div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="trainers" className="scroll-mt-20 overflow-hidden bg-[var(--ink)] py-16 md:py-24">
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
            <div className="mb-10 flex flex-col items-start gap-3 md:mb-16 md:flex-row md:items-baseline">
              <h2 className="font-display text-[40px] leading-none text-white sm:text-6xl">
                Elite coaches
              </h2>
              <div className="mx-12 hidden h-0.5 flex-grow bg-[var(--acid)] md:block" />
              <span className="font-display text-sm text-[var(--acid)] md:text-base">
                Results driven
              </span>
            </div>
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8 lg:gap-12">
              {trainers.map((trainer) => (
                <article key={trainer.name} className="group">
                  <div
                    className={`hard-shadow relative mb-6 aspect-[3/4] overflow-hidden border-2 bg-[var(--dark-surface)] ${
                      trainer.featured ? "border-[var(--acid)]" : "border-white"
                    }`}
                  >
                    <Image
                      src={trainer.image}
                      alt={`${trainer.name}, ${trainer.specialty}`}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover grayscale transition duration-500 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="font-display text-2xl text-white md:text-3xl">{trainer.name}</h3>
                  <p
                    className={`mb-4 text-xs font-bold uppercase tracking-[0.2em] md:text-sm ${
                      trainer.featured ? "text-[var(--acid)]" : "text-white/60"
                    }`}
                  >
                    {trainer.specialty}
                  </p>
                  <p className="text-sm leading-relaxed text-white/60">{trainer.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[var(--acid)] py-16 md:py-24">
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
            <h2 className="font-display text-[40px] leading-none sm:text-6xl lg:text-8xl">
              Don&apos;t take
              <br />
              our word.
              <br />
              <span className="text-[var(--signal-red)]">Take theirs.</span>
            </h2>
            <div className="space-y-6 md:space-y-8">
              <blockquote className="hard-shadow border-2 border-[var(--ink)] bg-[var(--paper)] p-6 md:p-8">
                <p className="mb-6 text-base font-bold italic md:text-xl">
                  &ldquo;24/7 access is a lifesaver for my erratic work shifts in Andheri. Best
                  equipment in the area, hands down.&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[var(--ink)] md:size-12" />
                  <div>
                    <div className="font-display text-xs md:text-sm">Aniket Desai</div>
                    <div className="text-[9px] font-bold uppercase opacity-60 md:text-xs">
                      Member for 2 years
                    </div>
                  </div>
                </footer>
              </blockquote>
              <blockquote className="hard-shadow border-2 border-[var(--ink)] bg-[var(--ink)] p-6 text-white md:p-8">
                <p className="mb-6 text-base font-bold italic md:text-xl">
                  &ldquo;Dropped 8kg in 12 weeks and feel stronger than ever. The PT sessions here
                  are legit.&rdquo;
                </p>
                <footer className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[var(--acid)] md:size-12" />
                  <div>
                    <div className="font-display text-xs text-[var(--acid)] md:text-sm">
                      Priya Sharma
                    </div>
                    <div className="text-[9px] font-bold uppercase opacity-60 md:text-xs">
                      Member for 6 months
                    </div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
        </section>

        <section
          id="location"
          className="scroll-mt-20 border-t-2 border-[var(--ink)] bg-[var(--paper)] py-16 md:py-24"
        >
          <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <h2 className="font-display mb-8 text-[44px] leading-none sm:text-6xl">Find us</h2>
              <div className="space-y-7 md:space-y-8">
                <div className="flex gap-3 md:gap-4">
                  <MapPin className="mt-0.5 size-6 shrink-0 text-[var(--signal-red)]" aria-hidden="true" />
                  <div>
                    <h3 className="font-display mb-2 text-lg md:text-xl">Address</h3>
                    <p className="text-sm font-medium leading-relaxed opacity-80 md:text-base">
                      12A, Chandak Unicorn, Dattaji Salve Marg, Off Veera Desai Rd, Jeevan Nagar,
                      Andheri West, Mumbai, Maharashtra 400053
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <LockKeyhole className="mt-0.5 size-6 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-display mb-2 text-lg md:text-xl">Access</h3>
                    <p className="text-sm font-medium uppercase tracking-widest opacity-80 md:text-base">
                      24 hours / 7 days / 365 days
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <MessageCircle className="mt-0.5 size-6 shrink-0 text-green-600" aria-hidden="true" />
                  <div>
                    <h3 className="font-display mb-1 text-lg md:text-xl">WhatsApp</h3>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="focus-ring font-display inline-block py-2 text-xl transition-colors hover:text-[var(--signal-red)] md:text-2xl"
                    >
                      {phoneNumber}
                    </a>
                  </div>
                </div>
              </div>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-press focus-ring hard-shadow font-display mt-10 flex h-14 w-full items-center justify-center gap-3 bg-[var(--ink)] px-8 text-sm text-white sm:w-fit md:mt-12 md:h-16 md:text-base"
              >
                Get directions <Navigation className="size-5" aria-hidden="true" />
              </a>
            </div>
            <div className="lg:col-span-7">
              <div className="hard-shadow-lg relative aspect-[4/5] overflow-hidden border-2 border-[var(--ink)] bg-[var(--muted-paper)] sm:aspect-video">
                <iframe
                  src={mapUrl}
                  title="Map showing Plus Fitness 24/7 Andheri"
                  className="h-full w-full border-0 grayscale contrast-125"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="trial" className="relative scroll-mt-20 overflow-hidden bg-[var(--ink)] py-16 md:py-24">
          <div className="halftone absolute inset-0 opacity-20" />
          <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
            <h2 className="font-display mb-4 text-[36px] leading-none text-[var(--acid)] sm:text-6xl">
              Try us for free
            </h2>
            <p className="mb-10 text-sm text-white/60 md:mb-12 md:text-lg">
              Drop your details for a complimentary session. No strings attached.
            </p>
            <form onSubmit={handleEnquiry} className="grid grid-cols-1 gap-6 text-left">
              <div className="relative">
                <label
                  htmlFor="trial-name"
                  className="font-display absolute -top-2 left-4 bg-[var(--ink)] px-2 text-[8px] tracking-widest text-[var(--acid)] md:-top-3 md:text-[10px]"
                >
                  Full name
                </label>
                <input
                  id="trial-name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="focus-ring h-14 w-full border-2 border-white/20 bg-transparent px-4 text-xs font-bold uppercase tracking-widest text-white outline-none placeholder:text-white/35 focus:border-[var(--acid)] md:h-16 md:px-6 md:text-sm"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="trial-mobile"
                  className="font-display absolute -top-2 left-4 bg-[var(--ink)] px-2 text-[8px] tracking-widest text-[var(--acid)] md:-top-3 md:text-[10px]"
                >
                  Mobile number
                </label>
                <input
                  id="trial-mobile"
                  name="mobile"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="Enter your number"
                  className="focus-ring h-14 w-full border-2 border-white/20 bg-transparent px-4 text-xs font-bold uppercase tracking-widest text-white outline-none placeholder:text-white/35 focus:border-[var(--acid)] md:h-16 md:px-6 md:text-sm"
                />
              </div>
              <div className="relative">
                <label
                  htmlFor="trial-goal"
                  className="font-display absolute -top-2 left-4 bg-[var(--ink)] px-2 text-[8px] tracking-widest text-[var(--acid)] md:-top-3 md:text-[10px]"
                >
                  Training goal
                </label>
                <select
                  id="trial-goal"
                  name="goal"
                  className="focus-ring h-14 w-full appearance-none border-2 border-white/20 bg-[var(--ink)] px-4 text-xs font-bold uppercase tracking-widest text-white outline-none focus:border-[var(--acid)] md:h-16 md:px-6 md:text-sm"
                >
                  <option>Fat loss</option>
                  <option>Strength & muscle</option>
                  <option>General fitness</option>
                </select>
              </div>
              <button
                type="submit"
                className="btn-press focus-ring hard-shadow-lg font-display h-14 w-full bg-[var(--acid)] text-lg text-[var(--ink)] md:h-16 md:text-xl"
              >
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-white/10 bg-[var(--dark-surface)] py-16 text-white md:py-24">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6">
          <div className="mb-14 grid grid-cols-2 gap-8 md:mb-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
            <div className="col-span-2 lg:col-span-1">
              <div className="font-display mb-6 text-2xl md:mb-8 md:text-3xl">
                <span className="text-[var(--signal-red)]">+</span> Plus Fitness
              </div>
              <p className="mb-6 max-w-sm text-sm leading-relaxed text-white/40 md:mb-8">
                Andheri West&apos;s premier 24/7 training facility, built for high-performance
                results.
              </p>
              <div className="flex gap-3 md:gap-4">
                <a
                  href="https://www.instagram.com/plusfitness24x7andheri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Plus Fitness Andheri on Instagram"
                  className="focus-ring flex size-12 items-center justify-center border border-white/20 transition-colors hover:bg-[var(--acid)] hover:text-[var(--ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="size-5 bg-current"
                    style={{
                      maskImage: "url(/icons/instagram.svg)",
                      WebkitMaskImage: "url(/icons/instagram.svg)",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </a>
                <a
                  href="https://www.facebook.com/plusfitness24x7andheri/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Plus Fitness Andheri on Facebook"
                  className="focus-ring flex size-12 items-center justify-center border border-white/20 transition-colors hover:bg-[var(--acid)] hover:text-[var(--ink)]"
                >
                  <span
                    aria-hidden="true"
                    className="size-5 bg-current"
                    style={{
                      maskImage: "url(/icons/facebook.svg)",
                      WebkitMaskImage: "url(/icons/facebook.svg)",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                    }}
                  />
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-display mb-5 text-xs text-[var(--acid)] md:mb-8 md:text-xl">
                Quick links
              </h3>
              <ul className="space-y-1 text-[9px] font-bold uppercase tracking-widest text-white/60 md:space-y-4 md:text-sm">
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/about">
                    About us
                  </Link>
                </li>
                <li>
                  <a className="focus-ring inline-block py-2 hover:text-white" href="#membership">
                    Memberships
                  </a>
                </li>
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/careers">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/programs">
                    Programs
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-display mb-5 text-xs text-[var(--acid)] md:mb-8 md:text-xl">
                Support
              </h3>
              <ul className="space-y-1 text-[9px] font-bold uppercase tracking-widest text-white/60 md:space-y-4 md:text-sm">
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/faq">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/privacy">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link className="focus-ring inline-block py-2 hover:text-white" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h3 className="font-display mb-5 text-xs text-[var(--acid)] md:mb-8 md:text-xl">
                Office hours
              </h3>
              <div className="space-y-3 text-[9px] font-bold uppercase tracking-widest text-white/60 md:space-y-4 md:text-sm">
                <p>Staffed hours:</p>
                <p>Mon–Fri: 07:00–22:00</p>
                <p>Sat–Sun: 10:00–18:00</p>
                <p className="text-[var(--signal-red)]">Member access: 24/7</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-center text-[8px] font-bold uppercase tracking-[0.2em] text-white/30 md:flex-row md:pt-12 md:text-left md:text-[10px] md:tracking-[0.3em]">
            <span>© {new Date().getFullYear()} Plus Fitness 24/7 Andheri.</span>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8">
              <a
                href="https://deepwebstudios.com"
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring hover:text-white"
              >
                Website by DeepWebStudios
              </a>
              <span>Made in Mumbai</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
