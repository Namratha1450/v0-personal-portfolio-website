import { AnimatedSection, SectionTitle } from "./animated-section"

const skillCategories = [
  { label: "Frontend", skills: ["HTML", "CSS", "JavaScript", "Bootstrap"] },
  { label: "Backend", skills: ["Python", "OOPS"] },
  { label: "Database", skills: ["SQL", "DBMS"] },
  { label: "Libraries", skills: ["Pandas", "NumPy", "Matplotlib"] },
  { label: "Tools", skills: ["Power BI", "Tableau", "Microsoft Excel", "Git"] },
]

export function SkillsSection() {
  return (
    <AnimatedSection id="skills">
      <SectionTitle>Skills</SectionTitle>
      <div className="inline-flex flex-col gap-3 w-full max-w-lg">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="anim-item skill-tilt rounded-lg px-5 py-3 bg-card">
            <h3 className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
              {cat.label}
            </h3>
            <div className="flex flex-wrap justify-center gap-2">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="glow-pill text-xs sm:text-sm px-3.5 py-1 rounded-full bg-secondary text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
