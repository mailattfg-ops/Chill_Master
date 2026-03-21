import { m } from "framer-motion";
import { Building2, Eye, Target, ShieldCheck, ClipboardCheck, Truck, Wrench, CheckCircle2, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";
import aboutHeroBg from "@/assets/group-bg.png";
import visionImg from "@/assets/vision-concept.png";
import missionImg from "@/assets/mission-execution.png";

import flashThumb from "@/assets/flash-thumb.png";
import steelThumb from "@/assets/steel-thumb.png";
import lubThumb from "@/assets/lubricants-thumb.png";

const processSteps = [
  { icon: ClipboardCheck, title: "Survey & Assessment", description: "Detailed site survey and requirements analysis." },
  { icon: Target, title: "Design & Proposal", description: "Engineering design, BOQ, and commercial proposal." },
  { icon: Truck, title: "Execution", description: "On-site installation with QA/QC checkpoints." },
  { icon: CheckCircle2, title: "Handover", description: "Testing, commissioning, and full documentation." },
  { icon: Wrench, title: "AMC Support", description: "Ongoing maintenance and support contracts." },
];

const groupCompanies = [
  { 
    name: "Flash Building Contracting L.L.C", 
    description: "General and civil contracting company with offices in Ajman, Sharjah, and Umm Al Quwain.",
    image: flashThumb,
    tag: "Contracting"
  },
  { 
    name: "Al Baraq Steel Works L.L.C", 
    description: "Ajman-based steel fabrication and structural works with operations across Dubai, Ajman, UAQ, and RAK.",
    image: steelThumb,
    tag: "Steel Industry"
  },
  { 
    name: "Al Baraq Lubricant (Dufe Lub)", 
    description: "Umm Al Quwain-based manufacturer of ECAS-certified industrial and automotive lubricants.",
    image: lubThumb,
    tag: "Manufacturing"
  },
];

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Chill Master HVAC Solutions"
        description="Learn about Chill Master, a part of Jowhar A. Group, delivering engineering excellence in HVAC solutions across the UAE since 2025."
        canonical="https://chillmaster.ae/about"
      />
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <m.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/hero_bg_chillers_v3.png" 
            alt="Engineering background" 
            className="h-full w-full object-cover opacity-30"
            loading="eager"
            // @ts-expect-error - fetchpriority is not yet in React types
            fetchpriority="high"
            decoding="sync"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>
        <div className="container-content relative z-10">
          <m.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-2xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Corporate Heritage</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Engineering <br /> Perfection <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] to-[#fcc968]">at Scale</span>
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-relaxed text-slate-200/80 max-w-2xl font-medium drop-shadow-md">
              Founded in 2025, Chill Master is part of a UAE-based industrial group led by Mr. Jowhar A., delivering reliable HVAC solutions backed by decades of Group-wide engineering excellence.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <a 
                href="http://thetimesofgulf.com/2026/02/23/the-industrial-empire-of-jowhar-a-a-deep-dive-into-dufe-lube-flash-contracting-and-al-baraq-steels-pan-uae-expansion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-navy-foreground/40 hover:text-primary transition-colors flex items-center gap-1.5 underline underline-offset-4"
              >
                Read about our industrial group on Times of Gulf
              </a>
            </div>
          </m.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-content">
          <SectionHeading
            tag="Strategic Direction"
            title="Our Vision & Mission"
            description="Leading the HVAC industry through precision, reliability, and engineering excellence."
          />
          
          <div className="mt-16 space-y-24 md:space-y-32">
            {/* Vision Section */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <m.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Vision</h3>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  To be the most trusted HVAC partner for developers, contractors, and facility owners in the UAE — known for engineering precision and responsive execution.
                </p>
                <div className="mt-8 flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
                  <span className="text-sm font-bold text-foreground/80 uppercase tracking-widest italic">Innovation • Precision • Trust</span>
                </div>
              </m.div>
              
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-none shadow-2xl shadow-primary/10 border-4 sm:border-8 border-white">
                  <img 
                    src={visionImg} 
                    alt="Vision concept" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
                    loading="lazy" 
                    decoding="async"
                    width="1200"
                    height="750"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-none bg-navy p-6 flex items-center justify-center hidden md:flex">
                  <div className="h-full w-full rounded-none border border-white/20 flex flex-col items-center justify-center">
                    <span className="text-2xl font-black text-white leading-none">2025</span>
                    <span className="text-[8px] text-white/60 font-bold uppercase tracking-widest mt-1">Vision</span>
                  </div>
                </div>
              </m.div>
            </div>

            {/* Mission Section */}
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="order-2 lg:order-1 relative"
              >
                <div className="aspect-[16/10] overflow-hidden rounded-none shadow-2xl shadow-navy/10 border-4 sm:border-8 border-white">
                  <img 
                    src={missionImg} 
                    alt="Mission execution" 
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110" 
                    loading="lazy" 
                    decoding="async"
                    width="1200"
                    height="750"
                  />
                </div>
                <div className="absolute -top-6 -right-6 h-32 w-32 rounded-none bg-primary p-6 flex items-center justify-center hidden md:flex">
                  <div className="h-full w-full rounded-none border border-white/20 flex flex-col items-center justify-center">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                </div>
              </m.div>

              <m.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="order-1 lg:order-2"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-none bg-navy/10">
                  <Target className="h-7 w-7 text-navy" />
                </div>
                <h3 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">Our Mission</h3>
                <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                  To deliver end-to-end HVAC solutions with documented quality, safety compliance, and on-time project delivery.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  {["Quality QC", "HSE Safety", "Timely Delivery"].map(tag => (
                    <span key={tag} className="px-4 py-2 rounded-none bg-slate-50 border border-slate-100 text-xs font-bold text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </div>
      </section>

      {/* Group Ecosystem */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Group Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Part of Jowhar A. Group of Companies</h2>
            <p className="text-muted-foreground">Integrated industrial support and delivery standards across contracting, steel, and manufacturing.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {groupCompanies.map((co, i) => (
              <m.div
                key={co.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-white rounded-3xl border border-slate-100 shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <img 
                    src={co.image} 
                    alt={co.name} 
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110" 
                    loading="lazy"
                    decoding="async"
                    width="600"
                    height="400"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full bg-white/95 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-primary shadow-xl">
                      {co.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 relative">
                  <h3 className="mb-4 text-xl font-black text-navy leading-tight">{co.name}</h3>
                  <p className="text-[13px] leading-relaxed text-muted-foreground/80 font-medium line-clamp-3">{co.description}</p>
                  
                  <div className="mt-8 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-500">
                    Learn more <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-content">
          <SectionHeading
            tag="Operations"
            title="Our Delivery Process"
            description="A structured, quality-driven approach to every project we take on."
          />
          
          <div className="relative mt-20">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 relative z-10">
              {processSteps.map((step, i) => (
                <m.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-6">
                    <div className="h-20 w-20 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center shadow-lg transition-all group-hover:border-primary group-hover:scale-110">
                      <step.icon className="h-8 w-8 text-slate-400 transition-colors group-hover:text-primary" />
                    </div>
                    <div className="absolute -top-2 -right-2 h-7 w-7 rounded-full bg-primary flex items-center justify-center text-[10px] font-black text-white shadow-md">
                      0{i + 1}
                    </div>
                  </div>
                  <h4 className="mb-2 text-base font-bold text-foreground">{step.title}</h4>
                  <p className="text-xs leading-relaxed text-muted-foreground font-medium px-4">{step.description}</p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section-padding bg-navy text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl rounded-full" />
        
        <div className="container-content relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-4 block">Standards</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Compliance & Certifications</h2>
            <p className="text-blue-100/60">Operating with strict adherence to UAE Civil Defence and international engineering standards.</p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "ISO 9001 Quality Management",
              "ASHRAE Standards Compliance",
              "UAE Civil Defence Approved",
              "DEWA Registered Contractor",
            ].map((cert, i) => (
              <m.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex flex-col items-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-bold tracking-tight">{cert}</span>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default About;
