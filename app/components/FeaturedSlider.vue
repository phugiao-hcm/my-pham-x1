<template>
  <div class="w-full">
    <swiper
      :slides-per-view="1"
      :loop="true"
      :autoplay="{ delay: 5000 }"
      :pagination="{ clickable: true }"
      class="h-[600px]"
    >
      <swiper-slide
        v-for="(product, index) in products"
        :key="index"
        class="relative w-full h-full"
      >
        <img
          :src="product.image"
          alt=""
          class="w-full h-[500px] object-cover"
        />
        <div
          class="absolute inset-0 bg-opacity-30 flex flex-col justify-center items-center text-white px-4 text-center"
        >
          <h2 class="text-4xl font-bold mb-2">{{ product.name }}</h2>
          <p class="text-lg mb-2">{{ product.description }}</p>
          <p class="text-xl font-semibold text-pink-300">{{ product.price }}</p>
        </div>
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
    image: "https://intphcm.com/data/upload/banner-my-pham.jpg",
    description: "Giữ ẩm chuyên sâu, phù hợp cho mọi loại da.",
    price: "350.000₫",
  },
  {
    name: "Serum Vitamin C",
    image: "https://intphcm.com/data/upload/banner-my-pham-uu-dai.jpg",
    description: "Làm sáng da, mờ thâm nám.",
    price: "490.000₫",
  },
  {
    name: "Sữa Rửa Mặt Tạo Bọt",
    image:
      "https://treobangron.com.vn/wp-content/uploads/2022/11/banner-my-pham-22-2.jpg",
    description: "Làm sạch nhẹ nhàng, không gây khô da.",
    price: "220.000₫",
  },
];
</script>
