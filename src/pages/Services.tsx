import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { AirVent, Wrench, Wind, Zap, Droplets, ThermometerSnowflake, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTAStrip from "@/components/CTAStrip";
import SEO from "@/components/SEO";
import serviceHvac from "@/assets/service-hvac.png";
import serviceDucting from "@/assets/service-ducting.png";
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
        title="Our Services | HVAC Installation & Solutions"
        description="Comprehensive HVAC installation, maintenance, AMC, ventilation, and ducting services across the UAE for all building types."
        canonical="https://chillmaster.ae/services"
        schema={{
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": "HVAC Engineering",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Chill Master"
          },
          "areaServed": {
            "@type": "State",
            "name": "United Arab Emirates"
          },
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "HVAC Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "HVAC Installation & AMC"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Ventilation & Ducting"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Industrial HVAC Systems"
                }
              }
            ]
          }
        }}
      />
      {/* Hero */}
      <section className="relative bg-navy pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <m.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/services_hero_bg.png" 
            alt="Engineering services background" 
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <div className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Corporate Solutions</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Precision <br /> HVAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] to-[#fcc968]">Solutions</span>
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-relaxed text-slate-200/80 max-w-2xl font-medium drop-shadow-md">
              From high-precision installation to ongoing maintenance, we deliver engineering-led climate solutions for UAE's most demanding environments.
            </p>
          </m.div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-background relative overflow-hidden">
        <div className="container-content space-y-24 md:space-y-40">
          {services.map((service, i) => (
            <m.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid gap-12 lg:grid-cols-2 lg:items-center`}
            >
              <div className={`${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-navy text-white shadow-xl">
                  <service.icon className="h-8 w-8" />
                </div>
                <h2 className="mb-6 text-3xl font-black text-navy leading-tight md:text-4xl">{service.title}</h2>
                <p className="text-sm md:text-lg leading-relaxed text-muted-foreground/80 font-medium">{service.description}</p>

                <div className="mt-10 grid sm:grid-cols-2 gap-6">
                  <div>
                    <h4 className="mb-4 text-[11px] font-black uppercase tracking-widest text-primary border-b border-primary/10 pb-2">Technical Scope</h4>
                    <ul className="space-y-3">
                      {service.includes.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-xs md:text-sm text-foreground font-semibold">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-100 h-fit">
                    <h4 className="mb-4 text-[11px] font-black uppercase tracking-widest text-navy border-b border-navy/5 pb-2">Ideal Building Type</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.idealFor.map((tag) => (
                        <span key={tag} className="px-3 py-1.5 rounded-full bg-white text-[10px] font-black text-navy border border-slate-200 shadow-sm uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <Button asChild className="h-14 px-10 rounded-full font-heading font-black bg-navy text-white hover:bg-primary transition-all uppercase tracking-widest text-[10px] shadow-xl group">
                    <Link to="/contact">
                      Request Technical Proposal <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className={`relative group ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="relative overflow-hidden rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    width="800"
                    height="600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-6 -right-6 h-32 w-32 bg-primary/5 -z-10 rounded-full blur-3xl" />
              </div>
            </m.div>
          ))}
        </div>
      </section>

      {/* AMC Section */}
      <section className="section-padding bg-steel bg-grid-lines relative overflow-hidden">
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
              <m.div
                key={pkg.plan}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-none border bg-card p-6 ${i === 2 ? "border-primary" : "border-border/60"}`}
              >
                {i === 2 && (
                  <span className="mb-3 inline-block rounded-none bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
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
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  );
};

export default Services;
