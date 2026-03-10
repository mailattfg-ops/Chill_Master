import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link
        to="/services"
        className="group flex h-full flex-col rounded-lg border border-border/60 bg-card p-6 transition-all hover:border-primary/20 hover:shadow-md"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>
        <h3 className="mb-2 text-base font-semibold text-card-foreground">{title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Learn more <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
