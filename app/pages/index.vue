<template>
  <div class="bg-pink-50 min-h-screen">
    <!-- Hero section -->
    <section class="text-center py-12">
      <h1 class="text-4xl font-bold text-pink-600 mb-2">
        Khám phá vẻ đẹp tự nhiên
      </h1>
      <p class="text-gray-600">
        Sản phẩm mỹ phẩm nổi bật giúp bạn tỏa sáng mỗi ngày
      </p>
    </section>

    <!-- Product list -->
    <FeaturedSlider />

    <section class="max-w-6xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            :src="product.image"
            :alt="product.name"
            class="w-full h-56 object-cover"
          />
          <div class="p-4">
            <h2 class="text-xl font-semibold text-pink-700">
              {{ product.name }}
            </h2>
            <p class="text-gray-500 text-sm mb-2">{{ product.description }}</p>
            <div class="text-pink-600 font-bold text-lg">
              {{ product.price.toLocaleString() }}₫
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import FeaturedSlider from "~/components/FeaturedSlider.vue";

const products = [
  {
    id: 1,
    name: "Kem dưỡng trắng da",
    price: 350000,
    description:
      "Chiết xuất từ thiên nhiên, giúp làm sáng và dưỡng ẩm da hiệu quả.",
    image:
      "https://media.hcdn.vn/catalog/category/48_1_img_250x250_8e0796_fit_center.jpg",
  },
  {
    id: 2,
    name: "Son môi lì lâu trôi",
    price: 220000,
    description: "Màu sắc thời thượng, bền màu suốt cả ngày.",
    image:
      "https://media.hcdn.vn/catalog/category/cover-image-category-serum-tinh-chat-250x250_img_250x250_8e0796_fit_center.jpg",
  },
  {
    id: 3,
    name: "Sữa rửa mặt dịu nhẹ",
    price: 180000,
    description: "Làm sạch sâu mà vẫn giữ độ ẩm tự nhiên cho da.",
    image:
      "https://media.hcdn.vn/catalog/category/mat-na-giay-c31_img_250x250_8e0796_fit_center.jpg",
  },
];
</script>
