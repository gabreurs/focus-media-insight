import { useEffect, useState } from "react";
import { sections } from "@/data/strategy";

export const SideNav = () => {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => e.isIntersecting && setActive(s.id));
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav className="hidden xl:flex flex-col gap-1 fixed left-8 top-1/2 -translate-y-1/2 z-40">
      {sections.map((s, i) => (
        <a
          key={s.id}
          href={`#${s.id}`}
          className="group flex items-center gap-3 py-1.5"
          aria-label={s.label}
        >
          <span
            className={`block h-px transition-all duration-500 ${
              active === s.id ? "w-10 bg-primary" : "w-5 bg-foreground/20 group-hover:bg-foreground/50"
            }`}
          />
          <span
            className={`text-[11px] uppercase tracking-[0.18em] transition-all duration-500 ${
              active === s.id
                ? "text-foreground opacity-100"
                : "text-muted-foreground opacity-0 group-hover:opacity-100"
            }`}
          >
            {String(i + 1).padStart(2, "0")} · {s.label}
          </span>
        </a>
      ))}
    </nav>
  );
};
