import { useEffect, useMemo, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import marianaPhoto from "@/assets/testimonial-mariana-320.webp";
import carlosPhoto from "@/assets/testimonial-carlos-320.webp";
import robertoPhoto from "@/assets/testimonial-roberto-320.webp";
import josePhoto from "@/assets/testimonial-jose-320.webp";
import fernandaPhoto from "@/assets/testimonial-fernanda-320.webp";
import pauloPhoto from "@/assets/testimonial-paulo-320.webp";
import { landingMotion } from "@/lib/motion/landingVariants";

type Service = "Reforma" | "Fabricação" | "Luxo";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  service: Service;
  photo?: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Reformei meu colchão e não acredito na transformação. Voltou a ser como novo, com custo bem menor do que comprar um novo. Super recomendo!",
    name: "Mariana Santos",
    role: "Empresária · Recife, PE",
    service: "Reforma",
    photo: marianaPhoto,
  },
  {
    quote:
      "Solicitei um colchão sob medida para meu quarto pequeno. O tamanho ficou perfeito e o conforto superou minhas expectativas. Vale cada real investido.",
    name: "Carlos Mendes",
    role: "Arquiteto · Olinda, PE",
    service: "Fabricação",
    photo: carlosPhoto,
  },
  {
    quote:
      "Investi no colchão premium e acordei sem dores nas costas. Dormir virou uma experiência diferente. Durabilidade e conforto garantidos.",
    name: "José Almeida",
    role: "Aposentado · Paulista, PE",
    service: "Luxo",
    photo: josePhoto,
  },
  {
    quote:
      "O profissionalismo da equipe foi impecável. Chegaram no horário, fizeram o trabalho com precisão e deixaram tudo limpo. Muito satisfeito.",
    name: "Roberto Alves",
    role: "Empresário · Jaboatão, PE",
    service: "Reforma",
    photo: robertoPhoto,
  },
  {
    quote:
      "Colchão feito sob medida, exatamente como eu queria. A equipe entendeu minha necessidade e entregou com perfeição. Obrigada, WL!",
    name: "Fernanda Costa",
    role: "Designer · Recife, PE",
    service: "Fabricação",
    photo: fernandaPhoto,
  },
  {
    quote:
      "Qualidade premium é investimento em saúde. Dormir melhor mudou minha rotina. Não troco esse colchão por nada — é realmente especial.",
    name: "Paulo Henrique",
    role: "Advogado · Recife, PE",
    service: "Luxo",
    photo: pauloPhoto,
  },
];

const serviceTone: Record<Service, string> = {
  Reforma: "bg-primary-light/15 text-primary-light border-primary-light/30",
  Fabricação: "bg-primary/15 text-primary border-primary/30",
  Luxo: "bg-gold/15 text-gold border-gold/30",
};

function Avatar({ name, active, photo }: { name: string; active: boolean; photo?: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
  if (photo) {
    return (
      <div
        className={
          "h-full w-full overflow-hidden rounded-full border-4 transition-all duration-700 " +
          (active
            ? "border-gold shadow-elegant"
            : "border-border")
        }
      >
        <img
          src={photo}
          alt={name}
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 640px) 288px, 320px"
        />
      </div>
    );
  }
  return (
    <div
      className={
        "grid h-full w-full place-items-center rounded-full border-4 font-bold transition-all duration-700 " +
        (active
          ? "border-gold bg-gradient-primary text-3xl text-primary-foreground shadow-elegant md:text-4xl"
          : "border-border bg-card text-xl text-muted-foreground")
      }
    >
      {initials}
    </div>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const total = testimonials.length;
  const current = useMemo(() => testimonials[active], [active]);

  const next = useCallback(() => setActive((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setActive((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(next, 6000);
    return () => clearInterval(id);
  }, [next]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  const getStyle = (i: number): React.CSSProperties => {
    const isActive = i === active;
    const isLeft = (active - 1 + total) % total === i;
    const isRight = (active + 1) % total === i;
    if (isActive) return { zIndex: 3, opacity: 1, transform: "translateX(0) scale(1) rotateY(0)" };
    if (isLeft) return { zIndex: 2, opacity: 0.85, transform: "translateX(-55%) translateY(-10%) scale(0.78) rotateY(20deg)" };
    if (isRight) return { zIndex: 2, opacity: 0.85, transform: "translateX(55%) translateY(-10%) scale(0.78) rotateY(-20deg)" };
    return { zIndex: 1, opacity: 0, transform: "scale(0.6)", pointerEvents: "none" };
  };

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-primary">Histórias Reais</p>
          <h2 className="text-3xl font-bold text-foreground md:text-5xl">O Que Dizem Nossos Clientes</h2>
          <p className="mt-4 text-muted-foreground">
            Experiências autênticas de quem vive a qualidade WL Colchões no dia a dia.
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Carrossel circular */}
          <div className="relative mx-auto h-72 w-72 [perspective:1200px] sm:h-80 sm:w-80">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="absolute inset-0 transition-all duration-700 ease-[cubic-bezier(.4,2,.3,1)] [transform-style:preserve-3d]"
                style={getStyle(i)}
                aria-hidden={i !== active}
              >
                <Avatar name={t.name} active={i === active} photo={t.photo} />
              </div>
            ))}
          </div>

          {/* Conteúdo */}
          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: landingMotion.duration.fast, ease: landingMotion.easing }}
              >
                <span
                  className={
                    "mb-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold " +
                    serviceTone[current.service]
                  }
                >
                  {current.service}
                </span>
                <Quote className="mb-3 h-7 w-7 text-gold" aria-hidden />
                <p className="text-lg leading-relaxed text-foreground md:text-xl">"{current.quote}"</p>
                <div className="mt-6">
                  <p className="text-base font-bold text-foreground">{current.name}</p>
                  <p className="text-sm text-muted-foreground">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={prev}
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
                aria-label="Depoimento anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={next}
                className="grid h-12 w-12 place-items-center rounded-full border border-border bg-card text-primary transition hover:bg-primary hover:text-primary-foreground"
                aria-label="Próximo depoimento"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
              <span className="ml-3 text-sm font-medium tabular-nums text-muted-foreground">
                <span className="text-foreground">{String(active + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}