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
} from "lucide-react"

const visualizations = [
  { icon: Map, label: "Geographic Map" },
  { icon: BarChart3, label: "Bar Chart" },
  { icon: TrendingUp, label: "Line Chart" },
  { icon: PieChart, label: "Pie Chart" },
  { icon: SlidersHorizontal, label: "Heatmap" },
  { icon: PieChart, label: "Donut Chart" },
  { icon: Lightbulb, label: "KPI Cards" },
]

const interactiveFeatures = [
  { icon: Filter, label: "Filters" },
  { icon: SlidersHorizontal, label: "Dynamic Slicers" },
  { icon: CalendarDays, label: "Monthly Trend Analysis" },
]

const insights = [
  "Peak travel months",
  "Regional holiday trends",
  "Business intelligence insights",
]

const projectFlow = [
  "Dataset Collection",
  "Data Cleaning & Preprocessing",
  "Power BI Dashboard Development",
]

export function ProjectsSection() {
  return (
    <AnimatedSection id="projects">
      <SectionTitle>Projects</SectionTitle>

      <div className="anim-item glow-card rounded-lg bg-card p-5">
        <h3 className="text-base font-bold text-foreground mb-1">
          Global Holidays and Travel Trends Dashboard
        </h3>
        <p className="text-xs text-muted-foreground mb-4">
          A comprehensive Power BI dashboard analyzing global travel patterns and holiday trends
        </p>

        {/* Project Flow */}
        <div className="mb-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
            Project Flow
          </h4>
          <div className="flex flex-wrap items-center gap-2">
            {projectFlow.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="text-xs px-3 py-1 rounded-full bg-secondary text-foreground border border-border">
                  {i + 1}. {step}
                </span>
                {i < projectFlow.length - 1 && (
                  <span className="text-[#1E90FF] text-xs hidden sm:inline">{">"}</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4">
          {/* Visualizations */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
              Visualizations
            </h4>
            <div className="space-y-1.5">
              {visualizations.map((viz) => (
                <div key={viz.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <viz.icon size={12} className="text-[#00BFFF] flex-shrink-0" />
                  {viz.label}
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Features */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
              Interactive Features
            </h4>
            <div className="space-y-1.5">
              {interactiveFeatures.map((feat) => (
                <div key={feat.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <feat.icon size={12} className="text-[#00BFFF] flex-shrink-0" />
                  {feat.label}
                </div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#1E90FF] mb-2">
              Insights Generated
            </h4>
            <div className="space-y-1.5">
              {insights.map((ins) => (
                <div key={ins} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Lightbulb size={12} className="text-[#00BFFF] flex-shrink-0" />
                  {ins}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}
