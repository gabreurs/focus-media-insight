import { Reveal } from "./Reveal";

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  number?: string;
}

export const SectionHeader = ({ eyebrow, title, subtitle, number }: SectionHeaderProps) => (
  <div className="mb-16 md:mb-20 max-w-3xl">
    <Reveal>
      <div className="flex items-center gap-4 mb-6">
        {number && (
          <span className="font-display text-sm text-gold/70 tabular-nums">{number}</span>
        )}
        <span className="eyebrow">{eyebrow}</span>
      </div>
    </Reveal>
    <Reveal delay={0.05}>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium gradient-text leading-[1.05]">
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.1}>
        <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl">{subtitle}</p>
      </Reveal>
    )}
  </div>
);
