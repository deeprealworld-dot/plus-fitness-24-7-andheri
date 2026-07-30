import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Dumbbell, Heart, Users } from "lucide-react"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Careers | Plus Fitness Andheri",
  description: "Register your interest in coaching and club roles at Plus Fitness 24/7 Andheri.",
}

const roles = [
  {
    icon: Dumbbell,
    title: "Coaching",
    text: "Qualified personal trainers who put safe, effective coaching first.",
  },
  {
    icon: Users,
    title: "Member experience",
    text: "Friendly people who make every member feel welcome and supported.",
  },
  {
    icon: Heart,
    title: "Shared values",
    text: "Team players who bring energy, reliability and a genuine interest in health.",
  },
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Bring the energy. Help Andheri move."
      description="We welcome positive, professional people who care about fitness and member experience."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-7 md:grid-cols-3">
            {roles.map((role, index) => (
              <article
                key={role.title}
                className="hard-shadow flex min-h-72 flex-col border-2 border-[var(--ink)] bg-[var(--paper)] p-6"
              >
                <div className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center bg-[var(--acid)]">
                    <role.icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs">0{index + 1}</span>
                </div>
                <h2 className="font-display mt-8 text-2xl">{role.title}</h2>
                <p className="mt-4 text-sm font-medium leading-relaxed opacity-60">{role.text}</p>
              </article>
            ))}
          </div>

          <div className="hard-shadow-lg mt-14 grid border-2 border-[var(--ink)] bg-[var(--acid)] lg:grid-cols-12">
            <div className="border-b-2 border-[var(--ink)] p-7 lg:col-span-8 lg:border-b-0 lg:border-r-2 lg:p-10">
              <p className="font-display text-xs text-[var(--signal-red)]">Open application</p>
              <h2 className="font-display mt-4 text-3xl leading-tight sm:text-5xl">
                Interested in joining us?
              </h2>
              <p className="mt-5 max-w-2xl font-medium leading-relaxed opacity-65">
                Current vacancies change. Send the Andheri club your CV and a short introduction,
                and the team will let you know if a suitable role is available.
              </p>
            </div>
            <div className="flex items-center p-7 lg:col-span-4 lg:p-10">
              <Link
                href="/contact"
                className="btn-press focus-ring hard-shadow font-display flex min-h-14 w-full items-center justify-between border-2 border-[var(--ink)] bg-[var(--ink)] px-5 text-sm text-white hover:bg-[var(--paper)] hover:text-[var(--ink)]"
              >
                Contact the club
                <ArrowUpRight className="size-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
