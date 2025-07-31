<template>
  <div class="w-full">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 3000 }"
      :pagination="{ clickable: true }"
      class="h-screen"
    >
      <swiper-slide
        v-for="(product, index) in products"
        :key="index"
        class="relative w-full h-full"
      >
        <img
          :src="product.image"
          alt=""
          class="w-full h-full object-cover object-center"
        />
        <!-- <div
          class="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white text-center px-6"
        >
          <h2 class="text-5xl md:text-7xl font-semibold mb-4 drop-shadow-lg">
            {{ product.name }}
          </h2>
          <p class="text-xl md:text-2xl mb-6 max-w-2xl drop-shadow-md">
            {{ product.description }}
          </p>
          <button
            class="bg-white text-black text-lg px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            Mua ngay
          </button>
        </div> -->
      </swiper-slide>
    </swiper>
  </div>
</template>


<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

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
</script>
