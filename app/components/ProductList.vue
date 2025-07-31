<template>
  <section class="products">
    <h2>Sản phẩm nổi bật</h2>
    <div class="grid">
      <ProductCard
        v-for="(item, index) in products"
        :key="index"
        :product="item"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";

const products = [
  { name: "Kem dưỡng da", price: 150000, image: "/cream.jpg" },
  { name: "Son môi tự nhiên", price: 120000, image: "/lipstick.jpg" },
  { name: "Sữa rửa mặt", price: 95000, image: "/cleanser.jpg" },
];
</script>

<style scoped>
.products {
  padding: 40px 20px;
  text-align: center;
}
.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
