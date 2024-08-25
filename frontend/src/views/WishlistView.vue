<template>
  <div>
    <BreadCrumb />

    <div class="grid-container" v-if="wishlistProducts.length > 0">
      <ProductCard
        v-for="product in wishlistProducts"
        :key="product.code"
        :product="product"
      />
    </div>
    <p v-else>Sua lista de desejos está vazia.</p>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWishlistStore } from "../stores/useWishlistStore";
import ProductCard from "../components/ProductCard.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
import type { Product } from "@/api/interface"; // Importando a interface Product

// Acessando a store
const wishlistStore = useWishlistStore();

// Computed para acessar os produtos da wishlist
const wishlistProducts = computed<Product[]>(
  () => wishlistStore.wishlistProducts
);
</script>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
}

@media (max-width: 1024px) {
  .grid-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>
