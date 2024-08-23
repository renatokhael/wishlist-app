import { describe, it, expect, beforeEach } from "vitest";
import { shallowMount, RouterLinkStub, VueWrapper } from "@vue/test-utils";
import type { Router } from "vue-router";
import Header from "../Header.vue";
import { createTestingPinia } from "@pinia/testing";
import { createRouter, createWebHistory } from "vue-router";

describe("Header.vue", () => {
  let router: Router;

  beforeEach(() => {
    router = createRouter({
      history: createWebHistory(),
      routes: [{ path: "/wishlist", name: "Wishlist", component: () => {} }],
    });
  });

  it("should render router-link with correct href", async () => {
    const wrapper: VueWrapper<any> = shallowMount(Header, {
      global: {
        plugins: [
          router,
          createTestingPinia({
            initialState: {
              wishlist: {
                wishlist: [],
              },
            },
          }),
        ],
        stubs: {
          "router-link": RouterLinkStub,
        },
      },
    });

    const link = wrapper.findComponent(RouterLinkStub);
    expect(link.exists()).toBe(true);
    expect(link.props().to).toBe("/wishlist");
  });

  it("should initialize wishlistCount to 0", () => {
    const wrapper: VueWrapper<any> = shallowMount(Header, {
      global: {
        plugins: [
          createTestingPinia({
            initialState: {
              wishlist: {
                wishlist: [],
              },
            },
          }),
        ],
      },
    });

    const wishlistSpan = wrapper.find("span");
    expect(wishlistSpan.exists()).toBe(false);
  });
});
