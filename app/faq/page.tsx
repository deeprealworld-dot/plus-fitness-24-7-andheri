import type { Metadata } from "next"
import { FaqPage } from "@/components/faq"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Plus Fitness Andheri",
  description:
    "Answers about access, trials, passes and personal training at Plus Fitness Andheri.",
}

export default function Page() {
  return <FaqPage />
}
