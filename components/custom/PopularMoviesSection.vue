<script setup>
import MovieCardComponent from '@/components/custom/MovieCardComponent.vue'
import { ref } from 'vue'

const movies = ref([
  {
    id: 1,
    title: 'The Lion King',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    poster: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758890737/The_Lion_King_Original_Motion_Picture_Soundtrack__282019_29_mfvpsu.png'
  },
  {
    id: 2,
    title: 'Tripple Threat',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    poster: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758891027/triple-threat-movie-poster-md_rmfe5z.webp'
  },
  {
    id: 3,
    title: 'The Last Airbender',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    poster: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758890967/e473452461eece95bfd0fa68ef700012_tzlqil.png'
  },
  {
    id: 4,
    title: 'The Woman King',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    poster: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758891208/MV5BNzM4ODY0NzctZDIyNC00MzE4LWI3NDYtYjIyYTUyZWFmYzJkXkEyXkFqcGc._V1__b0gjwa.jpg'
  }
])
</script>

<template>
  <section class="bg-black text-white py-16 px-4 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-16">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <div class="text-primary text-sm font-medium tracking-wider uppercase mb-4 font-fira">
            POPULAR MOVIES
          </div>
          
          <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight font-fira">
            The Most Popular Movies To Watch In 2022
          </h2>
        </div>
        
        <div class="lg:w-1/3">
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mikeaz veniam, quis nostrud exercitation ullamco laboris.
          </p>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        <movie-card-component
          v-for="movie in movies"
          :key="movie.id"
          :movie="movie"
        />
      </div>
    </div>
  </section>
</template>

