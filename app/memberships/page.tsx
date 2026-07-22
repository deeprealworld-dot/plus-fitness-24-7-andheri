import type { Metadata } from "next"
import { Membership } from "@/components/membership"
import { PageShell } from "@/components/page-shell"
export const metadata: Metadata = {title:"Gym Memberships | Plus Fitness Andheri",description:"Explore flexible gym membership options and 24/7 access at Plus Fitness Andheri."}
export default function Page(){return <PageShell eyebrow="Memberships" title="A membership that fits your routine" description="Speak with our Andheri team about current plans, partner-pass access and the right way to start."><Membership /></PageShell>}
