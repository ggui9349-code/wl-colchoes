import { motion } from "framer-motion";

const recentClients = ["C", "M", "J", "A", "P"];

export function SocialProofBar() {
  return (
    <section className="border-y border-border bg-gradient-to-r from-muted/40 via-background to-muted/40 py-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 md:flex-row md:gap-6 md:px-8">
        <p className="text-sm font-semibold text-foreground md:text-base">
          🔥 Últimos clientes satisfeitos:
        </p>
        <div className="flex items-center">
          {recentClients.map((letter, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="grid h-11 w-11 -ml-2 first:ml-0 place-items-center rounded-full border-[3px] border-background bg-gradient-primary font-bold text-primary-foreground shadow-soft transition hover:z-10 hover:scale-110"
            >
              {letter}
            </motion.div>
          ))}
          <div className="grid h-11 w-11 -ml-2 place-items-center rounded-full border-[3px] border-background bg-gradient-gold text-xs font-bold text-gold-foreground shadow-soft">
            +200
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="font-bold text-gold">4.9★</span>
          <span>•</span>
          <span>+1.100 avaliações</span>
        </div>
      </div>
    </section>
  );
}
