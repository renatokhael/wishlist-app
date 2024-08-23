<template>
  <h1>ProductListView</h1>
  <div class="grid-container">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :title="product.title"
      :price="product.price"
      :image="product.image"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { getData } from "../api/httpInstance";

const products = ref([]);

const fetchProducts = async () => {
  try {
    const data = await getData("/products");
    console.log("Products:", data);
    products.value = data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
  }
};

onMounted(() => {
  fetchProducts();
});
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
