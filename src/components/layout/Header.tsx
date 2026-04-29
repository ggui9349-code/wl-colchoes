import { useState } from "react";
import { Menu, X } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";
import logoWL from "@/assets/logo-wl.png";

const navItems = [
  { label: "Início", href: "#hero" },
  { label: "Serviços", href: "#solution" },
  { label: "Premium", href: "#luxury" },
  { label: "Como Funciona", href: "#how-it-works" },
  { label: "Sobre", href: "#about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-7 z-50 border-b border-border/50 bg-background/85 backdrop-blur-md sm:top-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logoWL} alt="WL Colchões" className="h-11 w-11 rounded-xl object-cover shadow-soft" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-extrabold text-primary">WL Colchões</span>
            <span className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">Paulista, PE</span>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((i) => (
            <a key={i.label} href={i.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {i.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <CTAButton text="Falar no WhatsApp" size="sm" href={COMPANY.contact.whatsapp} />
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-border text-primary md:hidden"
          onClick={() => setOpen((s) => !s)}
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((i) => (
              <a
                key={i.label}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground hover:bg-accent"
              >
                {i.label}
              </a>
            ))}
            <CTAButton text="Falar no WhatsApp" size="sm" fullWidth href={COMPANY.contact.whatsapp} />
          </div>
        </div>
      )}
    </header>
  );
}
