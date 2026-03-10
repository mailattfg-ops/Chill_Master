import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ShieldCheck, Clock, Users, Building2, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import CTAStrip from "@/components/CTAStrip";

const services = [
  { icon: AirVent, title: "HVAC Installation", description: "End-to-end AC system design and installation for all building types with documented QA/QC." },
  { icon: Wrench, title: "Maintenance & AMC", description: "Preventive and corrective maintenance contracts ensuring maximum uptime and system longevity." },
  { icon: Wind, title: "Ventilation & Ducting", description: "GI duct fabrication and installation with precision engineering for optimal air distribution." },
  { icon: Zap, title: "Electrical Works", description: "Complete electrical infrastructure from power distribution to lighting and control systems." },
  { icon: Droplets, title: "Plumbing Works", description: "Professional plumbing solutions for water supply, drainage, and firefighting systems." },
  { icon: ThermometerSnowflake, title: "Industrial Cooling", description: "Specialized cooling solutions for warehouses, factories, and industrial facilities across UAE." },
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
  { image: project1, title: "Commercial Office Tower HVAC", location: "Dubai, UAE", tags: ["VRF", "Ducting", "Commercial"], description: "Complete VRF system and ductwork installation for a 12-storey commercial tower." },
  { image: project2, title: "Warehouse Industrial Cooling", location: "Abu Dhabi, UAE", tags: ["Industrial Cooling", "Ventilation"], description: "Industrial ventilation and cooling system for a 15,000 sqm logistics warehouse." },
  { image: project3, title: "Residential Villa AC System", location: "Sharjah, UAE", tags: ["Split AC", "Residential"], description: "Premium split and VRF air conditioning installation for luxury residential villas." },
];

const Index = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute inset-0">
          <img src={heroBg} alt="HVAC systems on UAE rooftop" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/70" />
        </div>

        {/* Blueprint grid motif */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'linear-gradient(hsl(var(--cyan-glow)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--cyan-glow)) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container-content relative z-10 py-24 md:py-32 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-navy-foreground md:text-5xl lg:text-6xl">
              Professional HVAC & MEP Solutions in{" "}
              <span className="text-gradient">UAE</span>
            </h1>
            <p className="mt-5 text-base leading-relaxed text-navy-foreground/70 md:text-lg">
              Installation, maintenance, ducting, ventilation, electrical and plumbing for residential, commercial, and industrial projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-lg font-heading font-semibold">
                <Link to="/contact">
                  Request a Quote <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-lg border-navy-foreground/20 bg-transparent font-heading font-semibold text-navy-foreground hover:bg-navy-foreground/5"
              >
                <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Trust bar */}
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 border-t border-navy-foreground/10 pt-6">
              {trustItems.map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs font-medium text-navy-foreground/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-glow" />
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <SectionHeading
            tag="Our Services"
            title="Engineering-Led HVAC & MEP Solutions"
            description="Comprehensive mechanical, electrical, and plumbing services delivered with precision and compliance."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <ServiceCard key={service.title} {...service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* About + Group */}
      <section className="section-padding bg-steel">
        <div className="container-content">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-3 inline-block rounded-full border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Backed by an Industrial Group with Proven Delivery
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Chill Master is part of the Jowhar A. Group of Companies, an established industrial conglomerate in the UAE. Our group ecosystem brings integrated support, from steel fabrication to lubricant manufacturing, ensuring reliable supply chains and quality execution.
              </p>
              <Button asChild variant="outline" className="mt-6 rounded-lg font-heading font-semibold">
                <Link to="/about">
                  Learn About Our Group <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-3 gap-4"
            >
              {[
                { name: "Flash Building Contracting L.L.C", sub: "General Contracting" },
                { name: "Al Baraq Steel Works L.L.C", sub: "Steel Fabrication" },
                { name: "Dufe Lub", sub: "Lubricant Manufacturing" },
              ].map((co) => (
                <div key={co.name} className="flex flex-col items-center rounded-lg border border-border/60 bg-card p-5 text-center">
                  <div className="mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Building2 className="h-5 w-5 text-primary" />
                  </div>
                  <h4 className="text-xs font-semibold text-card-foreground leading-tight">{co.name}</h4>
                  <p className="mt-1 text-[11px] text-muted-foreground">{co.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <SectionHeading
            tag="Why Chill Master"
            title="Built on Trust, Delivered with Precision"
            description="Measurable performance, qualified teams, and documentation standards that set us apart."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex gap-4 rounded-lg border border-border/40 bg-card p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-card-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="section-padding bg-steel">
        <div className="container-content">
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
            <Button asChild variant="outline" className="rounded-lg font-heading font-semibold">
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
