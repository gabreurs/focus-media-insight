import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp } from "lucide-react";

interface SlideNavProps {
  current: number;
  total: number;
  isDesktop: boolean;
  onNext: () => void;
  onPrev: () => void;
  onJump: (i: number) => void;
}

const SlideNav = ({ current, total, isDesktop, onNext, onPrev, onJump }: SlideNavProps) => {
  const isLast = current >= total - 1;
  const isFirst = current === 0;

  if (!isDesktop) {
    return (
      <div
        className="fixed inset-x-4 z-40 md:hidden"
        style={{ bottom: "max(1rem, calc(0.75rem + env(safe-area-inset-bottom)))" }}
      >
        <div className="flex items-center justify-between gap-3 border border-border/70 bg-background/95 px-3 py-3 shadow-[0_12px_40px_hsl(var(--deep-black)/0.45)]">
          <button
            onClick={onPrev}
            disabled={isFirst}
            aria-label="Tela anterior"
            className="group relative flex h-11 w-11 items-center justify-center border border-border/60 transition-colors duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ArrowUp
              className="h-4 w-4 text-off-white/75 transition-transform duration-300 group-active:-translate-y-0.5"
              strokeWidth={1.25}
            />
          </button>

          <div className="min-w-0 flex-1 px-1 text-center">
            <div className="font-editorial text-caption">Navegação</div>
            <div className="mt-1 flex items-baseline justify-center gap-2">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.25 }}
                  className="font-display-light text-xl tabular-nums text-off-white/90"
                >
                  {String(current + 1).padStart(2, "0")}
                </motion.span>
              </AnimatePresence>
              <span className="font-editorial text-caption">/ {String(total).padStart(2, "0")}</span>
            </div>
          </div>

          <button
            onClick={onNext}
            disabled={isLast}
            aria-label="Próxima tela"
            className="group relative flex h-11 w-11 items-center justify-center border border-off-white/40 transition-colors duration-300 disabled:opacity-25 disabled:cursor-not-allowed"
          >
            <ArrowDown
              className="relative h-4 w-4 text-off-white transition-transform duration-300 group-active:translate-y-0.5"
              strokeWidth={1.25}
            />
          </button>
        </div>

        <div className="mt-2 flex items-center justify-center gap-2 px-2">
          {Array.from({ length: total }).map((_, i) => {
            const active = i === current;
            return (
              <button
                key={i}
                onClick={() => onJump(i)}
                aria-label={`Ir para tela ${i + 1}`}
                className={`h-px transition-all duration-300 ${
                  active ? "w-6 bg-off-white" : "w-3 bg-off-white/25"
                }`}
              />
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Right-side dot rail — chapter index */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center gap-2.5 max-h-[60vh] overflow-hidden">
        {Array.from({ length: total }).map((_, i) => {
          const active = i === current;
          return (
            <button
              key={i}
              onClick={() => onJump(i)}
              aria-label={`Ir para tela ${i + 1}`}
              className="group relative flex items-center justify-end h-3"
            >
              <span
                className={`block transition-all duration-500 ease-out ${
                  active
                    ? "w-6 h-px bg-off-white"
                    : "w-3 h-px bg-off-white/25 group-hover:bg-off-white/60 group-hover:w-5"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Counter — bottom left */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 left-5 sm:left-8 md:left-12 lg:left-20 xl:left-28 z-40 flex items-center gap-2 sm:gap-3 pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="font-display-light text-off-white/90 text-xl sm:text-2xl tabular-nums"
          >
            {String(current + 1).padStart(2, "0")}
          </motion.span>
        </AnimatePresence>
        <span className="font-editorial text-caption">/ {String(total).padStart(2, "0")}</span>
      </div>

      {/* Arrow controls — bottom right */}
      <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-5 sm:right-8 md:right-12 lg:right-20 xl:right-28 z-40 flex items-center gap-2 sm:gap-3">
        <button
          onClick={onPrev}
          disabled={isFirst}
          aria-label="Tela anterior"
          className="group relative w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center border border-border/60 hover:border-off-white/50 transition-colors duration-500 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-border/60"
        >
          <ArrowUp
            className="w-4 h-4 text-off-white/70 group-hover:text-off-white group-hover:-translate-y-0.5 transition-all duration-500"
            strokeWidth={1.25}
          />
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          aria-label="Próxima tela"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 flex items-center justify-center border border-off-white/40 hover:border-off-white transition-all duration-500 disabled:opacity-20 disabled:cursor-not-allowed disabled:hover:border-off-white/40 overflow-hidden"
        >
          <span className="absolute inset-0 bg-off-white/0 group-hover:bg-off-white/[0.04] transition-colors duration-500" />
          <ArrowDown
            className="w-5 h-5 text-off-white relative group-hover:translate-y-0.5 transition-transform duration-500"
            strokeWidth={1.25}
          />
          <motion.span
            key={current}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 right-0 h-px bg-off-white/40 origin-left"
          />
        </button>
      </div>
    </>
  );
};

export default SlideNav;
