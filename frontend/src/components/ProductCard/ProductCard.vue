<template>
  <div class="product-card">
    <img :src="product.image" alt="Product image" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.price }}</p>
    <button @click="toggleWishlist">
      {{ isInWishlist ? "Remover da Wishlist" : "Adicionar à Wishlist" }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWishlistStore } from "@/stores/wishlist";
import type { Product } from "@/types";
import "./ProductCard.scss";

defineProps<{ product: Product }>();

const wishlistStore = useWishlistStore();

const isInWishlist = computed(() =>
  wishlistStore.items.some((item) => item.id === props.product.id)
);

function toggleWishlist() {
  if (isInWishlist.value) {
    wishlistStore.remove(props.product.id);
  } else {
    wishlistStore.add(props.product);
  }
}
</script>
