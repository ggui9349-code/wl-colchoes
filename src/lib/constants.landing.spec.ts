import { describe, expect, it } from "vitest";
import { COPY } from "@/lib/constants";

describe("landing constants", () => {
  it("usa prazo oficial de 1 a 3 dias e bloqueia versões antigas do prazo", () => {
    const text = JSON.stringify(COPY);

    expect(text).toContain("1 a 3 dias");

    const forbiddenTimelineVariants = [
      /5\s*[–-]\s*10(?:\s*dias)?/i,
      /5\s*a\s*10(?:\s*dias)?/i,
      /5\s*[–-]\s*14(?:\s*dias)?/i,
      /5\s*a\s*14(?:\s*dias)?/i,
    ];

    forbiddenTimelineVariants.forEach((pattern) => {
      expect(text).not.toMatch(pattern);
    });
  });

  it("remove promessas promocionais e SLAs rígidos do CTA", () => {
    const text = JSON.stringify(COPY);

    expect(text).not.toContain("Garanta sua vaga agora");
    expect(text).not.toContain("Avaliação 100% gratuita, sem compromisso");
    expect(text).not.toContain("Resposta em até 2 horas");
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
