import { motion } from "framer-motion";
import {
  X,
  Check,
  Clock,
  Trash2,
  HelpCircle,
  TrendingDown,
  Zap,
  Leaf,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";

const newItems = [
  {
    icon: AlertTriangle,
    title: "Investimento Alto",
    big: "R$ 5.000+",
    sub: "Custo mínimo para colchão de qualidade",
  },
  {
    icon: Clock,
    title: "Tempo de Espera",
    big: "2–4 Semanas",
    sub: "Espera longa pela entrega",
  },
  {
    icon: Trash2,
    title: "Impacto Ambiental",
    big: "Alto",
    sub: "Colchão antigo descartado em lixão",
  },
  {
    icon: HelpCircle,
    title: "Garantia Incerta",
    big: "Variável",
    sub: "Defeitos de fabricante podem aparecer",
  },
];

const reformItems = [
  {
    icon: TrendingDown,
    title: "Economia Garantida",
    big: "R$ 1.500",
    sub: "Economiza até 70% vs colchão novo",
  },
  {
    icon: Zap,
    title: "Tempo Rápido",
    big: "5–10 Dias",
    sub: "Reforma completa em tempo recorde",
  },
  {
    icon: Leaf,
    title: "Sustentável",
    big: "Responsável",
    sub: "Segunda vida ao colchão, zero desperdício",
  },
  {
    icon: ShieldCheck,
    title: "Garantia 90 Dias",
    big: "Sem Risco",
    sub: "Teste sem risco. Reembolso integral.",
  },
];

export function Comparison() {
  return (
    <section id="comparison" className="bg-gradient-to-b from-background to-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">
            Comparativo Honesto
          </p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Reformar <span className="text-primary">vs</span> Comprar Novo
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Compare e veja por que reformar é a melhor escolha para seu bolso e para o planeta.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Comprar Novo */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border-2 border-destructive/30 bg-card p-7 shadow-soft md:p-9"
          >
            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-destructive/10">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Comprar Novo</h3>
            </div>

            <ul className="space-y-6">
              {newItems.map((it) => {
                const Icon = it.icon;
                return (
                  <li key={it.title} className="flex items-start gap-3 border-b border-border pb-6 last:border-0 last:pb-0">
                    <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-destructive" />
                    <div>
                      <h4 className="text-base font-bold text-foreground">{it.title}</h4>
                      <p className="mt-1 text-2xl font-extrabold text-destructive">{it.big}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{it.sub}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>

          {/* Reformar */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative rounded-3xl border-2 border-primary bg-gradient-to-br from-accent to-card p-7 shadow-elegant md:scale-[1.02] md:p-9"
          >
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold uppercase tracking-widest text-gold-foreground shadow-gold">
              Recomendado
            </span>

            <div className="mb-7 flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary">
                <Check className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl font-bold text-primary">Reformar com a WL</h3>
            </div>

            <ul className="space-y-6">
              {reformItems.map((it) => {
                const Icon = it.icon;
                return (
                  <li key={it.title} className="flex items-start gap-3 border-b border-primary/15 pb-6 last:border-0 last:pb-0">
                    <Icon className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                    <div>
                      <h4 className="text-base font-bold text-foreground">{it.title}</h4>
                      <p className="mt-1 text-2xl font-extrabold text-primary">{it.big}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{it.sub}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <CTAButton
            text="Economizar com Reforma — Avaliação Gratuita"
            size="lg"
            href={COMPANY.contact.whatsapp}
          />
          <p className="mt-4 text-sm text-muted-foreground">
            Avaliação 100% gratuita • Resposta em até 2 horas
          </p>
        </div>
      </div>
    </section>
  );
}
