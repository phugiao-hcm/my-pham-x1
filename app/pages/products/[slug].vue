<template>
  <div class="p-8">
    <h1 class="text-3xl font-bold">{{ product?.name }}</h1>
    <img :src="product?.image" class="mt-4 w-full max-w-md" />
    <p class="mt-4 text-gray-600">{{ product?.description }}</p>
    <p class="mt-2 text-pink-500 font-bold text-lg">{{ product?.price }}</p>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
const id = parseInt(route.params.id);

const products = [
  {
    name: "Kem Dưỡng Ẩm Ban Đêm",
    image:
      "https://marketplace.canva.com/EAGXkm-nzvU/2/0/1600w/canva-3FOrHNKAiBM.jpg",
    description: "Giữ ẩm chuyên sâu, phù hợp cho mọi loại da.",
    price: "350.000₫",
  },
  {
    name: "Serum Vitamin C",
    image:
      "https://marketplace.canva.com/EAGd9lucSeA/1/0/1600w/canva-z2hiW3pHcYw.jpg",
    description: "Làm sáng da, mờ thâm nám.",
    price: "490.000₫",
  },
  {
    name: "Sữa Rửa Mặt Tạo Bọt",
    image:
      "https://marketplace.canva.com/EAGqnfxyabw/1/0/1600w/canva-3C3nsXC6bVc.jpg",
    description: "Làm sạch nhẹ nhàng, không gây khô da.",
    price: "220.000₫",
  },
];

const product = products[id];
</script>
