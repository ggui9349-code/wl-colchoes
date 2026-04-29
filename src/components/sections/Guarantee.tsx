import { motion } from "framer-motion";
import { ShieldCheck, Check } from "lucide-react";
import { COPY } from "@/lib/constants";

export function Guarantee() {
  return (
    <section id="guarantee" className="bg-gradient-luxury py-20 text-primary-foreground md:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-6 grid h-24 w-24 place-items-center rounded-full bg-gradient-gold shadow-gold animate-float-slow"
        >
          <ShieldCheck className="h-12 w-12 text-gold-foreground" />
        </motion.div>

        <h2 className="text-3xl font-bold md:text-5xl">{COPY.guarantee.headline}</h2>
        <p className="mt-4 text-lg font-medium text-gold">{COPY.guarantee.promise}</p>
        <p className="mt-3 text-base text-primary-foreground/85">{COPY.guarantee.description}</p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-3 text-left">
          {COPY.guarantee.checks.map((c) => (
            <div key={c} className="flex items-start gap-3 rounded-xl bg-white/5 p-4 backdrop-blur">
              <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-gold text-gold-foreground">
                <Check className="h-4 w-4" />
              </span>
              <p className="text-sm text-primary-foreground/90">{c}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-sm text-primary-foreground/70">
          Confiança depositada por +1.100 clientes satisfeitos
        </p>
      </div>
    </section>
  );
}
