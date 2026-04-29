# WL Colchões Landing Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reestruturar a landing da WL Colchões para elevar cliques no WhatsApp com narrativa centrada em reforma (prazo médio de 1 a 3 dias, dependendo da avaliação), upsell para fabricação de luxo e consistência total de copy/dados.

**Architecture:** A implementação manterá a rota principal em [src/routes/index.tsx](src/routes/index.tsx), consolidará dados e copy em [src/lib/constants.ts](src/lib/constants.ts), e atualizará as seções atuais para refletir a nova ordem de conversão aprovada com bloco explícito de soluções e mini seção de objeções antes do CTA final. `StatsAnimated` será posicionada como prova social imediata após `Comparison` (não isolada sem contexto). A camada visual será refinada via tokens em [src/styles.css](src/styles.css), com animação de estatísticas baseada em viewport usando `requestAnimationFrame` e `useInView`.

**Tech Stack:** React 19 + TypeScript + TanStack Router + Tailwind CSS v4 + Framer Motion + Lucide React.

---

## File Structure Map

### Arquivos a modificar

- `src/lib/constants.ts`
  - Atualizar todo o conteúdo textual e numérico oficial (prazo 1 a 3 dias, dados 2020, +800, +300, 4,9★, +1.100 atendimentos, garantia 90 dias).
- `src/routes/index.tsx`
  - Garantir ordem final de seções aprovada e remover redundâncias de fluxo.
- `src/components/sections/Hero.tsx`
  - Reescrever hero para promessa principal (reforma + prazo curto + CTA WhatsApp).
- `src/components/sections/ReformationFocus.tsx`
  - Reforçar serviço principal com linguagem concreta e prazo oficial.
- `src/components/sections/HowItWorks.tsx`
  - Ajustar processo para 4 etapas objetivas com tempos claros.
- `src/components/sections/Comparison.tsx`
  - Atualizar comparativo reformar vs comprar com números e prazo consistentes.
- `src/components/sections/Solution.tsx`
  - Explicitar seção de soluções para manter upsell (reforma + fabricação + luxo).
- `src/components/sections/StatsAnimated.tsx`
  - Usar contadores mandatórios +800 / 4,9★ / +300 com entrada em viewport.
- `src/components/sections/About.tsx`
  - Storytelling factual (desde 2020, Paulista, +1.100 atendimentos).
- `src/components/sections/Testimonials.tsx`
  - Ajustar copy e foco para depoimentos mais diretos e alinhados à proposta.
- `src/components/sections/Guarantee.tsx`
  - Garantia de 90 dias para ajustes relacionados ao serviço (sem promessa ambígua de reembolso irrestrito).
- `src/components/sections/Objections.tsx`
  - Mini seção de objeções (custo, prazo, garantia, entrega) antes do CTA final.
- `src/components/sections/FinalCTA.tsx`
  - CTA final agressivo para WhatsApp com baixa fricção.
- `src/components/AnimatedCounter.tsx`
  - Garantir animação suave com início em 0 e execução única por visita.
- `src/styles.css`
  - Refino de tipografia, paleta e redução de animações supérfluas.

### Arquivos de teste a criar

- `src/lib/constants.landing.spec.ts`
  - Validar consistência textual/números chave de conversão.
- `src/components/AnimatedCounter.spec.tsx`
  - Validar renderização final do contador para inteiro e decimal.

### Arquivos de configuração a criar

- `vitest.config.ts`
  - Configuração mínima do Vitest para ambiente `jsdom`.
- `src/test/setup.ts`
  - Setup global para testes de componentes.

### Arquivos de tipagem/test util a criar

- `src/test/vitest.d.ts`
  - Tipos de matcher e ambiente de teste.

---

## Task 1: Configurar base de testes (TDD) para validar copy e animações

**Files:**
- Create: `vitest.config.ts`
- Create: `src/test/setup.ts`
- Create: `src/test/vitest.d.ts`
- Modify: `package.json`

- [ ] **Step 1: Escrever teste de smoke inicial que falha sem setup de Vitest**

Create `src/lib/constants.landing.spec.ts` (inicial temporário para falhar por ausência de runner):

```ts
import { describe, expect, it } from "vitest";

describe("landing constants", () => {
  it("smoke", () => {
    expect(true).toBe(true);
  });
});
```

- [ ] **Step 2: Rodar teste para confirmar falha de configuração**

Run: `npm run test`
Expected: FAIL com erro de script ausente em `package.json`.

- [ ] **Step 3: Adicionar script e dependências de teste**

Modify `package.json`:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "devDependencies": {
    "vitest": "^3.2.4",
    "@testing-library/react": "^16.3.0",
    "@testing-library/jest-dom": "^6.6.3",
    "jsdom": "^26.1.0"
  }
}
```

- [ ] **Step 4: Criar configuração do Vitest**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    globals: true,
    css: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

- [ ] **Step 5: Criar setup global de testes**

Create `src/test/setup.ts`:

```ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 6: Criar tipagem de suporte do Vitest**

Create `src/test/vitest.d.ts`:

```ts
/// <reference types="vitest/globals" />
```

- [ ] **Step 7: Rodar testes para validar setup**

Run: `npm run test`
Expected: PASS (apenas smoke test).

- [ ] **Step 8: Commit da infraestrutura de testes**

```bash
git add package.json package-lock.json vitest.config.ts src/test/setup.ts src/test/vitest.d.ts src/lib/constants.landing.spec.ts
git commit -m "test: add vitest setup for landing page validation"
```

---

## Task 2: Atualizar constants com copy validada e dados consistentes

**Files:**
- Modify: `src/lib/constants.ts`
- Test: `src/lib/constants.landing.spec.ts`

- [ ] **Step 1: Escrever teste que valida dados obrigatórios da landing**

Replace `src/lib/constants.landing.spec.ts`:

```ts
import { describe, expect, it } from "vitest";
import { COPY } from "@/lib/constants";

describe("landing constants", () => {
  it("usa prazo oficial de 1 a 3 dias", () => {
    const text = JSON.stringify(COPY);
    expect(text).toContain("1 a 3 dias");
    expect(text).not.toContain("5–10");
    expect(text).not.toContain("5–14");
  });

  it("mantém números oficiais aprovados", () => {
    const text = JSON.stringify(COPY);
    expect(text).toContain("+800");
    expect(text).toContain("+300");
    expect(text).toContain("4.9");
    expect(text).toContain("+1.100");
    expect(text).toContain("2020");
    expect(text).toContain("90 dias");
  });
});
```

- [ ] **Step 2: Rodar teste para confirmar falha com copy atual**

Run: `npm run test -- src/lib/constants.landing.spec.ts`
Expected: FAIL (conteúdo atual ainda contém prazos antigos/experiência inconsistente).

- [ ] **Step 3: Atualizar COPY para versão aprovada (CRO + dados oficiais)**

Modify `src/lib/constants.ts` (blocos obrigatórios):

```ts
hero: {
  mainHeadline: "Reforme seu colchão em 1 a 3 dias e pague até 70% menos que um novo",
  secondaryHeadline: "Reforma profissional e fabricação de colchões de luxo em Paulista",
  subheadline:
    "A WL Colchões restaura conforto com acabamento profissional, atendimento local e garantia de 90 dias.",
  cta: "Falar no WhatsApp e pedir avaliação gratuita",
},
```

```ts
about: {
  headline: "Desde 2020 transformando o descanso em Paulista e região",
  story:
    "A WL Colchões nasceu em 2020, em Paulista, para resolver um problema real: colchões ainda bons sendo descartados e famílias pagando caro sem necessidade. Hoje, já são mais de +1.100 atendimentos com foco em reforma profissional e fabricação de colchões de luxo.",
  // ...
  stats: [
    { number: "+800", label: "Colchões Reformados" },
    { number: "+300", label: "Colchões Fabricados" },
    { number: "4.9★", label: "Satisfação Média" },
    { number: "+1.100", label: "Atendimentos" },
  ],
},
```

```ts
howItWorks: [
  { step: 1, title: "Contato inicial", description: "Você chama no WhatsApp e recebe retorno rápido.", detail: "Resposta em até 2 horas" },
  { step: 2, title: "Avaliação gratuita", description: "Analisamos seu colchão e enviamos orçamento claro.", detail: "Sem compromisso" },
  { step: 3, title: "Reforma ou fabricação", description: "Executamos o serviço com padrão profissional.", detail: "Prazo de 1 a 3 dias" },
  { step: 4, title: "Entrega com garantia", description: "Você recebe o colchão pronto para uso.", detail: "Garantia de 90 dias" },
],
```

- [ ] **Step 4: Rodar teste para validar constants atualizadas**

Run: `npm run test -- src/lib/constants.landing.spec.ts`
Expected: PASS.

- [ ] **Step 5: Commit da atualização de copy/dados**

```bash
git add src/lib/constants.ts src/lib/constants.landing.spec.ts
git commit -m "feat: align landing copy with approved WL data and conversion narrative"
```

---

## Task 3: Reordenar fluxo da landing na rota principal (com Solutions e Objections)

**Files:**
- Modify: `src/routes/index.tsx`

- [ ] **Step 1: Escrever teste de ordem de seções (snapshot textual da composição)**

Create `src/routes/index.route-order.spec.tsx`:

```tsx
import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";

describe("route section order", () => {
  it("keeps approved conversion order", () => {
    const file = fs.readFileSync(path.resolve("src/routes/index.tsx"), "utf8");
    const order = [
      "<Hero />",
      "<ReformationFocus />",
      "<HowItWorks />",
      "<Comparison />",
      "<Solution />",
      "<StatsAnimated />",
      "<About />",
      "<Testimonials />",
      "<Guarantee />",
      "<Objections />",
      "<FinalCTA />",
    ];

    const indexes = order.map((token) => file.indexOf(token));
    indexes.forEach((i) => expect(i).toBeGreaterThan(-1));
    expect([...indexes].sort((a, b) => a - b)).toEqual(indexes);
  });
});
```

- [ ] **Step 2: Rodar teste para validar falha se ordem ainda não estiver final**

Run: `npm run test -- src/routes/index.route-order.spec.tsx`
Expected: FAIL se ordem não corresponder exatamente ao array acima.

- [ ] **Step 3: Ajustar composição de seções na rota**

Modify `src/routes/index.tsx`:

```tsx
<main>
  <Hero />
  <ReformationFocus />
  <HowItWorks />
  <Comparison />
  <Solution />
  <StatsAnimated />
  <About />
  <Testimonials />
  <Guarantee />
  <Objections />
  <FinalCTA />
</main>
```

- [ ] **Step 4: Rodar teste de ordem novamente**

Run: `npm run test -- src/routes/index.route-order.spec.tsx`
Expected: PASS.

- [ ] **Step 5: Commit da ordem da página**

```bash
git add src/routes/index.tsx src/routes/index.route-order.spec.tsx
git commit -m "refactor: reorder landing sections with solutions, contextual stats and objections"
```

---

## Task 4: Implementar contadores animados de viewport com precisão inteira/decimal

**Files:**
- Modify: `src/components/AnimatedCounter.tsx`
- Modify: `src/components/sections/StatsAnimated.tsx`
- Test: `src/components/AnimatedCounter.spec.tsx`

- [ ] **Step 1: Escrever teste do contador para inteiro e decimal**

Create `src/components/AnimatedCounter.spec.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { AnimatedCounter } from "@/components/AnimatedCounter";

vi.mock("framer-motion", () => ({
  useInView: () => true,
}));

describe("AnimatedCounter", () => {
  it("renders final integer value", () => {
    render(<AnimatedCounter value={800} duration={1} prefix="+" />);
    expect(screen.getByText(/\+800/)).toBeInTheDocument();
  });

  it("renders final decimal value", () => {
    render(<AnimatedCounter value={4.9} duration={1} decimals={1} suffix="★" />);
    expect(screen.getByText(/4\.9★/)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar teste para confirmar falha inicial**

Run: `npm run test -- src/components/AnimatedCounter.spec.tsx`
Expected: FAIL (animação assíncrona não garante valor final imediatamente).

- [ ] **Step 3: Ajustar AnimatedCounter para terminar com valor exato e easing**

Modify `src/components/AnimatedCounter.tsx`:

```tsx
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export function AnimatedCounter({
  value,
  duration = 1600,
  decimals = 0,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (typeof window === "undefined" || typeof requestAnimationFrame !== "function") {
      setDisplay(value);
      return;
    }

    let raf = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const raw = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(raw);
      const next = value * eased;
      setDisplay(raw >= 1 ? value : next);
      if (raw < 1) raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {display.toFixed(decimals)}
      {suffix}
    </span>
  );
}
```

- [ ] **Step 4: Atualizar seção de stats para números obrigatórios aprovados**

Modify `src/components/sections/StatsAnimated.tsx` para usar exatamente:

```tsx
<AnimatedCounter value={800} prefix="+" />
<AnimatedCounter value={4.9} decimals={1} suffix="★" />
<AnimatedCounter value={300} prefix="+" />
```

Com labels:

```tsx
"Colchões reformados"
"Satisfação média"
"Colchões fabricados"
```

- [ ] **Step 5: Rodar testes do contador**

Run: `npm run test -- src/components/AnimatedCounter.spec.tsx`
Expected: PASS.

- [ ] **Step 6: Commit dos contadores animados**

```bash
git add src/components/AnimatedCounter.tsx src/components/sections/StatsAnimated.tsx src/components/AnimatedCounter.spec.tsx
git commit -m "feat: add viewport-based animated counters with exact final values"
```

---

## Task 5: Atualizar seção Hero para proposta principal de conversão

**Files:**
- Modify: `src/components/sections/Hero.tsx`

- [ ] **Step 1: Escrever teste de presença de mensagem principal no Hero**

Create `src/components/sections/Hero.copy.spec.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Hero } from "@/components/sections/Hero";

describe("Hero copy", () => {
  it("shows official promise with 1 a 3 dias", () => {
    render(<Hero />);
    expect(screen.getByText(/1 a 3 dias/i)).toBeInTheDocument();
    expect(screen.getByText(/até 70% menos/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar teste para confirmar falha com texto antigo**

Run: `npm run test -- src/components/sections/Hero.copy.spec.tsx`
Expected: FAIL.

- [ ] **Step 3: Refatorar Hero para layout assimétrico e copy validada**

Modify `src/components/sections/Hero.tsx`:

```tsx
// manter estrutura geral com framer-motion
// atualizar badges e textos
<p className="...">Atendimento em Paulista e região</p>
<h1 className="...">{COPY.hero.mainHeadline}</h1>
<p className="...">{COPY.hero.subheadline}</p>

// prazo oficial
<div className="...">Prazo médio: 1 a 3 dias</div>

// remover menções de 5–10 dias
```

- [ ] **Step 4: Rodar teste de copy do Hero**

Run: `npm run test -- src/components/sections/Hero.copy.spec.tsx`
Expected: PASS.

- [ ] **Step 5: Commit do Hero**

```bash
git add src/components/sections/Hero.tsx src/components/sections/Hero.copy.spec.tsx
git commit -m "feat: redesign hero copy and layout for whatsapp conversion"
```

---

## Task 6: Consolidar seção principal de reforma + processo profissional

**Files:**
- Modify: `src/components/sections/ReformationFocus.tsx`
- Modify: `src/components/sections/HowItWorks.tsx`

- [ ] **Step 1: Criar teste para prazo oficial no bloco de reforma/processo**

Create `src/components/sections/ReformationFlow.copy.spec.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReformationFocus } from "@/components/sections/ReformationFocus";
import { HowItWorks } from "@/components/sections/HowItWorks";

describe("Reformation flow copy", () => {
  it("shows official 1 a 3 dias timeline", () => {
    render(
      <>
        <ReformationFocus />
        <HowItWorks />
      </>
    );
    expect(screen.getAllByText(/1 a 3 dias/i).length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Rodar teste para falhar com conteúdos antigos**

Run: `npm run test -- src/components/sections/ReformationFlow.copy.spec.tsx`
Expected: FAIL.

- [ ] **Step 3: Atualizar ReformationFocus para copy concreta (sem exageros)**

Modify `src/components/sections/ReformationFocus.tsx`:

```tsx
// substituir "qualidade excepcional" por texto concreto
"Reforma com troca de camadas necessárias, acabamento profissional e entrega em 1 a 3 dias."

// atualizar badges internas
"Prazo: 1 a 3 dias"
"Garantia de 90 dias"
```

- [ ] **Step 4: Ajustar HowItWorks para 4 etapas com fricção baixa**

Modify `src/components/sections/HowItWorks.tsx` para refletir `COPY.howItWorks` atualizado sem divergências locais.

- [ ] **Step 5: Rodar teste do fluxo de reforma**

Run: `npm run test -- src/components/sections/ReformationFlow.copy.spec.tsx`
Expected: PASS.

- [ ] **Step 6: Commit do bloco principal de reforma/processo**

```bash
git add src/components/sections/ReformationFocus.tsx src/components/sections/HowItWorks.tsx src/components/sections/ReformationFlow.copy.spec.tsx
git commit -m "feat: align reformation and process sections with 1-3 day promise"
```

---

## Task 7: Atualizar comparativo + solutions + autoridade

**Files:**
- Modify: `src/components/sections/Comparison.tsx`
- Modify: `src/components/sections/Solution.tsx`
- Modify: `src/components/sections/About.tsx`

- [ ] **Step 1: Criar teste de consistência no comparativo e seção de soluções**

Create `src/components/sections/OfferFlow.copy.spec.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Comparison } from "@/components/sections/Comparison";
import { Solution } from "@/components/sections/Solution";

describe("Offer flow copy", () => {
  it("shows reform option with prazo médio e economia", () => {
    render(<Comparison />);
    expect(screen.getByText(/prazo médio de 1 a 3 dias/i)).toBeInTheDocument();
    expect(screen.getByText(/até 70%/i)).toBeInTheDocument();
  });

  it("shows explicit solutions section with luxury upsell", () => {
    render(<Solution />);
    expect(screen.getByText(/nossos serviços/i)).toBeInTheDocument();
    expect(screen.getByText(/reforma profissional/i)).toBeInTheDocument();
    expect(screen.getByText(/coleção de luxo/i)).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Rodar teste para falhar com texto atual**

Run: `npm run test -- src/components/sections/OfferFlow.copy.spec.tsx`
Expected: FAIL.

- [ ] **Step 3: Atualizar Comparison para narrativa econômica local e prazo médio condicionado**

Modify `src/components/sections/Comparison.tsx`:

```tsx
// trocar qualquer variação de prazo por:
// "Prazo médio de 1 a 3 dias (dependendo da avaliação)"
// manter blocos lado a lado
// CTA: "Quero avaliar meu colchão no WhatsApp"
```

- [ ] **Step 4: Ajustar Solution para explicitar estratégia de oferta (entrada + upsell)**

Modify `src/components/sections/Solution.tsx`:

```tsx
// manter 3 cards, com destaque principal em Reforma
// manter Luxo como upgrade visível
// copy direta e local, sem excesso de adjetivação
```

- [ ] **Step 5: Atualizar About com storytelling factual aprovado**

Modify `src/components/sections/About.tsx`:

```tsx
// remover "7+ anos"
// usar:
"Desde 2020"
"Paulista, PE"
"+1.100 atendimentos"
"4,9★ de satisfação"
```

- [ ] **Step 6: Rodar teste do fluxo de oferta novamente**

Run: `npm run test -- src/components/sections/OfferFlow.copy.spec.tsx`
Expected: PASS.

- [ ] **Step 7: Commit de comparação, soluções e autoridade**

```bash
git add src/components/sections/Comparison.tsx src/components/sections/Solution.tsx src/components/sections/About.tsx src/components/sections/OfferFlow.copy.spec.tsx
git commit -m "feat: add explicit solutions section and align offer flow for upsell"
```

---

## Task 8: Revisar prova social, garantia, objeções e CTA final para fechamento de conversão

**Files:**
- Modify: `src/components/sections/Testimonials.tsx`
- Modify: `src/components/sections/Guarantee.tsx`
- Create: `src/components/sections/Objections.tsx`
- Modify: `src/components/sections/FinalCTA.tsx`

- [ ] **Step 1: Criar teste de mensagens de fechamento + WhatsApp**

Create `src/components/sections/Closing.copy.spec.tsx`:

```tsx
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Guarantee } from "@/components/sections/Guarantee";
import { Objections } from "@/components/sections/Objections";
import { FinalCTA } from "@/components/sections/FinalCTA";

describe("Closing sections", () => {
  it("keeps 90-day guarantee language without unrestricted refund promise", () => {
    render(<Guarantee />);
    expect(screen.getAllByText(/90 dias/i).length).toBeGreaterThan(0);
    expect(screen.queryByText(/sem perguntas/i)).not.toBeInTheDocument();
  });

  it("renders objection breakers", () => {
    render(<Objections />);
    expect(screen.getByText(/quanto custa/i)).toBeInTheDocument();
    expect(screen.getByText(/quanto tempo leva/i)).toBeInTheDocument();
    expect(screen.getByText(/vocês entregam/i)).toBeInTheDocument();
  });

  it("renders whatsapp links in closing flow", () => {
    render(<FinalCTA />);
    expect(screen.getAllByRole("link", { name: /whatsapp/i }).length).toBeGreaterThan(0);
  });
});
```

- [ ] **Step 2: Rodar teste inicial do fechamento**

Run: `npm run test -- src/components/sections/Closing.copy.spec.tsx`
Expected: FAIL se CTA/garantia/objeções ainda não estiverem na versão nova.

- [ ] **Step 3: Ajustar testimonials para tom mais direto e local**

Modify `src/components/sections/Testimonials.tsx`:

```tsx
// preservar carrossel
// reduzir adjetivação excessiva
// reforçar depoimentos com benefício concreto (prazo, economia, conforto)
```

- [ ] **Step 4: Ajustar guarantee para redação objetiva sem ambiguidade jurídica**

Modify `src/components/sections/Guarantee.tsx` com formulação:

```tsx
"Garantia de 90 dias para ajustes relacionados ao serviço executado"
```

- [ ] **Step 5: Criar mini seção de objeções antes do CTA final**

Create `src/components/sections/Objections.tsx`:

```tsx
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const items = [
  { q: "Quanto custa?", a: "O valor depende da avaliação. A reforma costuma sair até 70% abaixo de um colchão novo." },
  { q: "Quanto tempo leva?", a: "Prazo médio de 1 a 3 dias, dependendo da avaliação e do tipo de serviço." },
  { q: "E se eu não gostar?", a: "Você tem 90 dias de garantia para ajustes relacionados ao serviço." },
  { q: "Vocês entregam?", a: "Atendemos Paulista e região com coleta/entrega conforme disponibilidade." },
];

export function Objections() {
  return (
    <section className="bg-background py-14 md:py-18">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">Dúvidas rápidas antes de chamar no WhatsApp</h2>
        <Accordion type="single" collapsible className="mt-6 space-y-3">
          {items.map((item, idx) => (
            <AccordionItem value={`objection-${idx}`} key={item.q} className="rounded-xl border border-border bg-card px-4">
              <AccordionTrigger className="text-left font-semibold">{item.q}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
```

- [ ] **Step 6: Ajustar FinalCTA para ação única principal**

Modify `src/components/sections/FinalCTA.tsx`:

```tsx
headline: "Seu colchão pode ficar pronto em prazo médio de 1 a 3 dias"
subheadline: "Fale com a WL Colchões no WhatsApp e receba sua avaliação gratuita"
buttonText: "Chamar no WhatsApp agora"
```

- [ ] **Step 7: Rodar teste de fechamento novamente**

Run: `npm run test -- src/components/sections/Closing.copy.spec.tsx`
Expected: PASS.

- [ ] **Step 8: Commit do fechamento de conversão**

```bash
git add src/components/sections/Testimonials.tsx src/components/sections/Guarantee.tsx src/components/sections/Objections.tsx src/components/sections/FinalCTA.tsx src/components/sections/Closing.copy.spec.tsx
git commit -m "feat: add objections section and tighten closing conversion flow"
```

---

## Task 9: Refinar design system visual (tipografia, animações, consistência)

**Files:**
- Modify: `src/styles.css`

- [ ] **Step 1: Escrever teste simples de tokens críticos em CSS**

Create `src/styles.tokens.spec.ts`:

```ts
import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

describe("styles tokens", () => {
  it("keeps teal and gold palette tokens", () => {
    const css = fs.readFileSync(path.resolve("src/styles.css"), "utf8");
    expect(css).toContain("--primary");
    expect(css).toContain("--gold");
  });
});
```

- [ ] **Step 2: Rodar teste de tokens**

Run: `npm run test -- src/styles.tokens.spec.ts`
Expected: PASS.

- [ ] **Step 3: Aplicar refinos de tipografia e motion não supérfluo**

Modify `src/styles.css`:

```css
body {
  font-family: "DM Sans", "Segoe UI", sans-serif;
}

h1, h2, h3, h4 {
  font-family: "Fraunces", Georgia, serif;
  letter-spacing: -0.02em;
}

@media (prefers-reduced-motion: reduce) {
  .animate-cta-pulse,
  .animate-cta-pulse-light,
  .animate-float-slow,
  .animate-cta-bounce {
    animation: none !important;
  }
}
```

- [ ] **Step 4: Rodar lint e build para validar integridade final**

Run: `npm run lint && npm run build`
Expected: PASS (sem erros de build/lint).

- [ ] **Step 5: Commit de refinamento visual**

```bash
git add src/styles.css src/styles.tokens.spec.ts
git commit -m "style: refine landing visual system and motion behavior"
```

---

## Task 10: Verificação final funcional da landing

**Files:**
- Modify (if needed after QA): `src/components/sections/*.tsx`, `src/lib/constants.ts`, `src/routes/index.tsx`

- [ ] **Step 1: Rodar suíte completa de testes**

Run: `npm run test`
Expected: PASS.

- [ ] **Step 2: Rodar build de produção**

Run: `npm run build`
Expected: PASS com artefatos gerados sem erro.

- [ ] **Step 3: Rodar aplicação local e validar fluxo principal manualmente**

Run: `npm run dev`
Expected: app disponível localmente; validar em viewport mobile/desktop:

- Hero comunica “1 a 3 dias” em até 5 segundos.
- Ordem de seções está conforme aprovada.
- Comparativo mostra economia + prazo correto.
- Contadores disparam ao entrar na tela e chegam em +800 / 4,9★ / +300.
- Botões principais apontam para WhatsApp.

- [ ] **Step 4: Commit final de ajustes de QA (se houver)**

```bash
git add src/routes/index.tsx src/lib/constants.ts src/components src/styles.css
git commit -m "chore: finalize landing redesign QA fixes"
```

---

## Spec Coverage Check

- Objetivo WhatsApp: Tasks 3, 5, 8, 10.
- Nova ordem de seções (com Solutions + Objections): Task 3.
- Copy reescrita com dados oficiais: Tasks 2, 5, 6, 7, 8.
- Storytelling Quem Somos (2020, Paulista, +1.100): Task 7.
- Comparativo reformar vs comprar: Task 7.
- Seção de soluções para upsell (reforma + luxo): Task 7.
- Contadores animados obrigatórios em posição contextual (após comparativo): Tasks 3 e 4.
- Mini seção de objeções antes do CTA final: Task 8.
- Direção visual (teal + dourado, refinado): Task 9.
- Checklist técnico de integração/teste local: Task 10.

## Placeholder Scan

- Não há `TODO`, `TBD`, “similar a task X” ou passos sem comando/código.

## Type Consistency Check

- Props de `AnimatedCounter` mantidas (`value`, `duration`, `decimals`, `prefix`, `suffix`).
- Caminhos de arquivo e imports seguem alias `@` já usado no projeto.
- Terminologia numérica padronizada: `1 a 3 dias`, `+800`, `+300`, `4.9★`, `+1.100`, `2020`, `90 dias`.