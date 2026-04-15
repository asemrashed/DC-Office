import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title?: string
  subtitle?: string
  buttonText?: string
}

export function CTASection({
  title = "Ready to be a Successful Student?",
  subtitle = "Join EduLearn today. Transform preparation into excellence.",
  buttonText = "Step into Success",
}: CTASectionProps) {
  return (
    <section className="bg-primary py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-64 h-64 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 border border-primary-foreground rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
          {title}
        </h2>
        <p className="text-primary-foreground/80 mb-8">{subtitle}</p>
        <Button
          size="lg"
          className="bg-white text-primary hover:bg-white/90 gap-2"
        >
          {buttonText}
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}
