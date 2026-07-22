import type { Metadata } from "next"
import Image from "next/image"
import { Target, Users, Trophy, HeartPulse } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "About Us — IRONPULSE",
  description:
    "Learn the story behind IRONPULSE, our coaching philosophy, and the values that drive our strength and conditioning community.",
}

const values = [
  {
    icon: Target,
    title: "Results First",
    description:
      "Every program is built around measurable progress. No fluff, no gimmicks — just proven methods that move the needle.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "We train hard, but we never train alone. Our members push each other to show up and level up every day.",
  },
  {
    icon: HeartPulse,
    title: "Train for Life",
    description:
      "Strength isn't just about the gym. We coach for longevity, mobility, and the energy to live fully.",
  },
  {
    icon: Trophy,
    title: "Coached by Experts",
    description:
      "Our certified coaches bring decades of combined experience in strength, conditioning, and nutrition.",
  },
]

const stats = [
  { value: "2014", label: "Founded" },
  { value: "3,200+", label: "Members Trained" },
  { value: "18", label: "Certified Coaches" },
  { value: "24/7", label: "Open Access" },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="About Us"
      title="Built for people who refuse to settle"
      description="IRONPULSE started in a single garage with a few barbells and a simple belief: anyone can get stronger with the right coaching and community behind them."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image
                src="/images/gallery-4.png"
                alt="Athlete training on the rig at IRONPULSE"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
                Our story
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                What began as a small group of lifters chasing personal records has grown into a
                premium 24/7 strength and conditioning facility. We&apos;ve kept the grit of those
                early days while building a space equipped for every kind of athlete.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground text-pretty">
                Today, our coaches design programs for everyone from first-time lifters to
                competitive athletes — all under one roof, all with the same relentless standard of
                care.
              </p>
            </div>
          </div>

          <dl className="mt-20 grid grid-cols-2 gap-8 border-y border-border py-12 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <dt className="font-heading text-4xl font-bold text-primary sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-20">
            <h2 className="text-center font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
              What we stand for
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
