<template>
  <section
    class="relative bg-black text-white min-h-screen flex flex-col justify-center items-center text-center px-4 py-20 md:py-32 overflow-hidden"
  >
    <!-- Video background -->
    <video
      autoplay
      muted
      loop
      playsinline
      class="absolute top-0 left-0 w-full h-full object-cover z-0"
    >
      <source src="/videos/hero_ads.mp4" type="video/mp4" />
      Trình duyệt của bạn không hỗ trợ video.
    </video>

    <!-- Overlay -->
    <div class="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>

    <!-- Content -->
    <div class="relative z-20 max-w-4xl px-4">
      <h1
        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight"
      >
        Khám Phá Vẻ Đẹp Tự Nhiên
      </h1>
      <p class="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mb-8">
        Sản phẩm chăm sóc da cao cấp – Được tạo nên từ những thành phần thiên
        nhiên tinh túy.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <NuxtLink
          to="/products"
          class="bg-white text-black px-6 py-3 rounded-full text-lg font-medium hover:bg-gray-300 transition"
        >
          Khám phá sản phẩm
        </NuxtLink>
        <NuxtLink
          to="/about"
          class="border border-white text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white hover:text-black transition"
        >
          Tìm hiểu thêm
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
