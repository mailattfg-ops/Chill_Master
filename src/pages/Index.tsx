import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ShieldCheck, Clock, Users, Building2, CheckCircle2 } from "lucide-react";
import { m, AnimatePresence, useScroll, useTransform } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import industrialBg from "@/assets/group-industrial-bg.png";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";

import podTrusted from "@/assets/pod-trusted.png";
import podFast from "@/assets/pod-fast.png";
import podCustom from "@/assets/pod-custom.png";
import podExpert from "@/assets/pod-expert.png";
import podSupport from "@/assets/pod-support.png";

const services = [
  { 
    icon: AirVent, 
    title: "Ac installation and replacement", 
    description: "Full-scale HVAC AC service, including system replacement, installation, and commissioning for residential buildings, commercial complexes, and industrial sites.", 
    image: "/service_install.png", 
    tag: "Installation" 
  },
  { 
    icon: Zap, 
    title: "HVAC Upgrades, Retrofit & Modifications", 
    description: "Modernize your existing HVAC system with our expert retrofit and upgrade solutions to improve energy efficiency and meet environmental standards.", 
    image: "/service_industrial.png", 
    tag: "Engineering" 
  },
  { 
    icon: Wrench, 
    title: "HVAC Repairs", 
    description: "Quick diagnostics and on-site repairs to get your system back up and running fast, ensuring minimal downtime and restoring indoor comfort efficiently.", 
    image: "/service_ventilation.png", 
    tag: "Support" 
  },
  { 
    icon: ShieldCheck, 
    title: "Annual Maintenance Contracts (AMCs)", 
    description: "Avoid costly breakdowns and extend the life of your HVAC system with our flexible AMC packages. We offer both comprehensive and non-comprehensive HVAC maintenance services tailored to residential and commercial needs.", 
    image: "/service_maintenance.png", 
    tag: "Maintenance" 
  },
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
  const [viewport, setViewport] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) setViewport('mobile');
      else if (width < 1024) setViewport('tablet');
      else setViewport('desktop');
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
        title="Chill Master UAE | Engineering-Led HVAC Solutions"
        description="Premium HVAC installation, maintenance, and AMC solutions in Dubai and across the UAE. Backed by an industrial group with engineering-led execution."
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
      >
        <link rel="preload" as="image" href={heroBg} fetchPriority="high" />
      </SEO>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <m.div className="absolute inset-0" style={{ y: yBg }}>
          <AnimatePresence initial={false}>
            <m.img 
              key={currentBg}
              src={heroBackgrounds[currentBg]} 
              alt="Professional HVAC systems on UAE rooftop" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 0.7, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 h-full w-full object-cover" 
              loading="eager"
              fetchPriority="high"
              decoding="sync"
              width="1920"
              height="1080"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <div className="flex flex-col items-start mb-10">
              <h1 className="flex flex-col items-start leading-none">
                <div className="relative group">
                  <h1 className="relative text-5xl sm:text-7xl md:text-8xl lg:text-[7.5rem] font-outfit font-black tracking-tight sm:tracking-tighter flex items-center select-none leading-none">
                    <span 
                      style={{ 
                        textShadow: "0 10px 20px rgba(0,0,0,0.3), 0 4px 8px rgba(0,0,0,0.2)"
                      }} 
                      className="bg-gradient-to-b from-[#7DD3FC] to-[#0EA5E9] bg-clip-text text-transparent"
                    >
                      CHILLMASTER
                    </span>
                  </h1>
                </div>
                
                <div className="flex flex-col mt-2 sm:mt-1 font-poppins text-white/90">
                  <p className="text-xs md:text-xl lg:text-2xl tracking-[0.45em] font-medium uppercase w-full italic">
                    THE COMPLETE HVAC SOLUTIONS
                  </p>
                </div>
              </h1>
            </div>
            <p className="mt-6 text-[13px] md:text-base leading-relaxed text-slate-300 focus-visible: max-w-2xl font-medium">
              At CHILLMASTER, we are your trusted HVAC partner, specializing in providing top-notch heating, ventilation, and air conditioning solutions for both residential and commercial properties. From installation and maintenance to repair and replacement our team of highly skilled technicians is dedicated to delivering excellence in every project we undertake.
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
            title="Our HVAC Services Include :"
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
            src={industrialBg} 
            alt="Group industrial presence" 
            className="h-full w-full object-cover opacity-25"
            loading="lazy"
            decoding="async"
            width="1920"
            height="1080"
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



      {/* Why Choose Us - CREATIVE TECH EDITION */}
      <section className="py-32 relative overflow-hidden bg-white border-y border-slate-100">
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Moving Gradient Nodes */}
          <m.div 
            animate={{ 
              x: [0, 100, 0], 
              y: [0, -50, 0],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-primary/5 blur-[100px] rounded-full" 
          />
          <m.div 
            animate={{ 
              x: [0, -100, 0], 
              y: [0, 50, 0],
              opacity: [0.2, 0.4, 0.2]
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-navy/5 blur-[120px] rounded-full" 
          />
        </div>

        {/* Technical Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(#cbd5e1 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}
        />

        <div className="container-content relative z-10">
          
          {/* Creative Heading */}
          <div className="text-center mb-24 relative">
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block"
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-primary/40" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Core Value Hub</span>
                <div className="h-[1px] w-12 bg-primary/40" />
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-navy tracking-tighter mb-6 relative">
                Why Choose <span className="text-primary">Chill Master</span>
              </h2>
              <p className="text-sm md:text-base text-slate-500 max-w-2xl mx-auto font-medium tracking-wide">
                Expert excellence combined with premium HVAC solutions across UAE's most demanding environments.
              </p>
            </m.div>
          </div>

          <div className="flex flex-col gap-6 relative z-10 max-w-6xl mx-auto px-4 lg:px-0">
            {[
              { 
                title: "Trusted HVAC Services", 
                image: podTrusted,
                icon: ShieldCheck,
                id: "01",
                desc: "Professional heating, ventilation, and air-conditioning solutions for residential and commercial properties across Dubai." 
              },
              { 
                title: "Fast On-Site Response", 
                image: podFast,
                icon: Clock,
                id: "02",
                desc: "Skilled HVAC technicians available for rapid inspections, diagnostics, and site assessments anywhere in Dubai." 
              },
              { 
                title: "Customized HVAC Care", 
                image: podCustom,
                icon: ThermometerSnowflake,
                id: "03",
                desc: "Tailored installation, repair, and maintenance solutions to match your cooling, airflow, and energy-efficiency needs." 
              },
              { 
                title: "Complete HVAC Expertise", 
                image: podExpert,
                icon: Zap,
                id: "04",
                desc: "End-to-end services including installation, preventive maintenance, repairs, ducting, airflow balancing, and system optimization." 
              },
              { 
                title: "Reliable Ongoing Support", 
                image: podSupport,
                icon: Users,
                id: "05",
                desc: "Dedicated maintenance contracts ensuring consistent performance, comfort, and long-term system reliability." 
              }
            ].map((item, i) => (
              <m.div 
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative h-[300px] md:h-[220px] w-full overflow-hidden bg-navy shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100/10 flex items-center"
              >
                {/* Background Image with Zoom */}
                <div className="absolute inset-0 z-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="h-full w-full object-cover grayscale-[40%] brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" 
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-10" />
                </div>

                {/* Content Layer */}
                <div className="relative z-20 flex flex-col md:flex-row items-center gap-8 w-full p-8 md:p-12">
                  <div className="hidden md:flex h-16 w-16 shrink-0 bg-primary/10 border border-primary/20 backdrop-blur-md items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                    <item.icon className="h-8 w-8 text-primary group-hover:text-navy transition-colors" />
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter leading-tight mb-3 transition-colors group-hover:text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm md:text-base leading-relaxed text-slate-300 font-medium max-w-2xl mx-auto md:mx-0">
                      {item.desc}
                    </p>
                  </div>

                  {/* Aesthetic Technical Border (Hover Only) */}
                  <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/20 transition-all pointer-events-none" />
                </div>

                {/* Left Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary/40 group-hover:w-2 group-hover:bg-primary transition-all" />
              </m.div>
            ))}
          </div>
        </div>
      </section>



      {/* CTA */}
      <CTAStrip />
    </>
  );
};

export default Index;
