import type { ReactNode } from "react"
import { ArrowDownRight, Clock3 } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export function PageShell({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string
  title: string
  description?: string
  children: ReactNode
}) {
  return (
    <div className="brutalist-page relative min-h-screen overflow-x-hidden bg-[var(--paper)] text-[var(--ink)]">
      <div className="noise-overlay" aria-hidden="true" />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden border-b-2 border-[var(--ink)] px-4 py-12 sm:px-6 md:py-20">
          <div className="halftone absolute inset-0 opacity-[0.06]" aria-hidden="true" />
          <div className="relative mx-auto grid max-w-[1440px] grid-cols-12 gap-6">
            <div className="stagger-reveal col-span-12 flex flex-col justify-center lg:col-span-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="bg-[var(--signal-red)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white">
                  {eyebrow}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-55">
                  Plus Fitness Andheri
                </span>
              </div>

              <h1 className="font-display max-w-6xl text-[42px] leading-[0.9] sm:text-[66px] lg:text-[86px] xl:text-[104px]">
                {title}
              </h1>

              {description ? (
                <p className="mt-7 max-w-2xl border-l-4 border-[var(--ink)] pl-5 text-lg font-medium leading-relaxed opacity-70 md:text-xl">
                  {description}
                </p>
              ) : null}
            </div>

            <aside className="col-span-12 lg:col-span-4" aria-label="Club access">
              <div className="hard-shadow-lg flex h-full min-h-64 flex-col justify-between border-2 border-[var(--ink)] bg-[var(--acid)] p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-bold uppercase tracking-[0.28em] opacity-60">
                    Andheri West
                  </span>
                  <ArrowDownRight className="size-8" aria-hidden="true" />
                </div>
                <div>
                  <div className="font-display text-6xl leading-none sm:text-7xl">24/7</div>
                  <p className="mt-3 max-w-xs text-xs font-bold uppercase tracking-[0.16em] opacity-65">
                    Train when your schedule allows.
                  </p>
                </div>
                <div className="flex items-center gap-3 border-t-2 border-[var(--ink)] pt-5 text-xs font-bold uppercase tracking-[0.15em]">
                  <Clock3 className="size-5" aria-hidden="true" />
                  Member access all day
                </div>
              </div>
            </aside>
          </div>
        </section>

        {children}
      </main>

      <SiteFooter />
    </div>
  )
}
