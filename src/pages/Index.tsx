import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import focusLogo from "@/assets/focus-logo.svg";
import marqoLogo from "@/assets/marqo-logo.svg";
import { AnimatedText } from "@/components/focus/AnimatedText";
import { Marquee } from "@/components/focus/Marquee";
import { CircularBadge } from "@/components/focus/CircularBadge";
import { Slide } from "@/components/focus/Slide";
import { SlideReveal } from "@/components/focus/SlideReveal";
import {
  slides,
  fioNarrativo,
  calendario,
  formatos,
  entregaveis,
  aValidar,
} from "@/data/strategy";
import { ArrowDown, Check } from "lucide-react";

const Index = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({ container: containerRef });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const sections = Array.from(root.querySelectorAll<HTMLElement>("section[id]"));
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = sections.findIndex((s) => s.id === e.target.id);
            if (idx >= 0) setActiveIndex(idx);
          }
        });
      },
      { root, threshold: 0.55 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-gold z-50 origin-left"
        style={{ scaleX: progress }}
      />

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-6 md:px-12 lg:px-20 py-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-3 pointer-events-auto">
          <img src={focusLogo} alt="Focus Media Brasil" className="h-7 w-auto" />
        </div>
        <div className="hidden md:flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-muted-foreground pointer-events-auto">
          <span>Planejamento · Maio</span>
          <span className="w-1 h-1 rounded-full bg-gold/60" />
          <span className="text-gold/80">Studio Marqo</span>
        </div>
      </header>

      {/* Slide indicator */}
      <nav className="fixed right-5 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3">
        {slides.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex items-center gap-3 justify-end"
            aria-label={s.label}
          >
            <span
              className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-500 ${
                activeIndex === i ? "opacity-100 text-gold" : "opacity-0 group-hover:opacity-60"
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-px transition-all duration-500 ${
                activeIndex === i ? "w-8 bg-gold" : "w-4 bg-muted-foreground/40"
              }`}
            />
          </a>
        ))}
      </nav>

      {/* Deck */}
      <div ref={containerRef} className="snap-deck">

        {/* 01 — ABERTURA */}
        <Slide id="abertura" index="01" label="Abertura">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <SlideReveal>
                <span className="eyebrow mb-8 inline-flex">Planejamento Inicial · Maio 2026</span>
              </SlideReveal>
              <AnimatedText
                as="h1"
                text="Planejamento Inicial de Comunicação"
                className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] font-medium gradient-text tracking-tight"
              />
              <div className="mt-3">
                <AnimatedText
                  as="h2"
                  text="Focus Media Brasil — Maio."
                  delay={0.2}
                  className="font-display text-[clamp(1.75rem,3.5vw,2.75rem)] leading-[1.05] font-light gradient-gold-text"
                />
              </div>
              <SlideReveal delay={0.6} className="mt-10 max-w-2xl">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Linha narrativa, conteúdos e materiais de apoio para o primeiro ciclo de chegada
                  da Focus Media ao Brasil. Este é um planejamento inicial, estruturado para
                  organizar o ciclo de maio respeitando a visão interna da Focus, e serve como base
                  para afinarmos junto com a Lu e a equipe.
                </p>
              </SlideReveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <SlideReveal delay={0.4}>
                <CircularBadge text="• Focus Media · Maio 2026 " size={160} />
              </SlideReveal>
            </div>
          </div>

          <SlideReveal delay={0.9} className="mt-16 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground/70">
            <span>Role para iniciar</span>
            <motion.span
              animate={reduced ? undefined : { y: [0, 6, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-4 h-4 text-gold" />
            </motion.span>
          </SlideReveal>
        </Slide>

        {/* 02 — DIREÇÃO NARRATIVA */}
        <Slide id="direcao" index="02" label="Direção narrativa">
          <SlideReveal>
            <span className="eyebrow mb-8 inline-flex">Direção narrativa de maio</span>
          </SlideReveal>
          <AnimatedText
            as="h2"
            text="A mensagem central do mês é a chegada da Focus Media ao Brasil."
            className="font-display text-[clamp(2rem,4.5vw,4rem)] leading-[1.05] font-medium gradient-text max-w-5xl"
          />
          <SlideReveal delay={0.5} className="mt-10 max-w-3xl">
            <p className="text-lg text-muted-foreground leading-relaxed">
              A comunicação de maio constrói uma narrativa coerente de presença, apresentação,
              relevância e oferta. Cada peça soma a um movimento maior, conduzindo o público da
              novidade da chegada até a compreensão do que a Focus passa a oferecer no mercado
              brasileiro.
            </p>
          </SlideReveal>

          <div className="mt-16 -mx-6 md:-mx-12 lg:-mx-20">
            <Marquee
              items={[
                "Chegada",
                "Presença",
                "Apresentação",
                "Relevância",
                "Oferta",
                "Relacionamento",
              ]}
              duration={45}
            />
          </div>
        </Slide>

        {/* 03 — FIO NARRATIVO */}
        <Slide id="fio" index="03" label="Fio narrativo">
          <SlideReveal>
            <span className="eyebrow mb-6 inline-flex">Fio narrativo do mês</span>
          </SlideReveal>
          <AnimatedText
            as="h2"
            text="Seis movimentos para construir presença."
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium gradient-text mb-12"
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {fioNarrativo.map((item, i) => (
              <SlideReveal key={item.n} delay={0.1 + i * 0.08}>
                <div className="glass-card rounded-2xl p-7 h-full">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="font-display text-3xl text-gold/90 tabular-nums">{item.n}</span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Etapa
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-3">{item.etapa}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.texto}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </Slide>

        {/* 04 — CALENDÁRIO */}
        <Slide id="calendario" index="04" label="Calendário editorial">
          <SlideReveal>
            <span className="eyebrow mb-6 inline-flex">Calendário editorial inicial</span>
          </SlideReveal>
          <AnimatedText
            as="h2"
            text="Maio organizado em quatro movimentos."
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium gradient-text mb-4"
          />
          <SlideReveal delay={0.4}>
            <p className="text-sm text-muted-foreground max-w-2xl mb-10">
              Sugestão inicial de organização narrativa e de produção, aberta a ajustes em conjunto
              com a equipe interna.
            </p>
          </SlideReveal>

          <div className="grid md:grid-cols-2 gap-5">
            {calendario.map((s, i) => (
              <SlideReveal key={s.semana} delay={0.1 + i * 0.08}>
                <div className="glass-card rounded-2xl p-7 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-gold">
                      {s.semana}
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground tabular-nums">
                      {s.periodo}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl mb-5 gradient-gold-text">{s.foco}</h3>
                  <ul className="space-y-2.5">
                    {s.itens.map((it, j) => (
                      <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                        <span className="text-gold/70 mt-1.5 w-1 h-1 rounded-full bg-gold/70 shrink-0" />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SlideReveal>
            ))}
          </div>
        </Slide>

        {/* 05 — FORMATOS */}
        <Slide id="formatos" index="05" label="Formatos sugeridos">
          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <SlideReveal>
                <span className="eyebrow mb-6 inline-flex">Formatos sugeridos</span>
              </SlideReveal>
              <AnimatedText
                as="h2"
                text="Formatos previstos para o ciclo."
                className="font-display text-4xl md:text-5xl font-medium gradient-text mb-6"
              />
              <SlideReveal delay={0.4}>
                <p className="text-muted-foreground leading-relaxed">
                  Cada formato cumpre um papel específico dentro do fio narrativo do mês,
                  equilibrando presença digital, comercial e impressa.
                </p>
              </SlideReveal>
              <SlideReveal delay={0.6} className="mt-10 hidden lg:block">
                <CircularBadge text="• Direção · Narrativa · Execução " size={130} />
              </SlideReveal>
            </div>
            <div className="lg:col-span-7">
              <ul className="divide-y divide-border/60">
                {formatos.map((f, i) => (
                  <SlideReveal key={f.nome} delay={0.05 * i}>
                    <li className="py-5 flex items-baseline gap-6 group">
                      <span className="text-[11px] tabular-nums text-gold/70 w-8">
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <h3 className="font-display text-xl md:text-2xl mb-1 group-hover:text-gold transition-colors duration-500">
                          {f.nome}
                        </h3>
                        <p className="text-sm text-muted-foreground">{f.desc}</p>
                      </div>
                    </li>
                  </SlideReveal>
                ))}
              </ul>
            </div>
          </div>
        </Slide>

        {/* 06 — ENTREGÁVEIS */}
        <Slide id="entregaveis" index="06" label="Entregáveis">
          <SlideReveal>
            <span className="eyebrow mb-6 inline-flex">Entregáveis previstos · Maio</span>
          </SlideReveal>
          <AnimatedText
            as="h2"
            text="O que será entregue neste primeiro ciclo."
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium gradient-text mb-12 max-w-5xl"
          />
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-3">
            {entregaveis.map((e, i) => (
              <SlideReveal key={i} delay={0.05 * i}>
                <div className="flex gap-4 py-4 border-t hairline">
                  <span className="text-[11px] tabular-nums text-gold/80 mt-1.5">
                    0{i + 1}
                  </span>
                  <p className="text-sm md:text-base text-foreground/85 leading-relaxed">{e}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </Slide>

        {/* 07 — A VALIDAR */}
        <Slide id="validar" index="07" label="A validar">
          <SlideReveal>
            <span className="eyebrow mb-6 inline-flex">Materiais e informações a validar</span>
          </SlideReveal>
          <AnimatedText
            as="h2"
            text="Pontos para alinharmos junto à Focus."
            className="font-display text-4xl md:text-5xl lg:text-6xl font-medium gradient-text mb-6 max-w-5xl"
          />
          <SlideReveal delay={0.4}>
            <p className="text-muted-foreground max-w-2xl mb-10">
              Itens que precisamos receber ou validar com a Lu e a equipe interna para garantir
              precisão, consistência e fidelidade institucional ao ciclo.
            </p>
          </SlideReveal>
          <div className="grid md:grid-cols-2 gap-3">
            {aValidar.map((v, i) => (
              <SlideReveal key={i} delay={0.05 * i}>
                <div className="flex items-start gap-4 p-5 rounded-xl border hairline bg-card/40 hover:border-gold/40 transition-colors duration-500">
                  <span className="mt-0.5 w-6 h-6 rounded-full border border-gold/40 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gold" />
                  </span>
                  <p className="text-sm text-foreground/85 leading-relaxed">{v}</p>
                </div>
              </SlideReveal>
            ))}
          </div>
        </Slide>

        {/* 08 — PRÓXIMO ALINHAMENTO */}
        <Slide id="alinhamento" index="08" label="Próximo alinhamento">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <SlideReveal>
                <span className="eyebrow mb-8 inline-flex">Próximo alinhamento</span>
              </SlideReveal>
              <AnimatedText
                as="h2"
                text="A partir daqui, transformamos a estrutura em peças."
                className="font-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.05] font-medium gradient-text"
              />
              <SlideReveal delay={0.5} className="mt-10 max-w-2xl space-y-5">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Com a validação da Focus e da Lu, a Studio Marqo dá sequência ao ciclo,
                  desdobrando essa estrutura em textos finais, direção visual, peças, materiais
                  comerciais e o folder da Expo Síndico.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Seguimos abertos a ajustes e refinamentos antes da produção, para que tudo reflita
                  com fidelidade a chegada da Focus Media ao Brasil.
                </p>
              </SlideReveal>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <SlideReveal delay={0.6}>
                <CircularBadge text="• Maio · Ciclo 01 · Marqo " size={170} />
              </SlideReveal>
            </div>
          </div>
        </Slide>

        {/* 09 — STUDIO MARQO */}
        <Slide id="marqo" index="09" label="Studio Marqo">
          <div className="flex flex-col items-center justify-center text-center max-w-3xl mx-auto">
            <SlideReveal>
              <span className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-10 block">
                Planejamento e apresentação desenvolvidos por
              </span>
            </SlideReveal>
            <SlideReveal delay={0.2}>
              <img
                src={marqoLogo}
                alt="Studio Marqo"
                className="h-14 md:h-20 w-auto mx-auto mb-10 opacity-95"
              />
            </SlideReveal>
            <AnimatedText
              as="p"
              text="Studio Marqo — agência parceira da Focus Media Brasil neste ciclo."
              className="font-display text-xl md:text-2xl text-foreground/85 leading-snug mb-10"
              stagger={0.018}
            />
            <SlideReveal delay={0.6}>
              <a
                href="https://studiomarqo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-gold hover:text-primary-glow transition-colors duration-500 border-b border-gold/40 pb-1"
              >
                studiomarqo.com
              </a>
            </SlideReveal>

            <div className="mt-20 w-full -mx-6 md:-mx-12 lg:-mx-20">
              <Marquee
                items={["Estratégia", "Branding", "Comunicação", "Conteúdo", "Design", "Execução"]}
                duration={50}
                reverse
              />
            </div>

            <SlideReveal delay={0.8} className="mt-16 text-[11px] uppercase tracking-[0.25em] text-muted-foreground/60">
              © 2026 · Focus Media Brasil × Studio Marqo
            </SlideReveal>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Index;
