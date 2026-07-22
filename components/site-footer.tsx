import { Dumbbell } from "lucide-react"
import Link from "next/link"

const socials = [
  { name: "Instagram", icon: "/icons/instagram.svg" },
  { name: "Facebook", icon: "/icons/facebook.svg" },
  { name: "YouTube", icon: "/icons/youtube.svg" },
]

const columns = [
  {
    title: "Explore",
    links: [
      { label: "Memberships", href: "/memberships" },
      { label: "Trainers", href: "/trainers" },
      { label: "Gallery", href: "/gallery" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Strength", href: "/programs/strength" },
      { label: "Conditioning", href: "/programs/conditioning" },
      { label: "Personal Training", href: "/programs/personal-training" },
      { label: "Group Classes", href: "/programs/group-classes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy", href: "/privacy" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded bg-primary text-primary-foreground">
                <Dumbbell className="size-5" />
              </span>
              <span className="font-heading text-xl font-bold uppercase tracking-wider">
                <span className="text-primary">Plus</span> <span className="text-accent">Fitness</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              World-class equipment, expert trainers and 24/7 access in the heart of Andheri West.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <span
                    aria-hidden="true"
                    className="size-4 bg-current"
                    style={{
                      maskImage: `url(${social.icon})`,
                      WebkitMaskImage: `url(${social.icon})`,
                      maskSize: "contain",
                      WebkitMaskSize: "contain",
                      maskRepeat: "no-repeat",
                      WebkitMaskRepeat: "no-repeat",
                      maskPosition: "center",
                      WebkitMaskPosition: "center",
                    }}
                  />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-heading text-sm font-semibold uppercase tracking-widest text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Plus Fitness 24/7 Andheri. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">Working towards a healthier India.</p>
        </div>
      </div>
    </footer>
  )
}
