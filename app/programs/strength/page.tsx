import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Strength Training | Plus Fitness Andheri",
  description: "Build strength with modern equipment and expert guidance at Plus Fitness Andheri.",
}

export default function StrengthPage() {
  return (
    <ProgramPage
      eyebrow="Strength training"
      title="Get stronger with confidence"
      description="Use modern free weights, resistance machines and expert guidance to build strength safely and progressively."
      image="/images/gallery-1.png"
      idealFor="Ideal for anyone who wants to build lean muscle, improve bone health, move better or become more confident with weights."
      benefits={[
        "Free weights and racks",
        "Resistance machines",
        "Progressive programming",
        "Form and technique support",
      ]}
    />
  )
}
