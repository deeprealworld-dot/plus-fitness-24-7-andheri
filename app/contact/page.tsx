import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Contact } from "@/components/contact"

export const metadata: Metadata = {
  title: "Contact Plus Fitness 24/7 Andheri",
  description:
    "Contact Plus Fitness 24/7 Andheri, request a free day pass, find the club and view staffed hours.",
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
