import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SlideShellProps {
  children: ReactNode;
  index: number;
  className?: string;
  id?: string;
}

/**
 * Single full-viewport slide. Snap target. Always exactly 100svh tall so
 * each scroll click lands on a new "screen" — never two slides at once.
 */
const SlideShell = ({ children, index, className = "", id }: SlideShellProps) => (
  <section
    id={id}
    data-slide-index={index}
    className={`slide relative flex w-full min-h-[100svh] md:h-[100svh] md:overflow-hidden md:snap-start md:snap-always ${className}`}
  >
    {children}
  </section>
);

export const SlideMeta = ({
  index,
  total,
  label,
}: {
  index: number;
  total: number;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="absolute top-8 md:top-10 left-6 md:left-12 lg:left-20 xl:left-28 flex items-center gap-4 z-20"
  >
    <span className="font-editorial text-off-white/70">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
    <div className="h-px w-10 bg-off-white/20" />
    <span className="font-editorial text-caption">{label}</span>
  </motion.div>
);

export default SlideShell;
