import { motion, useReducedMotion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  stagger?: number;
}

export const AnimatedText = ({
  text,
  className,
  delay = 0,
  as = "h2",
  stagger = 0.025,
}: AnimatedTextProps) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] as any;

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  const words = text.split(" ");

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  };

  const child: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.4 }}
    >
      {words.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-bottom mr-[0.25em]"
          style={{ paddingBottom: "0.12em" }}
        >
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
};
