import { AnimatedSection, SectionTitle } from "./animated-section"

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
      <div className="max-w-2xl space-y-0">
        {education.map((item, i) => (
          <div
            key={i}
            className={`anim-item flex gap-4 pb-4 ${
              i < education.length - 1 ? "timeline-line" : ""
            }`}
          >
            <div className="timeline-dot mt-1" />
            <div>
              <h3 className="text-sm sm:text-base font-semibold text-foreground">{item.title}</h3>
              {item.institution && (
                <p className="text-xs sm:text-sm text-muted-foreground">{item.institution}</p>
              )}
              {item.year && (
                <p className="text-xs sm:text-sm text-[#1E90FF] mt-0.5">{item.year}</p>
              )}
              <p className="text-xs sm:text-sm text-[#00BFFF] font-medium mt-0.5">{item.score}</p>
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
