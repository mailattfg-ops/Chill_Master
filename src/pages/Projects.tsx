import { useState } from "react";
import { motion } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import ProjectCard from "@/components/ProjectCard";
import CTAStrip from "@/components/CTAStrip";

const allProjects = [
  { image: project1, title: "Commercial Office Tower HVAC", location: "Dubai, UAE", sector: "Commercial", tags: ["VRF", "Ducting", "Commercial"], description: "Complete VRF system and ductwork installation for a 12-storey commercial tower with 100+ offices." },
  { image: project2, title: "Warehouse Industrial Cooling", location: "Abu Dhabi, UAE", sector: "Industrial", tags: ["Industrial Cooling", "Ventilation"], description: "Industrial ventilation and evaporative cooling for a 15,000 sqm logistics warehouse." },
  { image: project3, title: "Residential Villa AC System", location: "Sharjah, UAE", sector: "Residential", tags: ["Split AC", "VRF", "Residential"], description: "Premium split and VRF air conditioning system for a luxury residential villa community." },
  { image: project1, title: "Shopping Mall HVAC Retrofit", location: "Ajman, UAE", sector: "Commercial", tags: ["Chiller", "Ducting", "AMC"], description: "Complete HVAC system retrofit and energy optimization for a mid-size shopping mall." },
  { image: project2, title: "Food Processing Plant Cooling", location: "RAK, UAE", sector: "Industrial", tags: ["Process Cooling", "Ventilation"], description: "Specialized process cooling and ventilation for a food and beverage manufacturing facility." },
  { image: project3, title: "Residential Tower MEP", location: "Dubai, UAE", sector: "Residential", tags: ["Plumbing", "Electrical", "HVAC"], description: "Full MEP package including HVAC, electrical, and plumbing for a 20-storey residential tower." },
];

const filters = ["All", "Residential", "Commercial", "Industrial"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.sector === activeFilter);

  return (
    <>
      <section className="bg-navy section-padding">
        <div className="container-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="mb-3 inline-block rounded-full border border-navy-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-navy-foreground/60">
              Portfolio
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-5xl">
              Our Projects
            </h1>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/60 md:text-lg">
              Explore our track record across residential, commercial, and industrial sectors in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-content">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title + project.location} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default Projects;
