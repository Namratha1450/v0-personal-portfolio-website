import { AnimatedSection, SectionTitle } from "./animated-section"

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <SectionTitle>About</SectionTitle>
      <p className="anim-item text-sm sm:text-base leading-relaxed text-muted-foreground max-w-3xl">
        Highly motivated Data Science undergraduate with strong analytical skills in Python, SQL,
        and Data Visualization. Passionate about transforming raw data into meaningful business
        insights. Currently maintaining a CGPA of 9.07 and actively seeking opportunities to apply
        technical expertise in real-world environments.
      </p>
    </AnimatedSection>
  )
}
