import type { Metadata } from "next"
import { ProgramPage } from "@/components/program-page"

export const metadata: Metadata = {
  title: "Group Fitness Classes | Plus Fitness Andheri",
  description: "Train in motivating coach-led group sessions at Plus Fitness Andheri.",
}

export default function GroupClassesPage() {
  return (
    <ProgramPage
      eyebrow="Group classes"
      title="Better energy, together"
      description="Enjoy motivating coach-led workouts in a welcoming group environment at Plus Fitness Andheri."
      image="/images/gallery-3.png"
      idealFor="Great for members who enjoy variety, social motivation and a scheduled session that makes it easier to stay consistent."
      benefits={[
        "Coach-led sessions",
        "Welcoming community",
        "Varied weekly formats",
        "Beginner-friendly options",
      ]}
    />
  )
}
