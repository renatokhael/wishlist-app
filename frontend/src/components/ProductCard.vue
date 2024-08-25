<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="product.image" :alt="product.name" class="product-image" />
      <button
        :class="[
          'wishlist-button',
          { 'wishlist-button--active': isAddedToWishlist },
        ]"
        @click="toggleWishlist"
      >
        <img src="@/assets/icons/heart-icon.svg" width="20" />
      </button>
    </div>
    <div class="product-details">
      <h3 class="product-title">{{ product.name }}</h3>
      <div class="product-rating">
        <span>★★★★★</span>
        <span class="rating-count">{{ product.rating }}</span>
      </div>
      <div class="product-pricing">
        <span class="original-price"
          >R$ {{ formatPrice(product.priceInCents) }}</span
        >
        <span class="discounted-price"
          >R$ {{ formatPrice(product.salePriceInCents) }}</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { useWishlistStore } from "@/stores/useWishlistStore";
import { formatPrice } from "@/utils/formatPrice";
import type { Product } from "@/api/interface";

const props = defineProps<{
  product: Product;
}>();

const wishlistStore = useWishlistStore();

const isAddedToWishlist = ref(
  wishlistStore.wishlist.some((item) => item.code === props.product.code)
);

const toggleWishlist = () => {
  if (isAddedToWishlist.value) {
    wishlistStore.removeProduct(props.product.code);
  } else {
    wishlistStore.addProduct(props.product);
  }
  isAddedToWishlist.value = !isAddedToWishlist.value;
};
</script>
