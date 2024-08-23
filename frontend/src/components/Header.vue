<template>
  <header class="header">
    <div class="logo">
      <img src="@/assets/logo.svg" alt="Logo" />
    </div>
    <nav class="nav">
      <router-link to="/wishlist" class="wishlist-link">
        <img src="@/assets/icons/heart-icon.svg" width="22" />
        Wishlist <span v-if="wishlistCount > 0">({{ wishlistCount }})</span>
      </router-link>
      <div class="dropdown">
        <img src="@/assets/icons/person-icon.svg" width="36" />
        <ul class="dropdown-menu">
          <li><a href="#">Entrar</a></li>
          <li><a href="#">Minha Conta</a></li>
          <li><a href="#">Endereços</a></li>
          <li><a href="#">Minha Netshoes</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWishlistStore } from "../stores/useWishlistStore"; // Importando a store

// Acessando a store
const wishlistStore = useWishlistStore();

// Computed para contar o número de produtos na wishlist
const wishlistCount = computed(() => wishlistStore.wishlist.length);
</script>
