export const TopNav = () => (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/60 border-b border-[hsl(var(--hairline))]">
    <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="h-8 w-8 rounded-md bg-gradient-to-br from-primary to-[hsl(var(--primary-glow))] flex items-center justify-center">
          <span className="font-display font-bold text-primary-foreground text-sm">F</span>
        </div>
        <div className="leading-tight">
          <div className="font-display text-sm font-semibold tracking-tight">Focus Media Brasil</div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Estratégia · Maio 2026</div>
        </div>
      </div>
      <nav className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
        <a href="#objetivos" className="hover:text-foreground transition-colors">Objetivos</a>
        <a href="#pilares" className="hover:text-foreground transition-colors">Pilares</a>
        <a href="#calendario" className="hover:text-foreground transition-colors">Calendário</a>
        <a href="#kpis" className="hover:text-foreground transition-colors">KPIs</a>
      </nav>
      <div className="hidden md:block text-[10px] uppercase tracking-[0.2em] text-gold">Deck digital</div>
    </div>
  </header>
);
