<template>
  <h1>ProductListView</h1>
  <div class="grid-container">
    <ProductCard
      v-for="product in products"
      :key="product.code"
      :title="product.details.name"
      :price="product.priceInCents"
      :image="product.image"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { getData } from "../api/httpInstance";

interface ProductDetails {
  name: string;
  description: string;
}

interface Product {
  code: string;
  name: string;
  available: boolean;
  visible: boolean;
  details: ProductDetails;
  priceInCents: number; // Modificado para number
  salePriceInCents: number; // Modificado para number
  rating: number;
  image: string;
  stockAvailable: boolean;
}

const products = ref<Product[]>([]);

// Função para formatar o preço de centavos para reais

const fetchProducts = async () => {
  try {
    const data: Product[] = await getData("/products");
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
