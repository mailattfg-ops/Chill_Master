import { useState } from "react";
import { m } from "framer-motion";
import { MapPin, Building2, ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  tags: string[];
  description: string;
  index: number;
}

const ProjectCard = ({ image, title, location, description, index }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative overflow-hidden bg-navy rounded-[32px] border border-white/5 h-full flex flex-col shadow-none"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/11] overflow-hidden m-2 rounded-[28px] bg-white/5">
        {!isLoaded && (
          <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-white/5 to-white/10" />
        )}
        <m.img
          src={image}
          alt={title}
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          onLoad={() => setIsLoaded(true)}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </div>

      {/* Content */}
      <div className="p-7 pt-3 flex-1 flex flex-col pb-8">
        <div className="flex items-center gap-2 mb-3">
          <MapPin className="h-3 w-3 text-primary" />
          <span className="text-[11px] font-black text-primary uppercase tracking-widest">{location}</span>
        </div>
        
        <h3 className="text-xl font-black leading-[1.2] text-white mb-4">
          {title}
        </h3>
        
        <p className="text-[14px] leading-relaxed text-slate-300 font-medium line-clamp-4">
          {description}
        </p>
      </div>
    </m.div>
  );
};

export default ProjectCard;
