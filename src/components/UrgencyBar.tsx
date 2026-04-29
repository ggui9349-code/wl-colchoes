import { Clock } from "lucide-react";

export function UrgencyBar() {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] bg-destructive text-destructive-foreground">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 px-4 py-1.5 text-center text-xs font-bold uppercase tracking-wide animate-pulse sm:text-sm">
        <Clock className="h-3.5 w-3.5 shrink-0" />
        <span>Últimas 3 vagas para reforma — esta semana!</span>
      </div>
    </div>
  );
}
