import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy | Chill Master HVAC"
        description="Our commitment to protecting your privacy and personal data."
        canonical="https://chillmaster.ae/privacy"
      />
      <section className="section-padding bg-navy pt-40 pb-20">
        <div className="container-content">
          <h1 className="text-4xl font-black text-white md:text-6xl mb-8 uppercase tracking-widest">Privacy Policy</h1>
          <div className="prose prose-invert max-w-4xl opacity-80">
            <p className="text-xl text-primary font-bold mb-8 italic">Your privacy is our priority at Chill Master.</p>
            <p className="mb-4">We only collect essential information required to provide our HVAC services and respond to your inquiries. We do not sell or share your personal data with third parties for marketing purposes.</p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Data Collection</h2>
            <p className="mb-4">Information provided through our contact forms is used solely to communicate with you regarding our technical services across the UAE.</p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Contact Us</h2>
            <p>For any privacy-related questions, please contact us at info@chillmasteruae.com.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
