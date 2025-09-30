<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <nuxt-link
    :to="`/movies/${movie.id}`"
    class="group relative block overflow-hidden rounded-lg aspect-[3/4]">
    <nuxt-img
      :src="movie.image"
      :alt="movie.title"
      class="h-full w-full object-cover"
      loading="lazy" />

    <div
      class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-100 group-hover:opacity-90 transition-opacity duration-300"></div>

    <div class="absolute bottom-0 left-0 right-0 p-6 text-white">
      <h3
        class="text-2xl font-bold font-fira mb-2 group-hover:text-primary transition-colors duration-300">
        {{ movie.title }}
      </h3>
      <p class="text-sm text-white/60 font-sans">
        {{ movie.genres }}
      </p>
    </div>
  </nuxt-link>
</template>
