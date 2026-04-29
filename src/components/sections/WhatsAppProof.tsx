import { motion } from "framer-motion";

type Msg = { from: "user" | "bot"; text: string };
type Chat = { name: string; initial: string; time: string; messages: Msg[] };

const chats: Chat[] = [
  {
    name: "Carlos Silva",
    initial: "C",
    time: "Hoje",
    messages: [
      { from: "user", text: "Olá! Vocês reformam colchão?" },
      { from: "bot", text: "Oi Carlos! Sim, reformamos qualquer tipo. Qual é o problema do seu colchão? 😊" },
      { from: "user", text: "Tá muito mole, piora a cada dia" },
      { from: "bot", text: "É estrutura interna degradada. Reforma sai R$1.500 e dura 2+ anos. Topa avaliação gratuita?" },
      { from: "user", text: "Topei! Muito obrigado 🙏" },
    ],
  },
  {
    name: "Mariana Costa",
    initial: "M",
    time: "Ontem",
    messages: [
      { from: "user", text: "Qual tamanho vocês fabricam?" },
      { from: "bot", text: "Fabricamos QUALQUER tamanho! Qual a medida do seu quarto?" },
      { from: "user", text: "160x200, sem cabeceira" },
      { from: "bot", text: "Perfeito! Já anotado. Vamos criar uma obra de arte. Avaliação gratuita?" },
      { from: "user", text: "Já é! Amo 💚" },
    ],
  },
  {
    name: "João Santos",
    initial: "J",
    time: "2 dias atrás",
    messages: [
      { from: "user", text: "Quanto sai uma reforma?" },
      { from: "bot", text: "Entre R$1.200-2.000. Depende do tamanho. Avaliação é grátis!" },
      { from: "user", text: "Mas dura quanto?" },
      { from: "bot", text: "2+ anos com GARANTIA de 90 dias. Se não gostar, reembolso total!" },
      { from: "user", text: "Vou levar 2 colchões pra reformar! 👊" },
    ],
  },
  {
    name: "Ana Oliveira",
    initial: "A",
    time: "Semana passada",
    messages: [
      { from: "user", text: "Recebi meu colchão hoje! 🎉" },
      { from: "bot", text: "Eba! Como ficou? Tá bom mesmo?" },
      { from: "user", text: "Melhor que novo! Recomendo pra todos 💚" },
      { from: "bot", text: "Fico muito feliz! Durma bem 😴" },
    ],
  },
];

export function WhatsAppProof() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-1.5 text-sm font-semibold text-whatsapp">
            💬 Conversas reais
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">
            Mensagens Reais de Clientes Reais
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Veja o feedback direto dos nossos clientes no WhatsApp.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {chats.map((chat, i) => (
            <motion.div
              key={chat.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition hover:shadow-elegant"
            >
              {/* Header */}
              <div className="flex items-center gap-3 bg-gradient-primary px-5 py-3 text-primary-foreground">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-gold font-bold text-gold-foreground">
                  {chat.initial}
                </div>
                <div>
                  <p className="text-sm font-bold">{chat.name}</p>
                  <p className="text-xs opacity-80">{chat.time} • online</p>
                </div>
              </div>

              {/* Messages */}
              <div
                className="flex flex-col gap-2 p-4"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 10%, color-mix(in oklab, var(--primary) 6%, transparent), transparent 50%), radial-gradient(circle at 80% 90%, color-mix(in oklab, var(--gold) 6%, transparent), transparent 50%)",
                }}
              >
                {chat.messages.map((m, j) => (
                  <div
                    key={j}
                    className={
                      "max-w-[85%] rounded-2xl px-4 py-2 text-sm leading-snug shadow-sm " +
                      (m.from === "user"
                        ? "self-end rounded-br-sm bg-primary text-primary-foreground"
                        : "self-start rounded-bl-sm bg-card text-foreground border border-border")
                    }
                  >
                    {m.text}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
