# Redesign da Landing Page — WL Colchões

## 1) Objetivo de Negócio

Aumentar conversão para WhatsApp, com foco principal em reforma de colchões e oferta secundária de fabricação de colchões de luxo, eliminando sinais de copy genérica e inconsistências de dados.

## 2) Dados validados com o cliente

- Meta principal de conversão: clique no WhatsApp
- Serviço principal: reforma de colchão
- Serviço complementar estratégico: fabricação de colchão de luxo
- Prazo oficial: 1 a 3 dias
- Números oficiais:
  - +800 reformados
  - +300 fabricados
  - 4,9★ de satisfação
- História da marca:
  - Início em 2020
  - Base em Paulista
  - Mais de 1.100 atendimentos (aprovado)
- Garantia: 90 dias

## 3) Diagnóstico crítico da landing atual (estado do código)

### 3.1 Copy com aparência genérica

- Linguagem ampla e pouco ancorada em fatos locais, com excesso de termos promocionais repetidos.
- Mensagens com promessa vaga sem evidência operacional clara na sequência da página.

### 3.2 Inconsistência de números e promessas

- Experiência apresentada como “7+ anos”, conflitante com início em 2020.
- Prazo aparece em formatos diferentes (5–10 e 5–14), conflitante com o valor oficial 1 a 3 dias.
- Números de prova social sem narrativa unificada entre blocos.

### 3.3 Estrutura excessiva/redundante

- Há muitas seções com sobreposição temática, o que dilui proposta principal e aumenta fadiga de rolagem.
- Repetição de gatilhos de urgência sem contextualização operacional reduz credibilidade.

## 4) Estratégia escolhida

Abordagem híbrida estratégica:

- Reforma como oferta principal (entrada de volume)
- Luxo como upgrade de valor (ticket e posicionamento)

Razão:

- Maximiza cliques no WhatsApp sem abrir mão de percepção premium.

## 5) Nova arquitetura da página (ordem final)

1. Hero
2. Serviço principal: Reforma profissional
3. Processo profissional (4 etapas)
4. Comparativo: Reformar vs Comprar novo
5. Soluções (Reforma, Fabricação de luxo, Sob medida)
6. Quem Somos
7. Depoimentos
8. Garantia de 90 dias
9. CTA final

### Justificativa de CRO da ordem

- Abertura com promessa forte e concreta (1 a 3 dias + economia) acelera compreensão de valor.
- Processo cedo reduz incerteza e objeção.
- Comparativo antes de soluções complementares fortalece lógica econômica.
- Storytelling e prova social entram após entendimento da oferta, elevando confiança.
- Garantia e CTA final convertem intenção em ação.

## 6) Direção de design

Conceito: refinado local (premium prático)

- Visual sofisticado sem parecer distante ou “frio”.
- Ênfase em legibilidade, contraste e hierarquia clara.

### Paleta

- Base escura elegante
- Teal como cor técnica de confiança
- Dourado para destaque de valor premium

### Tipografia

- Títulos: serif de alto contraste
- Corpo: sans humanista de leitura fácil

### Layout

- Hero assimétrico com CTA proeminente
- Comparativo lado a lado com economia explícita
- Cards de solução com destaque visual para reforma
- Depoimentos em carrossel responsivo com conteúdo curto e objetivo

### Motion

- Animações de entrada discretas e intencionais
- Contadores com animação de viewport
- Remoção de efeitos supérfluos que não sustentam a narrativa

## 7) Copy framework (reescrita orientada)

### Hero

- Headline: “Reforme seu colchão em 1 a 3 dias e pague até 70% menos que um novo.”
- Subheadline: “Em Paulista e região, a WL Colchões restaura conforto com acabamento profissional e garantia de 90 dias.”
- CTA: “Falar no WhatsApp e pedir avaliação gratuita”

### Serviço principal

- Foco em resultado mensurável: conforto restaurado, economia real, prazo curto.

### Processo

- 4 etapas objetivas com tempo esperado por etapa e saída clara.

### Comparativo

- Reformar: custo menor + prazo curto + reaproveitamento da base
- Comprar novo: custo maior + prazo potencialmente maior + descarte

### Soluções

- Reforma (principal)
- Fabricação de luxo (upgrade)
- Sob medida (necessidade específica)

### Quem Somos

- Storytelling factual:
  - “Desde 2020, em Paulista…”
  - “+1.100 atendimentos”
  - “4,9★ de satisfação”

### Garantia

- Explicação objetiva do que cobre e por quanto tempo (90 dias)

### CTA final

- Reforço de risco baixo + ação imediata via WhatsApp

## 8) Requisitos funcionais de animação

### Contadores obrigatórios

- +800 reformados
- 4,9★ satisfação
- +300 fabricados

### Comportamento técnico

- Iniciar de 0 ao entrar na viewport
- Rodar apenas 1 vez por visita
- Usar easing suave
- Não bloquear thread principal

### Implementação recomendada

- IntersectionObserver para detecção
- requestAnimationFrame para contagem incremental

## 9) Critérios de sucesso

- Mensagem principal compreendida em até 5 segundos no hero.
- Consistência total de números e prazo (1 a 3 dias, +800, +300, 4,9★, 2020, 90 dias).
- Redução de redundância estrutural (página mais curta e linear).
- CTA principal (WhatsApp) visível e contextualizado em pontos-chave.

## 10) Escopo de implementação

Inclui:

- Reestruturação da ordem de seções
- Reescrita completa de copy
- Atualização visual (paleta, tipografia, layout)
- Implementação dos contadores animados
- Ajustes de responsividade

Não inclui:

- Integração com GitHub obrigatória
- Alterações de backend
- CRM ou automação de lead

## 11) Riscos e mitigação

- Risco: excesso de premium e queda de clareza
  - Mitigação: manter reforma como protagonista em todos os blocos iniciais

- Risco: desalinhamento entre copy e operação real
  - Mitigação: usar apenas dados validados nesta especificação

- Risco: animações pesadas em mobile
  - Mitigação: motion discreto, condicionais de performance e teste em viewport real

## 12) Entregáveis esperados na fase de implementação

- Código front-end atualizado da landing
- Seções reorganizadas conforme arquitetura aprovada
- Copy final aplicada
- Contadores animados implementados
- Checklist de integração local e testes de responsividade