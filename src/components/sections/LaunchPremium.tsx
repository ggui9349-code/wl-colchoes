import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";
import opalinaImg from "@/assets/mattress-opalina.png";

const product = {
  name: "OPALINA",
  subtitle: "Excellence",
  tagline: "Máximo Conforto",
  description:
    "Acabamento premium em tons claros com costura exclusiva. Para quem busca elegância e suporte ergonômico.",
  price: "A partir de R$ 5.500",
  priceNote: "Varia conforme tamanho e customizações",
  benefits: ["Conforto exclusivo", "Acabamento premium", "Suporte ergonômico"],
  image: opalinaImg,
  cta: "Conhecer Opalina",
};

export function LaunchPremium() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-accent/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-primary-foreground shadow-elegant">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-xs font-bold uppercase tracking-[0.2em]">Novo Lançamento</span>
          </div>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Colchão Premium{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">OPALINA</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça o novo padrão de conforto e elegância da linha premium WL Colchões.
          </p>
          <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl bg-gradient-gold px-6 py-3 shadow-gold">
            <span className="text-sm font-semibold uppercase tracking-wider text-gold-foreground/80">
              A partir de
            </span>
            <span className="text-3xl font-extrabold text-gold-foreground md:text-4xl">
              R$ 5.500
            </span>
          </div>
        </motion.div>

        {/* Product */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="grid items-center gap-10 md:grid-cols-2 md:gap-16"
        >
          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-gold opacity-20 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl bg-card shadow-elegant">
              <img
                src={product.image}
                alt={`Colchão ${product.name} ${product.subtitle}`}
                className="aspect-[3/4] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-gold-foreground shadow-gold">
              <Sparkles className="h-3 w-3" />
              Novo
            </div>
            {/* Floating price tag */}
            <div className="absolute -bottom-4 right-4 rounded-2xl bg-card px-5 py-3 shadow-elegant ring-1 ring-border">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                Investimento
              </p>
              <p className="text-2xl font-extrabold text-primary">{product.price}</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-primary">
                {product.subtitle}
              </p>
              <h3 className="text-4xl font-extrabold leading-none text-foreground md:text-6xl">
                {product.name}
              </h3>
              <div className="mt-4 h-px w-20 bg-gradient-gold" />
            </div>

            <div>
              <p className="text-2xl font-semibold text-foreground md:text-3xl">
                {product.tagline}
              </p>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {product.description}
              </p>
            </div>

            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider text-foreground">
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            {/* Price Card */}
            <div className="rounded-2xl border-2 border-gold/40 bg-gradient-to-br from-accent/40 to-card p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                Valor Especial
              </p>
              <p className="mt-1 text-4xl font-extrabold text-foreground md:text-5xl">
                R$ 5.500
                <span className="ml-2 text-base font-semibold text-muted-foreground">
                  /unidade
                </span>
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{product.priceNote}</p>
            </div>

            <div className="pt-2">
              <CTAButton
                text={product.cta}
                variant="primary"
                size="lg"
                href={COMPANY.contact.whatsapp}
                pulse
              />
              <p className="mt-3 text-sm text-muted-foreground">Resposta em até 2 horas</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
