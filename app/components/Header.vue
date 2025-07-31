<template>
  <header
    class="fixed top-0 left-0 right-0 z-50 bg-black text-white flex justify-between items-center px-6 py-4 shadow-lg backdrop-blur-md"
  >
    <!-- Logo -->
    <NuxtLink
      to="/"
      class="text-2xl font-semibold tracking-wide hover:text-gray-300 transition"
    >
      <!-- <img
        src="/images/logo-thuong-hieu.png"
        alt="Mỹ Phẩm Xinh"
        class="object-cover"
        style="width: 100px"
      /> -->
      <div class="text-white text-2xl sm:text-3xl font-bold tracking-wide">
        <span class="text-primary">Mỹ phẩm</span>Xinh
      </div>
    </NuxtLink>

    <!-- Navigation -->
    <nav class="flex items-center gap-6 text-sm font-medium">
      <NuxtLink to="/products" class="hover:text-pink-400 transition"
        >Sản phẩm</NuxtLink
      >
      <NuxtLink to="/about" class="hover:text-pink-400 transition"
        >Về chúng tôi</NuxtLink
      >

      <!-- Cart Icon with badge -->
      <NuxtLink to="/cart" class="relative hover:text-pink-400 transition">
        🛒
        <span
          class="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
        >
          {{ cartCount }}
        </span>
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup>
const cartCount = 3; // sau này bạn có thể lấy từ Pinia hoặc Vuex
</script>

<style scoped>
/* Đảm bảo header không bị che mất nội dung */
body {
  padding-top: 72px;
}
</style>
