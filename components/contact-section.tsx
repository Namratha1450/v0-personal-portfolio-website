"use client"

import { AnimatedSection, SectionTitle } from "./animated-section"
import { Mail, Linkedin, Github, Code2, Send } from "lucide-react"
import { useState } from "react"

const links = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:namrathachowdary@example.com",
    text: "namrathachowdary@example.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/",
    text: "linkedin.com/in/namratha",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/",
    text: "github.com/namratha",
  },
  {
    icon: Code2,
    label: "CodeChef",
    href: "https://www.codechef.com/users/",
    text: "codechef.com/namratha",
  },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <AnimatedSection id="contact">
      <SectionTitle>Contact</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
        {/* Links */}
        <div className="anim-item flex flex-col gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center group-hover:bg-[#1E90FF22] transition-colors group-hover:shadow-[0_0_16px_#1E90FF33] border border-border">
                <link.icon size={16} className="text-[#1E90FF]" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-sm text-foreground group-hover:text-[#00BFFF] transition-colors">
                  {link.text}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="anim-item flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            required
            className="glow-focus w-full px-3.5 py-2.5 text-sm rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground transition-all"
          />
          <input
            type="email"
            placeholder="Email"
            required
            className="glow-focus w-full px-3.5 py-2.5 text-sm rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground transition-all"
          />
          <textarea
            placeholder="Message"
            rows={3}
            required
            className="glow-focus w-full px-3.5 py-2.5 text-sm rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground transition-all resize-none"
          />
          <button
            type="submit"
            className="btn-shine self-start flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:shadow-[0_0_24px_#1E90FF44] transition-all cursor-pointer"
          >
            <Send size={14} />
            {submitted ? "Sent!" : "Send Message"}
          </button>
        </form>
      </div>
    </AnimatedSection>
  )
}
