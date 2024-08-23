<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <button
        :class="[
          'wishlist-button',
          { 'wishlist-button--active': isAddedToWishlist },
        ]"
        @click="addToWishlist"
      >
        <img src="@/assets/icons/heart-icon.svg" width="20" />
      </button>
    </div>
    <div class="product-details">
      <h3 class="product-title">{{ title }}</h3>
      <div class="product-rating">
        <span>★★★★★</span>
        <span class="rating-count">50</span>
      </div>
      <div class="product-pricing">
        <span class="original-price">R$ 299,00</span>
        <span class="discounted-price">R$ {{ formatPrice(price) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { defineProps } from "vue";
import { useWishlistStore } from "../stores/useWishlistStore"; // Importando a store
import { formatPrice } from "@/utils/formatPrice";

// Definindo as props
const props = defineProps({
  id: Number,
  title: String,
  price: { type: Number, default: 0 },
  image: String,
});

const wishlistStore = useWishlistStore();

const isAddedToWishlist = ref(false);

const addToWishlist = () => {
  wishlistStore.addProduct({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
  });
  isAddedToWishlist.value = true;
};
</script>
