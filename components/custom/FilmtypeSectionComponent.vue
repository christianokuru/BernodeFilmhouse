<script setup>
import FilmtypeCardComponent from '@/components/custom/FilmtypeCardComponent.vue'
import { ref } from 'vue'

const filmTypes = ref([
  {
    id: 1,
    title: 'Action',
    movieCount: '1,300+ Movies',
    icon: 'action',
  },
  {
    id: 2,
    title: 'Fantasy',
    movieCount: '1,100+ Movies',
    icon: 'fantasy',
  },
  {
    id: 3,
    title: 'Comedy',
    movieCount: '1,000+ Movies',
    icon: 'comedy',
  },
  {
    id: 4,
    title: 'Drama',
    movieCount: '1,500+ Movies',
    icon: 'drama',
  },
  {
    id: 5,
    title: 'Mystery',
    movieCount: '500+ Movies',
    icon: 'mystery',
  },
  {
    id: 6,
    title: 'Romance',
    movieCount: '900+ Movies',
    icon: 'romance',
  },
  {
    id: 7,
    title: 'Horror',
    movieCount: '750+ Movies',
    icon: 'horror',
  },
  {
    id: 8,
    title: 'Thriller',
    movieCount: '500+ Movies',
    icon: 'thriller',
  },
])
</script>

<template>
  <section class="bg-black text-white py-16 px-4 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-16">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <div class="text-primary font-semibold font-fira text-sm tracking-wider uppercase mb-4">
            TYPE OF FILMS
          </div>

          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-fira">
            Choose The Type Of Film You Liked
          </h2>
        </div>

        <div class="lg:w-1/3">
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Mikeaz veniam, quis nostrud exercitation
            ullamco laboris.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        <filmtype-card-component
          v-for="filmType in filmTypes"
          :key="filmType.id"
          :title="filmType.title"
          :movie-count="filmType.movieCount"
          :icon="filmType.icon" />
      </div>
    </div>
  </section>
</template>
