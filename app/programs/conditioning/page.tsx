import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Conditioning Training | Plus Fitness Andheri",
  description: "Build stamina and everyday energy with cardio and functional training in Andheri.",
}

export default function ConditioningPage() {
  return (
    <ProgramPage
      eyebrow="Conditioning"
      title="More stamina for life"
      description="Combine cardio and functional movement to improve endurance, work capacity and everyday energy."
      image="/images/gallery-2.png"
      idealFor="A flexible option for fat-loss goals, improved heart health, sport preparation or simply feeling fitter throughout your day."
      benefits={[
        "Modern cardio equipment",
        "Functional training zone",
        "Scalable intensity",
        "Endurance-focused sessions",
      ]}
    />
  )
}
