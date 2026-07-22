import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Privacy Policy | Plus Fitness Andheri",
  description:
    "Understand how the Plus Fitness Andheri website handles enquiry information.",
}

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "We collect information you provide directly to us, such as when you create a membership, claim a free pass, fill out a contact form, or communicate with our team. This may include your name, email address, phone number, and fitness goals.",
      "We also automatically collect certain information when you visit our website, including your IP address, browser type, and pages viewed, through cookies and similar technologies.",
    ],
  },
  {
    heading: "How We Use Your Information",
    body: [
      "We use the information we collect to respond to enquiries, arrange club visits or trials, provide membership information and improve our service.",
      "We may also use your information to personalize your experience and to comply with legal obligations.",
    ],
  },
  {
    heading: "Sharing Your Information",
    body: [
      "We do not sell your personal information. We may share your information with trusted service providers who help us operate our business, such as payment processors and scheduling platforms, and only to the extent necessary to perform their services.",
      "We may also disclose information when required by law or to protect the rights, property and safety of the club, our members and the public.",
    ],
  },
  {
    heading: "Data Security",
    body: [
      "We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "Your Rights",
    body: [
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by following the unsubscribe instructions in our emails or by contacting us directly.",
    ],
  },
  {
    heading: "Contact Us",
    body: [
      "If you have questions about this policy or your information, call Plus Fitness Andheri on +91 90820 92919 or visit the club at 12A, Chandak Unicorn, Dattaji Salve Marg, Andheri West, Mumbai 400053.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Your privacy matters to us"
      description="This policy explains what information this demonstration website may collect, how it is used and the choices you have. Last updated July 2026."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="font-heading text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {section.body.map((paragraph, i) => (
                    <p key={i} className="text-lg leading-relaxed text-muted-foreground text-pretty">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
