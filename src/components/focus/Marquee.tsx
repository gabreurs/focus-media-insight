import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  duration?: number;
  className?: string;
  reverse?: boolean;
}

export const Marquee = ({ items, duration = 40, className, reverse }: MarqueeProps) => {
  const loop = [...items, ...items, ...items];
  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex whitespace-nowrap gap-12"
        animate={{ x: reverse ? ["-33.33%", "0%"] : ["0%", "-33.33%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((item, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-display font-light tracking-tight text-muted-foreground/60 flex items-center gap-12"
          >
            {item}
            <span className="w-2 h-2 rounded-full bg-gold/60 inline-block" />
          </span>
        ))}
      </motion.div>
    </div>
  );
};
