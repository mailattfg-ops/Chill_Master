import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Name *</label>
                    <Input required placeholder="Your full name" className="rounded-lg" maxLength={100} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Email *</label>
                    <Input required type="email" placeholder="email@example.com" className="rounded-lg" maxLength={255} />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Phone</label>
                    <Input type="tel" placeholder="+971 XX XXX XXXX" className="rounded-lg" maxLength={20} />
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">Service Required</label>
                    <select className="h-10 w-full rounded-lg border border-input bg-card px-3 text-sm text-foreground">
                      <option value="">Select a service</option>
                      <option>HVAC Installation</option>
                      <option>Maintenance & AMC</option>
                      <option>Ventilation & Ducting</option>
                      <option>Electrical Works</option>
                      <option>Plumbing Works</option>
                      <option>Industrial Cooling</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-foreground">Message *</label>
                  <Textarea required placeholder="Tell us about your project..." className="min-h-[120px] rounded-lg" maxLength={1000} />
                </div>
                {/* Honeypot */}
                <div className="hidden" aria-hidden="true">
                  <Input name="website" tabIndex={-1} autoComplete="off" />
                </div>
                <Button type="submit" disabled={loading} className="rounded-lg font-heading font-semibold" size="lg">
                  {loading ? "Sending..." : <><Send className="mr-1.5 h-4 w-4" /> Send Message</>}
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6 lg:col-span-2"
            >
              <h2 className="mb-6 text-2xl font-bold text-foreground">Contact Details</h2>

              {[
                { icon: Phone, label: "Phone", value: "+971 XX XXX XXXX", href: "tel:+971000000000" },
                { icon: Mail, label: "Email", value: "info@chillmaster.ae", href: "mailto:info@chillmaster.ae" },
                { icon: MapPin, label: "Office", value: "Dubai, United Arab Emirates" },
                { icon: Clock, label: "Working Hours", value: "Sun – Thu: 8:00 AM – 6:00 PM" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm font-medium text-foreground hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-sm font-medium text-foreground">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              <div className="flex gap-3 pt-2">
                <Button asChild variant="outline" className="flex-1 rounded-lg font-heading font-semibold" size="sm">
                  <a href="tel:+971000000000">
                    <Phone className="mr-1.5 h-4 w-4" /> Call Now
                  </a>
                </Button>
                <Button asChild className="flex-1 rounded-lg font-heading font-semibold" size="sm" style={{ backgroundColor: "#25D366" }}>
                  <a href="https://wa.me/971000000000" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp
                  </a>
                </Button>
              </div>

              {/* Map placeholder */}
              <div className="overflow-hidden rounded-lg border border-border/60">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.89784181953125!3d25.076280448180955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                  className="h-48 w-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Chill Master location"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
