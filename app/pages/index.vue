<template>
  <section class="p-6">
    <h1 class="text-2xl font-bold mb-6">Sản phẩm nổi bật</h1>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "~/components/ProductCard.vue";

const products = [
  {
    id: 1,
    name: "Son Dưỡng Môi",
    price: 120000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Kem Chống Nắng",
    price: 150000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Sữa Rửa Mặt",
    price: 100000,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 4,
    name: "Toner Dưỡng Da",
    price: 200000,
    image: "https://via.placeholder.com/300",
  },
];
</script>
