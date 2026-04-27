import { motion, useReducedMotion } from "framer-motion";

interface CircularBadgeProps {
  text: string;
  size?: number;
  className?: string;
  duration?: number;
}

export const CircularBadge = ({
  text,
  size = 120,
  className,
  duration = 22,
}: CircularBadgeProps) => {
  const reduced = useReducedMotion();
  const chars = text.split("");
  const angleStep = 360 / chars.length;

  return (
    <motion.div
      className={`relative inline-flex items-center justify-center ${className ?? ""}`}
      style={{ width: size, height: size }}
      animate={reduced ? undefined : { rotate: 360 }}
      transition={{ duration, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute inset-0 rounded-full border border-gold/30" />
      <div className="absolute inset-2 rounded-full border border-gold/15" />
      <div className="absolute w-2 h-2 rounded-full bg-gold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      {chars.map((c, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 text-[10px] uppercase tracking-[0.2em] text-gold/80 font-medium"
          style={{
            transform: `translate(-50%, -50%) rotate(${i * angleStep}deg) translateY(-${size / 2 - 12}px)`,
          }}
        >
          {c}
        </span>
      ))}
    </motion.div>
  );
};
