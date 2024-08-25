<template>
  <div>
    <BreadCrumb />
    <div class="grid-container">
      <ProductCard
        v-for="product in products"
        :key="product.code"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import ProductCard from "../components/ProductCard.vue";
import { getData } from "../api/httpInstance";
import BreadCrumb from "@/components/BreadCrumb.vue";
import type { Product } from "@/api/interface"; // Importando a interface Product

const products = ref<Product[]>([]);

const fetchProducts = async () => {
  try {
    const data: Product[] = await getData("/products");

    products.value = data;
  } catch (error) {
    console.error("Erro ao buscar os produtos:", error);
  }
};

onMounted(() => {
  fetchProducts();
});
</script>
