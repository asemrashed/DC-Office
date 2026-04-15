import { ChevronRight } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface GoalCardProps {
  icon: LucideIcon
  title: string
  description: string
  featured?: boolean
}

export function GoalCard({ icon: Icon, title, description, featured = false }: GoalCardProps) {
  return (
    <div
      className={`rounded-xl p-6 cursor-pointer transition-all ${
        featured
          ? "bg-primary text-primary-foreground shadow-lg"
          : "bg-white border border-border hover:border-primary hover:shadow-md"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          featured ? "bg-primary-foreground/20" : "bg-secondary"
        }`}
      >
        <Icon className={`w-6 h-6 ${featured ? "text-primary-foreground" : "text-primary"}`} />
      </div>
      <h3 className={`font-semibold mb-2 ${featured ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h3>
      <p className={`text-sm mb-4 ${featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
        {description}
      </p>
      <div className={`flex items-center gap-1 text-sm font-medium ${featured ? "text-primary-foreground" : "text-primary"}`}>
        Explore Courses
        <ChevronRight className="w-4 h-4" />
      </div>
    </div>
  )
}
