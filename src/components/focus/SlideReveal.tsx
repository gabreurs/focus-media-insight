import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

interface SlideRevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  amount?: number;
}

export const SlideReveal = ({ children, delay = 0, y = 30, className, amount = 0.3 }: SlideRevealProps) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
