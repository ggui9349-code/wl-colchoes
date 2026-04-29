import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Objections } from "@/components/sections/Objections";

describe("Objections", () => {
  it("renders the planned objection headings", () => {
    render(<Objections />);

    expect(screen.getByText("Quanto custa?")).toBeInTheDocument();
    expect(screen.getByText("Quanto tempo leva?")).toBeInTheDocument();
    expect(screen.getByText("E se eu não gostar?")).toBeInTheDocument();
    expect(screen.getByText("Vocês entregam?")).toBeInTheDocument();
  });
});
