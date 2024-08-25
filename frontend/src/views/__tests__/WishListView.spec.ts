import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, mount, VueWrapper } from "@vue/test-utils";
import WishlistComponent from "../WishListView.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import ProductCard from "@/components/ProductCard.vue";
import { createTestingPinia } from "@pinia/testing";

describe("WishlistComponent.vue", () => {
  let wrapper: VueWrapper<any>;
  let wishlistStore: any;

  beforeEach(() => {
    const mockWishlistProducts = [
      { code: "product1", name: "Product 1", price: 1000 },
      { code: "product2", name: "Product 2", price: 2000 },
    ];

    wishlistStore = {
      wishlistProducts: mockWishlistProducts,
    };

    wrapper = mount(WishlistComponent, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              wishlist: wishlistStore,
            },
            stubActions: false,
          }),
        ],
        stubs: {
          BreadCrumb: true,
        },
      },
    });
  });

  it("should render the BreadCrumb component", () => {
    const breadcrumb = wrapper.findComponent(BreadCrumb);
    expect(breadcrumb.exists()).toBe(true);
  });

  it("should display a message when wishlist is empty", () => {
    wishlistStore.wishlistProducts = [];
    wrapper = mount(WishlistComponent, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              wishlist: wishlistStore,
            },
            stubActions: false,
          }),
        ],
        stubs: {
          BreadCrumb: true,
        },
      },
    });

    const message = wrapper.find("p");
    expect(message.exists()).toBe(true);
    expect(message.text()).toBe("Sua lista de desejos está vazia.");
  });
});
