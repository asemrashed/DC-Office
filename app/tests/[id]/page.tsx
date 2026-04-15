"use client"

import { useState } from "react"
import Image from "next/image"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { ExamModal } from "@/components/exam-modal"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  PlayCircle,
  Lock,
  FileText,
  ChevronDown,
} from "lucide-react"

// Sample test data - in real app this would come from API/database
const testData: Record<string, TestDetails> = {
  "ssc-math-test": {
    id: "ssc-math-test",
    title: "SSC Mathematics Model Test",
    image: "/images/test-ssc-math.jpg",
    category: "SSC",
    price: "Free",
    modules: [
      {
        id: "mod1",
        title: "Algebra and Number Systems",
        exams: [
          {
            id: "exam1",
            title: "MCQ Exam - Algebra Basics",
            isFree: true,
            totalMarks: 20,
            passMarks: 10,
            startTime: "Mar 4, 2026 2:39 PM",
            endTime: "Jun 7, 2026 2:39 PM",
            resultPublishTime: "Mar 4, 2026 2:39 PM",
            duration: "15 minutes",
          },
        ],
      },
      {
        id: "mod2",
        title: "Geometry Fundamentals",
        exams: [
          {
            id: "exam2",
            title: "MCQ Exam - Triangles",
            isFree: false,
            totalMarks: 25,
            passMarks: 13,
            startTime: "Mar 10, 2026 10:00 AM",
            endTime: "Jun 15, 2026 10:00 AM",
            resultPublishTime: "Mar 10, 2026 10:00 AM",
            duration: "20 minutes",
          },
        ],
      },
      {
        id: "mod3",
        title: "Trigonometry",
        exams: [
          {
            id: "exam3",
            title: "MCQ Exam - Trigonometric Ratios",
            isFree: false,
            totalMarks: 30,
            passMarks: 15,
            startTime: "Mar 15, 2026 2:00 PM",
            endTime: "Jun 20, 2026 2:00 PM",
            resultPublishTime: "Mar 15, 2026 2:00 PM",
            duration: "25 minutes",
          },
        ],
      },
      {
        id: "mod4",
        title: "Statistics and Probability",
        exams: [
          {
            id: "exam4",
            title: "MCQ Exam - Data Analysis",
            isFree: false,
            totalMarks: 20,
            passMarks: 10,
            startTime: "Mar 20, 2026 11:00 AM",
            endTime: "Jun 25, 2026 11:00 AM",
            resultPublishTime: "Mar 20, 2026 11:00 AM",
            duration: "15 minutes",
          },
        ],
      },
      {
        id: "mod5",
        title: "Mensuration",
        exams: [
          {
            id: "exam5",
            title: "MCQ Exam - Area and Volume",
            isFree: false,
            totalMarks: 25,
            passMarks: 13,
            startTime: "Mar 25, 2026 3:00 PM",
            endTime: "Jun 30, 2026 3:00 PM",
            resultPublishTime: "Mar 25, 2026 3:00 PM",
            duration: "20 minutes",
          },
        ],
      },
    ],
  },
}

// Default test for unknown IDs
const defaultTest: TestDetails = {
  id: "default",
  title: "Code of Civil Procedure, 1908",
  image: "/images/test-admission.jpg",
  category: "Model Test",
  price: "Free",
  modules: [
    {
      id: "mod1",
      title: "Module 01",
      exams: [
        {
          id: "exam1",
          title: "MCQ Exam",
          isFree: true,
          totalMarks: 20,
          passMarks: 10,
          startTime: "Mar 4, 2026 2:39 PM",
          endTime: "Jun 7, 2026 2:39 PM",
          resultPublishTime: "Mar 4, 2026 2:39 PM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod2",
      title: "Module 02",
      subtitle: "Jurisdiction, Objection Against Jurisdiction and Transfer of Civil Suits",
      exams: [
        {
          id: "exam2",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 20,
          passMarks: 10,
          startTime: "Mar 4, 2026 2:39 PM",
          endTime: "Jun 7, 2026 2:39 PM",
          resultPublishTime: "Mar 4, 2026 2:39 PM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod3",
      title: "Module 03",
      exams: [
        {
          id: "exam3",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 25,
          passMarks: 13,
          startTime: "Mar 10, 2026 10:00 AM",
          endTime: "Jun 15, 2026 10:00 AM",
          resultPublishTime: "Mar 10, 2026 10:00 AM",
          duration: "20 minutes",
        },
      ],
    },
    {
      id: "mod4",
      title: "Module 04",
      exams: [
        {
          id: "exam4",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 30,
          passMarks: 15,
          startTime: "Mar 15, 2026 2:00 PM",
          endTime: "Jun 20, 2026 2:00 PM",
          resultPublishTime: "Mar 15, 2026 2:00 PM",
          duration: "25 minutes",
        },
      ],
    },
    {
      id: "mod5",
      title: "Module 05",
      exams: [
        {
          id: "exam5",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 20,
          passMarks: 10,
          startTime: "Mar 20, 2026 11:00 AM",
          endTime: "Jun 25, 2026 11:00 AM",
          resultPublishTime: "Mar 20, 2026 11:00 AM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod6",
      title: "Module 06",
      exams: [
        {
          id: "exam6",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 25,
          passMarks: 13,
          startTime: "Mar 25, 2026 3:00 PM",
          endTime: "Jun 30, 2026 3:00 PM",
          resultPublishTime: "Mar 25, 2026 3:00 PM",
          duration: "20 minutes",
        },
      ],
    },
    {
      id: "mod7",
      title: "Module 07",
      exams: [
        {
          id: "exam7",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 30,
          passMarks: 15,
          startTime: "Apr 1, 2026 10:00 AM",
          endTime: "Jul 5, 2026 10:00 AM",
          resultPublishTime: "Apr 1, 2026 10:00 AM",
          duration: "25 minutes",
        },
      ],
    },
    {
      id: "mod8",
      title: "Module 08",
      exams: [
        {
          id: "exam8",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 20,
          passMarks: 10,
          startTime: "Apr 5, 2026 2:00 PM",
          endTime: "Jul 10, 2026 2:00 PM",
          resultPublishTime: "Apr 5, 2026 2:00 PM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod9",
      title: "Module 09",
      exams: [
        {
          id: "exam9",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 25,
          passMarks: 13,
          startTime: "Apr 10, 2026 11:00 AM",
          endTime: "Jul 15, 2026 11:00 AM",
          resultPublishTime: "Apr 10, 2026 11:00 AM",
          duration: "20 minutes",
        },
      ],
    },
    {
      id: "mod10",
      title: "Module 10",
      exams: [
        {
          id: "exam10",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 30,
          passMarks: 15,
          startTime: "Apr 15, 2026 3:00 PM",
          endTime: "Jul 20, 2026 3:00 PM",
          resultPublishTime: "Apr 15, 2026 3:00 PM",
          duration: "25 minutes",
        },
      ],
    },
    {
      id: "mod11",
      title: "Module 11",
      exams: [
        {
          id: "exam11",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 20,
          passMarks: 10,
          startTime: "Apr 20, 2026 10:00 AM",
          endTime: "Jul 25, 2026 10:00 AM",
          resultPublishTime: "Apr 20, 2026 10:00 AM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod12",
      title: "Module 12",
      exams: [
        {
          id: "exam12",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 25,
          passMarks: 13,
          startTime: "Apr 25, 2026 2:00 PM",
          endTime: "Jul 30, 2026 2:00 PM",
          resultPublishTime: "Apr 25, 2026 2:00 PM",
          duration: "20 minutes",
        },
      ],
    },
    {
      id: "mod13",
      title: "Module 13",
      exams: [
        {
          id: "exam13",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 30,
          passMarks: 15,
          startTime: "May 1, 2026 11:00 AM",
          endTime: "Aug 5, 2026 11:00 AM",
          resultPublishTime: "May 1, 2026 11:00 AM",
          duration: "25 minutes",
        },
      ],
    },
    {
      id: "mod14",
      title: "Module 14",
      exams: [
        {
          id: "exam14",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 20,
          passMarks: 10,
          startTime: "May 5, 2026 3:00 PM",
          endTime: "Aug 10, 2026 3:00 PM",
          resultPublishTime: "May 5, 2026 3:00 PM",
          duration: "15 minutes",
        },
      ],
    },
    {
      id: "mod15",
      title: "Module 15",
      exams: [
        {
          id: "exam15",
          title: "MCQ Exam",
          isFree: false,
          totalMarks: 25,
          passMarks: 13,
          startTime: "May 10, 2026 10:00 AM",
          endTime: "Aug 15, 2026 10:00 AM",
          resultPublishTime: "May 10, 2026 10:00 AM",
          duration: "20 minutes",
        },
      ],
    },
  ],
}

interface Exam {
  id: string
  title: string
  isFree: boolean
  totalMarks: number
  passMarks: number
  startTime: string
  endTime: string
  resultPublishTime: string
  duration: string
}

interface Module {
  id: string
  title: string
  subtitle?: string
  exams: Exam[]
}

interface TestDetails {
  id: string
  title: string
  image: string
  category: string
  price: string | number
  modules: Module[]
}

export default function TestDetailsPage() {
  const params = useParams()
  const testId = params.id as string
  const test = testData[testId] || defaultTest

  const [examModal, setExamModal] = useState<{
    isOpen: boolean
    exam: Exam | null
  }>({
    isOpen: false,
    exam: null,
  })

  const openExamModal = (exam: Exam) => {
    setExamModal({
      isOpen: true,
      exam,
    })
  }

  const closeExamModal = () => {
    setExamModal({ isOpen: false, exam: null })
  }

  // Track which is the first exam overall
  let isFirstExamGlobal = true

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Model Test Details"
        breadcrumb="Model Test Details"
      />

      {/* Test Details Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Test Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {test.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Tabs */}
              <Tabs defaultValue="exam-topic" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-0">
                  <TabsTrigger
                    value="test-details"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Test Details
                  </TabsTrigger>
                  <TabsTrigger
                    value="exam-topic"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3"
                  >
                    Exam Topic
                  </TabsTrigger>
                  <TabsTrigger
                    value="examiner"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Examiner
                  </TabsTrigger>
                  <TabsTrigger
                    value="routine"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Routine
                  </TabsTrigger>
                </TabsList>

                {/* Test Details Tab */}
                <TabsContent value="test-details" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Test Details</h3>
                  <p className="text-muted-foreground">
                    This model test series is designed to help you prepare for your exams with comprehensive MCQ-based assessments covering all major topics.
                  </p>
                </TabsContent>

                {/* Exam Topic Tab */}
                <TabsContent value="exam-topic" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Exam Topic</h3>
                  <Accordion type="single" collapsible defaultValue="mod1" className="w-full">
                    {test.modules.map((module, moduleIndex) => {
                      return (
                        <AccordionItem
                          key={module.id}
                          value={module.id}
                          className="border rounded-lg mb-2 px-4"
                        >
                          <AccordionTrigger className="hover:no-underline">
                            <div className="flex items-center justify-between w-full pr-4">
                              <div className="flex items-center gap-3">
                                <PlayCircle className="w-5 h-5 text-primary" />
                                <span className="font-medium">{module.title}</span>
                              </div>
                              <Badge variant="outline" className="text-primary border-primary">
                                Free
                              </Badge>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent>
                            {module.subtitle && (
                              <p className="text-sm text-muted-foreground mb-3 pl-8">
                                {module.subtitle}
                              </p>
                            )}
                            <div className="space-y-2 pl-8">
                              {module.exams.map((exam) => {
                                const isFirstExam = isFirstExamGlobal
                                if (isFirstExamGlobal) {
                                  isFirstExamGlobal = false
                                }

                                return (
                                  <div
                                    key={exam.id}
                                    className="flex items-center justify-between py-2 border-b last:border-0"
                                  >
                                    <div className="flex items-center gap-3">
                                      <FileText className="w-4 h-4 text-primary" />
                                      <span className="text-sm">{exam.title}</span>
                                    </div>
                                    {isFirstExam ? (
                                      <button
                                        onClick={() => openExamModal(exam)}
                                        className="text-sm text-primary hover:underline"
                                      >
                                        Free
                                      </button>
                                    ) : (
                                      <button
                                        className="text-muted-foreground"
                                        disabled
                                      >
                                        <Lock className="w-4 h-4" />
                                      </button>
                                    )}
                                  </div>
                                )
                              })}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      )
                    })}
                  </Accordion>
                </TabsContent>

                {/* Examiner Tab */}
                <TabsContent value="examiner" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Examiner</h3>
                  <div className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden bg-secondary">
                      <Image
                        src="/images/founder.jpg"
                        alt="Examiner"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">Expert Examiner Team</h4>
                      <p className="text-sm text-muted-foreground">
                        Experienced educators with years of exam preparation expertise
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Routine Tab */}
                <TabsContent value="routine" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Routine</h3>
                  <p className="text-muted-foreground">
                    Exam schedule will be published soon. Stay tuned for updates.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Course Card */}
            <aside className="w-full lg:w-80 shrink-0">
              <div className="bg-card rounded-xl border shadow-sm overflow-hidden sticky top-4">
                {/* Test Image Card */}
                <div className="relative aspect-[4/3] bg-primary overflow-hidden">
                  <div className="absolute inset-0 p-4 flex flex-col">
                    <div className="flex items-center justify-between">
                      <Badge className="bg-primary-foreground/20 text-primary-foreground border-0">
                        Model Test
                      </Badge>
                      <span className="text-primary-foreground text-sm font-medium">
                        EduLearn
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center text-center">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center mb-2">
                        <FileText className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <h3 className="text-lg font-bold text-primary-foreground mb-1">
                        MCQ Tests
                      </h3>
                      <div className="bg-yellow-400 text-yellow-900 px-3 py-1 rounded text-sm font-semibold">
                        {test.title}
                      </div>
                      <p className="text-primary-foreground/80 text-xs mt-2">
                        BAR & BJS Preliminary
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="p-4">
                  <p className="text-lg font-bold text-primary mb-3">
                    {test.price === "Free" ? "Free" : `৳${test.price}`}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    {test.price === "Free" ? "Free" : "Enroll Now"}
                  </Button>
                </div>
              </div>
            </aside>
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

      {/* Exam Modal */}
      <ExamModal
        isOpen={examModal.isOpen}
        onClose={closeExamModal}
        exam={examModal.exam ? {
          title: examModal.exam.title,
          totalMarks: examModal.exam.totalMarks,
          passMarks: examModal.exam.passMarks,
          startTime: examModal.exam.startTime,
          endTime: examModal.exam.endTime,
          resultPublishTime: examModal.exam.resultPublishTime,
          duration: examModal.exam.duration,
        } : null}
      />
    </main>
  )
}
