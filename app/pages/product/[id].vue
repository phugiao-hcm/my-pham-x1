<template>
  <div class="p-6">
    <img :src="product.image" class="w-full max-w-md mx-auto mb-4" />
    <h1 class="text-2xl font-bold mb-2">{{ product.name }}</h1>
    <p class="text-pink-600 text-xl mb-4">{{ product.price }}₫</p>
    <p class="text-gray-700">Chi tiết sản phẩm...</p>
  </div>
</template>

<script setup>
const route = useRoute();

const product = {
  id: route.params.id,
  name: "Sản phẩm #" + route.params.id,
  price: 199000,
  image: "https://via.placeholder.com/300",
};
</script>
