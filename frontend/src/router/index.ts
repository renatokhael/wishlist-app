import { createRouter, createWebHistory } from "vue-router";
import ProductListView from "../views/ProductListView.vue";
import WishListView from "../views/WishListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "productList",
      component: ProductListView,
    },
    {
      path: "/wishlist",
      name: "wishList",
      component: WishListView,
    },
  ],
});

export default router;
