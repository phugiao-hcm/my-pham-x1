<template>
  <div class="flex items-center gap-1">
    <span v-for="index in 5" :key="index" class="text-yellow-400 text-xl">
      <span v-if="index <= rating">★</span>
      <span v-else>☆</span>
    </span>
  </div>
</template>

<script setup>
defineProps({
  rating: {
    type: Number,
    required: true,
  },
});
</script>
