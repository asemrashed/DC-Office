import Image from "next/image"
import Link from "next/link"
import { Star, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface CourseCardProps {
  id?: string
  title: string
  image: string
  category: string
  price: number | "Free"
  originalPrice?: number
  rating?: number
  reviews?: number
  lessons?: number
  variant?: "course" | "test"
}

export function CourseCard({
  id,
  title,
  image,
  category,
  price,
  originalPrice,
  rating = 4.5,
  reviews = 10,
  lessons,
  variant = "course",
}: CourseCardProps) {
  const href = variant === "course" ? `/courses/${id || "default"}` : `/tests/${id || "default"}`
  return (
    <div className="bg-card text-card-foreground rounded-xl border shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {variant === "test" && (
          <div className="absolute top-2 left-2">
            <span className="text-xs bg-primary/80 text-primary-foreground px-2 py-1 rounded">
              Model Test
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="bg-secondary text-primary font-medium">
            {category}
          </Badge>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span>{reviews} Reviews</span>
          </div>
        </div>
        <h3 className="font-semibold text-foreground line-clamp-2 mb-2 min-h-[48px]">
          {title}
        </h3>
        {lessons && (
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{lessons}+ Lessons</span>
          </div>
        )}
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-primary">
            {price === "Free" ? "Free" : `৳${price}`}
          </span>
          {originalPrice && (
            <span className="text-sm text-muted-foreground line-through">
              ৳{originalPrice}
            </span>
          )}
        </div>
        <Link href={href}>
          <Button className="btn btn-md bg-primary hover:bg-primary/90 text-primary-foreground">
            {variant === "test" ? "Enroll Test" : "Enroll Now"}
          </Button>
        </Link>
      </div>
    </div>
  )
}
