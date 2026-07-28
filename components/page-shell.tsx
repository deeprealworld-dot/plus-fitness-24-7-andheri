import type { ReactNode } from "react"
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
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <section className="relative isolate overflow-hidden border-b border-white/[0.06] bg-card/30 pb-20 pt-36 sm:pb-24 sm:pt-44">
          <div className="hero-mesh absolute -inset-x-20 -bottom-[85%] -z-10 h-[150%]" />
          <div className="absolute right-[8%] top-[28%] -z-10 size-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
            <span className="section-kicker text-primary">
              {eyebrow}
            </span>
            <h1 className="mt-6 max-w-5xl font-heading text-5xl font-bold uppercase leading-[0.9] tracking-[-0.04em] text-balance sm:text-7xl lg:text-8xl">
              {title}
            </h1>
            {description ? (
              <p className="mt-7 max-w-2xl border-l border-primary/50 pl-5 text-lg leading-relaxed text-muted-foreground text-pretty">
                {description}
              </p>
            ) : null}
          </div>
        </section>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}
