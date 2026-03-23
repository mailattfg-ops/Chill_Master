import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions | Chill Master HVAC"
        description="Our terms of service and business engagement standards."
        canonical="https://chillmaster.ae/terms"
      />
      <section className="section-padding bg-navy pt-40 pb-20">
        <div className="container-content">
          <h1 className="text-4xl font-black text-white md:text-6xl mb-8 uppercase tracking-widest leading-none">Terms <br /> & Conditions</h1>
          <div className="prose prose-invert max-w-4xl opacity-80">
            <p className="text-xl text-primary font-bold mb-8 italic">Your cooperation with Chill Master is governed by the following standards.</p>
            <p className="mb-4">By visiting our site or contacting us, you agree to provide accurate information through our inquiry forms and to act in accordance with UAE digital laws.</p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Service Requests</h2>
            <p className="mb-4">Information submitted on our forms is treated as a request for consultation and does not constitute a legal contract until a formal proposal is signed.</p>
            <h2 className="text-2xl font-bold mt-12 mb-4 text-white">Technical Support</h2>
            <p>Our response times are subject to availability and project scope, typically within 24–48 hours for technical inquiries across the UAE.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
