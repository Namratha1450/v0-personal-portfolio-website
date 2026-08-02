import { AnimatedSection, SectionTitle } from "./animated-section"
import { Award } from "lucide-react"

const certifications = [
  {
    provider: "NPTEL",
    certs: ["Python for Data Science (Elite Badge)"],
  },
  {
    provider: "AICTE",
    certs: ["Python with Machine Learning"],
  },
  {
    provider: "Infosys Springboard",
    certs: ["Programming Using Java"],
  },
  {
    provider: "HackerRank",
    certs: ["SQL (Basic)"],
  },
  {
    provider: "Cisco Networking Academy",
    certs: ["Python Essentials 1"],
  },
  {
    provider: "EduSkills",
    certs: ["Python Full Stack Development"],
  },
  {
    provider: "Tata Forage",
    certs: ["GenAI Powered Data Analytics Job Simulation"],
  },
]

export function CertificationsSection() {
  return (
    <AnimatedSection id="certifications">
      <SectionTitle>Certifications</SectionTitle>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl">
        {certifications.map((group) => (
          <div
            key={group.provider}
            className="anim-item glow-card rounded-lg px-4 py-3.5 bg-card text-left"
          >
            <div className="flex items-center gap-2 mb-2">
              <Award size={15} className="text-[#1E90FF]" />

              <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E90FF]">
                {group.provider}
              </h3>
            </div>

            <ul className="flex flex-col gap-1">
              {group.certs.map((cert) => (
                <li
                  key={cert}
                  className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5"
                >
                  <span className="w-1 h-1 rounded-full bg-[#00BFFF] flex-shrink-0" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
