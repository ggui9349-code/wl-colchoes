import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Processo</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Como Funciona</h2>
          <p className="mt-4 text-muted-foreground">4 passos simples para transformar seu colchão.</p>
        </div>

        <div className="relative grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 -z-10 hidden h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />
          {COPY.howItWorks.map((it, i) => (
            <motion.div
              key={it.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-6 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-gradient-primary text-2xl font-bold text-primary-foreground shadow-elegant">
                {it.step}
              </div>
              <h3 className="text-lg font-bold text-foreground">{it.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.description}</p>
              <p className="mt-3 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {it.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
