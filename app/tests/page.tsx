"use client"

import { useState } from "react"
import { ChevronRight } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { CourseCard } from "@/components/course-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "all", label: "All" },
  { id: "ssc", label: "SSC" },
  { id: "hsc", label: "HSC" },
  { id: "admission", label: "Admission" },
  { id: "academic", label: "Academic" },
]

const allTests = [
  {
    id: "ssc-math-test",
    title: "SSC Mathematics Model Test",
    image: "/images/test-ssc-math.jpg",
    category: "SSC",
    price: "Free" as const,
    reviews: 15,
  },
  {
    id: "hsc-physics-test",
    title: "HSC Physics Mock Exam",
    image: "/images/test-hsc-physics.jpg",
    category: "HSC",
    price: 250,
    reviews: 16,
  },
  {
    id: "du-admission-test",
    title: "Admission Test Prep - DU",
    image: "/images/test-admission.jpg",
    category: "Admission",
    price: 200,
    reviews: 15,
  },
  {
    id: "ssc-english-test",
    title: "SSC English Grammar Test",
    image: "/images/course-english.jpg",
    category: "SSC",
    price: "Free" as const,
    reviews: 22,
  },
  {
    id: "hsc-chemistry-test",
    title: "HSC Chemistry Final Prep",
    image: "/images/course-chemistry.jpg",
    category: "HSC",
    price: 300,
    reviews: 18,
  },
  {
    id: "hsc-biology-test",
    title: "HSC Biology MCQ Test",
    image: "/images/course-biology.jpg",
    category: "HSC",
    price: 250,
    reviews: 24,
  },
  {
    id: "ssc-science-test",
    title: "SSC Science Combined Test",
    image: "/images/course-physics.jpg",
    category: "SSC",
    price: 150,
    reviews: 30,
  },
  {
    id: "buet-admission-test",
    title: "BUET Admission Mock Test",
    image: "/images/course-admission.jpg",
    category: "Admission",
    price: 400,
    reviews: 45,
  },
  {
    id: "academic-math-test",
    title: "Academic Math Foundation Test",
    image: "/images/course-math.jpg",
    category: "Academic",
    price: "Free" as const,
    reviews: 12,
  },
]

export default function TestsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredTests =
    activeCategory === "all"
      ? allTests
      : allTests.filter(
          (test) => test.category.toLowerCase() === activeCategory
        )

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Model Test"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Model Test" },
        ]}
      />

      {/* Tests Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Filter */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-card rounded-lg border p-2 sticky top-4">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-md text-sm font-medium transition-colors",
                      activeCategory === category.id
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {category.label}
                    {activeCategory !== category.id && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground" />
                    )}
                  </button>
                ))}
              </div>
            </aside>

            {/* Tests Grid */}
            <div className="flex-1">
              {filteredTests.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredTests.map((test) => (
                    <CourseCard key={test.id} {...test} variant="test" />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    No model tests found in this category.
                  </p>
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
