import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Personal Training | Plus Fitness Andheri",
  description: "Get one-to-one coaching and a plan built around your goals at Plus Fitness Andheri.",
}

export default function PersonalTrainingPage() {
  return (
    <ProgramPage
      eyebrow="Personal training"
      title="A plan built around you"
      description="Get individual attention, accountable coaching and a clear route from where you are to where you want to be."
      image="/images/trainer-1.png"
      idealFor="Perfect for beginners who want guidance, experienced members chasing a specific result, or anyone who values structure and accountability."
      benefits={[
        "One-to-one coaching",
        "Personalised workouts",
        "Technique correction",
        "Progress reviews",
      ]}
    />
  )
}
