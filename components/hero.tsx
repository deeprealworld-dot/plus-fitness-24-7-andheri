import { ArrowRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-screen items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <img
          src="/images/hero-gym.png"
          alt="Athlete performing a heavy barbell deadlift in a dark industrial gym"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Open 24/7 · Andheri West · Mumbai
          </span>
          <h1 className="mt-6 font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-balance sm:text-7xl lg:text-8xl">
            Fitness that <span className="text-primary">never clocks out</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            World-class equipment, expert coaches and a welcoming local community—ready whenever
            you are at Plus Fitness 24/7 Andheri.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 px-6 font-heading text-base font-semibold uppercase tracking-wide"
              render={<a href="#memberships" />}
            >
              Claim a Free Day Pass
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-6 font-heading text-base font-semibold uppercase tracking-wide"
              render={<a href="#gallery" />}
            >
              <Play className="size-4" />
              Tour the Floor
            </Button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border/60 pt-8">
            {[
              { value: "4.8", label: "Google Rating" },
              { value: "200+", label: "Gym Network" },
              { value: "24/7", label: "Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-3xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
