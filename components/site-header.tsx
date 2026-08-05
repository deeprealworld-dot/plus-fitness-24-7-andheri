"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Phone, X } from "lucide-react"

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
    <header className="hard-shadow sticky top-0 z-50 border-b-2 border-[var(--ink)] bg-[var(--paper)]">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-1 px-4 sm:gap-2 sm:px-6">
        <Link
          href="/"
          className="focus-ring flex min-h-11 shrink-0 items-center"
          aria-label="Plus Fitness Andheri home"
        >
          <span className="font-display hidden text-2xl tracking-tighter md:block">
            <span className="text-[var(--acid)]">+</span> Plus Fitness / 24·7 Andheri
          </span>
          <span className="font-display text-[13px] leading-tight tracking-tighter sm:text-[15px] md:hidden">
            <span className="text-[var(--acid)]">+</span> Plus Fitness
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-xs font-bold uppercase tracking-[0.18em] xl:flex xl:gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring py-3 transition-colors hover:text-[var(--acid)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="tel:+919082092919"
            className="focus-ring hidden h-12 items-center gap-2 border-2 border-[var(--ink)] bg-[var(--paper)] px-4 text-xs font-bold transition-colors hover:bg-[var(--muted-paper)] xl:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            Call now
          </a>
          <Link
            href="/contact"
            className="btn-press focus-ring hard-shadow font-display flex h-11 items-center whitespace-nowrap border-2 border-[var(--ink)] bg-[var(--acid)] px-3 text-[10px] sm:h-12 sm:px-5 sm:text-[11px] md:text-xs"
          >
            <span className="hidden sm:inline">Start free trial</span>
            <span className="sm:hidden">Free trial</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="btn-press focus-ring hard-shadow flex size-11 items-center justify-center border-2 border-[var(--ink)] bg-white sm:size-12 xl:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="absolute inset-x-0 top-20 border-b-2 border-[var(--ink)] bg-[var(--acid)] px-4 py-3 xl:hidden"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring font-display flex min-h-12 items-center justify-between border-b-2 border-[var(--ink)] py-3 text-base last:border-0"
            >
              <span>{link.label}</span>
              <span aria-hidden="true">0{index + 1}</span>
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  )
}
