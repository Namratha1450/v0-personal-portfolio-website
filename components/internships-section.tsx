import { AnimatedSection, SectionTitle } from "./animated-section"
import { Briefcase } from "lucide-react"

const internships = [
  {
    title: "Interactive Data Visualization Virtual Internship",
    subtitle: "Infosys Springboard • Feb 2026 – Apr 2026",
    status: "Completed",
    details: [
      "Cleaned and analyzed Global Travel & Holidays dataset",
      "Performed data preprocessing and visualization",
      "Developed interactive dashboards",
      "Extracted business insights through data analysis",
    ],
  },
  {
    title: "Python Full Stack Development Virtual Internship",
    subtitle: "EduSkills • Jul 2025 – Sep 2025",
    status: "Completed",
    details: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Python",
      "Database Integration",
    ],
  },
]

export function InternshipsSection() {
  return (
    <AnimatedSection id="internships">
      <SectionTitle>Internships</SectionTitle>

      <div className="flex flex-col gap-3 max-w-2xl">
        {internships.map((item, i) => (
          <div
            key={i}
            className="anim-item glow-card rounded-lg px-5 py-4 bg-card text-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                <Briefcase size={16} className="text-[#1E90FF]" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-sm sm:text-base font-semibold text-foreground">
                    {item.title}
                  </h3>

                  <span
                    className={`text-[11px] px-2 py-0.5 rounded-full font-medium flex-shrink-0 ${
                      item.status === "Completed"
                        ? "bg-[#00BFFF22] text-[#00BFFF]"
                        : "bg-[#1E90FF22] text-[#1E90FF]"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {item.subtitle}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.details.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
