import { motion } from "framer-motion";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY } from "@/lib/constants";

type IconProps = { className?: string };

const PersonalizationIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="14" y="14" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <rect x="28" y="28" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="32" cy="32" r="2" fill="currentColor" />
  </svg>
);
const QualityIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <rect x="12" y="16" width="40" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
    <rect x="12" y="28" width="40" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
    <rect x="12" y="40" width="40" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);
const ErgonomicIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <circle cx="32" cy="18" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="32" cy="28" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="32" cy="38" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="32" cy="48" r="3" stroke="currentColor" strokeWidth="1.75" />
    <path d="M26 32C26 24 32 18 32 18M38 32C38 24 32 18 32 18" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
  </svg>
);
const DurabilityIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M32 12L48 18V32C48 46 32 54 32 54C32 54 16 46 16 32V18L32 12Z" stroke="currentColor" strokeWidth="1.75" />
    <path d="M26 32L30 36L38 28" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const ProcessIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M16 36L20 24C20 20 22 18 24 18C26 18 28 20 28 24V40" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M48 36L44 24C44 20 42 18 40 18C38 18 36 20 36 24V40" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <rect x="18" y="40" width="28" height="8" rx="1" stroke="currentColor" strokeWidth="1.75" />
  </svg>
);
const ExclusivityIcon = ({ className }: IconProps) => (
  <svg viewBox="0 0 64 64" fill="none" className={className}>
    <path d="M16 48H48V50C48 52 46 54 44 54H20C18 54 16 52 16 50V48Z" stroke="currentColor" strokeWidth="1.75" />
    <path d="M20 48L24 28L28 40L32 18L36 40L40 28L44 48" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="32" cy="20" r="2" fill="currentColor" />
  </svg>
);

const features = [
  {
    Icon: PersonalizationIcon,
    title: "Personalização Completa",
    description:
      "Escolha densidade, tamanho, firmeza e acabamento. Seu colchão, suas especificações.",
  },
  {
    Icon: QualityIcon,
    title: "Qualidade dos Materiais",
    description:
      "Espumas de primeira linha com densidade controlada e estrutura interna reforçada.",
  },
  {
    Icon: ErgonomicIcon,
    title: "Suporte Ergonômico",
    description:
      "Sistema multi-zonal que se adapta ao corpo, alinha a coluna e elimina pontos de pressão.",
  },
  {
    Icon: DurabilityIcon,
    title: "Durabilidade Comprovada",
    description:
      "Construção pensada para anos de uso sem perda significativa de conforto.",
  },
  {
    Icon: ProcessIcon,
    title: "Processo Rigoroso",
    description:
      "Cada colchão é cuidadosamente fabricado em nossa oficina, com qualidade constante em cada etapa.",
  },
  {
    Icon: ExclusivityIcon,
    title: "Exclusividade e Distinção",
    description:
      "Atendimento personalizado para quem busca qualidade sem concessões. Você não é apenas um cliente.",
  },
];

export function Luxury() {
  return (
    <section id="luxury" className="relative overflow-hidden bg-gradient-luxury py-24 text-primary-foreground md:py-32">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute -top-40 -left-20 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-20 h-96 w-96 rounded-full bg-primary-light/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.3em] text-gold">
            O Diferencial WL Colchões
          </p>
          <h2 className="text-3xl font-bold leading-tight md:text-5xl">
            O Que Torna Nossos Colchões{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">Premium</span> Especiais
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/75">
            Não é apenas qualidade. É o compromisso com cada detalhe que transforma um colchão em uma experiência.
          </p>
        </motion.div>

        <div className="mb-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.article
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-gold/40 hover:bg-white/[0.06]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-gold/30 bg-gold/5 text-gold transition group-hover:bg-gold/10">
                <f.Icon className="h-8 w-8" />
              </div>
              <h3 className="mb-3 text-xl font-semibold tracking-tight">{f.title}</h3>
              <p className="text-sm leading-relaxed text-primary-foreground/70">{f.description}</p>
              <div className="mt-6 flex items-center gap-2 border-t border-white/10 pt-4">
                <span className="h-px w-6 bg-gold" />
                <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold/80">
                  Diferencial WL
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-3xl border border-gold/20 bg-white/[0.04] p-10 text-center backdrop-blur"
        >
          <h3 className="text-2xl font-semibold md:text-3xl">Viva a Experiência Premium</h3>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
            Agende uma consulta personalizada e descubra como um colchão feito para você pode transformar suas noites.
          </p>
          <div className="mt-7 flex justify-center">
            <CTAButton text="Consultar um Especialista" variant="luxury" size="lg" pulse href={COMPANY.contact.whatsapp} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}