import SEO from "@/components/SEO";
import SectionHeading from "@/components/SectionHeading";
import { Mail, Phone } from "lucide-react";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Chill Master HVAC"
        description="Chill Master respects your privacy and is committed to protecting your personal information. Read our full privacy policy here."
        canonical="https://chillmasteruae.com/privacy"
      />
      
      <section className="pt-40 pb-20 bg-navy relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none" />
        
        <div className="container-content relative z-10">
          <div className="max-w-4xl">
            <SectionHeading 
              title="PRIVACY POLICY" 
              tag="Legal Documentation"
              light
              align="left"
            />
            
            <div className="mt-12 space-y-12">
              <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl">
                <p className="text-white/70 text-lg leading-relaxed italic">
                  Effective Date: March 2026
                </p>
                <p className="text-white/90 text-xl font-medium mt-4">
                  Chill Master respects your privacy and is committed to protecting your personal information.
                </p>
              </div>

              <div className="grid gap-12 md:grid-cols-1">
                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">01</span>
                    Information We Collect
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We may collect basic details such as your name, phone number, email, and location when you contact us or request our services.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">02</span>
                    How We Use Your Information
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed mb-4">
                    Your information is used to:
                  </p>
                  <ul className="grid gap-3 ml-11">
                    {["Respond to enquiries", "Provide and manage our services", "Improve customer experience"].map((item, idx) => (
                      <li key={idx} className="text-white/70 flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">03</span>
                    Data Sharing
                  </h2>
                  <div className="space-y-4">
                    <p className="text-white/70 text-lg leading-relaxed">
                      We do not sell your personal information.
                    </p>
                    <p className="text-white/70 text-lg leading-relaxed">
                      Your data may only be shared if required by law or to deliver our services.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">04</span>
                    Data Protection
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We take reasonable steps to protect your information, but no method of transmission is completely secure.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">05</span>
                    Cookies
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    Our website may use cookies to enhance user experience and analyze website traffic.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">06</span>
                    Your Rights
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    You can request access, correction, or deletion of your personal data at any time.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">07</span>
                    Changes to This Policy
                  </h2>
                  <p className="text-white/70 text-lg leading-relaxed">
                    We may update this policy from time to time. Continued use of our website means you accept those changes.
                  </p>
                </section>

                <section className="p-8 border border-primary/20 bg-primary/10 rounded-2xl">
                  <h2 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                    <span className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-mono">08</span>
                    Contact Us
                  </h2>
                  <p className="text-white/90 text-lg mb-6 leading-relaxed">
                    For any privacy-related queries:
                  </p>
                  <div className="space-y-4">
                    <a href="mailto:info@chillmasteruae.com" className="flex items-center gap-4 text-white hover:text-primary transition-all group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                        <Mail className="w-5 h-5" />
                      </div>
                      <span className="text-lg">info@chillmasteruae.com</span>
                    </a>
                    <a href="tel:+971551029597" className="flex items-center gap-4 text-white hover:text-primary transition-all group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary group-hover:text-navy transition-all duration-300">
                        <Phone className="w-5 h-5" />
                      </div>
                      <span className="text-lg">+971 551029597</span>
                    </a>
                  </div>
                </section>
              </div>

              <div className="pt-12 border-t border-white/10 text-white/40 text-sm text-center font-medium tracking-tight">
                This Privacy Policy is governed by the laws of the United Arab Emirates.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;


