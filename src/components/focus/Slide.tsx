import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SlideProps {
  id: string;
  index: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export const Slide = ({ id, index, label, children, className }: SlideProps) => {
  const reduced = useReducedMotion();
  return (
    <section
      id={id}
      className={`snap-start min-h-screen w-full flex flex-col relative px-6 md:px-12 lg:px-20 py-20 md:py-24 ${className ?? ""}`}
    >
      <motion.div
        className="absolute top-6 md:top-8 left-6 md:left-12 lg:left-20 right-6 md:right-12 lg:right-20 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70 z-10"
        initial={{ opacity: 0, y: reduced ? 0 : -8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className="text-gold/80 tabular-nums">{index}</span>
        <span className="hidden md:inline-block">{label}</span>
        <span className="text-gold/80 tabular-nums">/ 09</span>
      </motion.div>
      <div className="flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full pt-12">
        {children}
      </div>
    </section>
  );
};
