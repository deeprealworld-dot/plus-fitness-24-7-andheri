import Image from "next/image"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/page-shell"

export function ProgramPage({ eyebrow, title, description, image, benefits, idealFor }: { eyebrow: string; title: string; description: string; image: string; benefits: string[]; idealFor: string }) {
  return (
    <PageShell eyebrow={eyebrow} title={title} description={description}>
      <section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border"><Image src={image} alt={`${title} at Plus Fitness Andheri`} fill className="object-cover transition duration-700 hover:scale-105" /></div>
        <div><span className="text-sm font-semibold uppercase tracking-widest text-accent">Who it is for</span><h2 className="mt-3 font-heading text-3xl font-bold uppercase sm:text-4xl">Training that meets you where you are</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">{idealFor}</p><ul className="mt-8 grid gap-4 sm:grid-cols-2">{benefits.map((benefit) => <li key={benefit} className="flex gap-3 rounded-xl border border-border bg-card p-4"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" /><span>{benefit}</span></li>)}</ul><Button size="lg" className="mt-8 font-heading font-semibold uppercase" render={<a href="/contact" />}>Book a free trial</Button></div>
      </div></section>
    </PageShell>
  )
}
