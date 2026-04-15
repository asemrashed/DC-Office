"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "All Courses" },
  { href: "/tests", label: "Model Test" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname.startsWith(href)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 pt-3">
      <div
        className={cn(
          "max-w-7xl mx-auto rounded-full transition-all duration-300",
          "bg-primary/95 backdrop-blur-md",
          "border border-white/30"
        )}
      >
        <div className="px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary-foreground p-1"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-primary-foreground tracking-tight">
                lex<span className="font-light">plain</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors rounded-full",
                    isActive(link.href)
                      ? "text-primary-foreground underline underline-offset-4 decoration-2"
                      : "text-primary-foreground/80 hover:text-primary-foreground"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Login Button - Desktop */}
            <div className="hidden md:flex items-center">
              <Link href="/login">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary-foreground hover:bg-primary-foreground/10 gap-2 rounded-full"
                >
                  <User className="w-4 h-4" />
                  Login
                </Button>
              </Link>
            </div>

            {/* Login Button - Mobile */}
            <Link
              href="/login"
              className="md:hidden text-primary-foreground p-1"
              aria-label="Login"
            >
              <User className="w-6 h-6" />
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="px-6 flex flex-col gap-1 border-t border-primary-foreground/10 pt-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "py-2.5 px-4 text-sm font-medium transition-colors rounded-lg",
                  isActive(link.href)
                    ? "text-primary-foreground bg-primary-foreground/10"
                    : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/5"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button
                variant="ghost"
                className="w-full text-primary-foreground hover:bg-primary-foreground/10 gap-2 justify-start mt-2 rounded-lg"
              >
                <User className="w-4 h-4" />
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
