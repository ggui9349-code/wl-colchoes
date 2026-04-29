import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const items = [
  {
    q: "Quanto custa?",
    a: "O valor depende da avaliação. A reforma costuma sair até 70% abaixo de um colchão novo.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Prazo médio de 1 a 3 dias, dependendo da avaliação e do tipo de serviço.",
  },
  {
    q: "E se eu não gostar?",
    a: "Você tem 90 dias para ajustes relacionados ao serviço executado.",
  },
  {
    q: "Vocês entregam?",
    a: "Atendemos Paulista e região com coleta e entrega conforme disponibilidade.",
  },
] as const;

export function Objections() {
  return (
    <section className="bg-background py-14 md:py-18">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Dúvidas rápidas antes de chamar no WhatsApp
        </h2>

        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {items.map((item, index) => (
            <AccordionItem
              key={item.q}
              value={`objection-${index}`}
              className="rounded-xl border border-border bg-card px-4"
            >
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
