import type { Metadata } from "next"
import Image from "next/image"
import { Clock3, Dumbbell, HeartPulse, MapPin } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "About Plus Fitness 24/7 Andheri",
  description: "Meet the local team and discover the facilities at Plus Fitness 24/7 Andheri West.",
}

const values = [
  { icon: Clock3, title: "Train on your time", description: "Member access is available 24 hours a day, seven days a week, so fitness can fit around your life." },
  { icon: Dumbbell, title: "Everything you need", description: "Dedicated cardio, strength and functional zones support beginners, regular gym-goers and experienced lifters." },
  { icon: HeartPulse, title: "Support that feels personal", description: "Our Andheri trainers help with form, programming and motivation without making the gym feel intimidating." },
  { icon: MapPin, title: "Local and connected", description: "A convenient Andheri West club with access to the wider Plus Fitness network of 200+ gyms." },
]

export default function AboutPage() {
  return (
    <PageShell eyebrow="Our Andheri Club" title="A better gym experience, right here in Andheri" description="Plus Fitness 24/7 Andheri combines the support of a welcoming neighbourhood gym with the equipment, access and network of an established fitness brand.">
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border">
              <Image src="/images/gallery-1.png" alt="Strength equipment at Plus Fitness Andheri" fill className="object-cover" />
            </div>
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-accent">Fitness for every body</span>
              <h2 className="mt-3 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">Your goals. Your pace. Our support.</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Whether you are stepping into a gym for the first time, returning after a break or working towards a new personal best, our team will help you feel comfortable and confident.</p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">The club offers modern cardio and strength equipment, functional training, group sessions and personal coaching—all in a clean, energetic environment that is ready whenever you are.</p>
            </div>
          </div>
          <dl className="mt-20 grid grid-cols-2 gap-8 border-y border-border py-12 lg:grid-cols-4">
            {[{value:"24/7",label:"Member access"},{value:"200+",label:"Gym network"},{value:"3",label:"Training zones"},{value:"Andheri",label:"West location"}].map((stat) => <div key={stat.label} className="text-center"><dt className="font-heading text-4xl font-bold text-primary sm:text-5xl">{stat.value}</dt><dd className="mt-2 text-sm font-medium uppercase tracking-wide text-muted-foreground">{stat.label}</dd></div>)}
          </dl>
          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => <article key={value.title} className="rounded-2xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/60"><span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary"><value.icon className="size-6" /></span><h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide">{value.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.description}</p></article>)}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
