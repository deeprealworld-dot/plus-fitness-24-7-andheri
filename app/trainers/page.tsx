import type { Metadata } from "next"
import { Trainers } from "@/components/trainers"
import { PageShell } from "@/components/page-shell"
export const metadata: Metadata = {title:"Personal Trainers | Plus Fitness Andheri",description:"Meet the personal training team at Plus Fitness 24/7 Andheri."}
export default function Page(){return <PageShell eyebrow="Our trainers" title="Expert support for your next step" description="Meet the local coaches ready to help you train with purpose, confidence and better technique."><Trainers /></PageShell>}
