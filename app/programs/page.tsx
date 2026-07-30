import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, BicepsFlexed, HeartPulse, UserRoundCheck, Users } from "lucide-react"
import { PageShell } from "@/components/page-shell"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Training Programs | Plus Fitness Andheri",
  description:
    "Explore strength, conditioning, personal training and group classes at Plus Fitness 24/7 Andheri.",
}

const programs = [
  {
    title: "Strength",
    href: "/programs/strength",
    icon: BicepsFlexed,
    text: "Build muscle, confidence and technique with free weights and resistance equipment.",
  },
  {
    title: "Conditioning",
    href: "/programs/conditioning",
    icon: HeartPulse,
    text: "Improve stamina, heart health and everyday energy with cardio and functional training.",
  },
  {
    title: "Personal Training",
    href: "/programs/personal-training",
    icon: UserRoundCheck,
    text: "Work one-to-one with an Andheri coach on a plan built around your goals and ability.",
  },
  {
    title: "Group Classes",
    href: "/programs/group-classes",
    icon: Users,
    text: "Train with supportive people in energetic coach-led sessions that keep you moving.",
  },
]

export default function ProgramsPage() {
  return (
    <PageShell
      eyebrow="Train your way"
      title="Four ways in. One stronger you."
      description="Choose a training style that suits you—or ask our team to help you find the right place to begin."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-7 px-4 sm:grid-cols-2 sm:px-6 lg:px-8">
          {programs.map((program, index) => (
            <Link
              key={program.title}
              href={program.href}
              className={cn(
                "btn-press focus-ring hard-shadow-lg group flex min-h-80 flex-col border-2 border-[var(--ink)] p-7 sm:p-9",
                index === 1 || index === 2 ? "bg-[var(--acid)]" : "bg-[var(--paper)]",
              )}
            >
              <div className="flex items-start justify-between">
                <span className="flex size-14 items-center justify-center border-2 border-[var(--ink)] bg-[var(--ink)] text-white">
                  <program.icon className="size-7" aria-hidden="true" />
                </span>
                <span className="font-display text-sm">0{index + 1}</span>
              </div>
              <h2 className="font-display mt-10 text-3xl leading-tight sm:text-4xl">
                {program.title}
              </h2>
              <p className="mt-4 max-w-xl font-medium leading-relaxed opacity-65">{program.text}</p>
              <span className="font-display mt-auto flex items-center justify-between border-t-2 border-[var(--ink)] pt-5 text-xs">
                Explore program
                <ArrowUpRight
                  className="size-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageShell>
  )
}
