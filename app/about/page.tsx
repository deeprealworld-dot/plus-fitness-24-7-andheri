import type { Metadata } from "next"
import Image from "next/image"
import { Clock3, Dumbbell, HeartPulse, MapPin } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "About Plus Fitness 24/7 Andheri",
  description: "Meet the local team and discover the facilities at Plus Fitness 24/7 Andheri West.",
}

const stats = [
  { value: "24/7", label: "Member access" },
  { value: "200+", label: "Gym network" },
  { value: "03", label: "Training zones" },
  { value: "West", label: "Andheri location" },
]

const values = [
  {
    icon: Clock3,
    title: "Train on your time",
    description:
      "Member access is available 24 hours a day, seven days a week, so fitness can fit around your life.",
  },
  {
    icon: Dumbbell,
    title: "Everything you need",
    description:
      "Dedicated cardio, strength and functional zones support beginners and experienced lifters.",
  },
  {
    icon: HeartPulse,
    title: "Personal support",
    description:
      "Our Andheri trainers help with form, programming and motivation without the intimidation.",
  },
  {
    icon: MapPin,
    title: "Local and connected",
    description:
      "A convenient Andheri West club with access to the wider Plus Fitness network of 200+ gyms.",
  },
]

export default function AboutPage() {
  return (
    <PageShell
      eyebrow="Our Andheri Club"
      title="Built for Andheri. Open for everyone."
      description="A welcoming neighbourhood gym with serious equipment, 24/7 access and coaches who know your name."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <figure className="hard-shadow-lg relative aspect-[4/3] overflow-hidden border-2 border-[var(--ink)] bg-[var(--muted-paper)] lg:col-span-7">
              <Image
                src="/images/gallery-1.png"
                alt="Strength equipment at Plus Fitness Andheri"
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover grayscale"
              />
              <figcaption className="font-display absolute bottom-0 left-0 bg-[var(--acid)] px-4 py-3 text-xs">
                Dattaji Salve Marg / Andheri West
              </figcaption>
            </figure>

            <div className="lg:col-span-5 lg:pt-8">
              <p className="font-display text-xs text-[var(--signal-red)]">Fitness for every body</p>
              <h2 className="font-display mt-5 text-4xl leading-[0.95] sm:text-6xl">
                Your pace. Our support.
              </h2>
              <p className="mt-6 border-l-4 border-[var(--acid)] pl-5 text-lg font-medium leading-relaxed opacity-65">
                Whether you are stepping into a gym for the first time, returning after a break or
                working towards a new personal best, our team helps you train with confidence.
              </p>
              <p className="mt-6 text-lg font-medium leading-relaxed opacity-65">
                Modern cardio and strength equipment, functional training, group sessions and
                personal coaching—all in a clean, energetic environment ready whenever you are.
              </p>
            </div>
          </div>

          <dl className="mt-20 grid border-2 border-[var(--ink)] sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="min-h-40 border-b-2 border-[var(--ink)] p-6 last:border-b-0 sm:[&:nth-child(3)]:border-b-0 sm:[&:nth-child(odd)]:border-r-2 lg:border-b-0 lg:border-r-2 lg:last:border-r-0"
              >
                <span className="font-display text-xs text-[var(--signal-red)]">0{index + 1}</span>
                <dt className="font-display mt-5 text-4xl text-[var(--acid)] sm:text-5xl">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-xs font-bold uppercase tracking-[0.16em] opacity-55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-20 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article
                key={value.title}
                className="hard-shadow flex min-h-72 flex-col border-2 border-[var(--ink)] bg-[var(--paper)] p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center bg-[var(--acid)]">
                    <value.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs">0{index + 1}</span>
                </div>
                <h3 className="font-display mt-8 text-xl">{value.title}</h3>
                <p className="mt-4 text-sm font-medium leading-relaxed opacity-60">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
