import { defineStore } from "pinia";
import type { Product } from "@/api/interface";

// Função para carregar a wishlist do LocalStorage
function loadWishlistFromLocalStorage(): Product[] {
  const storedWishlist = localStorage.getItem("wishlist");
  return storedWishlist ? JSON.parse(storedWishlist) : [];
}

function saveWishlistToLocalStorage(wishlist: Product[]) {
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

export const useWishlistStore = defineStore("wishlist", {
  state: () => ({
    wishlist: loadWishlistFromLocalStorage() as Product[],
  }),
  actions: {
    addProduct(product: Product) {
      // Verifica se o produto já está na wishlist
      if (!this.wishlist.some((p) => p.code === product.code)) {
        this.wishlist.push(product);
        saveWishlistToLocalStorage(this.wishlist);
      }
    },
    removeProduct(productId: string) {
      this.wishlist = this.wishlist.filter((p) => p.code !== productId);
      saveWishlistToLocalStorage(this.wishlist);
    },
  },
  getters: {
    wishlistProducts: (state) => state.wishlist as Product[],
  },
});
