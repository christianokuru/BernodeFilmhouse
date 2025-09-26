<script setup>
const props = defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="group cursor-pointer">
    <div class="relative mb-4 overflow-hidden rounded-lg">
      <nuxt-img
        :src="movie.poster"
        :alt="movie.title"
        class="w-full h-64 md:h-80 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105"
        loading="lazy"
        provider="cloudinary" />

      <div
        class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
    </div>

    <div class="space-y-2">
      <h3 class="text-white text-xl font-bold font-fira">{{ movie.title }}</h3>
      <p class="text-gray-400 text-sm leading-relaxed">{{ movie.description }}</p>
    </div>
  </div>
</template>
