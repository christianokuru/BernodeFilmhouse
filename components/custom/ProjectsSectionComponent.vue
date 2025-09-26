<script setup>
import { ref } from 'vue'

const projects = ref([
  {
    id: 1,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015658/film-industry-2021-08-29-12-40-39-utc_jqckof.jpg',
    alt: 'Video Editing',
  },
  {
    id: 2,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015692/content-creator-blogger-vlogger-setting-up-recor-2021-08-30-23-40-27-utc_rqvczc.jpg',
    alt: 'Cooking Content',
  },
  {
    id: 3,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015720/beautiful-girl-prepares-delicious-healthy-food-and-2021-09-23-20-25-58-utc_p2hqld.jpg',
    alt: 'Couple Working',
  },
  {
    id: 4,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758898164/The_20Future-min_haskqz.webp',
    alt: 'Outdoor Group',
  },
  {
    id: 5,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758898091/gP8kiumBPpJmQv6SMieXiX1tDetx43VwFfO1P4Ca_m5jezj.jpg',
    alt: 'Content Creator',
  },
  {
    id: 6,
    src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758898112/Private-Black-Female-Photographers-and-Content-Creators-You-Should-Work-With-in-2022_tfpeca.jpg',
    alt: 'Photographer',
  },
])
</script>

<template>
  <section class="bg-black text-white py-16">
    <div class="max-w-6xl mx-auto text-center mb-12">
      <h2 class="text-primary font-bold uppercase">Our Work</h2>
      <h1 class="text-4xl md:text-5xl font-extrabold font-fira">Featured Projects</h1>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
      <div v-for="project in projects" :key="project.id" class="overflow-hidden rounded-lg">
        <nuxt-img
          provider="cloudinary"
          :src="project.src"
          :alt="project.alt"
          format="webp"
          sizes="(max-width: 768px) 100vw, 33vw"
          loading="lazy"
          class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
      </div>
    </div>
  </section>
</template>
