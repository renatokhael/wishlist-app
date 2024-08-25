import { describe, it, expect, beforeEach, vi } from "vitest";
import { shallowMount, RouterLinkStub, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import type { Router } from "vue-router";
import BreadCrumb from "../BreadCrumb.vue";

describe("BreadCrumb.vue", () => {
  let router: Router;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [
        { path: "/", name: "home", component: { template: "<div />" } },
        {
          path: "/products",
          name: "productList",
          component: { template: "<div />" },
        },
        {
          path: "/wishlist",
          name: "wishList",
          component: { template: "<div />" },
        },
      ],
    });

    router.push = vi.fn().mockResolvedValue(true); // Mockando o push para evitar problemas com roteamento real
  });

  it("should render the 'Home' link correctly", () => {
    const wrapper: VueWrapper<any> = shallowMount(BreadCrumb, {
      global: {
        plugins: [router],
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(true);
    expect(link.props().to).toBe("/");
    expect(link.text()).toBe("Home");
  });
});
