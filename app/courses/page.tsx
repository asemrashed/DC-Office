"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { CourseCard } from "@/components/course-card"
import { ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "ssc", label: "SSC" },
  { id: "hsc", label: "HSC" },
  { id: "admission", label: "Admission" },
  { id: "academic", label: "Academic" },
]

const allCourses = [
  {
    id: "hsc-physics",
    title: "HSC Physics Complete Course",
    image: "/images/course-physics.jpg",
    category: "HSC",
    price: 1200,
    originalPrice: 2000,
    reviews: 45,
    lessons: 15,
  },
  {
    id: "ssc-math",
    title: "SSC Mathematics Master Class",
    image: "/images/course-math.jpg",
    category: "SSC",
    price: 800,
    originalPrice: 1500,
    reviews: 32,
    lessons: 12,
  },
  {
    id: "hsc-chemistry",
    title: "HSC Chemistry Blueprint",
    image: "/images/course-chemistry.jpg",
    category: "HSC",
    price: 1000,
    reviews: 28,
    lessons: 10,
  },
  {
    id: "english-grammar",
    title: "English Grammar Foundation",
    image: "/images/course-english.jpg",
    category: "Academic",
    price: "Free" as const,
    reviews: 56,
    lessons: 8,
  },
  {
    id: "admission-guide",
    title: "University Admission Guide",
    image: "/images/course-admission.jpg",
    category: "Admission",
    price: 1500,
    originalPrice: 2500,
    reviews: 67,
    lessons: 20,
  },
  {
    id: "hsc-biology",
    title: "Biology for HSC",
    image: "/images/course-biology.jpg",
    category: "HSC",
    price: 900,
    reviews: 23,
    lessons: 14,
  },
  {
    id: "ssc-english",
    title: "SSC English Complete Course",
    image: "/images/course-english.jpg",
    category: "SSC",
    price: 600,
    originalPrice: 1000,
    reviews: 38,
    lessons: 10,
  },
  {
    id: "hsc-higher-math",
    title: "HSC Higher Math",
    image: "/images/course-math.jpg",
    category: "HSC",
    price: 1100,
    originalPrice: 1800,
    reviews: 52,
    lessons: 18,
  },
  {
    id: "du-admission",
    title: "Dhaka University Admission Prep",
    image: "/images/course-admission.jpg",
    category: "Admission",
    price: 2000,
    originalPrice: 3000,
    reviews: 89,
    lessons: 25,
  },
  {
    id: "ssc-ict",
    title: "SSC ICT Complete Guide",
    image: "/images/course-physics.jpg",
    category: "SSC",
    price: 500,
    reviews: 41,
    lessons: 8,
  },
  {
    id: "hsc-bangla",
    title: "HSC Bangla Literature",
    image: "/images/course-english.jpg",
    category: "HSC",
    price: 750,
    reviews: 33,
    lessons: 12,
  },
  {
    id: "medical-admission",
    title: "Medical Admission Crash Course",
    image: "/images/course-biology.jpg",
    category: "Admission",
    price: 2500,
    originalPrice: 4000,
    reviews: 76,
    lessons: 30,
  },
  {
    id: "free-lessons",
    title: "Free Lessons Compilation",
    image: "/images/course-chemistry.jpg",
    category: "Academic",
    price: "Free" as const,
    reviews: 120,
    lessons: 6,
  },
  {
    id: "ssc-science",
    title: "SSC Science Full Course",
    image: "/images/course-physics.jpg",
    category: "SSC",
    price: 900,
    originalPrice: 1400,
    reviews: 44,
    lessons: 15,
  },
  {
    id: "hsc-accounting",
    title: "HSC Accounting Mastery",
    image: "/images/course-math.jpg",
    category: "HSC",
    price: 850,
    reviews: 29,
    lessons: 11,
  },
]

const ITEMS_PER_PAGE = 9

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredCourses =
    activeCategory === "all"
      ? allCourses
      : allCourses.filter(
          (course) => course.category.toLowerCase() === activeCategory
        )

  const totalPages = Math.ceil(filteredCourses.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedCourses = filteredCourses.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  )

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId)
    setCurrentPage(1)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="All Courses"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses" },
        ]}
      />

      {/* Course Listing Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-card border rounded-xl p-4 sticky top-24">
                <nav className="flex flex-col gap-1">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                      className={cn(
                        "flex items-center justify-between px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors",
                        activeCategory === category.id
                          ? "bg-primary text-primary-foreground"
                          : "text-foreground hover:bg-secondary"
                      )}
                    >
                      {category.label}
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Course Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {paginatedCourses.map((course) => (
                  <CourseCard key={course.id} {...course} variant="course" />
                ))}
              </div>

              {/* Empty State */}
              {paginatedCourses.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No courses found in this category.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="w-10 h-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <Button
                        key={page}
                        variant={currentPage === page ? "default" : "outline"}
                        onClick={() => setCurrentPage(page)}
                        className={cn(
                          "w-10 h-10",
                          currentPage === page &&
                            "bg-primary text-primary-foreground"
                        )}
                      >
                        {page}
                      </Button>
                    )
                  )}
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                    className="w-10 h-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to be a Successful Student?"
        subtitle="Join EduLearn today. Transform preparation into excellence."
        buttonText="Step into Success"
      />

      <Footer />
    </main>
  )
}
