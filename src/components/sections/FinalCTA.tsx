import { motion } from "framer-motion";
import { Phone, Clock } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY, COPY } from "@/lib/constants";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-primary py-24 text-primary-foreground md:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-20 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-3xl px-4 text-center md:px-8"
      >
        <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full bg-gold/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-gold ring-1 ring-gold/40">
          <Clock className="h-3.5 w-3.5" /> Vagas limitadas essa semana
        </div>
        <h2 className="text-3xl font-extrabold leading-tight md:text-5xl">{COPY.finalCTA.headline}</h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/85">{COPY.finalCTA.subheadline}</p>

        <div className="mt-10 flex justify-center">
          <CTAButton
            text={COPY.finalCTA.buttonText}
            variant="light"
            size="lg"
            pulse
            href={COMPANY.contact.whatsapp}
          />
        </div>

        <p className="mt-6 text-sm text-primary-foreground/80">{COPY.finalCTA.supportText}</p>
        <a
          href={`tel:${COMPANY.contact.phone}`}
          className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-gold hover:underline"
        >
          <Phone className="h-4 w-4" /> Ou ligue para {COMPANY.contact.phoneShort}
        </a>
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-primary-foreground/85">
          <span>✓ Avaliação 100% gratuita</span>
          <span>✓ Sem compromisso</span>
        </div>
      </motion.div>
    </section>
  );
}
