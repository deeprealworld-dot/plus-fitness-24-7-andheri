import type { Metadata } from "next"
import { Faq } from "@/components/faq"
import { PageShell } from "@/components/page-shell"
export const metadata: Metadata = {title:"Frequently Asked Questions | Plus Fitness Andheri",description:"Answers about access, trials, passes and personal training at Plus Fitness Andheri."}
export default function Page(){return <PageShell eyebrow="Before you visit" title="Your questions, answered" description="Everything you need to know before starting at Plus Fitness 24/7 Andheri."><Faq /></PageShell>}
