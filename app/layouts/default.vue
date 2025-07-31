<template>
  <div>
    <Navbar />
    <main class="pt-16 pb-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";
</script>

<style scoped>
main {
  min-height: calc(100vh - 160px); /* Giảm chiều cao footer + header */
}
</style>
