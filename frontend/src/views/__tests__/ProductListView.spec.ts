import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount, VueWrapper } from "@vue/test-utils";
import YourComponent from "../ProductListView.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import ProductCard from "@/components/ProductCard.vue";
import * as httpInstance from "@/api/httpInstance";

describe("ProductListView.vue", () => {
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    const mockProducts = [
      { code: "product1", name: "Product 1", price: 1000 },
      { code: "product2", name: "Product 2", price: 2000 },
    ];

    vi.spyOn(httpInstance, "getData").mockResolvedValue(mockProducts);

    wrapper = shallowMount(YourComponent, {
      global: {
        stubs: {
          BreadCrumb: true,
          ProductCard: true,
        },
      },
    });
  });

  it("should render the BreadCrumb component", () => {
    const breadcrumb = wrapper.findComponent(BreadCrumb);
    expect(breadcrumb.exists()).toBe(true);
  });

  it("should call fetchProducts on mounted", () => {
    expect(httpInstance.getData).toHaveBeenCalledWith("/products");
  });

  it("should render the correct number of ProductCard components", async () => {
    await wrapper.vm.$nextTick();

    const productCards = wrapper.findAllComponents(ProductCard);
    expect(productCards.length).toBe(2);
  });

  it("should pass the correct product data to each ProductCard component", async () => {
    await wrapper.vm.$nextTick();

    const productCards = wrapper.findAllComponents(ProductCard);
    expect(productCards[0].props("product")).toEqual({
      code: "product1",
      name: "Product 1",
      price: 1000,
    });
    expect(productCards[1].props("product")).toEqual({
      code: "product2",
      name: "Product 2",
      price: 2000,
    });
  });
});
