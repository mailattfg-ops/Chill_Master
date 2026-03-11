import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, tag, index }: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="h-full"
    >
      <Link
        to="/services"
        className="group relative flex h-full flex-col rounded-none border border-primary/40 bg-white p-8 shadow-xl shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20"
      >
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-none bg-primary/5 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
          <Icon className="h-7 w-7" />
        </div>
        
        <div className="flex-1">
          {tag && (
            <span className="mb-3 inline-block text-[10px] font-bold uppercase tracking-widest text-primary/60">
              {tag}
            </span>
          )}
          <h3 className="mb-3 text-xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground group-hover:text-foreground/80 transition-colors">
            {description}
          </p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-sm font-bold text-primary">
          <span>Explore Service</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
