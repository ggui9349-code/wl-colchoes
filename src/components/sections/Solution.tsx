import { motion } from "framer-motion";
import { Wrench, Ruler, Crown, Sparkles } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY, COPY } from "@/lib/constants";

const serviceIcons = [Wrench, Ruler, Crown];

export function Solution() {
  return (
    <section id="solution" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Nossos Serviços</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">{COPY.solution.headline}</h2>
          <p className="mt-4 text-muted-foreground">{COPY.solution.intro}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {COPY.solution.services.map((s, i) => {
            const isLuxury = i === 2;
            const Icon = serviceIcons[i] ?? Wrench;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={
                  "relative flex flex-col rounded-3xl p-8 shadow-soft transition hover:-translate-y-2 " +
                  (isLuxury
                    ? "bg-gradient-luxury text-primary-foreground shadow-elegant"
                    : "border border-border bg-card")
                }
              >
                {isLuxury && (
                  <span className="absolute -top-3 right-6 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-gold-foreground shadow-gold">
                    <Sparkles className="h-3.5 w-3.5" /> Premium
                  </span>
                )}
                <div
                  className={
                    "mb-5 grid h-16 w-16 place-items-center rounded-2xl " +
                    (isLuxury ? "bg-white/10" : "bg-accent")
                  }
                >
                  <Icon className={"h-8 w-8 " + (isLuxury ? "text-gold" : "text-primary")} />
                </div>
                <h3 className={"text-2xl font-bold " + (isLuxury ? "text-primary-foreground" : "text-foreground")}>
                  {s.title}
                </h3>
                <p className={"mt-3 flex-1 text-sm leading-relaxed " + (isLuxury ? "text-primary-foreground/85" : "text-muted-foreground")}>
                  {s.description}
                </p>
                <div className="mt-6">
                  <CTAButton
                    text={s.cta}
                    variant={isLuxury ? "luxury" : "primary"}
                    size="md"
                    fullWidth
                    href={COMPANY.contact.whatsapp}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
