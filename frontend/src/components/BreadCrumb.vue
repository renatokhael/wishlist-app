<template>
  <div class="breadcrumb">
    <nav>
      <router-link to="/">Home</router-link>
      <span v-if="currentPath !== 'Home'"> / </span>
      <span v-if="currentPath !== 'Home'" class="current">{{
        currentPath
      }}</span>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

// Usando o useRoute para obter informações da rota atual
const route = useRoute();

// Computed para determinar o nome da rota atual
const currentPath = computed(() => {
  switch (route.name) {
    case "productList":
      return "Home";
    case "wishList":
      return "Wishlist";
    default:
      return "Home";
  }
});
</script>

<style scoped>
.breadcrumb {
  font-size: 14px;
  color: #5c2d91;
  border-bottom: 1px solid #e0e0e0;
  margin: 20px 0;
  font-size: 16px;
  text-decoration: none;
}

nav {
  margin: 20px 0;
}

.breadcrumb .current {
  font-weight: bold;
  text-decoration: none;
}
</style>
