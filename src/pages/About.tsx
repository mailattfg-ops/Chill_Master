import { motion } from "framer-motion";
import { Building2, Eye, Target, ShieldCheck, ClipboardCheck, Truck, Wrench, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";

const processSteps = [
  { icon: ClipboardCheck, title: "Survey & Assessment", description: "Detailed site survey and requirements analysis." },
  { icon: Target, title: "Design & Proposal", description: "Engineering design, BOQ, and commercial proposal." },
  { icon: Truck, title: "Execution", description: "On-site installation with QA/QC checkpoints." },
  { icon: CheckCircle2, title: "Handover", description: "Testing, commissioning, and full documentation." },
  { icon: Wrench, title: "AMC Support", description: "Ongoing maintenance and support contracts." },
];

const groupCompanies = [
  { name: "Flash Building Contracting L.L.C", description: "General and civil contracting company with offices in Ajman, Sharjah, and Umm Al Quwain." },
  { name: "Al Baraq Steel Works L.L.C", description: "Ajman-based steel fabrication and structural works with operations across Dubai, Ajman, UAQ, and RAK." },
  { name: "Al Baraq Lubricant (Dufe Lub)", description: "Umm Al Quwain-based manufacturer of ECAS-certified industrial and automotive lubricants." },
];

const About = () => {
  return (
    <>
      <SEO 
        title="About Us | Chill Master HVAC & MEP Solutions"
        description="Learn about Chill Master, a part of Jowhar A. Group, delivering engineering excellence in HVAC and MEP solutions across the UAE since 2025."
        canonical="https://chillmaster.ae/about"
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
              About Chill Master
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-5xl">
              Engineering Excellence in HVAC & MEP
            </h1>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/60 md:text-lg">
              Founded in 2025, Chill Master is part of a UAE-based industrial group led by Mr. Jowhar A., delivering reliable HVAC and MEP solutions backed by decades of Group-wide engineering excellence.
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
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-content">
          <SectionHeading
            tag="Strategic Direction"
            title="Our Vision & Mission"
            description="Leading the HVAC & MEP industry through precision, reliability, and engineering excellence."
          />
          
          <div className="grid gap-8 lg:grid-cols-2 mt-12">
            {[
              { 
                icon: Eye, 
                title: "Our Vision", 
                text: "To be the most trusted HVAC & MEP partner for developers, contractors, and facility owners in the UAE — known for engineering precision and responsive execution.",
                color: "primary"
              },
              { 
                icon: Target, 
                title: "Our Mission", 
                text: "To deliver end-to-end mechanical, electrical, and plumbing solutions with documented quality, safety compliance, and on-time project delivery.",
                color: "navy"
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-2xl shadow-navy/[0.03] border border-border/50"
              >
                <div className="relative z-10">
                  <div className={`mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-50 transition-colors group-hover:bg-primary/5`}>
                    <item.icon className="h-10 w-10 text-primary" />
                  </div>
                  
                  <h3 className="mb-4 text-3xl font-bold text-foreground">{item.title}</h3>
                  <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                    {item.text}
                  </p>
                </div>
                <div className="absolute right-0 bottom-0 opacity-[0.02] translate-x-1/4 translate-y-1/4 pointer-events-none">
                  <item.icon className="w-64 h-64" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Ecosystem */}
      <section className="section-padding bg-slate-50">
        <div className="container-content">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Group Ecosystem</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Part of Jowhar A. Group of Companies</h2>
            <p className="text-muted-foreground">Integrated industrial support and delivery standards across contracting, steel, and manufacturing.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {groupCompanies.map((co, i) => (
              <motion.div
                key={co.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group rounded-3xl border border-white bg-white/80 backdrop-blur-sm p-8 shadow-xl shadow-navy/[0.02] transition-all hover:bg-white hover:shadow-2xl hover:shadow-navy/[0.05]"
              >
                <div className="mb-6 h-14 w-14 rounded-2xl bg-primary/5 flex items-center justify-center transition-colors group-hover:bg-primary group-hover:text-white">
                  <Building2 className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="mb-3 text-lg font-bold text-foreground">{co.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground font-medium">{co.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background relative">
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
                <motion.div
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
                </motion.div>
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
              <motion.div
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default About;
