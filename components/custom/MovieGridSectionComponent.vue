<script setup>
import MovieDisplayCardComponent from '@/components/custom/MovieDisplayCardComponent.vue'
import { movies } from '@/lib/movies'
</script>

<template>
  <section class="pb-16 pt-8 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <movie-display-card-component v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>
