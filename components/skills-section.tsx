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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {skillCategories.map((cat) => (
          <div key={cat.label} className="anim-item glow-card rounded-lg p-4 bg-card">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill}
                  className="glow-pill text-xs px-2.5 py-1 rounded-full bg-secondary text-foreground"
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
