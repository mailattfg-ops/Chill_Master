import { useState } from "react";
import { m } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SEO from "@/components/SEO";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [service, setService] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const requirements = formData.get("requirements") as string;

    const message = `*New Technical Inquiry*\n\n*Name:* ${name}\n*Email:* ${email}\n*Service:* ${service || "Not Specified"}\n*Requirements:* ${requirements}`;
    const whatsappUrl = `https://wa.me/971551029597?text=${encodeURIComponent(message)}`;

    setTimeout(() => {
      setLoading(false);
      window.open(whatsappUrl, "_blank");
      toast({
        title: "Redirecting to WhatsApp...",
        description: "Your inquiry details have been prepared.",
      });
      (e.target as HTMLFormElement).reset();
      setService("");
    }, 800);
  };


  const contactItems = [
    {
      icon: Phone,
      label: "(+971) 55 102 9597",
      sub: "General Inquiry",
      href: "tel:+971551029597",
    },
    {
      icon: Mail,
      label: "info@chillmasteruae.com",
      sub: "Project Proposals",
      href: "mailto:info@chillmasteruae.com",
    },
    {
      icon: MapPin,
      label: "Dubai, UAE",
      sub: "Al Qusais Industrial 2",
      href: null,
    },
  ];

  return (
    <>
      <SEO
        title="Contact Us | Request a Quote | Chill Master UAE"
        description="Ready to discuss your HVAC project? Contact Chill Master via form, phone, or WhatsApp. We respond to all inquiries within 24–48 hours across the UAE."
        canonical="https://chillmaster.ae/contact"
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0">
          <m.img
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/contact_hero_bg.png"
            alt="Corporate communication background"
            className="h-full w-full object-cover opacity-25"
            loading="eager"
            fetchPriority="high"
            decoding="sync"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-navy/75" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_30%)]" />
        </div>

        <div className="container-content relative z-10">
          <m.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-xl sm:mb-6">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.28em] text-white/80 sm:text-[11px]">
                Corporate Inquiries
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Connect with our{" "}
              <span className="bg-gradient-to-r from-[#DDB262] to-[#fcc968] bg-clip-text text-transparent">
                Engineers
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200/80 sm:text-base md:mt-6 md:text-lg lg:text-xl">
              Start your next climate control project with a specialized
              consultation. We respond to technical inquiries across the UAE
              within 24–48 hours.
            </p>
          </m.div>
        </div>
      </section>

      {/* Main Section */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-white">
        <div className="container-content relative z-10 py-12 sm:py-14 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-16">
            {/* Form */}
            <div className="lg:col-span-7">
              <m.div
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="relative overflow-hidden rounded-[28px] bg-navy p-5 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.35)] ring-1 ring-white/10 sm:rounded-[32px] sm:p-7 md:p-10 lg:rounded-[40px] lg:p-12 xl:p-14"
              >
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-white/5 blur-3xl" />

                <div className="relative z-10 mb-8 sm:mb-10 md:mb-12">
                  <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.25em] text-primary/90 sm:text-[11px]">
                    Project Inquiry
                  </span>
                  <h2 className="text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl">
                    Let’s start your HVAC project
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-white/65 sm:text-base">
                    Share your project details, BOQ requirements, service scope,
                    or technical support needs. Our team will review and respond
                    quickly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
                    <div className="space-y-2.5">
                      <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                        Authorized Full Name
                      </label>
                      <Input
                        required
                        name="name"
                        placeholder="Enter your full name"
                        className="h-12 rounded-2xl border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/25 focus:border-primary sm:h-14 sm:px-5"
                      />
                    </div>

                    <div className="space-y-2.5">
                      <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                        Official Email Address
                      </label>
                      <Input
                        required
                        name="email"
                        type="email"
                        placeholder="Enter your work email"
                        className="h-12 rounded-2xl border-white/10 bg-white/5 px-4 text-sm text-white placeholder:text-white/25 focus:border-primary sm:h-14 sm:px-5"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                      Service Requirement
                    </label>
                    <Select onValueChange={setService} required>
                      <SelectTrigger className="h-12 rounded-2xl border-white/10 bg-white/5 px-4 text-sm text-white focus:border-primary focus:ring-0 sm:h-14 sm:px-5">
                        <SelectValue placeholder="Select interest service category" />
                      </SelectTrigger>
                      <SelectContent className="rounded-2xl border-white/10 bg-navy text-white">
                        <SelectItem value="hvac-installation" className="focus:bg-white/10 focus:text-white">HVAC Installation & AMC</SelectItem>
                        <SelectItem value="maintenance-repair" className="focus:bg-white/10 focus:text-white">Maintenance & Repair</SelectItem>
                        <SelectItem value="ventilation-ducting" className="focus:bg-white/10 focus:text-white">Ventilation & Ducting</SelectItem>
                        <SelectItem value="industrial-hvac" className="focus:bg-white/10 focus:text-white">Industrial HVAC Solutions</SelectItem>
                        <SelectItem value="other" className="focus:bg-white/10 focus:text-white">Other / Multiple Requirements</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2.5">
                    <label className="ml-1 text-[10px] font-black uppercase tracking-[0.2em] text-white/45">
                      Technical Requirements & Notes
                    </label>
                    <Textarea
                      required
                      name="requirements"
                      placeholder="Tell us about your project, building type, service requirement, cooling scope, maintenance needs, or support request..."
                      className="min-h-[150px] rounded-[24px] border-white/10 bg-white/5 p-4 text-sm text-white placeholder:text-white/25 focus:border-primary resize-none sm:min-h-[180px] sm:p-5"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={loading}
                      className="h-12 w-full rounded-full bg-primary px-6 text-[11px] font-black uppercase tracking-[0.16em] text-navy transition-all hover:bg-white sm:h-14 sm:w-auto sm:min-w-[220px] sm:px-10"
                    >
                      {loading ? "Transmitting..." : "Send Technical Inquiry"}
                    </Button>
                  </div>
                </form>
              </m.div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6 lg:sticky lg:top-28"
              >
                {/* Address Card */}
                <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-sm sm:p-6 md:p-7">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-primary" />
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-navy/50">
                      Our Office
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-navy sm:text-3xl">
                    Visit our location
                  </h3>

                  <div className="mt-5 space-y-2 text-sm leading-6 text-muted-foreground sm:text-base">
                    <p>Al Fahad Building -1a, 1st floor</p>
                    <p>Office# 116, Al Qusais Industrial 2</p>
                    <p>Dubai, United Arab Emirates</p>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[24px] border border-slate-200 shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784181953125!3d25.076280448180955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                      title="Chill Master UAE Location"
                      className="h-[240px] w-full border-0 transition-all duration-500 sm:h-[280px]"
                      loading="lazy"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactItems.map((item, i) => {
                    const Icon = item.icon;
                    const content = (
                      <m.div
                        key={item.label}
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.45, delay: i * 0.08 }}
                        className="group flex h-full items-start gap-4 rounded-[24px] border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:shadow-lg"
                      >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-navy text-white transition-transform group-hover:scale-105">
                          <Icon className="h-5 w-5" />
                        </div>

                        <div className="min-w-0">
                          <h4 className="break-words text-sm font-bold leading-6 text-navy sm:text-base">
                            {item.label}
                          </h4>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                            {item.sub}
                          </p>
                        </div>
                      </m.div>
                    );

                    return item.href ? (
                      <a key={item.label} href={item.href} className="block">
                        {content}
                      </a>
                    ) : (
                      <div key={item.label}>{content}</div>
                    );
                  })}
                </div>
              </m.div>
            </div>
          </div>

        </div>
      </section>


    </>
  );
};

export default Contact;