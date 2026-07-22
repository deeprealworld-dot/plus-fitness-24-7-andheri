import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BicepsFlexed, HeartPulse, Users, UserRoundCheck } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = { title: "Training Programs | Plus Fitness Andheri", description: "Explore strength, conditioning, personal training and group classes at Plus Fitness 24/7 Andheri." }
const programs = [
  {title:"Strength",href:"/programs/strength",icon:BicepsFlexed,text:"Build muscle, confidence and better technique with a complete free-weight and resistance setup."},
  {title:"Conditioning",href:"/programs/conditioning",icon:HeartPulse,text:"Improve stamina, heart health and everyday energy with cardio and functional training."},
  {title:"Personal Training",href:"/programs/personal-training",icon:UserRoundCheck,text:"Work one-to-one with an Andheri coach on a plan built around your goals and ability."},
  {title:"Group Classes",href:"/programs/group-classes",icon:Users,text:"Train with supportive people in energetic coach-led sessions that keep you moving."},
]
export default function ProgramsPage(){return <PageShell eyebrow="Train your way" title="Programs for every fitness goal" description="Choose a training style that suits you—or speak with our team and we will help you find the right place to begin."><section className="py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">{programs.map(p=><Link key={p.title} href={p.href} className="group rounded-2xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:border-primary/70"><p.icon className="size-9 text-accent"/><h2 className="mt-6 font-heading text-3xl font-bold uppercase">{p.title}</h2><p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p><span className="mt-7 inline-flex items-center gap-2 font-semibold text-primary">Explore program <ArrowRight className="size-4 transition group-hover:translate-x-1"/></span></Link>)}</div></section></PageShell>}
