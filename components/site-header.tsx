"use client"

import { useState } from "react"
import { Menu, X, Dumbbell } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Memberships", href: "/#memberships" },
  { label: "Trainers", href: "/#trainers" },
  { label: "Reviews", href: "/#testimonials" },
  { label: "Gallery", href: "/#gallery" },
  { label: "FAQ", href: "/#faq" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded bg-primary text-primary-foreground">
            <Dumbbell className="size-5" />
          </span>
          <span className="font-heading text-xl font-bold uppercase tracking-wider">
            Plus <span className="text-primary">Fitness</span><small className="ml-2 text-[9px] text-muted-foreground">24/7 ANDHERI</small>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground uppercase tracking-wide transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            size="lg"
            className="font-heading font-semibold uppercase tracking-wide"
            render={<a href="/contact" />}
          >
            Free Day Pass
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-9 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="mt-2 font-heading font-semibold uppercase tracking-wide"
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
