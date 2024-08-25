import { describe, it, expect, beforeEach, vi } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useWishlistStore } from "@/stores/useWishlistStore";
import type { Product } from "@/api/interface";

// Mock do LocalStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {};

  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(global, "localStorage", {
  value: localStorageMock,
});

describe("useWishlistStore", () => {
  let store: ReturnType<typeof useWishlistStore>;

  const productMock: Product = {
    code: "123",
    name: "Produto Teste",
    available: true,
    visible: true,
    details: {
      name: "Produto Teste",
      description: "Descrição do Produto Teste",
    },
    priceInCents: 29900,
    salePriceInCents: 10000,
    rating: 4.5,
    image: "http://example.com/image.jpg",
    stockAvailable: true,
  };

  beforeEach(() => {
    setActivePinia(createPinia());
    localStorage.clear(); // Limpa o localStorage antes de cada teste
  });

  it("should initialize with products from LocalStorage", () => {
    // Salva um produto no LocalStorage
    localStorage.setItem("wishlist", JSON.stringify([productMock]));

    // Recria a store para verificar a inicialização
    store = useWishlistStore();
    expect(store.wishlistProducts).toEqual([productMock]);
  });

  it("should add a product to the wishlist and save to LocalStorage", () => {
    store = useWishlistStore();
    store.addProduct(productMock);
    expect(store.wishlistProducts).toEqual([productMock]);
    expect(localStorage.getItem("wishlist")).toEqual(
      JSON.stringify([productMock])
    );
  });

  it("should remove a product from the wishlist and update LocalStorage", () => {
    store = useWishlistStore();
    store.addProduct(productMock);
    store.removeProduct(productMock.code);
    expect(store.wishlistProducts).toEqual([]);
    expect(localStorage.getItem("wishlist")).toEqual(JSON.stringify([]));
  });

  it("should not add duplicate products to the wishlist", () => {
    store = useWishlistStore();
    store.addProduct(productMock);
    store.addProduct(productMock);
    expect(store.wishlistProducts).toEqual([productMock]);
    expect(store.wishlistProducts.length).toBe(1);
  });
});
