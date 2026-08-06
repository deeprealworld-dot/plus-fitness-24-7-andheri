import type { Metadata } from "next"
import { PageShell } from "@/components/page-shell"

export const metadata: Metadata = {
  title: "Privacy Policy | Plus Fitness Andheri",
  description: "Understand how the Plus Fitness Andheri website handles enquiry information.",
}

const sections = [
  {
    heading: "Information we collect",
    body: [
      "We collect information you provide directly to us, such as when you create a membership, claim a free pass, fill out a contact form, or communicate with our team. This may include your name, email address, phone number, and fitness goals.",
      "We also automatically collect certain information when you visit our website, including your IP address, browser type, and pages viewed, through cookies and similar technologies.",
    ],
  },
  {
    heading: "How we use your information",
    body: [
      "We use the information we collect to respond to enquiries, arrange club visits or trials, provide membership information and improve our service.",
      "We may also use your information to personalize your experience and to comply with legal obligations.",
    ],
  },
  {
    heading: "Sharing your information",
    body: [
      "We do not sell your personal information. We may share your information with trusted service providers who help us operate our business, such as payment processors and scheduling platforms, and only to the extent necessary to perform their services.",
      "We may also disclose information when required by law or to protect the rights, property and safety of the club, our members and the public.",
    ],
  },
  {
    heading: "Data security",
    body: [
      "We implement reasonable technical and organizational measures to protect your personal information against unauthorized access, loss, or misuse. However, no method of transmission over the internet is completely secure.",
    ],
  },
  {
    heading: "Your rights",
    body: [
      "You have the right to access, correct, or delete your personal information. You may also opt out of marketing communications at any time by following the unsubscribe instructions in our emails or by contacting us directly.",
    ],
  },
  {
    heading: "Contact us",
    body: [
      "If you have questions about this policy or your information, call Plus Fitness Andheri on +91 90820 92919 or visit the club at 12A, Chandak Unicorn, Dattaji Salve Marg, Andheri West, Mumbai 400053.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <PageShell
      eyebrow="Privacy Policy"
      title="Clear language. No fine-print games."
      description="What this demonstration website may collect, how it is used and the choices you have. Last updated July 2026."
    >
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-[1100px] px-4 sm:px-6 lg:px-8">
          <div className="border-t-2 border-[var(--ink)]">
            {sections.map((section, index) => (
              <section
                key={section.heading}
                className="grid gap-6 border-b-2 border-[var(--ink)] py-8 md:grid-cols-12 md:py-10"
              >
                <div className="md:col-span-4">
                  <span className="font-display text-xs text-[var(--signal-red)]">0{index + 1}</span>
                  <h2 className="font-display mt-3 text-2xl leading-tight sm:text-3xl">
                    {section.heading}
                  </h2>
                </div>
                <div className="space-y-4 border-l-4 border-[var(--acid)] pl-5 md:col-span-8">
                  {section.body.map((paragraph) => (
                    <p key={paragraph} className="text-base font-medium leading-relaxed opacity-65 sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
