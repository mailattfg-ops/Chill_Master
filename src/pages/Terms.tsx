import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone, ShieldCheck, FileText, Clock, CreditCard, XCircle, AlertCircle, Scale } from "lucide-react";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Chill Master HVAC"
        description="Your cooperation with Chill Master is governed by the following terms. Read our full terms of service here."
        canonical="https://chillmasteruae.com/terms"
      />
      
      <section className="pt-40 pb-20 bg-navy relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-content relative z-10">
          <div className="max-w-4xl">
            <SectionHeading 
              title="TERMS & CONDITIONS" 
              tag="Legal Framework"
              light
              align="left"
            />
            
            <div className="mt-12 space-y-12">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
                <p className="text-white/90 text-xl font-medium leading-relaxed">
                  Your cooperation with Chill Master is governed by the following terms. 
                  <span className="block mt-4 text-white/60 text-lg italic">
                    By accessing our website or contacting us, you agree to provide accurate information and to use our services in compliance with applicable UAE laws.
                  </span>
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-1">
                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <FileText className="w-5 h-5" />
                    </span>
                    Service Requests
                  </h2>
                  <div className="ml-14 space-y-4">
                    <p className="text-white/70 text-lg leading-relaxed">
                      Information submitted through our website or forms is considered a request for consultation only.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed border-l-2 border-primary/30 pl-4 py-1 italic">
                      It does not constitute a binding agreement until a formal quotation or contract is approved by both parties.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </span>
                    Technical Support
                  </h2>
                    <p className="text-white/70 text-lg leading-relaxed ml-14">
                    Our response times are subject to availability and workload. While we aim to provide timely support, delays may occur due to external or unforeseen circumstances.
                  </p>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <CreditCard className="w-5 h-5" />
                    </span>
                    Payments
                  </h2>
                  <div className="ml-14 space-y-4">
                    <p className="text-white/70 text-lg leading-relaxed flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Advance payment may be required before commencing services.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      Final payment must be completed upon service delivery unless otherwise agreed.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <XCircle className="w-5 h-5" />
                    </span>
                    Cancellation
                  </h2>
                  <div className="ml-14 space-y-4">
                    <p className="text-white/70 text-lg leading-relaxed">
                      Service cancellations must be made in advance.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed border-l-2 border-red-500/30 pl-4 py-1">
                      Once work has started, payments made may not be refundable.
                    </p>
                  </div>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <AlertCircle className="w-5 h-5" />
                    </span>
                    Limitation of Liability
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed ml-14 italic">
                    Chill Master shall not be held responsible for delays, indirect damages, or issues arising from factors beyond our control.
                  </p>
                </section>

                <section className="group">
                  <h2 className="text-2xl font-bold text-primary mb-5 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                      <Scale className="w-5 h-5" />
                    </span>
                    Governing Law
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed ml-14">
                    These Terms & Conditions are governed by the laws of the United Arab Emirates.
                  </p>
                </section>

                <section className="p-8 border border-primary/20 bg-primary/10 rounded-2xl md:mt-8">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3 underline underline-offset-8 decoration-primary/30">
                    Contact Information
                  </h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    For any queries, please contact us at:
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <a href="mailto:info@chillmasteruae.com" className="flex items-center gap-4 text-white hover:text-primary transition-all group/link bg-white/5 p-4 rounded-xl hover:bg-white/10">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-navy transition-all duration-300">
                        <Mail className="w-6 h-6" />
                      </div>
                      <span className="text-lg">info@chillmasteruae.com</span>
                    </a>
                    <a href="tel:+971551029597" className="flex items-center gap-4 text-white hover:text-primary transition-all group/link bg-white/5 p-4 rounded-xl hover:bg-white/10">
                      <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover/link:bg-primary group-hover/link:text-navy transition-all duration-300">
                        <Phone className="w-6 h-6" />
                      </div>
                      <span className="text-lg">+971 551029597</span>
                    </a>
                  </div>
                </section>
              </div>

              <div className="pt-12 border-t border-white/10 flex items-center justify-center opacity-30 group">
                <ShieldCheck className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;

