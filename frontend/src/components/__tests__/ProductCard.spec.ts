import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import ProductCard from "../ProductCard.vue";
import { createTestingPinia } from "@pinia/testing";
import { useWishlistStore } from "@/stores/useWishlistStore";
import { formatPrice } from "@/utils/formatPrice";
import type { Product } from "@/api/interface";

// Mock do método formatPrice para evitar dupla formatação
vi.mock("@/utils/formatPrice", () => ({
  formatPrice: vi.fn().mockImplementation((price) => {
    const formattedPrice = (price / 100).toFixed(2).replace(".", ",");
    return `${formattedPrice}`;
  }),
}));

describe("ProductCard.vue", () => {
  let wrapper: VueWrapper<any>;
  let wishlistStore: ReturnType<typeof useWishlistStore>;

  // Mock do produto
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
    wrapper = shallowMount(ProductCard, {
      props: {
        product: productMock,
      },
      global: {
        plugins: [
          createTestingPinia({
            stubActions: false,
          }),
        ],
      },
    });

    wishlistStore = useWishlistStore();
    wishlistStore.addProduct = vi.fn(wishlistStore.addProduct);
    wishlistStore.removeProduct = vi.fn(wishlistStore.removeProduct);
  });

  it("should render product details correctly", () => {
    const title = wrapper.find(".product-title");
    const originalPrice = wrapper.find(".original-price");
    const discountedPrice = wrapper.find(".discounted-price");
    const image = wrapper.find(".product-image");

    expect(title.text()).toBe("Produto Teste");
    expect(originalPrice.text()).toBe("R$ 299,00");
    expect(discountedPrice.text()).toBe("R$ 100,00");
    expect(image.attributes("src")).toBe("http://example.com/image.jpg");
    expect(image.attributes("alt")).toBe("Produto Teste");
  });

  it("should add product to wishlist when button is clicked", async () => {
    const addButton = wrapper.find("button.wishlist-button");

    await addButton.trigger("click");

    expect(wishlistStore.addProduct).toHaveBeenCalledTimes(1);
    expect(wishlistStore.addProduct).toHaveBeenCalledWith(productMock);

    const buttonClasses = addButton.classes();
    expect(buttonClasses).toContain("wishlist-button--active");
  });

  it("should remove product from wishlist when button is clicked if already added", async () => {
    // Adiciona o produto usando a ação da store
    await wishlistStore.addProduct(productMock);

    // Remontar o wrapper para refletir o estado atualizado da store
    await wrapper.setProps({ product: productMock });

    const addButton = wrapper.find("button.wishlist-button");

    // Verificar se o botão possui a classe antes de remover
    expect(addButton.classes()).toContain("wishlist-button--active");

    await addButton.trigger("click");

    expect(wishlistStore.removeProduct).toHaveBeenCalledTimes(1);
    expect(wishlistStore.removeProduct).toHaveBeenCalledWith(productMock.code);

    expect(addButton.classes()).not.toContain("wishlist-button--active");
  });

  it("should not show active class on wishlist button initially", () => {
    const addButton = wrapper.find("button.wishlist-button");
    expect(addButton.classes()).not.toContain("wishlist-button--active");
  });
});
