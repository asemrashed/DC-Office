import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroProps {
  title: string
  subtitle?: string
  breadcrumb?: string
  showCTA?: boolean
  ctaText?: string
  secondaryCtaText?: string
}

export function Hero({
  title,
  subtitle,
  breadcrumb,
  showCTA = false,
  ctaText = "Start Learning",
  secondaryCtaText,
}: HeroProps) {
  return (
    <section className="bg-primary pt-28 pb-16 md:pt-36 md:pb-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-primary-foreground rounded-full" />
        <div className="absolute bottom-10 right-10 w-48 h-48 border border-primary-foreground rounded-full" />
        <div className="absolute top-1/2 left-1/4 w-20 h-20 border border-primary-foreground rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {subtitle && (
            <p className="text-primary-foreground/80 text-sm md:text-base mb-4">
              {subtitle}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 text-balance">
            {title}
          </h1>
          {breadcrumb && (
            <p className="text-primary-foreground/70 text-sm">
              Home - {breadcrumb}
            </p>
          )}
          {showCTA && (
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 gap-2"
              >
                {ctaText}
                <ArrowRight className="w-4 h-4" />
              </Button>
              {secondaryCtaText && (
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  {secondaryCtaText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
