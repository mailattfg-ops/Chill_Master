import { Link } from "react-router-dom";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { m } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
  tag?: string;
  index: number;
}

const ServiceCard = ({ icon: Icon, title, description, image, tag, index }: ServiceCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="h-full"
    >
      <Link
        to="/services"
        className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/10"
      >
        {/* Dotted Background Decoration */}
        <div className="absolute inset-0 opacity-[0.03] z-0" style={{
          backgroundImage: `radial-gradient(#1e293b 1px, transparent 1px)`,
          backgroundSize: '12px 12px'
        }} />

        {/* Image Container */}
        <div className="relative h-48 w-full overflow-hidden z-10">
          <img 
            src={image} 
            alt={title} 
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        
        <div className="flex flex-1 flex-col p-6 relative z-10 px-8">
          {tag && (
            <span className="mb-2 text-[9px] font-black uppercase tracking-[0.2em] text-primary/80">
              {tag}
            </span>
          )}
          <h3 className="mb-3 text-lg font-black text-navy leading-tight">
            {title}
          </h3>
          <p className="text-[13px] leading-relaxed text-muted-foreground flex-1 line-clamp-3">
            {description}
          </p>
          
          <div className="mt-6 flex items-center gap-2 text-xs font-black uppercase tracking-widest text-primary group-hover:gap-4 transition-all">
            <span>Details</span>
            <ArrowRight className="h-4 w-4" />
          </div>
        </div>
      </Link>
    </m.div>
  );
};

export default ServiceCard;
