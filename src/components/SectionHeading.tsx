import { m } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ tag, title, description, align = "center", light = false }: SectionHeadingProps) => {
  return (
    <m.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span className={`mb-4 inline-block rounded-none border px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] shadow-sm ${
          light ? "border-primary/40 text-primary bg-navy/50" : "border-primary/20 text-primary bg-white"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl leading-[1.1] ${
        light ? "text-white" : "text-navy"
      } ${align === "center" ? "mx-auto" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-sm md:text-base lg:text-lg leading-relaxed ${
          light ? "text-white/70" : "text-muted-foreground"
        } ${align === "center" ? "mx-auto max-w-2xl" : "max-w-xl"}`}>
          {description}
        </p>
      )}
    </m.div>
  );
};

export default SectionHeading;

