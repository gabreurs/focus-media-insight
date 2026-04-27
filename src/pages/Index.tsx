import heroImg from "@/assets/hero-elevator.jpg";
import buildingImg from "@/assets/section-building.jpg";
import bokehImg from "@/assets/texture-bokeh.jpg";
import { ProgressBar } from "@/components/focus/ProgressBar";
import { SideNav } from "@/components/focus/SideNav";
import { TopNav } from "@/components/focus/TopNav";
import { Reveal } from "@/components/focus/Reveal";
import { SectionHeader } from "@/components/focus/SectionHeader";
import {
  contextoCards,
  objetivos,
  publicos,
  comunicar,
  evitar,
  pilares,
  semanas,
  canais,
  entregaveis,
  kpis,
  pautas,
  globalStats,
} from "@/data/strategy";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, X, Building2, Megaphone, Briefcase, Instagram, Linkedin, MessageCircle, Mail, Globe } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <ProgressBar />
      <TopNav />
      <SideNav />

      {/* HERO */}
      <section id="hero" className="relative min-h-screen flex items-end pt-24 pb-20 px-6 md:px-10">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImg}
            alt="Interior premium de elevador corporativo com vista para skyline urbano à noite"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_85%)]" />
          <div className="noise-overlay" />
        </div>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="flex flex-wrap gap-2 mb-10">
                  {["Focus Media Brasil", "Estratégia mensal", "DOOH em edifícios"].map((b) => (
                    <span
                      key={b}
                      className="px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] border border-[hsl(var(--hairline))] rounded-full bg-background/40 backdrop-blur-md text-muted-foreground"
                    >
                      {b}
                    </span>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-medium leading-[0.95] tracking-tight">
                  <span className="gradient-text">Plano Estratégico</span>
                  <br />
                  <span className="gradient-text">e Linha Editorial</span>
                </h1>
              </Reveal>

              <Reveal delay={0.2}>
                <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
                  Uma estratégia de conteúdo para fortalecer a presença da Focus Media Brasil,
                  educar o mercado sobre mídia em elevadores e gerar demanda qualificada entre
                  condomínios, anunciantes e parceiros comerciais.
                </p>
              </Reveal>

              <Reveal delay={0.3}>
                <a
                  href="#contexto"
                  className="group inline-flex items-center gap-3 mt-12 px-6 py-3 border border-primary/40 rounded-full text-sm uppercase tracking-[0.18em] text-gold hover:bg-primary hover:text-primary-foreground transition-all duration-500"
                >
                  Ver estratégia
                  <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
                </a>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={0.2}>
                <div className="relative glass-card rounded-3xl p-8 md:p-10 overflow-hidden">
                  <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-primary/20 blur-3xl" />
                  <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-6">Mês de referência</div>
                  <div className="flex items-end gap-4">
                    <div className="font-display text-[10rem] md:text-[12rem] leading-[0.8] gradient-gold-text font-medium">
                      05
                    </div>
                    <div className="pb-4">
                      <div className="font-display text-3xl md:text-4xl">Maio</div>
                      <div className="text-sm text-muted-foreground">2026</div>
                    </div>
                  </div>
                  <div className="h-px bg-[hsl(var(--hairline))] my-8" />
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Foco</div>
                      <div>Construção de presença</div>
                    </div>
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">Fase</div>
                      <div>Estruturação</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* GLOBAL STATS STRIP */}
      <section className="relative border-y border-[hsl(var(--hairline))] bg-[hsl(var(--surface-1))]">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {globalStats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div>
                <div className="font-display text-3xl md:text-4xl gradient-gold-text font-medium">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground mt-2">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 2 — CONTEXTO */}
      <section id="contexto" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="02"
            eyebrow="Contexto estratégico"
            title="O momento da Focus Media no Brasil"
            subtitle="A Focus Media inicia sua presença no Brasil com uma oportunidade clara: apresentar ao mercado uma mídia urbana de alta recorrência, instalada em ambientes onde a atenção acontece de forma natural. Maio será o mês de estruturação da narrativa, fortalecimento institucional e criação de repertório para educar síndicos, gestores, anunciantes e parceiros sobre o valor da mídia em elevadores."
          />

          <div className="grid md:grid-cols-3 gap-6">
            {contextoCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.08}>
                <article className="glass-card rounded-2xl p-8 h-full">
                  <div className="font-display text-xs text-gold mb-5 tabular-nums">0{i + 1}</div>
                  <h3 className="font-display text-xl md:text-2xl mb-4 leading-tight">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3 — OBJETIVOS */}
      <section id="objetivos" className="section-pad px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-primary/10 blur-[120px]" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="03"
            eyebrow="Objetivos do mês"
            title="Objetivos de comunicação para Maio"
          />

          <div className="grid md:grid-cols-2 gap-6">
            {objetivos.map((o, i) => (
              <Reveal key={o.n} delay={i * 0.06}>
                <article className="glass-card rounded-2xl p-8 md:p-10 h-full group">
                  <div className="flex items-start justify-between mb-8">
                    <span className="font-display text-5xl gradient-gold-text font-medium">{o.n}</span>
                    <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500" />
                  </div>
                  <h3 className="font-display text-2xl md:text-[1.7rem] mb-4 leading-tight">{o.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{o.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4 — PÚBLICO */}
      <section id="publico" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            number="04"
            eyebrow="Audiência"
            title="Com quem a Focus Media precisa conversar"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {publicos.map((p, i) => {
              const Icon = [Building2, Megaphone, Briefcase][i];
              return (
                <Reveal key={p.title} delay={i * 0.08}>
                  <article className="glass-card rounded-2xl p-8 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-gold" />
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{p.tag}</span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl leading-tight mb-6">{p.title}</h3>
                    <div className="space-y-5 mt-auto pt-6 border-t border-[hsl(var(--hairline))]">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Interesse principal</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.interesse}</p>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Tom recomendado</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.tom}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5 — POSICIONAMENTO */}
      <section id="posicionamento" className="section-pad px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10">
          <img src={bokehImg} alt="" loading="lazy" width={1600} height={900} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="05" eyebrow="Posicionamento editorial" title="A mensagem central de Maio" />

          <Reveal>
            <div className="glass-card rounded-3xl p-10 md:p-16 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/40 to-transparent" />
              <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-6">Frase principal</div>
              <p className="font-display text-2xl md:text-4xl leading-[1.2] gradient-text max-w-4xl">
                A Focus Media transforma elevadores e áreas comuns em canais inteligentes
                de comunicação, conectando marcas, condomínios e pessoas no momento em
                que a <span className="text-gold">atenção é real</span>.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-8 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <h3 className="font-display text-xl">O que comunicar</h3>
                </div>
                <ul className="space-y-4">
                  {comunicar.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-gold mt-1.5 shrink-0">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
                <div className="flex items-center gap-3 mb-8">
                  <div className="h-8 w-8 rounded-full bg-destructive/15 flex items-center justify-center">
                    <X className="w-4 h-4 text-destructive" />
                  </div>
                  <h3 className="font-display text-xl">O que evitar</h3>
                </div>
                <ul className="space-y-4">
                  {evitar.map((c) => (
                    <li key={c} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="text-destructive/80 mt-1.5 shrink-0">—</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6 — PILARES */}
      <section id="pilares" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="06" eyebrow="Pilares editoriais" title="Pilares de conteúdo" subtitle="Cinco frentes narrativas que estruturam toda a comunicação do mês — do institucional à prova visual." />

          <div className="space-y-4">
            {pilares.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <article className="glass-card rounded-2xl p-8 md:p-10 grid md:grid-cols-12 gap-6 md:gap-10 group">
                  <div className="md:col-span-2">
                    <div className="font-display text-5xl md:text-6xl gradient-gold-text font-medium">{p.n}</div>
                  </div>
                  <div className="md:col-span-5">
                    <h3 className="font-display text-2xl md:text-3xl mb-4 leading-tight">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.objetivo}</p>
                  </div>
                  <div className="md:col-span-5 md:border-l md:border-[hsl(var(--hairline))] md:pl-10">
                    <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-4">Exemplos de temas</div>
                    <ul className="space-y-3">
                      {p.temas.map((t) => (
                        <li key={t} className="flex gap-3 text-sm text-foreground/85 leading-relaxed">
                          <ArrowRight className="w-3.5 h-3.5 mt-1 text-gold shrink-0" />
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7 — CALENDÁRIO */}
      <section id="calendario" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="07" eyebrow="Calendário editorial" title="Calendário sugerido de publicações" subtitle="Quatro semanas, quatro narrativas — uma progressão dramatúrgica do institucional ao comercial." />

          <div className="relative">
            {/* timeline line */}
            <div className="hidden md:block absolute left-[7.5rem] top-4 bottom-4 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

            <div className="space-y-6">
              {semanas.map((s, i) => (
                <Reveal key={s.semana} delay={i * 0.06}>
                  <article className="grid md:grid-cols-[7rem_1fr] gap-6 md:gap-10 items-start">
                    <div className="md:pt-8 relative">
                      <div className="hidden md:block absolute left-[5.95rem] top-9 w-3 h-3 rounded-full bg-primary ring-4 ring-background" />
                      <div className="font-display text-4xl md:text-5xl gradient-gold-text font-medium">0{i + 1}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-2">{s.periodo}</div>
                    </div>
                    <div className="glass-card rounded-2xl p-8 md:p-10">
                      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{s.semana}</div>
                          <h3 className="font-display text-2xl md:text-3xl leading-tight">{s.tema}</h3>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mb-8 max-w-2xl">{s.objetivo}</p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {s.conteudos.map((c, j) => (
                          <div key={j} className="border border-[hsl(var(--hairline))] rounded-xl p-5 bg-[hsl(var(--surface-2))] hover:border-primary/40 transition-colors duration-500">
                            <div className="text-[10px] uppercase tracking-[0.18em] text-gold mb-3">{c.tipo}</div>
                            <p className="text-sm leading-relaxed text-foreground/90">{c.texto}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8 — CANAIS */}
      <section id="canais" className="section-pad px-6 md:px-10 relative">
        <div className="absolute inset-0 -z-10">
          <img src={buildingImg} alt="" loading="lazy" width={1600} height={1000} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        </div>
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="08" eyebrow="Plano de canais" title="Canais e função estratégica" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {canais.map((c, i) => {
              const Icon = [Instagram, Linkedin, MessageCircle, Mail, Globe][i];
              return (
                <Reveal key={c.nome} delay={i * 0.05}>
                  <article className="glass-card rounded-2xl p-8 h-full">
                    <div className="flex items-center justify-between mb-8">
                      <Icon className="w-6 h-6 text-gold" />
                      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Canal {String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <h3 className="font-display text-2xl mb-5">{c.nome}</h3>
                    <div className="space-y-5">
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Função</div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{c.funcao}</p>
                      </div>
                      <div className="pt-5 border-t border-[hsl(var(--hairline))]">
                        <div className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">Formatos</div>
                        <p className="text-sm text-foreground/85 leading-relaxed">{c.formatos}</p>
                      </div>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 9 — ENTREGÁVEIS */}
      <section id="entregaveis" className="section-pad px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="09" eyebrow="Entregáveis" title="Entregáveis previstos" />
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <ul className="grid md:grid-cols-2 gap-x-12 gap-y-5">
              {entregaveis.map((e, i) => (
                <Reveal key={e} delay={i * 0.03}>
                  <li className="flex items-start gap-4 py-3 border-b border-[hsl(var(--hairline))] group">
                    <div className="mt-1 h-5 w-5 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:border-primary transition-colors duration-300">
                      <Check className="w-3 h-3 text-gold group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <span className="text-foreground/90 leading-relaxed">{e}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 10 — KPIs */}
      <section id="kpis" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="10" eyebrow="KPIs e mensuração" title="Como vamos medir o mês" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {kpis.map((k, i) => (
              <Reveal key={k} delay={i * 0.04}>
                <div className="glass-card rounded-xl p-6 flex items-center gap-4">
                  <div className="font-display text-2xl text-gold/70 tabular-nums">{String(i + 1).padStart(2, "0")}</div>
                  <div className="h-8 w-px bg-[hsl(var(--hairline))]" />
                  <div className="text-sm md:text-base text-foreground/90">{k}</div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="glass-card rounded-2xl p-8 md:p-10 border-l-2 border-l-primary">
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-4xl">
                O relatório de Maio deve analisar não apenas números absolutos, mas também
                quais temas geraram mais interesse, quais públicos responderam melhor e quais
                conteúdos devem ser aprofundados nos próximos meses.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 11 — DIREÇÃO CRIATIVA */}
      <section id="direcao" className="section-pad px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="11" eyebrow="Direção criativa" title="Direção visual e narrativa" />

          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-6">Visual</div>
                <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {[
                    "Uso predominante de fundo escuro.",
                    "Destaques em amarelo/dourado.",
                    "Imagens de elevadores, prédios, halls, lobbies e pessoas em contexto urbano.",
                    "Tipografia forte, moderna e legível.",
                    "Cards com frases curtas e impacto visual.",
                    "Mistura de imagens reais, mockups de telas e grafismos editoriais.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3"><span className="text-gold">—</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="glass-card rounded-2xl p-8 md:p-10 h-full">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-6">Narrativa</div>
                <ul className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                  {[
                    "Tom profissional, direto e estratégico.",
                    "Linguagem acessível para síndicos e gestores.",
                    "Linguagem mais técnica e comercial no LinkedIn.",
                    "Evitar exageros publicitários.",
                    "Explicar valor antes de vender.",
                    "Reforçar atenção, rotina, recorrência, ambiente premium e mídia inteligente.",
                  ].map((t) => (
                    <li key={t} className="flex gap-3"><span className="text-gold">—</span><span>{t}</span></li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 12 — PAUTAS */}
      <section id="pautas" className="section-pad px-6 md:px-10 relative">
        <div className="max-w-7xl mx-auto">
          <SectionHeader number="12" eyebrow="Pautas prontas" title="Pautas prioritárias para Maio" />

          <div className="grid md:grid-cols-2 gap-4">
            {pautas.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <article className="glass-card rounded-2xl p-6 md:p-8 flex gap-6 items-start group">
                  <div className="font-display text-3xl md:text-4xl gradient-gold-text font-medium tabular-nums shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <p className="text-base md:text-lg leading-snug text-foreground/95">{p}</p>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500 shrink-0 mt-2" />
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13 — FECHAMENTO */}
      <section id="fechamento" className="section-pad px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroImg} alt="" loading="lazy" width={1920} height={1080} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/15 blur-[150px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          <Reveal>
            <span className="eyebrow justify-center">13 · Fechamento</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-medium mt-8 leading-[1.05] gradient-text">
              Maio como mês de
              <br />
              <span className="gradient-gold-text">construção de presença</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-10 text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              A estratégia de Maio deve criar a base de comunicação da Focus Media Brasil:
              apresentar a marca, educar o mercado, tornar a solução desejável para condomínios
              e clara para anunciantes. A partir dessa fundação, os próximos meses podem avançar
              para campanhas de captação, provas sociais, cases, materiais ricos e estratégias
              mais agressivas de aquisição.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-16 inline-block">
              <div className="glass-card rounded-2xl p-8 md:p-10 text-left max-w-2xl">
                <div className="text-[10px] uppercase tracking-[0.25em] text-gold mb-4">Próximo passo</div>
                <p className="font-display text-xl md:text-2xl leading-snug">
                  Transformar a estratégia em calendário operacional, peças criativas e
                  rotina de publicação.
                </p>
                <div className="mt-8 flex items-center gap-3 text-sm text-gold">
                  <span className="uppercase tracking-[0.2em] text-xs">Avançar para execução</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[hsl(var(--hairline))] py-12 px-6 md:px-10 bg-[hsl(var(--surface-1))]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="font-display text-lg">Focus Media Brasil</div>
            <div className="text-xs text-muted-foreground mt-1">DOOH em edifícios · Plano Estratégico Maio 2026</div>
          </div>
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Documento estratégico — uso interno
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
