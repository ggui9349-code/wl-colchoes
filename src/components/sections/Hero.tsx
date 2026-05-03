import { Phone, ShieldCheck, Star, Clock } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { COMPANY, COPY } from "@/lib/constants";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background pt-28 pb-20 md:pt-36 md:pb-28">
      {/* decorative background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-accent blur-3xl opacity-60" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-gold/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 md:grid-cols-2 md:px-8">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-destructive/10 px-4 py-1.5 text-xs font-bold text-destructive ring-1 ring-destructive/30">
            <Clock className="h-3.5 w-3.5" /> Vagas limitadas para essa semana.
          </div>
          <div className="mb-5 ml-2 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold text-primary shadow-soft">
            <ShieldCheck className="h-4 w-4" /> Desde 2020 atendendo Paulista com acabamento profissional
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.05] text-foreground md:text-6xl">
            {COPY.hero.mainHeadline}
          </h1>
          <p className="mt-3 bg-gradient-primary bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
            {COPY.hero.secondaryHeadline}
          </p>
          <p className="mt-5 max-w-xl text-base text-muted-foreground md:text-lg">
            {COPY.hero.subheadline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <div>
              <p className="text-3xl font-bold text-primary">+800</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Reformados</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="flex items-center gap-1 text-3xl font-bold text-primary">
                4.9 <Star className="h-5 w-5 fill-gold text-gold" />
              </p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Satisfação</p>
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <p className="text-3xl font-bold text-primary">+300</p>
              <p className="text-xs uppercase tracking-wide text-muted-foreground">Fabricados</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <CTAButton text={COPY.hero.cta} size="lg" pulse href={COMPANY.contact.whatsapp} />
            <a href={`tel:${COMPANY.contact.phone}`} className="inline-flex items-center gap-2 text-base font-semibold text-primary hover:underline">
              <Phone className="h-4 w-4" /> {COMPANY.contact.phoneShort}
            </a>
          </div>

          <p className="mt-5 inline-flex items-center gap-2 text-sm text-muted-foreground">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">✓</span>
            Avaliação 100% gratuita, sem compromisso
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 gap-4 rounded-3xl bg-card p-4 shadow-elegant">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-to-br from-muted to-secondary">
              <div className="absolute inset-0 grid place-items-center text-6xl opacity-20">🛏️</div>
              <span className="absolute left-3 top-3 rounded-full bg-destructive/90 px-3 py-1 text-xs font-bold text-destructive-foreground">ANTES</span>
              <div className="absolute inset-x-3 bottom-3 rounded-lg bg-background/80 p-2 text-center text-xs font-medium text-muted-foreground backdrop-blur">
                Estrutura desgastada
              </div>
            </div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gradient-primary">
              <div className="absolute inset-0 grid place-items-center text-6xl">✨</div>
              <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold text-gold-foreground">DEPOIS</span>
              <div className="absolute inset-x-3 bottom-3 rounded-lg bg-background/90 p-2 text-center text-xs font-semibold text-primary-dark backdrop-blur">
                Conforto restaurado
              </div>
            </div>
          </div>
          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-gold px-5 py-2 text-sm font-bold text-gold-foreground shadow-gold">
            Prazo médio de até 3 dias, dependendo da avaliação
          </div>
        </div>
      </div>
    </section>
  );
}
