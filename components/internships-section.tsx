import { AnimatedSection, SectionTitle } from "./animated-section"

const internships = [
  {
    title: "Infosys Springboard Virtual Internship 6.0",
    subtitle: "Data Visualization",
    status: "Ongoing",
    details: [],
  },
  {
    title: "Python with Machine Learning - AICTE",
    subtitle: "3 Months",
    status: "Ongoing",
    details: [],
  },
  {
    title: "Python Full Stack Development - EduSkills",
    subtitle: "",
    status: "Completed",
    details: [
      "HTML", "CSS", "JavaScript", "Bootstrap",
      "Python backend", "CRUD operations", "Database interaction",
    ],
  },
]

export function InternshipsSection() {
  return (
    <AnimatedSection id="internships">
      <SectionTitle>Internships</SectionTitle>
      <div className="max-w-2xl space-y-0">
        {internships.map((item, i) => (
          <div
            key={i}
            className={`anim-item flex gap-4 pb-4 ${
              i < internships.length - 1 ? "timeline-line" : ""
            }`}
          >
            <div className="timeline-dot mt-1" />
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="text-sm sm:text-base font-semibold text-foreground">{item.title}</h3>
                <span
                  className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${
                    item.status === "Ongoing"
                      ? "bg-[#1E90FF22] text-[#1E90FF]"
                      : "bg-[#00BFFF22] text-[#00BFFF]"
                  }`}
                >
                  {item.status}
                </span>
              </div>
              {item.subtitle && (
                <p className="text-xs sm:text-sm text-muted-foreground">{item.subtitle}</p>
              )}
              {item.details.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.details.map((d) => (
                    <span
                      key={d}
                      className="text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground border border-border"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </AnimatedSection>
  )
}
