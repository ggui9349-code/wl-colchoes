import { motion } from "framer-motion";
import { Check, Wrench, Hammer, Crown } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";
import { cn } from "@/lib/utils";

type Tier = {
  name: string;
  Icon: React.ComponentType<{ className?: string }>;
  price: string;
  priceNote: string;
  description: string;
  features: string[];
  popular?: boolean;
  badge?: string;
};

const tiers: Tier[] = [
  {
    name: "Reforma Profissional",
    Icon: Wrench,
    price: "A partir de R$ 1.500",
    priceNote: "varia conforme tamanho",
    description: "Restaure seu colchão ao estado original",
    features: [
      "Desmontagem e limpeza profissional",
      "Estrutura interna restaurada",
      "Espumas renovadas",
      "Higienização com ozônio",
      "Garantia de 90 dias",
      "Sem custos ocultos",
    ],
  },
  {
    name: "Fabricação Sob Medida",
    Icon: Hammer,
    price: "A partir de R$ 2.500",
    priceNote: "varia conforme especificações",
    description: "Crie seu colchão personalizado",
    features: [
      "Medidas totalmente customizáveis",
      "Escolha de espuma (D18 até D45)",
      "Design personalizado",
      "Entrega em 7–14 dias",
      "Garantia de 1 ano",
      "Suporte técnico dedicado",
    ],
    popular: true,
    badge: "Mais Flexível",
  },
  {
    name: "Coleção Premium Luxo",
    Icon: Crown,
    price: "A partir de R$ 4.500",
    priceNote: "Premium Soft, Balance, Firm",
    description: "Máxima qualidade e exclusividade",
    features: [
      "Espumas de primeira linha",
      "Tecnologia de resfriamento gel",
      "Tecidos premium sofisticados",
      "Design exclusivo e elegante",
      "Garantia de 3 anos",
      "Entrega e instalação inclusas",
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-background py-20 md:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">
            Soluções Premium WL
          </p>
          <h2 className="text-3xl font-bold leading-tight text-foreground md:text-5xl">
            Seu Colchão Perfeito,{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Escolha Sua Solução
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Reforma, fabricação sob medida ou luxo premium — preços transparentes, sem surpresas.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => {
            const popular = tier.popular;
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className={cn(
                  "group relative flex flex-col rounded-3xl border p-8 transition-all duration-300 hover:-translate-y-2",
                  popular
                    ? "border-gold/40 bg-gradient-luxury text-primary-foreground shadow-elegant"
                    : "border-border bg-card shadow-soft hover:shadow-elegant",
                )}
              >
                {popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-4 py-1 text-xs font-bold text-gold-foreground shadow-gold">
                    ★ {tier.badge}
                  </span>
                )}

                <div
                  className={cn(
                    "mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl",
                    popular
                      ? "border border-gold/30 bg-gold/10 text-gold"
                      : "bg-accent text-primary",
                  )}
                >
                  <tier.Icon className="h-7 w-7" />
                </div>

                <h3
                  className={cn(
                    "text-2xl font-bold tracking-tight",
                    popular ? "text-primary-foreground" : "text-foreground",
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    popular ? "text-primary-foreground/75" : "text-muted-foreground",
                  )}
                >
                  {tier.description}
                </p>

                <div
                  className={cn(
                    "my-6 rounded-2xl border p-5",
                    popular
                      ? "border-white/10 bg-white/[0.04]"
                      : "border-border bg-accent/40",
                  )}
                >
                  <p
                    className={cn(
                      "text-2xl font-extrabold leading-tight",
                      popular ? "text-gold" : "text-primary",
                    )}
                  >
                    {tier.price}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-xs",
                      popular ? "text-primary-foreground/60" : "text-muted-foreground",
                    )}
                  >
                    {tier.priceNote}
                  </p>
                </div>

                <ul className="mb-8 flex-1 space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <span
                        className={cn(
                          "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          popular ? "bg-gold/20 text-gold" : "bg-primary/10 text-primary",
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span
                        className={cn(
                          "text-sm leading-relaxed",
                          popular ? "text-primary-foreground/85" : "text-foreground/85",
                        )}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <CTAButton
                  text="Confirmar Vaga Disponível"
                  variant={popular ? "luxury" : "primary"}
                  size="md"
                  fullWidth
                  href={COMPANY.contact.whatsapp}
                />
                <p
                  className={cn(
                    "mt-3 text-center text-xs",
                    popular ? "text-primary-foreground/60" : "text-muted-foreground",
                  )}
                >
                  Resposta via WhatsApp em até 2h
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-16 max-w-3xl rounded-3xl border border-border bg-card p-8 text-center shadow-soft md:p-10"
        >
          <h3 className="text-2xl font-semibold text-foreground md:text-3xl">
            Não tem certeza qual é ideal para você?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Nossos especialistas analisam suas necessidades e recomendam a melhor solução.
            Orçamento sem compromisso em menos de 24 horas.
          </p>
          <div className="mt-6 flex justify-center">
            <CTAButton
              text="Garantir Vaga Agora — Resposta em 2h"
              variant="primary"
              size="lg"
              href={COMPANY.contact.whatsapp}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
