import { AnimatedSection, SectionTitle } from "./animated-section"

const education = [
  {
    title: "B.Tech CSE (Data Science)",
    institution: "Raghu Engineering College",
    year: "2023 - 2027",
  },
  {
    title: "Intermediate - MPC",
    institution: "Tirumala Mahila Junior Kalasala",
    year: "",
  },
  {
    title: "Schooling",
    institution: "Bhashyam EM High School",
    year: "",
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
            className={`anim-item flex gap-4 pb-5 ${
              i < education.length - 1 ? "timeline-line" : ""
            }`}
          >
            <div className="timeline-dot mt-1" />
            <div>
              <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.institution}</p>
              {item.year && (
                <p className="text-xs text-[#1E90FF] mt-0.5">{item.year}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
