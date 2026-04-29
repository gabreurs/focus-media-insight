import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import SlideShell, { SlideMeta } from "@/components/focus/SlideShell";
import SlideNav from "@/components/focus/SlideNav";
import {
  slides,
  fioNarrativo,
  calendario,
  formatos,
  entregaveis,
  aValidar,
} from "@/data/strategy";
import marqoLogo from "@/assets/marqo-logo.svg";

/* ============================================================ */
/* Hooks                                                          */
/* ============================================================ */

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : true
  );
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = () => setIsDesktop(mq.matches);
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
};

/* ============================================================ */
/* Shared atoms                                                  */
/* ============================================================ */

const SplitText = ({
  text,
  delay = 0,
  className = "",
}: {
  text: string;
  delay?: number;
  className?: string;
}) => (
  <span className={`inline-block ${className}`}>
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        initial={{ opacity: 0, y: 60, rotateX: -80 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{
          duration: 0.9,
          delay: delay + i * 0.022,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="inline-block"
        style={{ transformOrigin: "bottom" }}
      >
        {char === " " ? "\u00A0" : char}
      </motion.span>
    ))}
  </span>
);

const Field = ({
  label,
  content,
  delay = 0,
}: {
  label: string;
  content: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true, amount: 0.2 }}
    className="group"
  >
    <div className="flex items-center gap-3 mb-2">
      <span className="block w-3 h-px bg-off-white/40 md:group-hover:w-6 md:group-hover:bg-off-white transition-all duration-500" />
      <p className="font-editorial text-caption">{label}</p>
    </div>
    <p
      className="text-foreground/65 leading-relaxed pl-6"
      style={{ fontSize: "clamp(0.875rem, 1.05vw, 0.95rem)" }}
    >
      {content}
    </p>
  </motion.div>
);

const TopMeta = ({
  index,
  total,
  label,
}: {
  index: number;
  total: number;
  label: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: -6 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true, amount: 0.3 }}
    className="absolute top-6 md:top-10 left-5 sm:left-8 md:left-12 lg:left-20 xl:left-28 right-16 md:right-32 z-10 flex flex-wrap items-center gap-3 md:gap-4"
  >
    <span className="font-editorial text-off-white/70 whitespace-nowrap">
      {String(index).padStart(2, "0")} / {String(total).padStart(2, "0")}
    </span>
    <div className="h-px w-8 md:w-10 bg-off-white/20" />
    <span className="font-editorial text-caption truncate">{label}</span>
  </motion.div>
);

/* ============================================================ */
/* 01 — Abertura (HERO)                                          */
/* ============================================================ */

const HeroSlide = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isDesktop = useIsDesktop();
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const sx = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const sy = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const bgX = useTransform(sx, [0, 1], [-20, 20]);
  const bgY = useTransform(sy, [0, 1], [-20, 20]);

  useEffect(() => {
    if (!isDesktop) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const r = ref.current.getBoundingClientRect();
      mouseX.set((e.clientX - r.left) / r.width);
      mouseY.set((e.clientY - r.top) / r.height);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [isDesktop, mouseX, mouseY]);

  const headlineSize = "clamp(2.25rem, min(10vw, 13svh), 9rem)";

  return (
    <div
      ref={ref}
      className="relative flex w-full min-h-[100svh] flex-col justify-start gap-8 px-5 pt-12 pb-36 sm:px-8 sm:pt-16 sm:pb-40 md:h-full md:justify-between md:gap-16 md:px-12 md:py-24 lg:px-20 xl:px-28"
    >
      {isDesktop ? (
        <motion.div className="absolute inset-0 pointer-events-none" style={{ x: bgX, y: bgY }}>
          <div className="absolute top-1/4 left-1/4 h-[60vw] w-[60vw] max-h-[600px] max-w-[600px] rounded-full bg-mineral/[0.04] blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 h-[50vw] w-[50vw] max-h-[500px] max-w-[500px] rounded-full bg-off-white/[0.025] blur-[120px]" />
        </motion.div>
      ) : (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute left-1/2 top-[36%] h-[72vw] w-[72vw] -translate-x-1/2 rounded-full bg-mineral/[0.03] blur-[56px]" />
        </div>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="absolute top-0 left-0 right-0 h-px bg-border origin-left"
      />

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="relative z-10 flex justify-between items-center gap-3"
      >
        <span className="font-editorial text-caption">Planejamento inicial</span>
        <span className="font-editorial text-caption hidden sm:block">
          Focus Media Brasil · Maio 2026
        </span>
      </motion.div>

      <div className="relative z-10 max-w-6xl">
        <div className="space-y-1 md:space-y-2 perspective-[1000px]">
          <h1
            className="font-display-light text-off-white"
            style={{
              fontSize: isDesktop ? headlineSize : "clamp(2rem, 13vw, 3.5rem)",
              lineHeight: 0.92,
            }}
          >
            {isDesktop ? <SplitText text="Uma chegada" delay={0.7} /> : "Uma chegada"}
          </h1>
          <h1
            className="font-display-light text-off-white"
            style={{
              fontSize: isDesktop ? headlineSize : "clamp(2rem, 13vw, 3.5rem)",
              lineHeight: 0.92,
            }}
          >
            {isDesktop ? <SplitText text="não se anuncia." delay={0.95} /> : "não se anuncia."}
          </h1>
          <h1
            className="font-display-light text-mineral"
            style={{
              fontSize: isDesktop ? headlineSize : "clamp(2rem, 13vw, 3.5rem)",
              lineHeight: 0.92,
            }}
          >
            {isDesktop ? <SplitText text="Constrói presença." delay={1.25} /> : "Constrói presença."}
          </h1>
        </div>

        <motion.div
          initial={{ opacity: 0, y: isDesktop ? 0 : 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: isDesktop ? 1 : 0.45, delay: isDesktop ? 2 : 0.12 }}
          className="mt-6 flex items-start gap-4 sm:mt-12 sm:gap-6 md:mt-16 md:gap-8"
        >
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 2.1, ease: [0.22, 1, 0.36, 1] }}
            className="h-px bg-mineral/40 w-12 mt-3 hidden md:block origin-left flex-shrink-0"
          />
          <p
            className="text-caption max-w-md leading-relaxed"
            style={{ fontSize: isDesktop ? "clamp(0.8rem, 1.1vw, 1rem)" : "0.98rem" }}
          >
            Plano estratégico de comunicação para o primeiro ciclo de operação da
            Focus Media no Brasil. Define linha narrativa, calendário editorial,
            formatos e entregáveis para o mês de maio.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: isDesktop ? 2.4 : 1.3 }}
        className="relative z-10 mt-auto flex items-end justify-between gap-3 pb-1"
      >
        <span className="font-editorial text-caption">
          {isDesktop ? "Role ou use as setas" : "Deslize ou avance"}
        </span>
        <span className="font-editorial text-caption hidden sm:block">09 telas</span>
      </motion.div>
    </div>
  );
};

/* ============================================================ */
/* Editorial slide wrapper (for content slides)                  */
/* ============================================================ */

const ContentSlide = ({
  index,
  total,
  label,
  children,
}: {
  index: number;
  total: number;
  label: string;
  children: React.ReactNode;
}) => {
  const isDesktop = useIsDesktop();
  return (
    <div
      className="relative flex w-full min-h-[100svh] flex-col px-5 pt-20 pb-40 sm:px-8 md:h-full md:overflow-hidden md:px-12 md:pt-24 md:pb-24 lg:px-20 xl:px-28"
      style={
        !isDesktop
          ? { paddingBottom: "max(10rem, calc(8.5rem + env(safe-area-inset-bottom)))" }
          : undefined
      }
    >
      <TopMeta index={index} total={total} label={label} />
      <div className="relative z-10 flex-1 min-h-0 flex flex-col justify-center">{children}</div>
    </div>
  );
};

/* ============================================================ */
/* 02 — Direção narrativa                                         */
/* ============================================================ */

const DirecaoSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  const headlineSize = isDesktop
    ? "clamp(2rem, min(7vw, 10svh), 6rem)"
    : "clamp(1.85rem, 8.5vw, 2.85rem)";
  return (
    <ContentSlide index={index} total={total} label="Direção narrativa">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 translate-x-1/3 h-[55vw] w-[55vw] max-h-[640px] max-w-[640px] rounded-full bg-mineral/[0.04] blur-[140px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-7 min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 30, letterSpacing: "0.06em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            style={{ fontSize: headlineSize, lineHeight: 0.95 }}
            className="font-display-light text-off-white"
          >
            A mensagem central
            <br />
            <span className="text-mineral">é a chegada.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-foreground/65 leading-relaxed mt-8 md:mt-10 max-w-xl"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)" }}
          >
            A comunicação de maio constrói uma narrativa coerente de presença, apresentação,
            relevância e oferta. Cada peça soma a um movimento maior, conduzindo o público da
            novidade da chegada até a compreensão do que a Focus passa a oferecer no mercado
            brasileiro.
          </motion.p>
        </div>

        <div className="lg:col-span-5 lg:pt-4 lg:border-l lg:border-border/40 lg:pl-10 space-y-6">
          {["Chegada", "Presença", "Apresentação", "Relevância", "Oferta", "Relacionamento"].map(
            (w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.06 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex items-baseline gap-4"
              >
                <span className="font-editorial text-caption tabular-nums w-6">
                  0{i + 1}
                </span>
                <span
                  className="font-display-light text-off-white"
                  style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)", letterSpacing: "-0.02em" }}
                >
                  {w}
                </span>
              </motion.div>
            )
          )}
        </div>
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 03 — Fio narrativo                                             */
/* ============================================================ */

const FioSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="Fio narrativo">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-display-light text-off-white max-w-4xl"
        style={{
          fontSize: isDesktop ? "clamp(2rem, min(5.5vw, 8svh), 4.5rem)" : "clamp(1.75rem, 8vw, 2.5rem)",
          lineHeight: 0.98,
        }}
      >
        Seis movimentos
        <br />
        <span className="text-mineral">para construir presença.</span>
      </motion.h2>

      <div className="mt-10 md:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 max-w-6xl">
        {fioNarrativo.map((item, i) => (
          <motion.div
            key={item.n}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="border-t border-border/60 pt-5"
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-editorial text-caption">Etapa {item.n}</span>
              <span className="block w-6 h-px bg-off-white/30" />
            </div>
            <h3
              className="font-display-light text-off-white mb-3"
              style={{ fontSize: "clamp(1.4rem, 2vw, 1.75rem)", letterSpacing: "-0.03em" }}
            >
              {item.etapa}
            </h3>
            <p className="text-foreground/65 leading-relaxed text-sm">{item.texto}</p>
          </motion.div>
        ))}
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 04 — Calendário                                                */
/* ============================================================ */

const CalendarioSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="Calendário editorial">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-display-light text-off-white max-w-4xl"
        style={{
          fontSize: isDesktop ? "clamp(2rem, min(5.5vw, 8svh), 4.5rem)" : "clamp(1.75rem, 8vw, 2.5rem)",
          lineHeight: 0.98,
        }}
      >
        Maio organizado em
        <br />
        <span className="text-mineral">quatro movimentos.</span>
      </motion.h2>

      <p className="text-caption text-sm max-w-xl mt-5">
        Distribuição editorial e comercial do mês, organizada por foco semanal e ritmo de produção.
      </p>

      <div className="mt-8 md:mt-12 flex flex-col">
        {calendario.map((s, i) => (
          <motion.div
            key={s.semana}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-12 gap-4 md:gap-8 py-6 border-t border-border/60 group"
          >
            <div className="col-span-12 md:col-span-3 flex flex-col gap-1">
              <span className="font-editorial text-off-white/80">{s.semana}</span>
              <span className="font-editorial text-caption tabular-nums">{s.periodo}</span>
            </div>
            <div className="col-span-12 md:col-span-3">
              <h3
                className="font-display-light text-off-white"
                style={{ fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)", letterSpacing: "-0.03em" }}
              >
                {s.foco}
              </h3>
            </div>
            <div className="col-span-12 md:col-span-6">
              <ul className="space-y-2">
                {s.itens.map((it, j) => (
                  <li
                    key={j}
                    className="flex gap-3 text-foreground/70 text-sm leading-relaxed"
                  >
                    <span className="mt-2.5 w-2 h-px bg-off-white/40 shrink-0" />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
        <div className="border-t border-border/60" />
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 05 — Formatos                                                  */
/* ============================================================ */

const FormatosSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="Formatos sugeridos">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-display-light text-off-white"
            style={{
              fontSize: isDesktop
                ? "clamp(2rem, min(5vw, 8svh), 4rem)"
                : "clamp(1.75rem, 8vw, 2.5rem)",
              lineHeight: 0.98,
            }}
          >
            Formatos previstos
            <br />
            <span className="text-mineral">para o ciclo.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-foreground/65 leading-relaxed mt-8 max-w-md"
            style={{ fontSize: "clamp(0.9rem, 1.05vw, 1rem)" }}
          >
            Cada formato cumpre um papel específico dentro do fio narrativo do mês,
            equilibrando presença digital, comercial e impressa.
          </motion.p>
        </div>

        <div className="lg:col-span-7">
          <ul className="flex flex-col">
            <div className="border-t border-border/60" />
            {formatos.map((f, i) => (
              <motion.li
                key={f.nome}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 * i }}
                viewport={{ once: true, amount: 0.3 }}
                className="py-5 flex items-baseline gap-6 border-b border-border/60 group"
              >
                <span className="font-editorial text-caption tabular-nums w-8">
                  0{i + 1}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="font-display-light text-off-white mb-1 md:group-hover:text-mineral transition-colors duration-500"
                    style={{ fontSize: "clamp(1.15rem, 1.6vw, 1.45rem)", letterSpacing: "-0.03em" }}
                  >
                    {f.nome}
                  </h3>
                  <p className="text-sm text-foreground/60">{f.desc}</p>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 06 — Entregáveis                                               */
/* ============================================================ */

const EntregaveisSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="Entregáveis">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-display-light text-off-white max-w-5xl"
        style={{
          fontSize: isDesktop
            ? "clamp(2rem, min(5.5vw, 8svh), 4.5rem)"
            : "clamp(1.75rem, 8vw, 2.5rem)",
          lineHeight: 0.98,
        }}
      >
        O que será entregue
        <br />
        <span className="text-mineral">neste primeiro ciclo.</span>
      </motion.h2>

      <div className="mt-10 md:mt-14 grid md:grid-cols-2 gap-x-12 gap-y-0 max-w-6xl">
        {entregaveis.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.04 * i }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-5 py-5 border-t border-border/60"
          >
            <span className="font-editorial text-caption tabular-nums mt-1">
              0{i + 1}
            </span>
            <p className="text-sm md:text-[0.95rem] text-foreground/80 leading-relaxed flex-1">
              {e}
            </p>
          </motion.div>
        ))}
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 07 — A validar                                                 */
/* ============================================================ */

const ValidarSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="A validar">
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.3 }}
        className="font-display-light text-off-white max-w-5xl"
        style={{
          fontSize: isDesktop
            ? "clamp(2rem, min(5vw, 7.5svh), 4rem)"
            : "clamp(1.75rem, 8vw, 2.5rem)",
          lineHeight: 0.98,
        }}
      >
        Pontos de alinhamento
        <br />
        <span className="text-mineral">com a Focus Media.</span>
      </motion.h2>

      <p className="text-caption text-sm max-w-xl mt-5">
        Definições institucionais e operacionais necessárias para garantir
        precisão, consistência e fidelidade de marca ao longo do ciclo.
      </p>

      <div className="mt-10 md:mt-12 grid md:grid-cols-2 gap-x-10 gap-y-0 max-w-6xl">
        {aValidar.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04 * i }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex gap-5 py-4 border-t border-border/60"
          >
            <span className="font-editorial text-caption tabular-nums mt-1">
              0{i + 1}
            </span>
            <p className="text-sm text-foreground/80 leading-relaxed flex-1">{v}</p>
          </motion.div>
        ))}
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 08 — Próximo alinhamento                                       */
/* ============================================================ */

const AlinhamentoSlide = ({ index, total }: { index: number; total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <ContentSlide index={index} total={total} label="Próximo alinhamento">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 h-[55vw] w-[55vw] max-h-[600px] max-w-[600px] rounded-full bg-mineral/[0.04] blur-[140px]" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-8">
          <motion.h2
            initial={{ opacity: 0, y: 30, letterSpacing: "0.06em" }}
            whileInView={{ opacity: 1, y: 0, letterSpacing: "-0.04em" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true, amount: 0.3 }}
            className="font-display-light text-off-white"
            style={{
              fontSize: isDesktop
                ? "clamp(2rem, min(6vw, 9svh), 5rem)"
                : "clamp(1.85rem, 8.5vw, 2.85rem)",
              lineHeight: 0.96,
            }}
          >
            A partir daqui,
            <br />
            transformamos a estrutura
            <br />
            <span className="text-mineral">em peças.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-10 max-w-xl space-y-5"
          >
            <p className="text-foreground/65 leading-relaxed text-[0.95rem]">
              Após a validação institucional, a Studio Marqo dá sequência ao ciclo —
              desdobrando o plano em textos finais, direção visual, peças digitais,
              materiais comerciais e o folder da Expo Síndico.
            </p>
            <p className="text-foreground/65 leading-relaxed text-[0.95rem]">
              A produção segue o cronograma previsto para maio, com revisões pontuais
              alinhadas ao posicionamento da Focus Media no mercado brasileiro.
            </p>
          </motion.div>
        </div>

        <div className="lg:col-span-4 lg:pt-4 lg:border-l lg:border-border/40 lg:pl-10 space-y-8">
          <Field
            label="Período"
            content="Maio 2026 — Ciclo 01 de comunicação."
            delay={0.2}
          />
          <Field
            label="Próximos passos"
            content="Validação da estrutura, ajustes finais e início da produção das peças."
            delay={0.3}
          />
          <Field
            label="Pontos de atenção"
            content="Folder Expo Síndico (21/05) — material com prioridade no ciclo."
            delay={0.4}
          />
        </div>
      </div>
    </ContentSlide>
  );
};

/* ============================================================ */
/* 09 — Studio Marqo (closing)                                    */
/* ============================================================ */

const ClosingSlide = ({ total }: { total: number }) => {
  const isDesktop = useIsDesktop();
  return (
    <div
      className="relative flex w-full min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-20 sm:px-8 md:h-full md:px-12 lg:px-20 xl:px-28"
      style={
        !isDesktop
          ? { paddingBottom: "max(10rem, calc(8.5rem + env(safe-area-inset-bottom)))" }
          : undefined
      }
    >
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-mineral/[0.05] ${
            isDesktop
              ? "h-[80vw] w-[80vw] max-h-[800px] max-w-[800px] blur-[160px]"
              : "h-[70vw] w-[70vw] blur-[56px]"
          }`}
        />
      </div>

      <SlideMeta index={total} total={total} label="Assinatura" />

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="absolute top-0 left-0 right-0 h-px bg-border origin-left"
      />

      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="font-editorial text-caption mb-8 sm:mb-10 md:mb-14"
        >
          Planejamento e apresentação por
        </motion.p>

        <motion.img
          src={marqoLogo}
          alt="Studio Marqo"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-12 md:h-16 w-auto mb-10 md:mb-14 opacity-95"
        />

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-display-light text-off-white"
          style={{ fontSize: "clamp(2rem, min(7vw, 10svh), 6rem)", lineHeight: 0.95 }}
        >
          Estrutura entregue.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="font-display-light text-mineral mt-1"
          style={{ fontSize: "clamp(2rem, min(7vw, 10svh), 6rem)", lineHeight: 0.95 }}
        >
          Pronta para virar marca.
        </motion.h2>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="h-px w-16 sm:w-20 bg-off-white/30 mx-auto mt-10 sm:mt-12 md:mt-16"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 flex items-center gap-3 font-editorial text-caption"
        >
          <span>Focus Media Brasil</span>
          <span className="w-6 h-px bg-off-white/20" />
          <span>Maio 2026</span>
        </motion.div>

        <motion.a
          href="https://studiomarqo.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="group mt-10 sm:mt-12 inline-flex items-center gap-4 border border-off-white/25 px-6 py-3.5 sm:px-8 sm:py-4 hover:border-off-white/70 hover:bg-off-white/[0.03] transition-all duration-500"
        >
          <span
            className="font-display-light text-off-white"
            style={{ fontSize: "clamp(0.95rem, 1.1vw, 1.05rem)", letterSpacing: "-0.01em" }}
          >
            Conheça a Studio Marqo
          </span>
          <span className="h-px w-6 bg-off-white/40 group-hover:w-10 group-hover:bg-off-white transition-all duration-500" />
          <span className="font-editorial text-caption">studiomarqo.com.br</span>
        </motion.a>
      </div>
    </div>
  );
};

/* ============================================================ */
/* INDEX                                                          */
/* ============================================================ */

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const isDesktop = useIsDesktop();

  const total = slides.length; // 9

  const goTo = useCallback(
    (i: number) => {
      const c = containerRef.current;
      if (!c) return;
      const clamped = Math.max(0, Math.min(total - 1, i));
      const target = c.querySelector<HTMLElement>(`[data-slide-index="${clamped}"]`);
      if (target) {
        c.scrollTo({ top: target.offsetTop, behavior: isDesktop ? "smooth" : "auto" });
      }
    },
    [isDesktop, total]
  );

  useEffect(() => {
    const c = containerRef.current;
    if (!c || !isDesktop) return;
    const els = c.querySelectorAll<HTMLElement>("[data-slide-index]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && e.intersectionRatio >= 0.55) {
            const i = Number((e.target as HTMLElement).dataset.slideIndex);
            setCurrent(i);
          }
        });
      },
      { root: c, threshold: [0.55, 0.75] }
    );
    els.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [isDesktop]);

  useEffect(() => {
    const c = containerRef.current;
    if (!c || isDesktop) return;
    const els = Array.from(c.querySelectorAll<HTMLElement>("[data-slide-index]"));
    let ticking = false;
    const update = () => {
      const probe = c.scrollTop + c.clientHeight * 0.4;
      let active = 0;
      for (const s of els) {
        if (s.offsetTop <= probe) active = Number(s.dataset.slideIndex ?? 0);
      }
      setCurrent(active);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };
    update();
    c.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      c.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [isDesktop]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" || e.key === "PageDown" || e.key === " ") {
        e.preventDefault();
        goTo(current + 1);
      } else if (e.key === "ArrowUp" || e.key === "PageUp") {
        e.preventDefault();
        goTo(current - 1);
      } else if (e.key === "Home") {
        e.preventDefault();
        goTo(0);
      } else if (e.key === "End") {
        e.preventDefault();
        goTo(total - 1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current, total, goTo]);

  return (
    <>
      <div
        ref={containerRef}
        className={`bg-background h-screen w-full overflow-y-auto overflow-x-hidden ${
          isDesktop ? "snap-y snap-mandatory scroll-smooth" : "overscroll-y-contain"
        }`}
        style={{ scrollbarWidth: "none", WebkitOverflowScrolling: "touch" }}
      >
        <SlideShell index={0} id={slides[0].id}>
          <HeroSlide />
        </SlideShell>

        <SlideShell index={1} id={slides[1].id}>
          <DirecaoSlide index={2} total={total} />
        </SlideShell>

        <SlideShell index={2} id={slides[2].id}>
          <FioSlide index={3} total={total} />
        </SlideShell>

        <SlideShell index={3} id={slides[3].id}>
          <CalendarioSlide index={4} total={total} />
        </SlideShell>

        <SlideShell index={4} id={slides[4].id}>
          <FormatosSlide index={5} total={total} />
        </SlideShell>

        <SlideShell index={5} id={slides[5].id}>
          <EntregaveisSlide index={6} total={total} />
        </SlideShell>

        <SlideShell index={6} id={slides[6].id}>
          <ValidarSlide index={7} total={total} />
        </SlideShell>

        <SlideShell index={7} id={slides[7].id}>
          <AlinhamentoSlide index={8} total={total} />
        </SlideShell>

        <SlideShell index={8} id={slides[8].id}>
          <ClosingSlide total={total} />
        </SlideShell>
      </div>

      <SlideNav
        current={current}
        total={total}
        isDesktop={isDesktop}
        onNext={() => goTo(current + 1)}
        onPrev={() => goTo(current - 1)}
        onJump={goTo}
      />
    </>
  );
};

export default Index;
