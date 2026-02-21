"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  "Home", "About", "Education", "Skills", "Projects", "Internships", "Certifications", "Contact"
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (id: string) => {
    setMobileOpen(false)
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-4xl flex items-center justify-between px-6 py-2.5">
        <button
          onClick={() => handleClick("home")}
          className="text-xl font-bold tracking-wider blue-gradient-text cursor-pointer"
        >
          NCG
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="px-2.5 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-[#1E90FF11] cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden glass-nav border-t border-border px-6 py-3">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className="block w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
