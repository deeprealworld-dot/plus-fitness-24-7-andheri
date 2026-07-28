import { ArrowDown, ArrowRight, Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[760px] items-center overflow-hidden pt-[72px] sm:min-h-screen">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero-gym.png"
          alt="Athlete performing a heavy barbell deadlift in a dark industrial gym"
          fill
          priority
          sizes="100vw"
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/55" />
        <div className="hero-mesh absolute -inset-x-20 bottom-[-28%] h-[70%]" />
      </div>

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-16 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:px-8">
        <div className="max-w-4xl">
          <span className="section-kicker reveal-up text-primary">
            Open 24/7 · Andheri West · Mumbai
          </span>
          <h1 className="reveal-up-delay mt-7 font-heading text-[clamp(3.75rem,8.2vw,8.4rem)] font-bold uppercase leading-[0.82] tracking-[-0.055em] text-balance">
            Fitness that{" "}
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              never clocks out
            </span>
          </h1>
          <p className="reveal-up-delay-2 mt-8 max-w-2xl border-l border-primary/60 pl-5 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            World-class equipment, expert coaches and a welcoming local community—ready whenever
            you are at Plus Fitness 24/7 Andheri.
          </p>

          <div className="reveal-up-delay-2 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              className="h-12 rounded-lg px-6 font-heading text-sm font-semibold uppercase tracking-[0.12em]"
              render={<a href="/contact" />}
            >
              Claim a Free Day Pass
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-white/15 bg-black/20 px-6 font-heading text-sm font-semibold uppercase tracking-[0.12em] backdrop-blur-sm"
              render={<a href="/gallery" />}
            >
              <Play className="size-4" />
              Tour the Floor
            </Button>
          </div>

        </div>

        <aside className="glass-surface relative hidden min-h-[420px] overflow-hidden rounded-2xl p-7 lg:block" aria-label="Club statistics">
          <span className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted-foreground">
            Andheri club
          </span>
          <div className="orbital-mark relative mx-auto mt-9 aspect-square w-52 text-primary/50">
            <span className="absolute inset-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_32px] shadow-accent" />
          </div>
          <dl className="absolute inset-x-7 bottom-7 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[
              { value: "4.8", label: "Rating" },
              { value: "200+", label: "Network" },
              { value: "24/7", label: "Access" },
            ].map((stat) => (
              <div key={stat.label}>
                <dt className="font-heading text-2xl font-bold text-primary">{stat.value}</dt>
                <dd className="mt-1 text-[9px] uppercase tracking-[0.16em] text-muted-foreground">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <a href="#memberships" className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-muted-foreground transition-colors hover:text-foreground sm:flex">
        Explore
        <ArrowDown className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
