import { AnimatedSection, SectionTitle } from "./animated-section"
import { GraduationCap } from "lucide-react"

const education = [
  {
    title: "B.Tech CSE (Data Science)",
    institution: "Raghu Engineering College",
    year: "2023 - 2027",
    score: "CGPA: 9.07",
  },
  {
    title: "Intermediate - MPC",
    institution: "Tirumala Mahila Junior Kalasala",
    year: "",
    score: "Percentage: 97%",
  },
  {
    title: "10th - Bhashyam EM High School",
    institution: "",
    year: "",
    score: "Percentage: 95%",
  },
]

export function EducationSection() {
  return (
    <AnimatedSection id="education">
      <SectionTitle>Education</SectionTitle>
      <div className="flex flex-col gap-3 max-w-2xl">
        {education.map((item, i) => (
          <div
            key={i}
            className="anim-item glow-card rounded-lg px-5 py-4 bg-card text-left"
          >
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-md bg-secondary flex items-center justify-center border border-border flex-shrink-0 mt-0.5">
                <GraduationCap size={16} className="text-[#1E90FF]" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{item.title}</h3>
                {item.institution && (
                  <p className="text-xs sm:text-sm text-muted-foreground mt-0.5">{item.institution}</p>
                )}
                {item.year && (
                  <p className="text-xs sm:text-sm text-[#1E90FF] mt-0.5">{item.year}</p>
                )}
                <p className="text-xs sm:text-sm text-[#00BFFF] font-medium mt-0.5">{item.score}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
