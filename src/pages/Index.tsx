import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ShieldCheck, Clock, Users, Building2, CheckCircle2 } from "lucide-react";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import projectOffice from "@/assets/project-office.png";
import projectWarehouse from "@/assets/project-warehouse.png";
import projectVilla from "@/assets/project-villa.png";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import industrialBg from "@/assets/group-industrial-bg.png";
import ProjectCard from "@/components/ProjectCard";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";
import whyChooseUsImg from "@/assets/why-choose-us.png";

const services = [
  { icon: AirVent, title: "HVAC Installation & AMC", description: "Residential and commercial air conditioning solutions including full system installation and AMC contracts.", image: "/service_install.png", tag: "Installation" },
  { icon: Wrench, title: "Maintenance & Repair", description: "Preventive and corrective maintenance services for all HVAC systems across the UAE.", image: "/service_maintenance.png", tag: "Support" },
  { icon: Wind, title: "Ventilation & Ducting", description: "GI duct fabrication and ventilation system installation with precise air balancing.", image: "/service_ventilation.png", tag: "Engineering" },
  { icon: ThermometerSnowflake, title: "Industrial HVAC", description: "Specialized industrial cooling and HVAC solutions for warehouses and factories.", image: "/service_industrial.png", tag: "Industrial" },
];

const trustItems = [
  "UAE-Based",
  "24–48 hr Response",
  "Engineering-Led Execution",
  "Backed by Group Companies",
];

const whyChooseUs = [
  { icon: Clock, title: "Rapid Response", description: "24–48 hour response time for service calls and quote requests across the UAE." },
  { icon: ShieldCheck, title: "Safety-First Approach", description: "Strict HSE compliance with documented safety procedures on every project." },
  { icon: Users, title: "200+ Professionals", description: "Qualified engineers, technicians, and support staff across the group." },
  { icon: Building2, title: "AMC Coverage", description: "Comprehensive maintenance contracts tailored for residential, commercial, and industrial clients." },
  { icon: CheckCircle2, title: "Documentation & Compliance", description: "Full project documentation, as-built drawings, and compliance certifications." },
];

const projects = [
  { image: projectOffice, title: "Commercial Office Tower HVAC", location: "Dubai, UAE", tags: ["VRF", "Ducting", "Automation"], description: "Complete VRF system and smart ductwork installation for a 12-storey commercial tower." },
  { image: projectWarehouse, title: "Warehouse Industrial Cooling", location: "Abu Dhabi, UAE", tags: ["Industrial Cooling", "Ventilation"], description: "Industrial ventilation and cooling system for a 15,000 sqm logistics warehouse." },
  { image: projectVilla, title: "Residential Villa AC System", location: "Sharjah, UAE", tags: ["Split AC", "Premium VRF"], description: "Premium split and VRF air conditioning installation for luxury residential villas." },
];

const heroBackgrounds = [
  heroBg,
  "/hero_bg_chillers_v3.png",
  "/hero_bg_villa_v3.png",
  "/hero_bg_tech_v3.png"
];

const Index = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 250]);

  const [serviceIndex, setServiceIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setServiceIndex((prev) => (prev + 1) % services.length);
    }, 3000); // 1s to move, 2s on screen
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroBackgrounds.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <SEO 
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Chill Master",
          "alternateName": "Chill Master HVAC Solutions",
          "url": "https://chillmaster.ae",
          "logo": "https://chillmaster.ae/logo.png",
          "image": "https://chillmaster.ae/og-image.png",
          "description": "Premium HVAC installation, maintenance, and engineering solutions in the UAE.",
          "telephone": "+971551029597",
          "email": "info@chillmasteruae.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Al Qusais Industrial 2",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.2632",
            "longitude": "55.3929"
          },
          "openingHoursSpecification": [
            {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "08:00",
              "closes": "18:00"
            }
          ],
          "sameAs": [
            "https://www.facebook.com/chillmasteruae"
          ],
          "founder": {
            "@type": "Person",
            "name": "Jowhar A."
          }
        }}
      />
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <m.div className="absolute inset-0" style={{ y: yBg }}>
          <AnimatePresence>
            <m.img 
              key={currentBg}
              src={heroBackgrounds[currentBg]} 
              alt="HVAC systems on UAE rooftop" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover" 
              loading="eager"
            />
          </AnimatePresence>
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-navy/90 via-navy/50 to-navy/10" />
        </m.div>

        {/* Blueprint grid motif */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--cyan-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan-glow)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container-content relative z-10 pt-32 pb-24 md:pt-40 md:pb-32 lg:pt-48 lg:pb-40">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <h1 className="text-[28px] md:text-6xl lg:text-7xl font-black leading-[1.2] tracking-tight text-white mb-6">
              Engineered Climate Perfection in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] via-primary to-[#DDB262]">UAE</span>
            </h1>
            <p className="mt-6 text-[13px] md:text-xl leading-relaxed text-slate-200 focus-visible: max-w-2xl font-medium drop-shadow-md">
              Installation, maintenance, ducting, and ventilation for luxury residential, commercial, and industrial projects.
            </p>
            <div className="mt-12 flex flex-wrap gap-4 items-center">
              <Button asChild className="h-14 md:h-[70px] px-8 md:px-10 rounded-full font-heading font-black tracking-widest uppercase text-[10px] md:text-xs shadow-2xl shadow-white/10 hover:shadow-white/20 hover:scale-105 transition-all duration-500 bg-white text-navy hover:bg-slate-50 border-0 group">
                <Link to="/contact">
                  Begin Project <ArrowRight className="ml-3 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-2" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-14 md:h-[70px] px-8 md:px-10 rounded-full border-2 border-white/30 bg-white/5 backdrop-blur-2xl font-heading font-black text-white hover:bg-white/10 hover:border-white/60 hover:scale-105 transition-all duration-500 uppercase tracking-widest text-[10px] md:text-xs"
              >
                <a href="https://wa.me/971551029597" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-3 h-4 w-4 md:h-5 md:w-5" /> WhatsApp
                </a>
              </Button>
            </div>

            {/* Trust bar */}
            <m.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mt-20 inline-flex flex-wrap gap-x-12 gap-y-6 rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-3xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] relative overflow-hidden group/bar"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-[150%] group-hover/bar:translate-x-[150%] transition-transform duration-1500" />
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-3 relative z-10 group/item">
                  <div className="h-2 w-2 rounded-full bg-gradient-to-br from-[#DDB262] to-primary shadow-[0_0_10px_#DDB262] transition-transform group-hover/item:scale-150" />
                  <span className="text-[11px] font-black tracking-[0.2em] text-white/90 uppercase">{item}</span>
                </div>
              ))}
            </m.div>
          </m.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding relative overflow-hidden">
        {/* Background with Grid and Image */}
        <div className="absolute inset-0 z-0 bg-slate-50/50">
          <div className="absolute inset-0 opacity-40" style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: '24px 24px'
          }} />
          <img 
            src="/service_bg.jpg" 
            alt="" 
            className="h-full w-full object-cover opacity-10"
            loading="lazy"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white/80" />
        </div>

        <div className="container-content relative z-10">
          <SectionHeading
            tag="Our Services"
            title="Engineering-Led HVAC Solutions"
            description="Comprehensive HVAC services delivered with precision and compliance."
          />
          {/* Mobile Carousel / Desktop Grid */}
          <div className="lg:hidden relative overflow-hidden py-4 -mx-4 px-4 sm:-mx-6 sm:px-6">
            <m.div 
              animate={{ x: `calc(-${serviceIndex * 100}%)` }}
              transition={{ duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
              className="flex"
            >
              {services.map((service, i) => (
                <div key={service.title} className="w-full shrink-0 px-2">
                  <ServiceCard {...service} index={i} />
                </div>
              ))}
            </m.div>
            <div className="flex justify-center gap-2 mt-8">
              {services.map((_, i) => (
                <m.button 
                  key={i} 
                  onClick={() => setServiceIndex(i)}
                  animate={{ 
                    width: serviceIndex === i ? 24 : 6,
                    backgroundColor: serviceIndex === i ? "#3b82f6" : "#cbd5e1" 
                  }}
                  className="h-1.5 rounded-full transition-all duration-300" 
                />
              ))}
            </div>
          </div>

          <div className="hidden lg:grid gap-6 lg:grid-cols-4">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>
      {/* About + Group */}
      <section className="section-padding relative overflow-hidden bg-white">
        {/* Background Industrial Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/group_industrial_bg_v2.png" 
            alt="Group industrial presence" 
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/20" />
        </div>
        
        <div className="container-content relative z-10">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            <div className="rounded-none border border-primary/20 bg-white/60 p-8 sm:p-12 backdrop-blur-xl shadow-2xl shadow-primary/5 w-full relative group overflow-hidden">
              {/* Subtle decor */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-primary/5 -mr-12 -mt-12 rotate-45 transition-transform group-hover:bg-primary/10" />
              
              <span className="mb-6 inline-block rounded-none border border-primary/20 px-5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary bg-white shadow-sm">
                About Us
              </span>
              <h2 className="text-xl font-bold tracking-tight text-navy md:text-4xl lg:text-5xl leading-[1.1] mb-6 md:mb-8">
                Backed by an <span className="text-primary">Industrial Group</span> <br className="hidden md:block" /> with Proven Delivery
              </h2>
              <p className="mt-4 md:mt-6 text-sm md:text-base lg:text-lg leading-relaxed text-muted-foreground max-w-2xl mx-auto font-medium">
                Chill Master is part of an industrial group led by Mr. Jowhar A., an established industrial empire in the UAE. Our group ecosystem brings integrated support, from building contracting to steel fabrication and lubricant manufacturing.
              </p>
              <div className="mt-10 flex justify-center">
                <Button asChild className="h-14 md:h-16 px-6 md:px-10 rounded-none font-heading font-black bg-navy text-white hover:bg-primary transition-all uppercase tracking-widest text-[10px] md:text-xs shadow-xl w-full max-w-[280px] sm:max-w-none sm:w-auto">
                  <Link to="/about" className="flex items-center justify-center gap-2">
                    Learn About Our Group <ArrowRight className="hidden md:block h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <m.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-12 md:mt-20 w-full"
            >
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  { name: "Al Baraq Steel Works L.L.C", sub: "Steel Fabrication & Structural", icon: Wrench },
                  { name: "Flash Building Contracting L.L.C", sub: "General & Civil Contracting", icon: Building2 },
                  { name: "Al Baraq (Dufe Lub)", sub: "Industrial Lubricant Mfg.", icon: Droplets },
                ].map((co, i) => (
                  <div key={co.name} className="flex flex-col items-center text-center p-6 sm:p-8 rounded-none border border-slate-100 bg-white/80 backdrop-blur-md shadow-lg transition-all hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-none bg-navy text-white mb-6 shadow-md transition-transform hover:scale-110">
                      <co.icon className="h-6 w-6" />
                    </div>
                    <h4 className="text-sm font-bold text-navy leading-tight mb-2 uppercase tracking-wide px-2">{co.name}</h4>
                    <p className="text-[9px] font-black text-primary uppercase tracking-[0.15em]">{co.sub}</p>
                  </div>
                ))}
              </div>
            </m.div>
          </div>
        </div>
      </section>



      {/* Why Choose Us */}
      <section className="py-16 md:py-20 relative bg-transparent">
        {/* Top Centered Pill */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden xl:block">
          <div className="flex items-center gap-3 rounded-none border border-border bg-white px-6 py-3 shadow-xl shadow-primary/5">
            <span className="text-sm font-bold text-foreground">Why Choose Us</span>
            <div className="flex h-7 w-7 items-center justify-center rounded-none bg-navy text-[10px] font-bold text-white">
              03
            </div>
          </div>
        </div>

        <div className="container-content relative z-10">
          <div className="grid gap-16 lg:grid-cols-2 items-center">
            {/* Left Column: Content */}
            <m.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 flex items-center gap-2">
                <div className="h-4 w-1 bg-primary rounded-full" />
                <span className="text-xs font-bold uppercase tracking-widest text-primary">Why Choose Us</span>
              </div>
              
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-5xl leading-[1.1]">
                Nobody Knows HVAC Solutions <br className="hidden md:block" />
                Like We Have <span className="text-primary">Perfected</span>
              </h2>
              
              <p className="mt-6 text-base leading-relaxed text-muted-foreground max-w-lg">
                We deliver engineering-led HVAC services with a 100% commitment to precision, safety, and client satisfaction across the UAE.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, title: "Certified Engineers", desc: "Expert teams with decades of combined UAE experience." },
                  { icon: Clock, title: "Delivery On-time", desc: "Strict adherence to project timelines and milestones." },
                  { icon: Users, title: "200+ Professionals", desc: "Scaling resources efficiently for any project size." },
                  { icon: CheckCircle2, title: "QC Standards", desc: "Rigorous quality checks at every stage of execution." },
                ].map((item, i) => (
                  <div key={item.title} className="group">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-none bg-white shadow-lg shadow-primary/5 border border-primary/5 transition-all group-hover:bg-primary group-hover:text-white">
                      <item.icon className="h-6 w-6 text-primary group-hover:text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm leading-relaxed text-muted-foreground sm:max-w-[200px]">{item.desc}</p>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Right Column: Image */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mt-8 lg:mt-0"
            >
              {/* Decorative circle */}
              <div className="absolute -right-12 top-12 h-48 w-48 lg:h-64 lg:w-64 rounded-none border-[1.5rem] border-primary/10 -z-10 hidden sm:block" />
              
              <div className="aspect-[16/10] overflow-hidden rounded-none shadow-2xl shadow-primary/10 border-4 sm:border-8 border-white max-w-[500px] mx-auto lg:max-w-none">
                <img 
                  src={whyChooseUsImg} 
                  alt="Professional engineering team" 
                  className="h-full w-full object-cover aspect-video lg:aspect-[4/5]" 
                  loading="lazy"
                  width="800"
                  height="1000"
                />
              </div>
              
              {/* Floating Stat Card */}
              <div className="relative lg:absolute -mt-8 lg:mt-0 lg:-bottom-6 lg:left-12 lg:right-12 rounded-none bg-white p-4 lg:p-6 shadow-xl border border-primary/5 flex items-center justify-between max-w-[400px] mx-auto lg:max-w-none z-30">
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-black text-navy leading-tight">2025</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-0.5">Established</div>
                </div>
                <div className="h-8 w-px bg-border mx-4" />
                <div className="flex-1 text-center lg:text-left">
                  <div className="text-xl lg:text-2xl font-black text-primary leading-tight">UAE</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mt-0.5">Pan-UAE Service</div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding relative overflow-hidden bg-slate-50/50">
        {/* Background Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.15]" style={{
            backgroundImage: `linear-gradient(to right, #3b82f6 1px, transparent 1px), 
                              linear-gradient(to bottom, #3b82f6 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }} />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        </div>

        <div className="container-content relative z-10">
          <SectionHeading
            tag="Our Projects"
            title="Proven Track Record Across Sectors"
            description="From commercial towers to industrial warehouses, our portfolio speaks for itself."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} {...project} index={i} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-none font-heading font-semibold">
              <Link to="/projects">
                View All Projects <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTAStrip />
    </>
  );
};

export default Index;
