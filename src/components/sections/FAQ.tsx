import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Quanto custa uma reforma?",
    intro: "Depende do tamanho e tipo. Em média:",
    bullets: [
      "Solteiro: R$1.200 – R$1.500",
      "Casal: R$1.500 – R$2.000",
      "Queen / King: R$2.000 – R$2.500",
    ],
    outro: "Economia de até 70% comparado a colchão novo.",
  },
  {
    q: "Quanto tempo leva uma reforma?",
    intro: "Nossa reforma é rápida:",
    bullets: [
      "Avaliação: no mesmo dia ou próximo dia",
      "Reforma: 3-5 dias úteis",
      "Entrega: até 2 dias após conclusão",
    ],
    outro: "Total do processo: 7-10 dias no máximo.",
  },
  {
    q: "Vocês dão garantia?",
    intro: "SIM! 90 dias de garantia zero risco:",
    bullets: [
      "Qualidade profissional certificada",
      "Se insatisfeito, reembolso 100%",
      "Sem perguntas, sem complicações",
      "Suporte técnico pós-venda",
    ],
  },
  {
    q: "Vocês fabricam colchões novos?",
    intro: "SIM! Fabricamos colchões premium customizados:",
    bullets: [
      "Tamanho: qualquer dimensão sob medida",
      "Firmeza: macio, médio, firme, extra firme",
      "Materiais: espuma, mola, híbrido, látex",
      "Prazo: 5-10 dias para fabricação",
    ],
  },
  {
    q: "Vocês entregam?",
    intro: "SIM! Entrega inclusa na região:",
    bullets: [
      "Paulista, Recife, Olinda e região",
      "Montagem e instalação",
      "Coleta de colchão antigo (opcional)",
      "Prazo: 1-2 dias após conclusão",
    ],
  },
  {
    q: "Posso parcelar?",
    intro: "SIM! Parcelamento disponível:",
    bullets: [
      "Até 12x sem juros no cartão",
      "PIX, dinheiro e débito também",
      "Avaliação gratuita, sem compromisso",
    ],
  },
];

export function FAQ() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Dúvidas Frequentes</h2>
          <p className="mt-3 text-lg text-muted-foreground">Tire todas as suas dúvidas agora.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
              >
                <AccordionTrigger className="px-5 py-4 text-left text-base font-semibold text-foreground hover:no-underline data-[state=open]:bg-gradient-primary data-[state=open]:text-primary-foreground">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-5 pb-5 pt-3 text-muted-foreground">
                  <p className="mb-2 font-medium text-foreground">{faq.intro}</p>
                  <ul className="ml-4 list-disc space-y-1.5">
                    {faq.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  {faq.outro && (
                    <p className="mt-3 rounded-lg bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground">
                      {faq.outro}
                    </p>
                  )}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
