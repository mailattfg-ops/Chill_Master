import { useState } from "react";
import { Link } from "react-router-dom";
import { m, AnimatePresence } from "framer-motion";

import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import ProjectCard from "@/components/ProjectCard";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";

const allProjects = [
  {
    image: "/projects/safarigroupofcompanies.png",
    title: "Safari Mall",
    location: "UAE",
    sector: "Commercial",
    tags: ["Mall", "HVAC"],
    description: "CLIENT: SAFARI GROUP OF COMPANIES | CONSULTANT: M/S CAPITAL ENGINEERING CONSULTANCY LLC"
  },
  {
    image: "/projects/mrjowharaakkapparambil_villa1.png",
    title: "Proposed (G+1+Roof) Villa",
    location: "UAE",
    sector: "Residential",
    tags: ["Villa", "Residential"],
    description: "CLIENT: MR. JOWHAR AAKKAPPARAMBIL | CONSULTANT: M/S PROARC ARCHITECTS & ENGINEERING CONSULTANTS LLC"
  },
  {
    image: "/projects/hotpackllc_1.png",
    title: "Proposed Building (G+M+2), Warehouse (G+0), Showroom",
    location: "UAE",
    sector: "Commercial",
    tags: ["Warehouse", "Showroom"],
    description: "CLIENT: HOTPACK LLC | CONSULTANT: M/S UNITED CONSULTANCY OFFICE LLC"
  },
  {
    image: "/projects/attaullahsafullahwaatqullahasmatullah.png",
    title: "G+M+2 Building & Shed",
    location: "UAE",
    sector: "Industrial",
    tags: ["Building", "Shed"],
    description: "CLIENT: ATTAULLAH SAFULLAH WA ATQULLAH ASMATULLAH | CONSULTANT: M/S DELTA ENGINEERING CONSULTANTS LLC"
  },
  {
    image: "/projects/hotpackllc_2.png",
    title: "Proposed Warehouse",
    location: "UAE",
    sector: "Industrial",
    tags: ["Warehouse", "Industrial"],
    description: "CLIENT: HOTPACK LLC | CONSULTANT: M/S UNITED CONSULTANCY OFFICE LLC"
  },
  {
    image: "/projects/mrjowharaakkapparambil_villa2.png",
    title: "Proposed G+1+Villa+ Car Parking and CW",
    location: "UAE",
    sector: "Residential",
    tags: ["Villa", "Residential"],
    description: "CLIENT: MR. JOWHAR AAKKAPPARAMBIL | CONSULTANT: M/S TRUE ENGINEERING CONSULTANTS LLC"
  },
  {
    image: "/projects/mranwarkhamissaedalhakkamalali.png",
    title: "G Showroom + G Sheds",
    location: "UAE",
    sector: "Commercial",
    tags: ["Showroom", "Shed"],
    description: "CLIENT: MR. ANWAR KHAMIS SAEED AL-HAKKAM AL-ALI | CONSULTANT: M/S INTERNATIONAL CONSULTANTS LLC"
  },
  {
    image: "/projects/mrassadismailkayyali.png",
    title: "G+1 Labour Accommodation 2 Nos",
    location: "Al Jazeera, Rakia Freezone",
    sector: "Residential",
    tags: ["Accommodation", "Residential"],
    description: "CLIENT: MR. ASSAD ISMAIL KAYYALI | CONSULTANT: AL SAHEL ENGINEERING | VALUE: 6,000,000 AED"
  },
  {
    image: "/projects/bmiindustriesfzllc.png",
    title: "Proposed Warehouse",
    location: "Al Hamra Freezone Rakia",
    sector: "Industrial",
    tags: ["Warehouse", "Industrial"],
    description: "CLIENT: BMI INDUSTRIES FZ LLC | CONSULTANT: AL MANZIL ENGINEERING | PLOT: A96, A107 & 119 | VALUE: 13,000,000 AED"
  },
  {
    image: "/projects/rakitaliano.png",
    title: "Marble Factory, Labour Camp & Musjid",
    location: "Al Ghail Freezone",
    sector: "Industrial",
    tags: ["Factory", "Labour Camp"],
    description: "CLIENT: RAK ITALIANO | CONSULTANT: MIDDLE EAST ENGG CONSULTANT | PLOT: 140-143 | VALUE: 2,200,000 AED"
  },
  {
    image: "/projects/tobaccoproductsinternationalrak.png",
    title: "Tobacco Factory (G+4), Ser Block (G+12) Nos",
    location: "Al Hamra Free Zone Rakia",
    sector: "Industrial",
    tags: ["Factory", "Industrial"],
    description: "CLIENT: TOBACCO PRODUCTS INTERNATIONAL RAK | CONSULTANT: AL MANZIL ENGG CONT | PLOT: A 101+102+103+115+116+117+126+127+128 | VALUE: 15,000,000 AED"
  },
  {
    image: "/projects/bmiindustries.png",
    title: "Factory (G+M) Office & Service Block",
    location: "Al Jazeera, Rakia Freezone",
    sector: "Industrial",
    tags: ["Factory", "Industrial"],
    description: "CLIENT: BMI INDUSTRIES | CONSULTANT: AL MANZIL ENGG CONT, RAK FZE | PLOT: C58, 59, 67 & 68 | VALUE: 25,000,000 AED"
  },
  {
    image: "/projects/idealismindustriesrak.png",
    title: "Factory (G+M) Office & G+1 Accommodation",
    location: "Al Jazeera, Alhamra, RAK",
    sector: "Industrial",
    tags: ["Factory", "Accommodation"],
    description: "CLIENT: IDEALISM INDUSTRIES, RAK | CONSULTANT: MIDDLE EAST ENGG CONSULTANT | PLOT: E-99+110+122 | VALUE: 9,000,000 AED"
  },
  {
    image: "/projects/alsaadfze.png",
    title: "Plastic Treatment Plant",
    location: "Kalghail, RAK",
    sector: "Industrial",
    tags: ["Plant", "Industrial"],
    description: "CLIENT: AL SAAD FZE | CONSULTANT: AL MANZIL ENGG CONSULTANT | PLOT: K-114 & K-115"
  },
  {
    image: "/projects/alseebinternational.png",
    title: "Sheds - 12 Nos",
    location: "Umm Al Thoob",
    sector: "Industrial",
    tags: ["Shed", "Industrial"],
    description: "CLIENT: AL SEEB INTERNATIONAL | CONSULTANT: ENAZ ENGINEERING CONSULTANT | PLOT: J/1, BLOCK-7 | VALUE: 72,000,000 AED"
  }
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  const totalPages = Math.ceil(allProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = allProjects.slice(indexOfFirstProject, indexOfLastProject);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 400, behavior: 'smooth' });
  };

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
              Explore our world-class portfolio of HVAC success stories across the UAE, showcasing landmark projects executed under our parent companies: <span className="text-white font-bold">Al Baraq Steel Works L.L.C</span>, <span className="text-white font-bold">Flash Building Contracting L.L.C</span>, and <span className="text-white font-bold">Al Baraq (Dufe Lub)</span>.
            </p>
          </m.div>
        </div>
      </section>

      <section className="section-padding bg-background text-foreground relative overflow-hidden">
        <div className="container-content">
          {/* Project Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {currentProjects.map((project, i) => (
                <m.div
                  key={project.title + project.location}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative h-full flex flex-col"
                >
                  <ProjectCard {...project} index={i} />
                </m.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-16 flex justify-center items-center gap-3">
              <button
                onClick={() => paginate(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="p-3 rounded-xl border border-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                aria-label="Previous page"
              >
                <span className="sr-only">Previous</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`h-12 w-12 rounded-xl border font-black text-sm transition-all duration-300 ${
                      currentPage === number
                        ? "bg-primary border-primary text-white shadow-lg shadow-primary/30"
                        : "bg-white border-slate-200 text-slate-400 hover:border-primary/30 hover:text-primary"
                    }`}
                  >
                    {number}
                  </button>
                ))}
              </div>

              <button
                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="p-3 rounded-xl border border-slate-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-50 transition-colors"
                aria-label="Next page"
              >
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
          
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
