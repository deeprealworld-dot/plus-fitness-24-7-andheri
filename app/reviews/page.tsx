import type { Metadata } from "next"
import { Testimonials } from "@/components/testimonials"
import { PageShell } from "@/components/page-shell"
export const metadata: Metadata = {title:"Member Reviews | Plus Fitness Andheri",description:"See what members say about training at Plus Fitness 24/7 Andheri."}
export default function Page(){return <PageShell eyebrow="Member stories" title="The Andheri community says it best" description="Real experiences from members who choose Plus Fitness for the access, equipment and people."><Testimonials /></PageShell>}
