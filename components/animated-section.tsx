"use client"

import { useEffect, useRef, type ReactNode } from "react"

export function AnimatedSection({
  children,
  id,
  className = "",
}: {
  children: ReactNode
  id: string
  className?: string
}) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animItems = entry.target.querySelectorAll(".anim-item")
            animItems.forEach((item, i) => {
              const el = item as HTMLElement
              el.style.animationDelay = `${i * 0.1}s`
              el.classList.add("animate-fade-up")
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id={id} className={`py-12 ${className}`}>
      <div className="mx-auto max-w-6xl px-4">{children}</div>
    </section>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="anim-item text-2xl font-bold mb-6 tracking-tight">
      <span className="blue-gradient-text">{children}</span>
    </h2>
  )
}
