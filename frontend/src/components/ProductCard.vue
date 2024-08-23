<template>
  <div class="product-card">
    <div class="image-container">
      <img :src="image" :alt="title" class="product-image" />
      <button class="wishlist-button" @click="addToWishlist">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          class="bi bi-heart"
          viewBox="0 0 16 16"
        >
          <path
            d="M8 2.748-.717-3.737C5.6.281 8 2.748 8 2.748zm4.002-.781A3.464 3.464 0 0 1 8 1c-1.14 0-2.216.418-3.002 1.248l-.717.737 3.72 4.24 3.72-4.24-.717-.737z"
          />
          <path
            d="M8 15C-7.333 4.868 3.279-3.04 7.824 1.143 12.368-3.04 23.333 4.868 8 15z"
          />
        </svg>
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
        <span class="discounted-price">R$ {{ price.toFixed(2) }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import { useWishlistStore } from "../stores/useWishlistStore"; // Importando a store

// Definindo as props
const props = defineProps({
  id: Number,
  title: String,
  price: Number,
  image: String,
});

// Inicializando a store
const wishlistStore = useWishlistStore();

// Função para adicionar o produto ao wishlist
const addToWishlist = () => {
  wishlistStore.addProduct({
    id: props.id,
    title: props.title,
    price: props.price,
    image: props.image,
  });
};
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
}

.product-card:hover {
  transform: translateY(-5px);
}

.image-container {
  position: relative;
  flex-shrink: 0;
}

.product-image {
  width: 100%;
  height: auto;
  display: block;
}

.wishlist-button {
  position: absolute;
  top: 8px;
  right: 8px;
  background: none;
  border: none;
  cursor: pointer;
}

.wishlist-button svg {
  fill: #888;
}

.product-details {
  flex-grow: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-title {
  font-size: 14px;
  margin: 0 0 8px;
  color: #333;
}

.product-rating {
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #f0c14b;
  margin-bottom: 8px;
}

.rating-count {
  margin-left: 4px;
  font-size: 12px;
  color: #555;
}

.product-pricing {
  display: flex;
  flex-direction: column;
}

.original-price {
  font-size: 12px;
  text-decoration: line-through;
  color: #888;
}

.discounted-price {
  font-size: 16px;
  font-weight: bold;
  color: #b12704;
}
</style>
