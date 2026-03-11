import { useState } from "react";
import { motion } from "framer-motion";
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
        description="Ready to discuss your HVAC or MEP project? Contact Chill Master via form, phone, or WhatsApp. We respond to all inquiries within 24–48 hours across the UAE."
        canonical="https://chillmaster.ae/contact"
      />
         {/* Hero Section */}
      <section className="relative bg-navy overflow-hidden">
        {/* Decorative Grid Lines */}
        <div className="absolute inset-0 opacity-[0.05]" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
        
        <div className="container-content relative z-10 pt-16 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="mb-4 h-1 w-12 bg-[#A8C3B8] rounded-none" />
              <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl mb-6">
                Contact <span className="text-[#A8C3B8]">Us</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-white/70 font-medium">
                Professional HVAC & MEP engineering solutions across the UAE. Our team is ready to assist with your residential, commercial, and industrial requirements.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-first lg:order-last mb-8 lg:mb-0"
            >
              <div className="relative z-10 aspect-[16/9] lg:aspect-[3/2] overflow-hidden border-[10px] border-white shadow-2xl">
                <img src={contactHeroImg} alt="Modern UAE Office" className="h-full w-full object-cover" />
              </div>
              {/* Decorative background element */}
              <div className="absolute -bottom-4 -right-4 -left-4 top-4 border border-[#A8C3B8]/20 z-0 hidden lg:block" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative bg-white border-b border-slate-100 overflow-hidden bg-grid-lines">

        <div className="container-content relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              {/* Contact Form Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-navy p-6 md:p-12 shadow-2xl relative overflow-hidden"
              >
                {/* Accent Decor */}
                <div className="absolute top-0 right-0 h-24 w-24 bg-[#A8C3B8]/10 -mr-12 -mt-12 rotate-45" />
                
                <div className="mb-8 relative z-10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-0.5 w-6 bg-[#A8C3B8]" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8C3B8]">Request</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Send A Message</h3>
                  <p className="text-white/50 text-base">Fill out the form below and our specialists will contact you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Full Name</label>
                      <Input required className="h-12 rounded-none bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#A8C3B8] focus:ring-0 transition-all px-4" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Email Address</label>
                      <Input required type="email" className="h-12 rounded-none bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#A8C3B8] focus:ring-0 transition-all px-4" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-bold text-white/40 uppercase tracking-widest ml-1">Your Requirements</label>
                    <Textarea 
                      required 
                      className="min-h-[160px] rounded-none bg-white/5 border-white/10 text-white placeholder:text-white/20 focus:border-[#A8C3B8] focus:ring-0 transition-all p-4 resize-none" 
                    />
                  </div>
                  <Button type="submit" disabled={loading} className="h-14 px-12 rounded-none font-bold bg-[#A8C3B8] text-navy hover:bg-white transition-all uppercase tracking-widest text-[10px] min-w-[200px]">
                    {loading ? "Sending..." : "Submit Inquiry"}
                  </Button>
                </form>
              </motion.div>
            </div>

            {/* Right Column: Location */}
            <div className="lg:col-span-5">
              <motion.div
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
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">Serving Dubai, Abu Dhabi, Sharjah, and the Northern Emirates.</p>
                  
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
              </motion.div>
            </div>
          </div>

          {/* New Row: Single Row Contact Information - Right Aligned */}
          <div className="mt-12 lg:mt-20 pt-12 border-t border-slate-100">
            <div className="flex flex-col sm:flex-row sm:justify-end gap-10 lg:gap-20">
              {[
                { icon: Phone, label: "(+971) 50 700 2525", sub: "General Inquiry", href: "tel:+971507002525" },
                { icon: Mail, label: "info@chillmaster.ae", sub: "Project Proposals", href: "mailto:info@chillmaster.ae" },
                { icon: MapPin, label: "Mainland UAE", sub: "Our Presence", href: null },
              ].map((item, i) => (
                <motion.div 
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
                </motion.div>
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
