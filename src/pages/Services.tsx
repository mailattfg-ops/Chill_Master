import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";
import serviceHvac from "@/assets/service-hvac.png";
import serviceDucting from "@/assets/service-ducting.png";
import serviceMep from "@/assets/service-mep.png";
import serviceIndustrial from "@/assets/service-industrial.png";

const services = [
  {
    icon: AirVent,
    title: "HVAC Installation & AMC Services",
    description: "Complete HVAC system design and execution for residential and commercial buildings, specialized for the UAE climate with comprehensive AMC support.",
    includes: ["System design & engineering", "Installation & Commissioning", "Preventive Maintenance", "AMC Contracts", "24/48hr Response"],
    idealFor: ["Luxury Villas", "Commercial Towers", "Retail Units"],
    image: serviceHvac,
  },
  {
    icon: Wind,
    title: "Ventilation, Ducting & Exhaust",
    description: "GI duct fabrication and installation for fresh air, kitchen exhaust, and smoke management systems following international standards.",
    includes: ["GI duct fabrication", "Kitchen exhaust systems", "Fresh air intake", "Smoke extraction", "Air balancing"],
    idealFor: ["Restaurants", "Industrial Warehouses", "Basements"],
    image: serviceDucting,
  },
  {
    icon: Zap,
    title: "Electrical & Plumbing Works",
    description: "Full Mechanical, Electrical, and Plumbing (MEP) contracting including power distribution, drainage, and water supply infrastructure.",
    includes: ["Power distribution", "Water supply systems", "Drainage infrastructure", "Lighting installations", "Firefighting piping"],
    idealFor: ["New Projects", "Building Retrofits", "Industrial Parks"],
    image: serviceMep,
  },
  {
    icon: ThermometerSnowflake,
    title: "Industrial HVAC Systems",
    description: "Large-scale climate control and process cooling solutions for factories, warehouses, and industrial plants across the UAE.",
    includes: ["Process cooling", "Factory ventilation", "Warehouse climate control", "Cold storage", "Chiller maintenance"],
    idealFor: ["Factories", "Logistics Hubs", "Cold Storage Units"],
    image: serviceIndustrial,
  },
];

const Services = () => {
  return (
    <>
      <SEO 
        title="Our Services | HVAC Installation & MEP Solutions"
        description="Comprehensive HVAC installation, maintenance, AMC, ventilation, ducting, electrical and plumbing services across the UAE for all building types."
        canonical="https://chillmaster.ae/services"
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

              <div className="relative group">
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-primary/5 border border-primary/10">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Floating Overlay Info */}
                  <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[80%]">
                    {service.idealFor.map((tag) => (
                      <span key={tag} className="rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold text-primary shadow-sm border border-primary/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-4 rounded-xl border border-dashed border-primary/20 bg-primary/5 p-4">
                  <p className="text-xs font-medium text-primary/80">
                    <span className="font-bold">Ideal for:</span> {service.idealFor.join(", ")}
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
