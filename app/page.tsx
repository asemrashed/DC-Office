import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { SectionHeader } from "@/components/section-header"
import { CourseCard } from "@/components/course-card"
import { FeatureCard } from "@/components/feature-card"
import { StatCard } from "@/components/stat-card"
import { GoalCard } from "@/components/goal-card"
import { ArrowRight, BookOpen, GraduationCap, School, Award, Compass, MessageSquare, BarChart3, ClipboardCheck, Users, Lightbulb } from "lucide-react"
import { Button } from "@/components/ui/button"

const goals = [
  {
    icon: School,
    title: "SSC",
    description: "Prepare for SSC exams with confidence.",
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "HSC",
    description: "Excel in your HSC examinations.",
    featured: true,
  },
  {
    icon: Award,
    title: "Admission",
    description: "Ace university admission tests.",
    featured: false,
  },
  {
    icon: BookOpen,
    title: "Academic",
    description: "Master your class subjects.",
    featured: false,
  },
]

const features = [
  {
    icon: Compass,
    title: "Guided Path",
    description: "Start from zero and rise to mastery with structured learning paths.",
  },
  {
    icon: MessageSquare,
    title: "Clear Language",
    description: "Grasp every concept in plain, easy-to-follow words.",
  },
  {
    icon: Lightbulb,
    title: "Smart Learning",
    description: "Discover the reasoning behind every topic and formula.",
  },
  {
    icon: Users,
    title: "Story Telling",
    description: "See how real-life events relate to academic concepts.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Focus",
    description: "Study only what matters according to exam patterns.",
  },
  {
    icon: ClipboardCheck,
    title: "Exam Ready",
    description: "Practice with mock-tests that makes you fully prepared.",
  },
]

const courses = [
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
]

const tests = [
  {
    id: "ssc-math-test",
    title: "SSC Model Test - Mathematics",
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
]

const stats = [
  { value: "500+", label: "Students Achieved Academic Excellence" },
  { value: "150+", label: "Students Enrolled in Different Programs" },
  { value: "50+", label: "Expert Teachers Guiding Students" },
  { value: "2000+", label: "Students Overcame Fear of Exams" },
]

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar transparent />

      {/* Hero Section */}
      <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
          <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
          <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
                Study Smart, Achieve More
              </p>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-balance">
                Be a Successful
                <br />
                <span className="text-primary-foreground/90">Student</span>
              </h1>
              <p className="text-primary-foreground/70 mb-8">
                From Confusion to Clarity. Win Everywhere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 gap-2"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Take a Model Test
                </Button>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative w-full max-w-md">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students with books"
                  width={500}
                  height={400}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Set Your Goal Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Choose Your Path"
            title="Set Your Goal"
            description="SSC, HSC, or academic excellence. All in one place."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((goal, index) => (
              <GoalCard key={index} {...goal} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-primary text-sm font-medium mb-2">
                We Explain, We Make You Understand
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4 text-balance">
                Why Choose EduLearn
              </h2>
              <p className="text-muted-foreground mb-8">
                Learn with clarity and succeed with excellence.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-16 md:py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Featured Courses"
            title="Popular Courses"
            description="Join the programs preferred by successful students."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} variant="course" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/courses">
              <Button variant="outline" className="border-primary text-primary hover:bg-secondary gap-2">
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Model Tests Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Model Tests"
            title="Signature Model Tests"
            description="Test yourself! Compete and sharpen the final performance."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tests.map((test) => (
              <CourseCard key={test.id} {...test} variant="test" />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/tests">
              <Button variant="outline" className="border-primary text-primary hover:bg-secondary gap-2">
                Browse Model Tests
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
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
