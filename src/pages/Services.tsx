import { Link } from "react-router-dom";
import { m } from "framer-motion";
import { AirVent, Wrench, Zap, ArrowRight } from "lucide-react";
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
    title: "Ac installation and replacement",
    description: "We provide full-scale HVAC AC service, including system replacement, installation, and commissioning for residential buildings, commercial complexes, and industrial sites. Our team handles everything from load calculation and system design to installation and performance testing, ensuring your new HVAC unit is optimized for efficiency, durability, and long-term savings.",
    image: serviceDucting,
  },
  {
    icon: Zap,
    title: "HVAC Upgrades, Retrofit & Modifications",
    description: "Modernize your existing HVAC system with our expert retrofit and upgrade solutions. Whether you're looking to improve energy efficiency, meet new environmental standards, or optimize system performance, our HVAC service team designs solutions that align with your goals—while minimizing disruption to ongoing operations.",
    image: serviceIndustrial,
  },
  {
    icon: Wrench,
    title: "HVAC Repairs",
    description: "Need urgent HVAC repair service in Dubai? Our experienced technicians provide quick diagnostics and on-site repairs to get your system back up and running fast. We handle everything from minor issues to major breakdowns—ensuring minimal downtime and restoring indoor comfort efficiently.",
    image: serviceHvac,
  },
  {
    icon: Wrench,
    title: "Annual Maintenance Contracts (AMCs)",
    description: "Avoid costly breakdowns and extend the life of your HVAC system with our flexible AMC packages. We offer both comprehensive and non-comprehensive HVAC maintenance services tailored to residential and commercial needs. Regular inspections, cleaning, and system checks help improve energy efficiency, reduce operational costs, and ensure uninterrupted comfort throughout the year.",
    image: serviceHvac,
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
            fetchPriority="high"
            decoding="sync"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent" />
        </div>
        <div className="container-content relative z-10 flex flex-col items-center text-center">
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Our HVAC <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] to-[#fcc968]">Services Include :</span>
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-relaxed text-slate-200/80 mx-auto font-medium drop-shadow-md">
              At our HVAC Division, We deliver comprehensive HVAC services backed by certified technicians and advanced diagnostic tools, ensuring exceptional system performance, energy efficiency, and operational reliability. As trusted HVAC service providers in Dubai and the UAE, we offer complete maintenance, repair, and installation solutions that maximize equipment lifespan while minimizing operational costs for residential, commercial, and industrial clients.
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



      <CTAStrip />
    </>
  );
};

export default Services;
