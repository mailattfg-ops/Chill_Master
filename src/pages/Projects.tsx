import { useState } from "react";
import { Link } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";
import { Building2, Home, LayoutDashboard, Factory, Search, MapPin, Tag, ChevronRight } from "lucide-react";
import projectOffice from "@/assets/project-office.png";
import projectWarehouse from "@/assets/project-warehouse.png";
import projectVilla from "@/assets/project-villa.png";
import projectMall from "@/assets/project-mall.png";
import projectFood from "@/assets/project-food.png";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
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
  }
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
        title="Our Projects | HVAC Portfolio in UAE"
        description="Explore our world-class portfolio of HVAC success stories across the UAE, from Dubai office towers to industrial plants."
        canonical="https://chillmaster.ae/projects"
      />
      
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <m.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/projects_hero_bg.png" 
            alt="Engineering projects portfolio" 
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>
        <div className="container-content relative z-10">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Success Stories</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Engineering <br /> Success in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] to-[#fcc968]">UAE</span>
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-relaxed text-slate-200/80 max-w-2xl font-medium drop-shadow-md">
              Explore our world-class portfolio of HVAC success stories across the UAE, from luxury villas and Dubai office towers to massive industrial plants.
            </p>
          </m.div>
        </div>
      </section>

      <section className="section-padding bg-background text-foreground relative overflow-hidden">
        <div className="container-content">
          {/* Filters */}
          <div className="mb-12 flex flex-wrap gap-3">
            {filters.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`flex items-center gap-3 rounded-full border-2 px-6 py-2.5 text-[10px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${
                  activeFilter === f.id
                    ? "border-primary bg-primary text-white shadow-xl shadow-primary/20 scale-105"
                    : "border-slate-100 bg-white text-muted-foreground hover:border-primary/20 hover:text-navy hover:shadow-lg"
                }`}
              >
                <f.icon className={`h-4 w-4 ${activeFilter === f.id ? "text-white" : "text-slate-400 group-hover:text-primary"}`} />
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <m.div
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
                </m.div>
              ))}
            </AnimatePresence>
          </div>
          
          {/* Load More/CTA */}
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-4 p-2.5 bg-white rounded-full border border-slate-200 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all group">
              <div className="flex -space-x-3 ml-2">
                {[avatar1, avatar2, avatar3].map((img, i) => (
                  <div key={i} className="h-11 w-11 rounded-full border-2 border-white overflow-hidden shadow-md">
                    <img 
                      src={img} 
                      alt={`Engineer ${i + 1}`} 
                      className="h-full w-full object-cover" 
                      loading="lazy"
                      width="44"
                      height="44"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm font-medium mr-5 text-navy">
                Have a project in mind? <span className="text-primary font-bold group-hover:underline underline-offset-4">Contact our engineers.</span>
              </p>
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default Projects;
