import { useState } from "react";
import { m } from "framer-motion";
import { Phone, Mail, MapPin, Send, Facebook, Twitter, Youtube, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import contactHeroImg from "@/assets/contact-hero.png";

const Contact = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "Message sent!", description: "We'll get back to you within 24–48 hours." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <SEO 
        title="Contact Us | Request a Quote | Chill Master UAE"
        description="Ready to discuss your HVAC project? Contact Chill Master via form, phone, or WhatsApp. We respond to all inquiries within 24–48 hours across the UAE."
        canonical="https://chillmaster.ae/contact"
      />
      {/* Hero Section */}
      <section className="relative bg-navy pt-32 pb-24 md:pt-48 md:pb-40 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <m.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "linear" }}
            src="/contact_hero_bg.png" 
            alt="Corporate communication background" 
            className="h-full w-full object-cover opacity-30"
            loading="eager"
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
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/80">Corporate Inquiries</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white md:text-6xl lg:text-7xl leading-[1.1] mb-6">
              Connect <br /> with our <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#DDB262] to-[#fcc968]">Engineers</span>
            </h1>
            <p className="mt-6 text-sm md:text-xl leading-relaxed text-slate-200/80 max-w-2xl font-medium drop-shadow-md">
              Start your next major climate project with a specialized consultation. We respond to all technical inquiries across the UAE within 24–48 hours.
            </p>
          </m.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-white border-b border-slate-100 overflow-hidden bg-grid-lines">

        <div className="container-content relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              {/* Contact Form Card */}
              <m.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-navy p-8 md:p-16 rounded-[40px] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] relative overflow-hidden ring-1 ring-white/10"
              >
                <div className="mb-12 relative z-10">
                  <h3 className="text-3xl font-black text-white mb-4 md:text-4xl leading-tight">Project Inquiry <br /><span className="text-primary tracking-widest font-bold">START NOW</span></h3>
                  <p className="text-white/60 text-base md:text-lg max-w-md">Our engineering specialists are ready to provide technical guidance and detailed BOQs for your project.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Authorized Full Name</label>
                      <Input required className="h-14 rounded-full bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 transition-all px-6 text-sm" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Official Email Address</label>
                      <Input required type="email" className="h-14 rounded-full bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 transition-all px-6 text-sm" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-white/40 uppercase tracking-[0.2em] ml-2">Technical Requirements & Notes</label>
                    <Textarea 
                      required 
                      className="min-h-[160px] rounded-[30px] bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-primary focus:ring-0 transition-all p-6 resize-none text-sm" 
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="h-16 px-12 rounded-full font-black bg-primary text-navy hover:bg-white transition-all uppercase tracking-[0.15em] text-[10px] min-w-[240px] shadow-2xl shadow-primary/20">
                    {loading ? "Transmitting..." : "Send Technical Inquiry"}
                  </Button>
                </form>
              </m.div>
            </div>

            {/* Right Column: Location */}
            <div className="lg:col-span-5">
              <m.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-28"
              >
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-0.5 w-6 bg-navy" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-navy/50">Presence</span>
                  </div>
                  <h2 className="text-3xl font-bold text-navy mb-3 lg:text-4xl">Our Location</h2>
                  <p className="text-muted-foreground text-base leading-relaxed mb-2">Al Fahad Building -1a, 1st floor</p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-2">Office# 116, Al Qusais Industrial 2</p>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">Dubai, United Arab Emirates</p>
                  
                  <div className="overflow-hidden border-4 border-slate-50 shadow-2xl h-[300px] relative group">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784181953125!3d25.076280448180955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                      className="h-full w-full border-0 grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                      allowFullScreen
                      loading="lazy"
                      title="Chill Master UAE Location"
                    />
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xs font-black text-navy uppercase tracking-widest mb-4">Connect With Us</h3>
                  <div className="flex flex-wrap gap-3">
                    {[Facebook, Twitter, Youtube, Globe].map((Icon, i) => (
                      <a 
                        key={i} 
                        href="#" 
                        className="h-10 w-10 flex items-center justify-center bg-white border border-slate-200 text-navy rounded-none hover:bg-navy hover:text-white hover:border-navy transition-all shadow-sm"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </m.div>
            </div>
          </div>

          {/* New Row: Single Row Contact Information - Right Aligned */}
          <div className="mt-12 lg:mt-20 pt-12 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:justify-end gap-10 lg:gap-20">
              {[
                { icon: Phone, label: "(+971) 55 102 9597", sub: "General Inquiry", href: "tel:+971551029597" },
                { icon: Mail, label: "info@chillmasteruae.com", sub: "Project Proposals", href: "mailto:info@chillmasteruae.com" },
                { icon: MapPin, label: "Dubai", sub: "Al Qusais Ind 2", href: null },
              ].map((item, i) => (
                <m.div 
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-12 w-12 flex items-center justify-center bg-navy text-white rounded-none transition-transform group-hover:scale-110 shadow-md shrink-0">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-navy text-sm lg:text-base leading-tight mb-0.5">{item.label}</h4>
                    <p className="text-[9px] text-muted-foreground uppercase tracking-[0.15em] font-black">{item.sub}</p>
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-navy py-16 lg:py-20 relative overflow-hidden">
        {/* Decor */}
        <div className="absolute -bottom-16 -left-16 h-48 w-48 bg-[#A8C3B8]/5 rounded-none rotate-12" />
        
        <div className="container-content relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-3 lg:text-4xl">Stay Informed</h2>
            <p className="text-white/50 text-sm lg:text-base mb-10 max-w-2xl mx-auto">
              Subscribe to our corporate newsletter for technical updates and UAE engineering news.
            </p>
            
            <div className="flex flex-col sm:flex-row max-w-2xl mx-auto gap-3">
              <div className="flex-1">
                <Input 
                  placeholder="Your Work Email" 
                  className="h-14 rounded-none bg-white border-none text-navy placeholder:text-navy/30 px-6 font-medium focus:ring-2 focus:ring-[#A8C3B8]" 
                />
              </div>
              <Button className="h-14 px-10 rounded-none font-bold bg-[#A8C3B8] text-navy hover:bg-white transition-all uppercase tracking-widest text-[10px] btn-shadow">
                Subscribe Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
