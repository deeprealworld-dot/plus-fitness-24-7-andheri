import type { Metadata } from "next"
import { Contact } from "@/components/contact"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Contact Plus Fitness 24/7 Andheri",
  description:
    "Contact Plus Fitness 24/7 Andheri, request a free day pass, find the club and view staffed hours.",
}

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="Start here"
      title="One message from your first workout."
      description="Ask about memberships, arrange a club tour or claim a free day pass. The Andheri team will help you take the next step."
    >
      <Contact />
    </PageShell>
  )
}
