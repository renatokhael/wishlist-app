import { defineStore } from "pinia";
import type { Product } from "@/api/interface"; // Importando a interface Product

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: [] as Product[], // Tipagem do estado wishlist
  }),
  actions: {
    addProduct(product: Product) {
      this.wishlist.push(product);
    },
    removeProduct(productId: string) {
      this.wishlist = this.wishlist.filter((p) => p.code !== productId);
    },
  },
  getters: {
    wishlistProducts: (state) => state.wishlist as Product[], // Tipagem do retorno do getter
  },
});
