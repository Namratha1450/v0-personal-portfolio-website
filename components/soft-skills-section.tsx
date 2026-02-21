import { AnimatedSection, SectionTitle } from "./animated-section"

const softSkills = [
  "Leadership",
  "Communication",
  "Analytical Thinking",
  "Problem Solving",
  "Teamwork",
  "Adaptability",
]

export function SoftSkillsSection() {
  return (
    <AnimatedSection id="soft-skills">
      <SectionTitle>Soft Skills</SectionTitle>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="anim-item glow-pill text-xs px-4 py-1.5 rounded-full bg-secondary text-foreground border border-border"
          >
            {skill}
          </span>
        ))}
      </div>
    </AnimatedSection>
  )
}
