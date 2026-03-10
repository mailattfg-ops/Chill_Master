import { motion } from "framer-motion";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

const SectionHeading = ({ tag, title, description, align = "center", light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {tag && (
        <span className={`mb-3 inline-block rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
          light ? "border-navy-foreground/20 text-navy-foreground/60" : "border-primary/20 text-primary"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`text-3xl font-bold tracking-tight md:text-4xl ${light ? "text-navy-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 max-w-2xl text-base leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        } ${light ? "text-navy-foreground/60" : "text-muted-foreground"}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
