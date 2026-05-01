import { useEffect, useState } from "react";
import { Flame, X } from "lucide-react";
import { COMPANY } from "@/lib/constants";

export function StickyVagas() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrolled = window.scrollY;
        setVisible(scrolled > 600);
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (dismissed || !visible) return null;

  return (
    <div className="fixed bottom-24 right-4 z-40 hidden max-w-[220px] rounded-2xl border-2 border-destructive/40 bg-card p-4 shadow-elegant md:block motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300">
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
        aria-label="Fechar"
      >
        <X className="h-3 w-3" />
      </button>
      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-destructive/10 text-destructive motion-safe:animate-pulse">
          <Flame className="h-5 w-5" />
        </div>
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
    </div>
  );
}
