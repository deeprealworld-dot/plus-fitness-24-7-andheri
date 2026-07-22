import type { Metadata } from "next"
import { MapPin, Clock, Dumbbell, GraduationCap, CalendarDays, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Careers — IRONPULSE",
  description:
    "Join the IRONPULSE team. Explore open coaching, front-desk, and operations roles at our strength and conditioning gym.",
}

const perks = [
  { icon: Dumbbell, title: "Free Membership", description: "Full 24/7 access for you and a plus-one." },
  { icon: GraduationCap, title: "Paid Certifications", description: "We invest in your coaching education." },
  { icon: CalendarDays, title: "Flexible Scheduling", description: "Build a schedule that fits your life." },
  { icon: Heart, title: "Health Benefits", description: "Medical, dental, and wellness stipends." },
]

const openings = [
  {
    title: "Senior Strength Coach",
    type: "Full-time",
    location: "On-site · Downtown",
    description:
      "Lead small-group and 1:1 programming for intermediate to advanced athletes.",
  },
  {
    title: "Personal Trainer",
    type: "Full-time / Part-time",
    location: "On-site · Downtown",
    description:
      "Deliver personalized coaching and build lasting relationships with members.",
  },
  {
    title: "Front Desk Associate",
    type: "Part-time",
    location: "On-site · Downtown",
    description:
      "Be the welcoming first face of IRONPULSE and keep the floor running smoothly.",
  },
  {
    title: "Group Class Instructor",
    type: "Contract",
    location: "On-site · Downtown",
    description:
      "Lead high-energy conditioning and mobility classes across the weekly schedule.",
  },
]

export default function CareersPage() {
  return (
    <PageShell
      eyebrow="Careers"
      title="Build your career where strength is the standard"
      description="We're always looking for driven coaches and team members who care about people as much as performance. If that's you, let's talk."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Why work with us
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <perk.icon className="size-6" />
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold uppercase tracking-wide">
                  {perk.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {perk.description}
                </p>
              </div>
            ))}
          </div>

          <h2 className="mt-20 font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl">
            Open positions
          </h2>
          <ul className="mt-10 space-y-4">
            {openings.map((job) => (
              <li
                key={job.title}
                className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between"
              >
                <div>
                  <h3 className="font-heading text-xl font-semibold uppercase tracking-wide">
                    {job.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{job.description}</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Clock className="size-4 text-primary" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="size-4 text-primary" />
                      {job.location}
                    </span>
                  </div>
                </div>
                <Button
                  size="lg"
                  className="shrink-0 font-heading font-semibold uppercase tracking-wide"
                  render={<a href="/contact" />}
                >
                  Apply Now
                </Button>
              </li>
            ))}
          </ul>

          <div className="mt-16 rounded-2xl border border-border bg-card/40 p-8 text-center">
            <h3 className="font-heading text-2xl font-bold uppercase tracking-wide">
              Don&apos;t see your role?
            </h3>
            <p className="mx-auto mt-2 max-w-xl text-muted-foreground text-pretty">
              We&apos;re always open to meeting great people. Send us your resume and tell us how
              you&apos;d make IRONPULSE stronger.
            </p>
            <Button
              size="lg"
              className="mt-6 font-heading font-semibold uppercase tracking-wide"
              render={<a href="/contact" />}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
