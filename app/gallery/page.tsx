import type { Metadata } from "next"
import { Gallery } from "@/components/gallery"
import { PageShell } from "@/components/page-shell"
export const metadata: Metadata = {title:"Gym Gallery | Plus Fitness Andheri",description:"Explore the training floor and facilities at Plus Fitness Andheri West."}
export default function Page(){return <PageShell eyebrow="The club" title="Take a look inside Plus Fitness Andheri" description="Explore our strength, cardio and functional training spaces before your first visit."><Gallery /></PageShell>}
