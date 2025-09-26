<script setup>
import CategoryCardComponent from '@/components/custom/CategoryCardComponent.vue'
import family from '@/assets/images/family-movies.jpg'

const images = ref([
  {
    image: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758014892/family-movies_du4gib.jpg',
    altName: 'family-movies',
    categoryName: 'Family Movies',
  },
  {
    image:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015658/film-industry-2021-08-29-12-40-39-utc_jqckof.jpg',
    altName: 'family-movies',
    categoryName: 'Teen Movies',
  },
  {
    image:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015692/content-creator-blogger-vlogger-setting-up-recor-2021-08-30-23-40-27-utc_rqvczc.jpg',
    altName: 'family-movies',
    categoryName: 'Kids Movies',
  },
  {
    image:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015720/beautiful-girl-prepares-delicious-healthy-food-and-2021-09-23-20-25-58-utc_p2hqld.jpg',
    altName: 'family-movies',
    categoryName: 'Sports Videos',
  },
])
</script>

<template>
  <div class="text-white max-w-[69rem] mx-auto">
    <div class="grid grid-cols-4 gap-x-5">
      <category-card-component v-for="(item, index) in images" :key="index" v-bind="item" />
    </div>
  </div>
</template>
