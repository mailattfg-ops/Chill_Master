import { motion } from "framer-motion";
import { Building2, Eye, Target, ShieldCheck, ClipboardCheck, Truck, Wrench, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";

const processSteps = [
  { icon: ClipboardCheck, title: "Survey & Assessment", description: "Detailed site survey and requirements analysis." },
  { icon: Target, title: "Design & Proposal", description: "Engineering design, BOQ, and commercial proposal." },
  { icon: Truck, title: "Execution", description: "On-site installation with QA/QC checkpoints." },
  { icon: CheckCircle2, title: "Handover", description: "Testing, commissioning, and full documentation." },
  { icon: Wrench, title: "AMC Support", description: "Ongoing maintenance and support contracts." },
];

const groupCompanies = [
  { name: "Flash Building Contracting L.L.C", description: "A licensed general contracting company delivering building and civil works across the UAE." },
  { name: "Al Baraq Steel Works L.L.C", description: "Steel fabrication and structural works with state-of-the-art manufacturing capabilities." },
  { name: "Al Baraq Lubricant Manufacturing (Dufe Lub)", description: "Industrial and automotive lubricant manufacturing with wide distribution across the region." },
];

const About = () => {
  return (
    <>
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
              Founded in 2025, Chill Master brings together deep industry expertise and the backing of an established industrial group to deliver reliable HVAC and MEP solutions across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section-padding bg-background">
        <div className="container-content grid gap-8 md:grid-cols-2">
          {[
            { icon: Eye, title: "Our Vision", text: "To be the most trusted HVAC & MEP partner for developers, contractors, and facility owners in the UAE — known for engineering precision and responsive execution." },
            { icon: Target, title: "Our Mission", text: "To deliver end-to-end mechanical, electrical, and plumbing solutions with documented quality, safety compliance, and on-time project delivery." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-lg border border-border/60 bg-card p-8"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-card-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Group Ecosystem */}
      <section className="section-padding bg-steel">
        <div className="container-content">
          <SectionHeading
            tag="Group Ecosystem"
            title="Part of Jowhar A. Group of Companies"
            description="Integrated industrial support and delivery standards across contracting, steel, and manufacturing."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {groupCompanies.map((co, i) => (
              <motion.div
                key={co.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-lg border border-border/60 bg-card p-6"
              >
                <div className="mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Building2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-card-foreground">{co.name}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{co.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-background">
        <div className="container-content">
          <SectionHeading
            tag="Our Process"
            title="From Survey to Ongoing Support"
            description="A structured, quality-driven approach to every project we take on."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-lg border border-border/60 bg-card p-5 text-center"
              >
                <div className="absolute -top-3 left-5 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground font-mono">
                  {i + 1}
                </div>
                <div className="mb-3 mt-2 flex justify-center">
                  <step.icon className="h-6 w-6 text-primary" />
                </div>
                <h4 className="mb-1 text-sm font-semibold text-card-foreground">{step.title}</h4>
                <p className="text-xs leading-relaxed text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-steel">
        <div className="container-content">
          <SectionHeading
            tag="Compliance"
            title="Certifications & Standards"
            description="We operate in accordance with industry standards and regulatory requirements."
          />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {[
              "ISO 9001 Quality Management",
              "ASHRAE Standards Compliance",
              "UAE Civil Defence Approved",
              "DEWA Registered Contractor",
            ].map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-4"
              >
                <ShieldCheck className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-card-foreground">{cert}</span>
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
