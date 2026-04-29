import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Flame, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function StickyVagas() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? scrolled / max : 0;
      setVisible(scrolled > 600 && ratio < 0.8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          className="fixed bottom-24 right-4 z-40 hidden max-w-[220px] rounded-2xl border-2 border-destructive/40 bg-card p-4 shadow-elegant md:block"
        >
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
            aria-label="Fechar"
          >
            <X className="h-3 w-3" />
          </button>
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ scale: [1, 1.15, 1] }}
              transition={{ duration: 1.2, repeat: Infinity }}
              className="grid h-9 w-9 place-items-center rounded-full bg-destructive/10 text-destructive"
            >
              <Flame className="h-5 w-5" />
            </motion.div>
            <div>
              <p className="text-sm font-extrabold leading-tight text-foreground">3 vagas</p>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Restantes</p>
            </div>
          </div>
          <a
            href={COMPANY.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 block rounded-lg bg-destructive px-3 py-2 text-center text-xs font-bold text-destructive-foreground hover:bg-destructive/90"
          >
            Reservar agora
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
