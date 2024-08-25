import { describe, it, expect } from "vitest";
import { formatPrice } from "../formatPrice";

describe("formatPrice", () => {
  it("should format the price correctly for given cents", () => {
    const priceInCents = 12345;
    const formattedPrice = formatPrice(priceInCents);

    expect(formattedPrice).toBe("R$ 123,45");
  });

  it("should handle zero correctly", () => {
    const priceInCents = 0;
    const formattedPrice = formatPrice(priceInCents);

    expect(formattedPrice).toBe("R$ 0,00");
  });

  it("should handle large values correctly", () => {
    const priceInCents = 123456789;
    const formattedPrice = formatPrice(priceInCents);

    expect(formattedPrice).toBe("R$ 1.234.567,89");
  });

  it("should handle negative values correctly", () => {
    const priceInCents = -12345;
    const formattedPrice = formatPrice(priceInCents);

    expect(formattedPrice).toBe("-R$ 123,45");
  });
});
