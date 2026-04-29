import { motion } from "framer-motion";
import { PiggyBank, ShieldCheck, Smile, Leaf, Settings2, Zap } from "lucide-react";
import { COPY } from "@/lib/constants";

const icons = [PiggyBank, ShieldCheck, Smile, Leaf, Settings2, Zap];

export function Benefits() {
  return (
    <section className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Vantagens</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Por Que Escolher a WL Colchões?</h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COPY.benefits.map((b, i) => {
            const Icon = icons[i] ?? PiggyBank;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="group rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground transition group-hover:scale-110">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
