import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Building2, Globe, ExternalLink, Headset } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

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
              Get In Touch
            </span>
            <h1 className="text-3xl font-bold tracking-tight text-navy-foreground md:text-5xl">
              Contact Us
            </h1>
            <p className="mt-4 text-base leading-relaxed text-navy-foreground/60 md:text-lg">
              Ready to discuss your project? Reach out via form, phone, or WhatsApp — we respond within 24–48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-content">
          <div className="grid gap-10 lg:grid-cols-5">
            {/* Form & Map/WhatsApp below it */}
            <div className="lg:col-span-3 space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-[2rem] border border-border p-8 md:p-10 shadow-xl shadow-navy/[0.03]"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-foreground">Initiate a Consultation</h2>
                  <p className="text-sm text-muted-foreground mt-1">Fill out the form below and our engineering team will contact you.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Full Name *</label>
                      <Input required placeholder="John Doe" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all" maxLength={100} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Email Address *</label>
                      <Input required type="email" placeholder="john@example.com" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all" maxLength={255} />
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Phone Number</label>
                      <Input type="tel" placeholder="+971 XX XXX XXXX" className="h-12 rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all" maxLength={20} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Service Required</label>
                      <div className="relative">
                        <select className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 text-sm text-foreground focus:bg-white focus:outline-none transition-all appearance-none cursor-pointer">
                          <option value="">Select a service</option>
                          <option>HVAC Installation & Replacements</option>
                          <option>Annual Maintenance (AMC)</option>
                          <option>Ventilation & Ducting</option>
                          <option>MEP (Electrical & Plumbing)</option>
                          <option>Industrial Cooling Solutions</option>
                          <option>Other / General Inquiry</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
                          <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground ml-1">Project Message *</label>
                    <Textarea 
                      required 
                      placeholder="Describe your requirements or project site location..." 
                      className="min-h-[140px] rounded-xl border-slate-200 bg-slate-50/50 focus:bg-white transition-all p-4" 
                      maxLength={1000} 
                    />
                  </div>

                  <div className="hidden" aria-hidden="true">
                    <Input name="website" tabIndex={-1} autoComplete="off" />
                  </div>

                  <Button type="submit" disabled={loading} className="w-full sm:w-auto h-12 px-10 rounded-xl font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/10 transition-all">
                    {loading ? "Sending..." : <><Send className="mr-2 h-4 w-4" /> Send Message</>}
                  </Button>
                </form>
              </motion.div>

              {/* Map and WhatsApp below form */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="overflow-hidden rounded-2xl border border-border/60 shadow-lg h-[300px] relative">
                  <div className="absolute top-4 left-4 z-10">
                    <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-border shadow-sm flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-foreground">Operational Mainland UAE</span>
                    </div>
                  </div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784181953125!3d25.076280448180955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                    className="h-full w-full border-0 grayscale opacity-80 contrast-125"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Chill Master location"
                  />
                </div>

                <Button asChild className="w-full h-14 rounded-2xl font-bold bg-[#25D366] hover:bg-[#1ebd5e] shadow-lg shadow-green-100/50 transition-all text-lg">
                  <a href="https://wa.me/971507002525" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-6 w-6" /> WhatsApp Pro
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Right: Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-10 lg:col-span-2 text-foreground"
            >
              <div>
                <h2 className="mb-6 text-2xl font-bold">Contact Details</h2>
                <div className="space-y-6">
                  {[
                    { icon: Phone, label: "Phone", value: "+971 50 700 2525", href: "tel:+971507002525" },
                    { icon: Mail, label: "Email", value: "info@chillmaster.ae", href: "mailto:info@chillmaster.ae" },
                    { icon: MapPin, label: "Headquarters", value: "United Arab Emirates" },
                    { icon: Clock, label: "Working Hours", value: "Sun – Thu: 8:00 AM – 6:00 PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{item.label}</p>
                        {item.href ? (
                          <a href={item.href} className="text-base font-bold text-foreground hover:text-primary transition-colors">{item.value}</a>
                        ) : (
                          <p className="text-base font-bold text-foreground">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Parent Companies */}
              <div className="rounded-3xl border border-border/60 bg-steel p-8">
                <h3 className="text-sm font-bold text-foreground mb-6 uppercase tracking-widest border-b border-border pb-2">Industrial Group</h3>
                <div className="space-y-6 text-foreground">
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Flash Building Contracting L.L.C.</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ajman, Sharjah, Umm Al Quwain — UAE<br />
                      📞 <a href="tel:+971507002525" className="hover:text-primary font-bold">+971 50 700 2525</a><br />
                      📧 <a href="mailto:flashbc@yahoo.com" className="hover:text-primary font-bold">flashbc@yahoo.com</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Al Baraq Steel Works L.L.C.</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Ajman, Dubai, UAQ, RAK — UAE<br />
                      📞 <a href="tel:+97167483226" className="hover:text-primary font-bold">+971 6 748 3226</a><br />
                      🌐 <a href="https://www.baraqsteel.com" target="_blank" className="hover:text-primary font-bold">baraqsteel.com</a>
                    </p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-primary uppercase tracking-wider mb-2">Dufe Lub (Lubricant Manufacturing)</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      Al Baraq Lubricant Manufacturing LLC — UAQ<br />
                      🌐 <a href="https://www.dufelub.com" target="_blank" className="hover:text-primary font-bold">dufelub.com</a>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
