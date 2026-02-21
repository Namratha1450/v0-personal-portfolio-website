"use client"

import { useEffect, useRef } from "react"
import { FileDown } from "lucide-react"

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
      className="relative min-h-[80vh] flex items-center pt-14 overflow-hidden"
    >
      {/* Subtle wave background */}
      <div
        className="absolute inset-0 animate-wave-bg opacity-30"
        style={{
          background:
            "linear-gradient(135deg, #05070D 0%, #0a1628 25%, #05070D 50%, #091525 75%, #05070D 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl w-full px-5 py-10">
        <p className="hero-animate text-sm tracking-[0.3em] uppercase text-muted-foreground mb-2 font-mono">
          Portfolio
        </p>
        <h1 className="hero-animate text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-3">
          <span className="text-foreground">NAMRATHA CHOWDARY</span>
          <br />
          <span className="blue-gradient-text">GUNDAPUNEEDI</span>
        </h1>
        <p className="hero-animate text-lg sm:text-xl text-muted-foreground mb-1.5">
          B.Tech CSE (Data Science) | Aspiring Data Analyst
        </p>
        <p className="hero-animate text-base text-[#00BFFF] tracking-wide mb-6">
          Transforming Data into Strategic Insights
        </p>

        <div className="hero-animate flex flex-wrap gap-3">
          <a
            href="https://drive.google.com/file/d/1-ls7ca1_MbDnDlh6tQr567H066RcKzf0/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-md bg-primary text-primary-foreground hover:shadow-[0_0_24px_#1E90FF55] transition-all"
          >
            <FileDown size={16} />
            Resume
          </a>
          <button
            onClick={() =>
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2.5 text-sm font-medium rounded-md border border-border text-foreground hover:border-primary hover:shadow-[0_0_16px_#1E90FF22] transition-all cursor-pointer"
          >
            Get in Touch
          </button>
          <button
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-5 py-2.5 text-sm font-medium rounded-md border border-border text-foreground hover:border-primary hover:shadow-[0_0_16px_#1E90FF22] transition-all cursor-pointer"
          >
            View Work
          </button>
        </div>
      </div>
    </section>
  )
}
