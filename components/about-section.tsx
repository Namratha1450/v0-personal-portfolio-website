import { AnimatedSection, SectionTitle } from "./animated-section"

export function AboutSection() {
  return (
    <AnimatedSection id="about">
      <SectionTitle>About</SectionTitle>
      <p className="anim-item text-sm leading-relaxed text-muted-foreground max-w-3xl">
        I am a passionate and detail-oriented B.Tech Computer Science &amp; Engineering student
        specializing in Data Science at Raghu Engineering College. With a strong foundation in
        Python, SQL, and data visualization tools like Power BI and Tableau, I focus on transforming
        raw data into actionable business insights. I am constantly expanding my skill set through
        certifications and internships, aiming to build a career as a Data Analyst who bridges the
        gap between complex data and strategic decision-making.
      </p>
    </AnimatedSection>
  )
}
