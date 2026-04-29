import { motion } from "framer-motion";
import { Layers3, Ruler } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";

const options = [
  {
    Icon: Layers3,
    title: "Densidade Personalizada",
    description: "Escolha a firmeza perfeita para o seu corpo.",
    chips: ["D18", "D25", "D33", "D40", "D45"],
  },
  {
    Icon: Ruler,
    title: "Tamanho Sob Medida",
    description: "Qualquer medida que você precisar.",
    chips: ["Solteiro", "Casal", "Queen", "King", "Customizado"],
  },
];

export function ExclusiveCustom() {
  return (
    <section id="exclusive-custom" className="bg-accent/40 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Experiência Única
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Seu Colchão{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">100% Customizado</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Personalize cada detalhe do seu colchão ideal.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {options.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <o.Icon className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{o.title}</h3>
              <p className="mt-2 text-base text-muted-foreground">{o.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {o.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-semibold text-foreground/80 transition group-hover:border-gold/40 group-hover:text-primary"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <CTAButton
            text="Iniciar Customização"
            variant="luxury"
            size="lg"
            pulse
            href={COMPANY.contact.whatsapp}
          />
        </motion.div>
      </div>
    </section>
  );
}
