import { motion } from "framer-motion";
import beforeImg1 from "@/assets/mattress-before-old.png";
import afterImg1 from "@/assets/mattress-after-new.png";
import beforeImg2 from "@/assets/mattress-before-2.png";
import afterImg2 from "@/assets/mattress-after-2.png";
import beforeImg3 from "@/assets/mattress-before-3.png";
import afterImg3 from "@/assets/mattress-after-3.png";

const items = [
  {
    before: beforeImg1,
    after: afterImg1,
    caption: "Colchão degradado → Premium reformado",
  },
  {
    before: beforeImg2,
    after: afterImg2,
    caption: "Estrutura colapsada → Firmeza restaurada",
  },
  {
    before: beforeImg3,
    after: afterImg3,
    caption: "Espuma envelhecida → Conforto renovado",
  },
];

export function BeforeAfter() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">Veja a Transformação</h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Colchões que pareciam condenados voltaram à vida.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center"
            >
              <div className="relative mb-3 h-64 overflow-hidden rounded-2xl border border-border shadow-elegant">
                {/* Before half */}
                <div className="absolute inset-0">
                  <img
                    src={item.before}
                    alt="Colchão velho antes da reforma"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-foreground/20 mix-blend-multiply" />
                </div>
                {/* After half (clipped) */}
                <div
                  className="absolute inset-0"
                  style={{ clipPath: "polygon(50% 0, 100% 0, 100% 100%, 50% 100%)" }}
                >
                  <img
                    src={item.after}
                    alt="Colchão novo depois da reforma"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Divider */}
                <div className="absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-background shadow-md" />
                <div className="absolute left-1/2 top-1/2 grid h-9 w-9 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 border-background bg-primary text-primary-foreground shadow-elegant">
                  ⟷
                </div>

                {/* Labels */}
                <span className="absolute left-3 top-3 rounded-md bg-foreground/80 px-2.5 py-1 text-xs font-bold text-background">
                  ANTES
                </span>
                <span className="absolute right-3 top-3 rounded-md bg-primary px-2.5 py-1 text-xs font-bold text-primary-foreground">
                  DEPOIS
                </span>
              </div>
              <p className="text-sm font-semibold text-muted-foreground">{item.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
