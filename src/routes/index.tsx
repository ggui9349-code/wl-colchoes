import { lazy, Suspense, useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { UrgencyBar } from "@/components/UrgencyBar";

const Footer = lazy(() => import("@/components/layout/Footer").then((m) => ({ default: m.Footer })));
const ReformationFocus = lazy(() =>
  import("@/components/sections/ReformationFocus").then((m) => ({ default: m.ReformationFocus })),
);
const HowItWorks = lazy(() => import("@/components/sections/HowItWorks").then((m) => ({ default: m.HowItWorks })));
const StatsAnimated = lazy(() => import("@/components/sections/StatsAnimated").then((m) => ({ default: m.StatsAnimated })));
const Comparison = lazy(() => import("@/components/sections/Comparison").then((m) => ({ default: m.Comparison })));
const About = lazy(() => import("@/components/sections/About").then((m) => ({ default: m.About })));
const Testimonials = lazy(() => import("@/components/sections/Testimonials").then((m) => ({ default: m.Testimonials })));
const Guarantee = lazy(() => import("@/components/sections/Guarantee").then((m) => ({ default: m.Guarantee })));
const Pricing = lazy(() => import("@/components/sections/Pricing").then((m) => ({ default: m.Pricing })));
const FinalCTA = lazy(() => import("@/components/sections/FinalCTA").then((m) => ({ default: m.FinalCTA })));
const FloatingWhatsApp = lazy(() => import("@/components/FloatingWhatsApp").then((m) => ({ default: m.FloatingWhatsApp })));
const StickyVagas = lazy(() => import("@/components/StickyVagas").then((m) => ({ default: m.StickyVagas })));

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
  const [showFloatingWidgets, setShowFloatingWidgets] = useState(false);

  useEffect(() => {
    const onIdle = () => setShowFloatingWidgets(true);
    if (typeof window === "undefined") return;

    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(onIdle, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }

    const timeoutId = globalThis.setTimeout(onIdle, 900);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <UrgencyBar />
      <Header />
      <main>
        <Hero />
        <Suspense fallback={null}>
          <ReformationFocus />
          <HowItWorks />
          <StatsAnimated />
          <Comparison />
          <About />
          <Testimonials />
          <Guarantee />
          <Pricing />
          <FinalCTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
      {showFloatingWidgets ? (
        <Suspense fallback={null}>
          <FloatingWhatsApp />
          <StickyVagas />
        </Suspense>
      ) : null}
    </div>
  );
}
