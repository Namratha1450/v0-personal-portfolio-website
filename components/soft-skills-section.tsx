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
      <div className="flex flex-wrap gap-2.5">
        {softSkills.map((skill) => (
          <span
            key={skill}
            className="anim-item glow-pill text-sm px-5 py-2 rounded-full bg-secondary text-foreground border border-border"
          >
            {skill}
          </span>
        ))}
      </div>
    </AnimatedSection>
  )
}
