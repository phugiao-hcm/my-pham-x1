<template>
  <div class="border p-4 rounded shadow hover:shadow-md transition">
    <img :src="product.image" class="w-full h-48 object-cover rounded" />
    <h2 class="mt-2 text-lg font-semibold">{{ product.name }}</h2>
    <p class="text-pink-600 font-bold">{{ product.price }}₫</p>
    <NuxtLink
      :to="`/product/${product.id}`"
      class="text-blue-500 hover:underline"
      >Xem chi tiết</NuxtLink
    >
  </div>
</template>

<script setup>
defineProps({ product: Object });
</script>
