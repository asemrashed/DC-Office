"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Footer } from "@/components/footer"
import { CTASection } from "@/components/cta-section"
import { CourseCard } from "@/components/course-card"
import { VideoModal } from "@/components/video-modal"
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
  Clock,
  Calendar,
  Users,
  ChevronLeft,
  ChevronRight,
  Download,
} from "lucide-react"

// Sample course data - in real app this would come from API/database
const courseData = {
  "hsc-physics": {
    id: "hsc-physics",
    title: "HSC Physics Complete Course",
    image: "/images/course-physics.jpg",
    category: "HSC",
    price: 1200,
    originalPrice: 2000,
    validity: "3 Months",
    discountTill: "12 Apr 2026",
    lessons: 15,
    pdfNotes: 5,
    modelTests: 4,
    students: 139,
    instructor: {
      name: "Dr. Rafiq Ahmed",
      title: "Physics Professor & Education Specialist",
      image: "/images/founder.jpg",
    },
    description: `This comprehensive HSC Physics course is designed to help students master all concepts from the HSC syllabus. Whether you're preparing for board exams or building a strong foundation for university admission tests, this course covers everything you need.

We provide clear explanations, practical examples, and step-by-step problem-solving techniques. Each lesson is carefully structured to build upon previous knowledge, ensuring a smooth learning experience.

Our mission is simple — to turn confusion into clarity. Every topic is presented in a way that makes complex physics concepts easy to understand.`,
    modules: [
      {
        id: "mod1",
        title: "Mechanics and Motion",
        progress: 100,
        lessons: [
          { id: "l1", title: "Introduction to Physics", type: "video", isFree: true },
          { id: "l2", title: "Newton's Laws of Motion", type: "video", isFree: false },
          { id: "l3", title: "Work, Energy and Power", type: "pdf", isFree: false },
        ],
      },
      {
        id: "mod2",
        title: "Waves and Optics",
        progress: 100,
        lessons: [
          { id: "l4", title: "Wave Properties", type: "video", isFree: false },
          { id: "l5", title: "Light and Reflection", type: "video", isFree: false },
          { id: "l6", title: "Refraction and Lenses", type: "pdf", isFree: false },
        ],
      },
      {
        id: "mod3",
        title: "Electricity and Magnetism",
        progress: 100,
        lessons: [
          { id: "l7", title: "Electric Charge", type: "video", isFree: false },
          { id: "l8", title: "Current Electricity", type: "video", isFree: false },
          { id: "l9", title: "Magnetic Fields", type: "video", isFree: false },
        ],
      },
      {
        id: "mod4",
        title: "Modern Physics",
        progress: 100,
        lessons: [
          { id: "l10", title: "Atomic Structure", type: "video", isFree: false },
          { id: "l11", title: "Nuclear Physics", type: "video", isFree: false },
          { id: "l12", title: "Final Assessment", type: "test", isFree: false },
        ],
      },
    ],
  },
}

// Default course for unknown IDs
const defaultCourse = {
  id: "default",
  title: "SSC Mathematics Master Class",
  image: "/images/course-math.jpg",
  category: "SSC",
  price: 800,
  originalPrice: 1500,
  validity: "3 Months",
  discountTill: "12 Apr 2026",
  lessons: 12,
  pdfNotes: 4,
  modelTests: 3,
  students: 156,
  instructor: {
    name: "Prof. Kamal Hassan",
    title: "Mathematics Expert & Educator",
    image: "/images/founder.jpg",
  },
  description: `Master SSC Mathematics with our comprehensive course designed specifically for board exam preparation. This course covers the entire SSC math syllabus with clear explanations and plenty of practice problems.

Our approach focuses on building strong fundamentals while preparing you for exam-style questions. Each module includes video lessons, PDF notes, and practice tests to ensure complete understanding.

Join thousands of successful students who have improved their math skills with our proven teaching methods.`,
  modules: [
    {
      id: "mod1",
      title: "Number Systems and Algebra",
      progress: 100,
      lessons: [
        { id: "l1", title: "Real Numbers", type: "video", isFree: true },
        { id: "l2", title: "Algebraic Expressions", type: "video", isFree: false },
        { id: "l3", title: "Linear Equations", type: "pdf", isFree: false },
      ],
    },
    {
      id: "mod2",
      title: "Geometry Fundamentals",
      progress: 100,
      lessons: [
        { id: "l4", title: "Triangles and Properties", type: "video", isFree: false },
        { id: "l5", title: "Circles and Theorems", type: "video", isFree: false },
        { id: "l6", title: "Coordinate Geometry", type: "pdf", isFree: false },
      ],
    },
    {
      id: "mod3",
      title: "Trigonometry",
      progress: 100,
      lessons: [
        { id: "l7", title: "Trigonometric Ratios", type: "video", isFree: false },
        { id: "l8", title: "Applications", type: "video", isFree: false },
        { id: "l9", title: "Practice Problems", type: "test", isFree: false },
      ],
    },
  ],
}

const relatedCourses = [
  {
    title: "HSC Chemistry Blueprint",
    image: "/images/course-chemistry.jpg",
    category: "HSC",
    price: 1000,
    reviews: 28,
    lessons: 10,
  },
  {
    title: "University Admission Guide",
    image: "/images/course-admission.jpg",
    category: "Admission",
    price: 1500,
    originalPrice: 2500,
    reviews: 67,
    lessons: 20,
  },
  {
    title: "English Grammar Foundation",
    image: "/images/course-english.jpg",
    category: "Academic",
    price: "Free" as const,
    reviews: 56,
    lessons: 8,
  },
  {
    title: "Biology for HSC",
    image: "/images/course-biology.jpg",
    category: "HSC",
    price: 900,
    reviews: 23,
    lessons: 14,
  },
]

export default function CourseDetailsPage() {
  const params = useParams()
  const courseId = params.id as string
  const course = courseData[courseId as keyof typeof courseData] || defaultCourse

  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean
    title: string
    lessonIndex: number
  }>({
    isOpen: false,
    title: "",
    lessonIndex: 0,
  })

  const [routinePageIndex, setRoutinePageIndex] = useState(0)
  const totalRoutinePages = 3

  // Flatten all lessons for navigation
  const allLessons = course.modules.flatMap((mod) =>
    mod.lessons.map((lesson) => ({
      ...lesson,
      moduleName: mod.title,
    }))
  )

  const openVideoModal = (lessonTitle: string, lessonIndex: number) => {
    setVideoModal({
      isOpen: true,
      title: lessonTitle,
      lessonIndex,
    })
  }

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, title: "", lessonIndex: 0 })
  }

  const goToPreviousLesson = () => {
    if (videoModal.lessonIndex > 0) {
      const prevLesson = allLessons[videoModal.lessonIndex - 1]
      if (prevLesson.isFree || videoModal.lessonIndex === 1) {
        setVideoModal({
          isOpen: true,
          title: prevLesson.title,
          lessonIndex: videoModal.lessonIndex - 1,
        })
      }
    }
  }

  const goToNextLesson = () => {
    if (videoModal.lessonIndex < allLessons.length - 1) {
      const nextLesson = allLessons[videoModal.lessonIndex + 1]
      if (nextLesson.isFree) {
        setVideoModal({
          isOpen: true,
          title: nextLesson.title,
          lessonIndex: videoModal.lessonIndex + 1,
        })
      }
    }
  }

  // Find global index for a lesson
  const findLessonGlobalIndex = (moduleIndex: number, lessonIndex: number) => {
    let globalIndex = 0
    for (let i = 0; i < moduleIndex; i++) {
      globalIndex += course.modules[i].lessons.length
    }
    return globalIndex + lessonIndex
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Course Details"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Courses", href: "/courses" },
          { label: "Course Details" },
        ]}
      />

      {/* Course Details Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Course Title */}
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
            {course.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Content */}
            <div className="flex-1">
              {/* Course Meta */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-1">
                  <PlayCircle className="w-4 h-4" />
                  <span>{course.lessons} Lessons</span>
                </div>
                <div className="flex items-center gap-1">
                  <FileText className="w-4 h-4" />
                  <span>{course.pdfNotes} PDF Notes</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{course.modelTests} Model Tests</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  <span>{course.students} Students</span>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 gap-0">
                  <TabsTrigger
                    value="description"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground px-6 py-3"
                  >
                    Description
                  </TabsTrigger>
                  <TabsTrigger
                    value="content"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Course Content
                  </TabsTrigger>
                  <TabsTrigger
                    value="instructor"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Instructor
                  </TabsTrigger>
                  <TabsTrigger
                    value="routine"
                    className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-6 py-3"
                  >
                    Routine
                  </TabsTrigger>
                </TabsList>

                {/* Description Tab */}
                <TabsContent value="description" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Description</h3>
                  <div className="prose prose-sm max-w-none text-muted-foreground">
                    {course.description.split("\n\n").map((paragraph, index) => (
                      <p key={index} className="mb-4">
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold mt-8 mb-4">Course Content</h3>
                  <Accordion type="multiple" className="w-full">
                    {course.modules.map((module, moduleIndex) => (
                      <AccordionItem
                        key={module.id}
                        value={module.id}
                        className="border rounded-lg mb-2 px-4"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-5 h-5 text-primary" />
                            <span className="font-medium">{module.title}</span>
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              {module.progress}%
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-8">
                            {module.lessons.map((lesson, lessonIndex) => {
                              const globalIndex = findLessonGlobalIndex(
                                moduleIndex,
                                lessonIndex
                              )
                              const isFirstLesson =
                                moduleIndex === 0 && lessonIndex === 0

                              return (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between py-2 border-b last:border-0"
                                >
                                  <div className="flex items-center gap-3">
                                    {lesson.type === "video" ? (
                                      <PlayCircle className="w-4 h-4 text-primary" />
                                    ) : lesson.type === "pdf" ? (
                                      <FileText className="w-4 h-4 text-primary" />
                                    ) : (
                                      <Clock className="w-4 h-4 text-primary" />
                                    )}
                                    <span className="text-sm">{lesson.title}</span>
                                  </div>
                                  {isFirstLesson ? (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                                      onClick={() =>
                                        openVideoModal(lesson.title, globalIndex)
                                      }
                                    >
                                      Watch
                                    </Button>
                                  ) : (
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-muted-foreground"
                                      disabled
                                    >
                                      <Lock className="w-4 h-4" />
                                    </Button>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                {/* Course Content Tab */}
                <TabsContent value="content" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Course Content</h3>
                  <Accordion type="multiple" className="w-full">
                    {course.modules.map((module, moduleIndex) => (
                      <AccordionItem
                        key={module.id}
                        value={module.id}
                        className="border rounded-lg mb-2 px-4"
                      >
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="w-5 h-5 text-primary" />
                            <span className="font-medium">{module.title}</span>
                            <Badge className="bg-primary text-primary-foreground text-xs">
                              {module.progress}%
                            </Badge>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 pl-8">
                            {module.lessons.map((lesson, lessonIndex) => {
                              const globalIndex = findLessonGlobalIndex(
                                moduleIndex,
                                lessonIndex
                              )
                              const isFirstLesson =
                                moduleIndex === 0 && lessonIndex === 0

                              return (
                                <div
                                  key={lesson.id}
                                  className="flex items-center justify-between py-2 border-b last:border-0"
                                >
                                  <div className="flex items-center gap-3">
                                    {lesson.type === "video" ? (
                                      <PlayCircle className="w-4 h-4 text-primary" />
                                    ) : lesson.type === "pdf" ? (
                                      <FileText className="w-4 h-4 text-primary" />
                                    ) : (
                                      <Clock className="w-4 h-4 text-primary" />
                                    )}
                                    <span className="text-sm">{lesson.title}</span>
                                  </div>
                                  {isFirstLesson ? (
                                    <Button
                                      size="sm"
                                      variant="outline"
                                      className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
                                      onClick={() =>
                                        openVideoModal(lesson.title, globalIndex)
                                      }
                                    >
                                      Watch
                                    </Button>
                                  ) : (
                                    <Button
                                      size="sm"
                                      variant="ghost"
                                      className="text-muted-foreground"
                                      disabled
                                    >
                                      <Lock className="w-4 h-4" />
                                    </Button>
                                  )}
                                </div>
                              )
                            })}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                {/* Instructor Tab */}
                <TabsContent value="instructor" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Instructor</h3>
                  <div className="flex items-start gap-4">
                    <div className="relative w-20 h-20 rounded-full overflow-hidden bg-secondary">
                      <Image
                        src={course.instructor.image}
                        alt={course.instructor.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {course.instructor.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {course.instructor.title}
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        An experienced educator dedicated to making learning
                        accessible and enjoyable for all students. With years of
                        teaching experience, they bring complex topics to life through
                        clear explanations and practical examples.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                {/* Routine Tab */}
                <TabsContent value="routine" className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Routine</h3>

                  {/* Pagination */}
                  <div className="flex items-center gap-4 mb-4">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setRoutinePageIndex((i) => Math.max(0, i - 1))
                      }
                      disabled={routinePageIndex === 0}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      {routinePageIndex + 1} / {totalRoutinePages}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() =>
                        setRoutinePageIndex((i) =>
                          Math.min(totalRoutinePages - 1, i + 1)
                        )
                      }
                      disabled={routinePageIndex === totalRoutinePages - 1}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                    <label className="flex items-center gap-2 text-sm">
                      <input type="checkbox" className="rounded" />
                      Show all pages
                    </label>
                  </div>

                  {/* Routine Preview */}
                  <div className="border rounded-lg p-4 bg-card">
                    <div className="aspect-[4/3] bg-secondary rounded flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <FileText className="w-12 h-12 mx-auto mb-2" />
                        <p>Routine PDF Preview</p>
                        <p className="text-sm">Page {routinePageIndex + 1}</p>
                      </div>
                    </div>
                  </div>

                  {/* Download Link */}
                  <Button variant="link" className="mt-4 text-primary gap-2 p-0">
                    <Download className="w-4 h-4" />
                    Download
                  </Button>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Sidebar - Course Card */}
            <aside className="w-full lg:w-80 shrink-0">
              <div className="bg-card border rounded-xl overflow-hidden sticky top-24">
                {/* Course Image */}
                <div className="relative aspect-[4/3] bg-secondary">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    {course.category}
                  </Badge>
                </div>

                {/* Course Info */}
                <div className="p-5">
                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground mb-1">Full Course</p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-3xl font-bold text-primary">
                        ৳ {course.price}
                      </span>
                      {course.originalPrice && (
                        <span className="text-muted-foreground line-through">
                          ৳{course.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>Validity:</span>
                      <span className="text-foreground font-medium">
                        {course.validity}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Discount till</span>
                      <span className="text-foreground font-medium">
                        {course.discountTill}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Enroll Full Course
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-secondary"
                    >
                      Start Specific Topic
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* More Related Courses */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              More Related Courses
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedCourses.map((course, index) => (
              <Link key={index} href={`/courses/${index}`}>
                <CourseCard {...course} variant="course" />
              </Link>
            ))}
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

      {/* Video Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={closeVideoModal}
        title={videoModal.title}
        hasPrevious={videoModal.lessonIndex > 0 && allLessons[0]?.isFree}
        hasNext={
          videoModal.lessonIndex < allLessons.length - 1 &&
          allLessons[videoModal.lessonIndex + 1]?.isFree
        }
        onPrevious={goToPreviousLesson}
        onNext={goToNextLesson}
      />
    </main>
  )
}
