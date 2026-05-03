import { motion } from "framer-motion";
import { Wrench, Star, BedDouble, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";

const stats = [
  {
    icon: Wrench,
    value: 800,
    decimals: 0,
    prefix: "+",
    label: "Colchões Reformados",
    gradient: "from-primary to-primary-light",
  },
  {
    icon: Star,
    value: 4.9,
    decimals: 1,
    suffix: "★",
    label: "Satisfação Média",
    gradient: "from-gold to-[oklch(0.78_0.14_85)]",
  },
  {
    icon: BedDouble,
    value: 300,
    decimals: 0,
    prefix: "+",
    label: "Colchões Fabricados",
    gradient: "from-primary to-[oklch(0.3_0.09_190)]",
  },
];

export function StatsAnimated() {
  return (
    <section className="bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">Números que falam</p>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Confiança de +1.100 clientes</h2>
          <p className="mt-2 text-sm text-muted-foreground">Crescimento de 340% em 2024 — qualidade comprovada.</p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br ${s.gradient} p-8 text-primary-foreground shadow-elegant transition hover:-translate-y-2`}
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    animate={{ scale: [1, 1.15, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                    className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 backdrop-blur"
                  >
                    <Icon className="h-7 w-7" />
                  </motion.div>
                  <Icon className="h-20 w-20 opacity-10" />
                </div>
                <p className="mt-6 text-5xl font-extrabold tracking-tight md:text-6xl">
                  <AnimatedCounter
                    value={s.value}
                    decimals={s.decimals}
                    prefix={s.prefix}
                    suffix={s.suffix}
                  />
                </p>
                <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-primary-foreground/85">
                  {s.label}
                </p>
                <div className="mt-5 h-1 w-0 rounded-full bg-white/40 transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-3xl border border-border bg-card p-6 text-center md:flex-row md:justify-between md:text-left"
        >
          <div className="flex items-start gap-3">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
            <div>
              <p className="text-base font-extrabold uppercase tracking-wide text-primary">Atendimento em Paulista</p>
              <p className="mt-1 text-sm text-muted-foreground">Quanto antes chamar, mais cedo podemos incluir sua avaliação.</p>
            </div>
          </div>
          <CTAButton text="Agendar Avaliação" size="md" pulse href={COMPANY.contact.whatsapp} />
        </motion.div>
      </div>
    </section>
  );
}