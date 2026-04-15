"use client"

import { X, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

interface ExamDetails {
  title: string
  totalMarks: number
  passMarks: number
  startTime: string
  endTime: string
  resultPublishTime: string
  duration: string
}

interface ExamModalProps {
  isOpen: boolean
  onClose: () => void
  exam: ExamDetails | null
}

export function ExamModal({ isOpen, onClose, exam }: ExamModalProps) {
  if (!exam) return null

  const tableRows = [
    { label: "Exam Title", value: exam.title },
    { label: "Total Marks", value: exam.totalMarks.toString() },
    { label: "Pass Marks", value: exam.passMarks.toString() },
    { label: "Start Time", value: exam.startTime },
    { label: "End Time", value: exam.endTime },
    { label: "Result Publish Time", value: exam.resultPublishTime },
    { label: "Exam Duration", value: exam.duration },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="sm:max-w-[600px] p-0 overflow-hidden"
        showCloseButton={false}
      >
        {/* Blue Header */}
        <DialogHeader className="bg-primary p-4 flex-row items-center justify-between">
          <DialogTitle className="text-primary-foreground font-semibold">
            {exam.title}
          </DialogTitle>
          <button
            onClick={onClose}
            className="text-primary-foreground hover:text-primary-foreground/80 transition-colors"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close</span>
          </button>
        </DialogHeader>

        {/* Table Content */}
        <div className="p-6">
          <table className="w-full border-collapse border border-border">
            <tbody>
              {tableRows.map((row, index) => (
                <tr 
                  key={row.label}
                  className={index % 2 === 0 ? "bg-green-50" : "bg-background"}
                >
                  <td className="border border-border px-4 py-3 font-medium text-foreground">
                    {row.label}
                  </td>
                  <td className="border border-border px-4 py-3 text-foreground">
                    {row.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Info Banner */}
          <div className="mt-4 bg-yellow-100 border border-yellow-300 rounded-md p-3 flex items-start gap-2">
            <Info className="w-5 h-5 text-yellow-600 shrink-0 mt-0.5" />
            <p className="text-sm text-yellow-800">
              &quot;You need to enroll in the course before you can take the exam.&quot;
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
