import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { InternshipsSection } from "@/components/internships-section"
import { CertificationsSection } from "@/components/certifications-section"
import { SoftSkillsSection } from "@/components/soft-skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <SkillsSection />
      <ProjectsSection />
      <InternshipsSection />
      <CertificationsSection />
      <SoftSkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
