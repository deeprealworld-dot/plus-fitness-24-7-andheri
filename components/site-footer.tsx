import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/plusfitness24x7andheri/" },
  { name: "Facebook", href: "https://www.facebook.com/plusfitness24x7andheri/" },
  { name: "YouTube", href: "https://www.youtube.com/@plusfitnessindia" },
]

const footerGroups = [
  {
    index: "01",
    title: "Quick links",
    links: [
      { label: "About us", href: "/about" },
      { label: "Memberships", href: "/memberships" },
      { label: "Careers", href: "/careers" },
      { label: "Programs", href: "/programs" },
    ],
  },
  {
    index: "02",
    title: "Support",
    links: [
      { label: "FAQs", href: "/faq" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "Contact", href: "/contact" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer
      id="site-footer"
      className="relative overflow-hidden border-t-2 border-[var(--ink)] bg-[var(--dark-surface)] text-white [--footer-accent:#ff6b00]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[var(--footer-accent)]" />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Link href="/" className="focus-ring inline-flex min-h-11 items-center gap-3">
              <span className="font-display text-2xl">
                <span className="text-[var(--footer-accent)]">+</span> Plus Fitness
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-base leading-7 text-white/60">
              World-class equipment, expert trainers and 24/7 access in the heart of Andheri West.
            </p>

            <Link
              href="/contact"
              className="group focus-ring font-display mt-8 inline-flex min-h-11 items-center gap-3 border-b-2 border-[var(--footer-accent)] text-sm text-white transition-colors hover:text-[var(--footer-accent)]"
            >
              Get a free day pass
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {footerGroups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className={group.title === "Quick links" ? "lg:col-span-4" : "lg:col-span-3"}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-display text-xs text-white/35">
                  {group.index}
                </span>
                <h2 className="font-display text-2xl text-[var(--footer-accent)]">
                  {group.title}
                </h2>
              </div>

              <ul className="mt-5 border-t border-white/15">
                {group.links.map((link) => (
                  <li key={link.label} className="border-b border-white/15">
                    <Link
                      href={link.href}
                      className="group focus-ring font-display flex min-h-13 items-center justify-between gap-4 py-3 text-base text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4 shrink-0 text-[var(--footer-accent)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-7 text-sm text-white/45 sm:mt-16 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Plus Fitness 24/7 Andheri.</p>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="min-h-11 content-center transition-colors hover:text-[var(--footer-accent)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--footer-accent)]"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
