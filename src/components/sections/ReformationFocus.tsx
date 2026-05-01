import { motion } from "framer-motion";
import { ArrowRight, Wallet, ShieldCheck, Zap, Leaf, MessageCircle } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";
import { landingMotion } from "@/lib/motion/landingVariants";

const whyReform = [
  { Icon: Wallet, title: "Economia Significativa", description: "Reforma custa até 70% menos que colchão novo. R$ 1.500 vs R$ 5.000+." },
  { Icon: ShieldCheck, title: "Qualidade Garantida", description: "Profissional certificado, técnica rigorosa, 90 dias de garantia." },
  { Icon: Zap, title: "Resultado Imediato", description: "Colchão volta ao estado original em 5 a 10 dias úteis." },
  { Icon: Leaf, title: "Sustentabilidade", description: "Menos lixo, mais responsabilidade ambiental. Segunda vida ao seu colchão." },
];

const steps = [
  { step: 1, title: "Avaliação Gratuita", desc: "Visitamos ou você traz. Análise completa do colchão." },
  { step: 2, title: "Orçamento Detalhado", desc: "Sem surpresas. Você aprova antes de começar." },
  { step: 3, title: "Reforma Rigorosa", desc: "Desmontagem, limpeza profunda, estrutura restaurada." },
  { step: 4, title: "Entrega + Garantia", desc: "90 dias de garantia. Reembolso integral se insatisfeito." },
];

export function ReformationFocus() {
  return (
    <section id="reforma" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={landingMotion.viewport}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Serviço Principal</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Reforma Profissional de Colchões
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transformamos colchões degradados em produtos de qualidade excepcional.
            Profissionalismo, durabilidade e economia garantidos.
          </p>
        </motion.div>

        {/* Before / After comparison */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={landingMotion.viewport}
          transition={{ duration: 0.55 }}
          className="mb-16 grid gap-6 rounded-3xl border border-border bg-card p-6 shadow-elegant md:grid-cols-[1fr_auto_1fr] md:gap-8 md:p-10"
        >
          {/* Before */}
          <div className="rounded-2xl bg-muted/50 p-6 text-center">
            <span className="mb-3 inline-block rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-bold tracking-wider text-background">
              ANTES
            </span>
            <h3 className="text-xl font-bold text-foreground">Colchão Degradado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Estrutura comprometida, conforto perdido, dores ao acordar.
            </p>
            <p className="mt-5 text-3xl font-extrabold text-destructive">R$ 5.000+</p>
            <p className="text-xs text-muted-foreground">Custo de colchão novo</p>
          </div>

          {/* Arrow */}
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-elegant">
              <ArrowRight className="h-6 w-6" />
            </div>
            <p className="text-sm font-bold text-foreground">Reforma Completa</p>
            <p className="text-xs text-muted-foreground">5–10 dias úteis</p>
            <span className="rounded-full bg-gold/15 px-3 py-1 text-xs font-bold text-gold-foreground">
              Economiza até 70%
            </span>
          </div>

          {/* After */}
          <div className="rounded-2xl bg-accent p-6 text-center">
            <span className="mb-3 inline-block rounded-md bg-primary px-2.5 py-1 text-xs font-bold tracking-wider text-primary-foreground">
              DEPOIS
            </span>
            <h3 className="text-xl font-bold text-foreground">Colchão Restaurado</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Como novo, durável, confortável e garantido por 90 dias.
            </p>
            <p className="mt-5 text-3xl font-extrabold text-primary">R$ 1.500</p>
            <p className="text-xs text-muted-foreground">A partir de — varia por tamanho</p>
          </div>
        </motion.div>

        {/* Why Reform */}
        <div className="mb-16">
          <h3 className="mb-8 text-center text-2xl font-bold text-foreground md:text-3xl">
            Por Que Escolher Reforma?
          </h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {whyReform.map(({ Icon, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={landingMotion.viewport}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-foreground">{title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="mb-12 rounded-3xl bg-gradient-primary p-8 text-primary-foreground md:p-12">
          <h3 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Processo Profissional de Reforma
          </h3>
          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={landingMotion.viewport}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="text-center"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-full bg-gold font-bold text-gold-foreground shadow-gold">
                  {s.step}
                </div>
                <h4 className="text-lg font-bold">{s.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground/85">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <CTAButton
            text="Solicitar Avaliação Gratuita de Reforma"
            variant="primary"
            size="lg"
            href={COMPANY.contact.whatsapp}
            pulse
          />
          <p className="mt-3 text-sm text-muted-foreground">
            Resposta em até 2 horas. Avaliação 100% gratuita, sem compromisso.
          </p>
        </div>
      </div>
    </section>
  );
}
