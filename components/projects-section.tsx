import { AnimatedSection, SectionTitle } from "./animated-section"
import {
  BarChart3,
  Map,
  PieChart,
  TrendingUp,
  Filter,
  SlidersHorizontal,
  CalendarDays,
  Lightbulb,
  Database,
  Wrench,
  LayoutDashboard,
  Sparkles,
  Eye,
} from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Dataset Collection",
    items: ["Collected global holiday & travel dataset"],
  },
  {
    icon: Wrench,
    title: "Data Cleaning & Preprocessing",
    items: ["Removed null values", "Structured formatting", "Data transformation"],
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Development (Power BI)",
    items: [],
  },
  {
    icon: Sparkles,
    title: "Interactive Features",
    items: ["Filters", "Dynamic slicers", "Monthly trend analysis"],
  },
  {
    icon: Eye,
    title: "Insights",
    items: ["Peak travel months", "Regional holiday patterns", "Business intelligence insights"],
  },
]

const visualizations = [
  { icon: Map, label: "Geographic Map" },
  { icon: BarChart3, label: "Bar Chart" },
  { icon: TrendingUp, label: "Line Chart" },
  { icon: PieChart, label: "Pie Chart" },
  { icon: SlidersHorizontal, label: "Heatmap" },
  { icon: PieChart, label: "Donut Chart" },
  { icon: Lightbulb, label: "KPI Cards" },
]

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <SectionTitle>Projects</SectionTitle>

      <div className="anim-item glow-card rounded-lg bg-card p-5 sm:p-6 text-left max-w-2xl mx-auto">
        <h3 className="text-base sm:text-lg font-bold text-foreground mb-1 text-center">
          Global Holidays and Travel Trends Dashboard
        </h3>
        <p className="text-xs sm:text-sm text-muted-foreground mb-5 text-center">
          A comprehensive Power BI dashboard analyzing global travel patterns and holiday trends
        </p>

        <div className="flex flex-col gap-3 mb-1">
          {steps.map((step, i) => (
            <div key={step.title} className="flex gap-3 items-start">
              <div className="flex flex-col items-center">
                <div className="w-8 h-8 rounded-md bg-secondary flex items-center justify-center border border-border flex-shrink-0">
                  <step.icon size={14} className="text-[#1E90FF]" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px h-full min-h-[8px] bg-gradient-to-b from-[#1E90FF44] to-transparent" />
                )}
              </div>
              <div className="pb-1">
                <h4 className="text-sm sm:text-base font-semibold text-foreground">{step.title}</h4>
                {step.items.length > 0 && (
                  <ul className="mt-1 flex flex-col gap-0.5">
                    {step.items.map((item) => (
                      <li key={item} className="text-xs sm:text-sm text-muted-foreground flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-[#00BFFF] flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
                {step.title.includes("Dashboard") && (
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {visualizations.map((viz) => (
                      <span
                        key={viz.label}
                        className="inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                      >
                        <viz.icon size={10} className="text-[#00BFFF]" />
                        {viz.label}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}
