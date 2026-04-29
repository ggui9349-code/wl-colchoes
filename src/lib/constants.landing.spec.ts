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
