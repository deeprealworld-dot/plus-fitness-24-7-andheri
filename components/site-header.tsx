"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Memberships", href: "/memberships" },
  { label: "Trainers", href: "/trainers" },
  { label: "Gallery", href: "/gallery" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label="Plus Fitness Andheri home">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-primary-foreground transition-transform duration-300 group-hover:-rotate-6">
            <Dumbbell className="size-5" />
          </span>
          <span className="font-heading text-lg font-bold uppercase leading-none tracking-[0.12em] sm:text-xl">
            <span className="text-primary">Plus</span>{" "}
            <span className="text-accent">Fitness</span>
            <small className="mt-1 block text-[8px] tracking-[0.32em] text-muted-foreground">
              24/7 · Andheri
            </small>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:text-foreground hover:after:origin-left hover:after:scale-x-100"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            size="lg"
            className="h-10 rounded-full px-5 font-heading font-semibold uppercase tracking-[0.12em]"
            render={<a href="/contact" />}
          >
            Free Day Pass
            <ArrowUpRight className="size-4" />
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border bg-card/70 text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="glass-surface border-x-0 border-t border-border/60 lg:hidden">
          <nav className="flex flex-col gap-1 px-4 py-5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Button
              size="lg"
              className="mt-3 h-11 rounded-full font-heading font-semibold uppercase tracking-wide"
              render={<a href="/contact" onClick={() => setOpen(false)} />}
            >
              Free Day Pass
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
