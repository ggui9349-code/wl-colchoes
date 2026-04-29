import { motion } from "framer-motion";
import { BedDouble, HeartPulse, Wallet, ShieldCheck, Check } from "lucide-react";
import { COPY } from "@/lib/constants";

const icons = [BedDouble, HeartPulse, Wallet, ShieldCheck];

export function PainPoints() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Você se identifica?</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Seu Colchão Está Assim?</h2>
          <p className="mt-4 text-muted-foreground">
            Essas são as dores mais comuns que nossos clientes trazem para a gente.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {COPY.painPoints.map((p, i) => {
            const Icon = icons[i] ?? BedDouble;
            return (
              <motion.div
                key={p.headline}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-soft transition group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">{p.headline}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
                  <p className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="h-3 w-3" />
                    </span>
                    Nós resolvemos isso!
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
