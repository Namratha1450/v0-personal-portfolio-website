"use client"

import { useEffect, useRef } from "react"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll(".hero-animate")
    els?.forEach((el, i) => {
      const htmlEl = el as HTMLElement
      htmlEl.style.animationDelay = `${i * 0.15}s`
      htmlEl.classList.add("animate-slide-left")
    })
  }, [])

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-[85vh] flex items-center pt-16 overflow-hidden"
    >
      {/* Subtle wave background */}
      <div
        className="absolute inset-0 animate-wave-bg opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #05070D 0%, #0a1628 25%, #05070D 50%, #091525 75%, #05070D 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        <p className="hero-animate text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3 font-mono">
          Portfolio
        </p>
        <h1 className="hero-animate text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight mb-3">
          <span className="text-foreground">NAMRATHA CHOWDARY</span>
          <br />
          <span className="blue-gradient-text">GUNDAPUNEEDI</span>
        </h1>
        <p className="hero-animate text-base sm:text-lg text-muted-foreground mb-2">
          B.Tech CSE (Data Science) | Aspiring Data Analyst
        </p>
        <p className="hero-animate text-sm text-[#00BFFF] tracking-wide">
          Transforming Data into Strategic Insights
        </p>

        <div className="hero-animate mt-6 flex gap-3">
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:shadow-[0_0_20px_#1E90FF44] transition-all cursor-pointer"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2 text-sm font-medium rounded-md border border-border text-foreground hover:border-primary hover:shadow-[0_0_16px_#1E90FF22] transition-all cursor-pointer"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  )
}
