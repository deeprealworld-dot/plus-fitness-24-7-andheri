import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact — IRONPULSE",
  description:
    "Get in touch with IRONPULSE. Claim your free 3-day pass, find our location and hours, or reach our team directly.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main className="pt-16">
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
