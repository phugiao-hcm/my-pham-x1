<template>
  <div class="bg-pink-50 min-h-screen">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Product Grid -->
    <section class="bg-pink-50 py-16">
      <div class="max-w-6xl mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-pink-700 mb-10">
          Sản Phẩm Nổi Bật
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div
            v-for="product in products"
            :key="product.id"
            class="bg-white shadow-md rounded-2xl overflow-hidden transition-transform hover:scale-105"
          >
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-64 object-cover"
            />
            <div class="p-5">
              <h3 class="text-xl font-semibold text-pink-600 mb-2">
                {{ product.name }}
              </h3>
              <p class="text-gray-500 text-sm mb-3">
                {{ product.description }}
              </p>
              <p class="text-lg font-bold text-pink-500">
                {{ product.price.toLocaleString() }}₫
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Slider -->
    <section class="bg-white">
      <FeaturedSlider />
    </section>
  </div>
</template>

<script setup>
import FeaturedSlider from "~/components/FeaturedSlider.vue";
import HeroSection from "~/components/HeroSection.vue";

const products = [
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 350000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/1.png",
  },
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 150000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/2.png",
  },
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 1250000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/3.png",
  },
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 450000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/4.png",
  },
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 120000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/5.png",
  },
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 320000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image: "/images/6.png",
  },
];
</script>
