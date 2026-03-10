import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";

const services = [
  {
    icon: AirVent,
    title: "HVAC Installation",
    description: "End-to-end HVAC system design and installation for residential, commercial, and industrial buildings. We handle everything from load calculations to commissioning.",
    includes: ["System design & engineering", "Equipment procurement", "Installation & piping", "Testing & commissioning", "As-built documentation"],
    idealFor: ["Commercial offices", "Residential towers", "Retail spaces"],
  },
  {
    icon: Wrench,
    title: "HVAC Maintenance & AMC",
    description: "Preventive and corrective maintenance contracts that ensure your HVAC systems run at peak efficiency year-round, minimizing downtime and energy costs.",
    includes: ["Scheduled preventive maintenance", "Emergency breakdown support", "Filter & coil cleaning", "Refrigerant top-up", "Performance reporting"],
    idealFor: ["Building owners", "Facility managers", "Industrial plants"],
  },
  {
    icon: Wind,
    title: "Ventilation & Ducting",
    description: "Precision GI duct fabrication and installation for optimal air distribution, fresh air intake, and exhaust systems across all building types.",
    includes: ["GI duct fabrication", "Duct installation & insulation", "Kitchen exhaust systems", "Smoke extraction", "Air balancing"],
    idealFor: ["Restaurants & kitchens", "Basements & parking", "Warehouses"],
  },
  {
    icon: Zap,
    title: "Electrical Works",
    description: "Complete electrical infrastructure from power distribution boards to lighting, cabling, and control systems for new builds and retrofits.",
    includes: ["Power distribution", "Cable tray & trunking", "Lighting systems", "DB & panel installation", "Earthing & bonding"],
    idealFor: ["New construction", "Fit-out projects", "Industrial facilities"],
  },
  {
    icon: Droplets,
    title: "Plumbing Works",
    description: "Professional plumbing services covering water supply, drainage, sanitary systems, and firefighting infrastructure to code.",
    includes: ["Water supply systems", "Drainage & sewage", "Sanitary installations", "Firefighting piping", "Water tank installation"],
    idealFor: ["Villas & apartments", "Commercial buildings", "Warehouses"],
  },
  {
    icon: ThermometerSnowflake,
    title: "Industrial Cooling Systems",
    description: "Specialized cooling solutions for warehouses, manufacturing plants, and large-scale industrial facilities with harsh environment requirements.",
    includes: ["Evaporative cooling", "Chiller systems", "Process cooling", "Cold storage solutions", "Ventilation design"],
    idealFor: ["Warehouses", "Factories", "Food & beverage plants"],
  },
];

const Services = () => {
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
              What We Do
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-5xl">
              Comprehensive HVAC & MEP Services
            </h1>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/60 md:text-lg">
              From installation to ongoing maintenance, we deliver engineering-led solutions for every building type across the UAE.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background">
        <div className="container-content space-y-16">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              className={`grid gap-8 lg:grid-cols-2 ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-foreground">{service.title}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>

                <div className="mt-6">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">What's Included</h4>
                  <ul className="space-y-2">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button asChild className="mt-6 rounded-lg font-heading font-semibold" size="sm">
                  <Link to="/contact">
                    Request a Quote <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>

              <div className={`rounded-lg border border-border/60 bg-steel p-6 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Ideal For</h4>
                <div className="flex flex-wrap gap-2">
                  {service.idealFor.map((tag) => (
                    <span key={tag} className="rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-lg border border-border/40 bg-card p-5">
                  <p className="text-xs text-muted-foreground">
                    Need this service for your project? Get a tailored proposal with scope, timeline, and pricing.
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AMC Section */}
      <section className="section-padding bg-steel">
        <div className="container-content">
          <SectionHeading
            tag="AMC Plans"
            title="Annual Maintenance Contracts"
            description="Keep your systems running at peak performance with our flexible AMC packages."
          />
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {[
              { plan: "Basic", frequency: "Quarterly", features: ["4 visits/year", "Filter cleaning", "Performance check", "Basic reporting"] },
              { plan: "Standard", frequency: "Bi-monthly", features: ["6 visits/year", "All Basic features", "Refrigerant top-up", "Priority response"] },
              { plan: "Premium", frequency: "Monthly", features: ["12 visits/year", "All Standard features", "Emergency support", "Detailed analytics"] },
            ].map((pkg, i) => (
              <motion.div
                key={pkg.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-lg border bg-card p-6 ${i === 2 ? "border-primary" : "border-border/60"}`}
              >
                {i === 2 && (
                  <span className="mb-3 inline-block rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                    Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold text-card-foreground">{pkg.plan}</h3>
                <p className="mb-4 text-xs text-muted-foreground">{pkg.frequency} visits</p>
                <ul className="space-y-2">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-card-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-5 w-full rounded-lg font-heading font-semibold" size="sm" variant={i === 2 ? "default" : "outline"}>
                  <Link to="/contact">Get AMC Quote</Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default Services;
