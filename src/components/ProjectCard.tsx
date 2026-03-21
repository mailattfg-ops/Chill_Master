import { m } from "framer-motion";

interface ProjectCardProps {
  image: string;
  title: string;
  location: string;
  tags: string[];
  description: string;
  index: number;
}

const ProjectCard = ({ image, title, location, tags, description, index }: ProjectCardProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group overflow-hidden rounded-none border border-border/60 bg-card transition-all hover:shadow-md"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width="400"
          height="300"
        />
      </div>
      <div className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span key={tag} className="rounded-none bg-primary/10 px-2.5 py-0.5 text-[11px] font-medium text-primary">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mb-1 text-base font-semibold text-card-foreground">{title}</h3>
        <p className="mb-2 text-xs text-muted-foreground">{location}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </div>
    </m.div>
  );
};

export default ProjectCard;
