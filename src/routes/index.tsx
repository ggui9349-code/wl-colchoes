import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { StatsAnimated } from "@/components/sections/StatsAnimated";
import { Pricing } from "@/components/sections/Pricing";
import { Comparison } from "@/components/sections/Comparison";
import { ReformationFocus } from "@/components/sections/ReformationFocus";
import { Testimonials } from "@/components/sections/Testimonials";
import { About } from "@/components/sections/About";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Guarantee } from "@/components/sections/Guarantee";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { UrgencyBar } from "@/components/UrgencyBar";
import { StickyVagas } from "@/components/StickyVagas";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "WL Colchões — Reforma, Fabricação e Colchões de Luxo | Paulista, PE" },
      {
        name: "description",
        content:
          "Reformamos e fabricamos colchões premium em Paulista/PE. Economize até 70% com qualidade profissional. Garantia de 90 dias. Avaliação gratuita no WhatsApp.",
      },
      { property: "og:title", content: "WL Colchões — Reforma e Fabricação Premium de Colchões" },
      {
        property: "og:description",
        content:
          "Transforme seu colchão com a WL Colchões. Reforma profissional, fabricação sob medida e coleção de luxo. +1.100 clientes satisfeitos.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <ReformationFocus />
        <HowItWorks />
        <StatsAnimated />
        <Comparison />
        <About />
        <Testimonials />
        <Guarantee />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <StickyVagas />
    </div>
  );
}
