import { defineStore } from "pinia";

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [],
  }),
  actions: {
    addProduct(product) {
      this.wishlist.push(product);
    },
    removeProduct(productId) {
      this.wishlist = this.wishlist.filter((p) => p.id !== productId);
    },
  },
  getters: {
    wishlistProducts: (state) => state.wishlist,
  },
});
