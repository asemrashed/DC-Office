"use client"

import Image from "next/image"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { FeatureCard } from "@/components/feature-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Compass, MessageSquare, BarChart3, ClipboardCheck, Users, Lightbulb } from "lucide-react"

const stats = [
  { value: "100+", label: "Achievers Joined Bangladesh Judicial Service" },
  { value: "200+", label: "Graduates Enrolled in Different District Bar Associations" },
  { value: "322+", label: "Judges and Lawyers Regularly Follow Our Classes" },
  { value: "1666+", label: "Students Overcame the Fear of Studying Law" },
]

const features = [
  {
    icon: Compass,
    title: "Guided Path",
    description: "Start from zero and rise to mastery with structured...",
  },
  {
    icon: MessageSquare,
    title: "Clear Language",
    description: "Grasp every concept in plain, easy-to-follow words.",
  },
  {
    icon: Lightbulb,
    title: "Legal Logic",
    description: "Discover the reasoning behind every provision of...",
  },
  {
    icon: Users,
    title: "Story Telling",
    description: "See how real-life events relate the legal principles.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Focus",
    description: "Study only what matters according to Frequency-...",
  },
  {
    icon: ClipboardCheck,
    title: "Exam Ready",
    description: "Practice with mock-tests that makes you fully prepared.",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <Hero
        title="About Lexplain"
        breadcrumb="About Lexplain"
      />

      {/* Who We Are Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-sm text-muted-foreground">About Lexplain</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Lexplain is Bangladesh&apos;s leading online legal education platform designed to 
                  make complex laws easy to understand for everyone.
                </p>
                <p>
                  We help students, law graduates, and professionals prepare smartly for the 
                  Bangladesh Judicial Service, Bar Council Exam, and university law courses 
                  through clear explanations, expert guidance, and practical examples.
                </p>
                <p>
                  Our mission is simple — to turn confusion into clarity. Each course is carefully 
                  structured to help you build strong legal foundations, improve analytical thinking, 
                  and perform better in exams and real practice.
                </p>
                <p>
                  At Lexplain, learning is not just about passing an exam. It&apos;s about building 
                  the mindset, confidence, and skill of a future judge or lawyer.
                </p>
                <p>
                  Thousands of learners already trust Lexplain to master law step by step — from 
                  basic concepts to professional excellence.
                </p>
              </div>
              <Link href="/courses">
                <Button className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/about-books.jpg"
                  alt="Legal books with Lexplain logo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute bottom-6 right-6">
                  <span className="text-2xl font-bold text-white drop-shadow-lg">lexplain</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                  {stat.value}
                </div>
                <p className="text-primary-foreground/80 text-sm leading-tight">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[3/4] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/founder.jpg"
                alt="Kawsar Mahmood - Founder of Lexplain"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-2">
                Kawsar Mahmood
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-6">
                Civil Judge & Judicial Magistrate
              </p>
              <div className="space-y-4 text-primary-foreground/90 leading-relaxed">
                <p>
                  Kawsar Mahmood is the creative mind behind Lexplain, an academic initiative 
                  built on his vision to make legal education clear, practical, and inspiring. With 
                  experience in both academia and the professional world, he brings a rare 
                  balance of real-world understanding and academic depth.
                </p>
                <p>
                  Before shaping Lexplain&apos;s philosophy, Kawsar taught law at Metropolitan 
                  University, where he earned a reputation for simplifying complex legal ideas 
                  through logic and storytelling. Earlier, he worked at Grameenphone Ltd. as a 
                  Legal Executive, gaining firsthand insight into how legal theory connects with 
                  modern corporate practice.
                </p>
                <p>
                  A former champion debater and mooter, and ex-president of the Chittagong 
                  University Debating Society, Kawsar&apos;s communication style reflects the 
                  clarity and conviction that define his approach to teaching.
                </p>
                <p>
                  Lexplain grew out of his years of experience mentoring students who 
                  struggled to connect theory with real cases. Today, his methods continue to 
                  guide the platform&apos;s unique teaching model.
                </p>
              </div>
              <div className="mt-8 pt-6 border-t border-primary-foreground/20">
                <p className="text-lg italic text-primary-foreground/90">
                  &quot;Law is not hard. It just needs to be explained simply&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-1">
              <span className="text-sm text-muted-foreground">We Explain, We Make You Understand</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
                Why Choose Lexplain
              </h2>
              <p className="text-muted-foreground mb-6">
                Learn with clarity and succeed with excellence.
              </p>
              <Link href="/courses">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2">
                  Start Learning
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to be a Judge or Lawyer?"
        subtitle="Join Lexplain today. Transform preparation into power."
        buttonText="Step into Success"
      />

      <Footer />
    </div>
  )
}
