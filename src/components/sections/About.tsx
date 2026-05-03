import { motion } from "framer-motion";
import { COPY } from "@/lib/constants";
import teamPhoto from "@/assets/team-wl.jpg";

export function About() {
  return (
    <section id="about" className="bg-secondary/40 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:px-8">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="group relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-luxury shadow-elegant">
            <img
              src={teamPhoto}
              alt="Equipe WL Colchões em nossa oficina em Paulista, PE"
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-primary-dark/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-primary-foreground opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p className="text-lg font-semibold">Equipe WL Colchões</p>
              <p className="text-sm text-primary-foreground/80">Paulista • Reforma profissional e fabricação sob medida</p>
            </div>
          </div>
          <div className="absolute -bottom-6 -right-4 rounded-2xl bg-card p-5 shadow-elegant md:-right-6">
            <p className="text-3xl font-bold text-primary">Desde 2020</p>
            <p className="text-sm text-muted-foreground">atendendo Paulista</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-widest text-primary">Nossa História</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">{COPY.about.headline}</h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">{COPY.about.story}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Acabamento profissional, conforto superior e fabricação sob medida para quem busca durabilidade e bom custo-benefício.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {COPY.about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-border bg-card p-4 text-center shadow-soft">
                <p className="text-2xl font-bold text-primary">{s.number}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
