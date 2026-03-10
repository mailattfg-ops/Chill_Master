import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Home, LayoutDashboard, Factory, Search, MapPin, Tag, ChevronRight } from "lucide-react";
import projectOffice from "@/assets/project-office.png";
import projectWarehouse from "@/assets/project-warehouse.png";
import projectVilla from "@/assets/project-villa.png";
import projectMall from "@/assets/project-mall.png";
import projectFood from "@/assets/project-food.png";
import ProjectCard from "@/components/ProjectCard";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

const allProjects = [
  { 
    image: projectOffice, 
    title: "Commercial Office Tower HVAC", 
    location: "Dubai, UAE", 
    sector: "Commercial", 
    tags: ["VRF", "Ducting", "Automation"], 
    description: "Complete VRF system and smart ductwork installation for a 12-storey premium commercial tower with 100+ high-tech offices." 
  },
  { 
    image: projectWarehouse, 
    title: "Logistics Hub Industrial Cooling", 
    location: "Abu Dhabi, UAE", 
    sector: "Industrial", 
    tags: ["High-Scale", "Ventilation"], 
    description: "Specialized industrial ventilation and evaporative cooling infrastructure for a massive 15,000 sqm logistics warehouse." 
  },
  { 
    image: projectVilla, 
    title: "Luxury Residential Villa Community", 
    location: "Sharjah, UAE", 
    sector: "Residential", 
    tags: ["Split AC", "Premium VRF"], 
    description: "Premium split and VRF air conditioning network for a luxury gated residential community, optimized for noise reduction." 
  },
  { 
    image: projectMall, 
    title: "Shopping Mall HVAC Retrofit", 
    location: "Ajman, UAE", 
    sector: "Commercial", 
    tags: ["Chiller", "Energy Ops"], 
    description: "Full-scale HVAC system retrofit and energy optimization for a major shopping mall, reducing operational costs by 25%." 
  },
  { 
    image: projectFood, 
    title: "Food Processing Plant Cooling", 
    location: "RAK, UAE", 
    sector: "Industrial", 
    tags: ["Process Cooling", "Hygienic"], 
    description: "Precision-engineered process cooling and ventilation systems for a large food and beverage manufacturing plant." 
  },
  { 
    image: projectOffice, 
    title: "Dubai Marina Residential Tower", 
    location: "Dubai, UAE", 
    sector: "Residential", 
    tags: ["MEP", "Drainage", "Power"], 
    description: "Integrated Mechanical, Electrical, and Plumbing package for a prestigious 20-storey residential high-rise in Dubai Marina." 
  },
];

const filters = [
  { id: "All", label: "All Sectors", icon: LayoutDashboard },
  { id: "Residential", label: "Residential", icon: Home },
  { id: "Commercial", label: "Commercial", icon: Building2 },
  { id: "Industrial", label: "Industrial", icon: Factory },
];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
    ? allProjects
    : allProjects.filter((p) => p.sector === activeFilter);

  return (
    <>
      <SEO 
        title="Our Projects | HVAC & MEP Portfolio in UAE"
        description="Explore our world-class portfolio of HVAC and MEP success stories across the UAE, from Dubai office towers to industrial plants."
        canonical="https://chillmaster.ae/projects"
      />
      
      {/* Hero */}
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
              Explore our track record of successful HVAC and MEP projects across residential, commercial, and industrial sectors in the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background text-foreground">
        <div className="container-content">
          {/* Filters */}
          <div className="mb-10 flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                  activeFilter === f.id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.title + project.location}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group relative h-full flex flex-col"
                >
                  <ProjectCard {...project} index={i} />
                  
                  {/* Subtle expansion on card could be here if needed */}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Load More/CTA */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-3 p-2 bg-steel/50 rounded-full border border-border">
              <div className="flex -space-x-3 ml-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-white bg-gray-200" />
                ))}
              </div>
              <p className="text-sm font-medium mr-4">Have a project in mind? <span className="text-primary font-bold">Contact our engineers.</span></p>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default Projects;
