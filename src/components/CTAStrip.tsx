import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTAStripProps {
  title?: string;
  subtitle?: string;
}

const CTAStrip = ({
  title = "Need HVAC or MEP Solutions?",
  subtitle = "Get a free consultation and quote from our engineering team."
}: CTAStripProps) => {
  return (
    <section className="bg-primary">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container-content py-16 text-center md:py-20"
      >
        <h2 className="text-2xl font-bold text-primary-foreground md:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-primary-foreground/80">{subtitle}</p>
        <Button
          asChild
          size="lg"
          variant="secondary"
          className="mt-6 rounded-lg font-heading font-semibold"
        >
          <Link to="/contact">
            Request a Quote <ArrowRight className="ml-1.5 h-4 w-4" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default CTAStrip;
