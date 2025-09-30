<script setup>
import MovieDisplayCardComponent from '@/components/custom/MovieDisplayCardComponent.vue'
import { ref } from 'vue'

const movies = ref([
  {
    id: 1,
    title: 'Darkness Lisa',
    genres: 'Adventure, Film-Noir, Thriller',
    image:
      'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-11-600x885.jpg',
  },
  {
    id: 2,
    title: 'Star of Stage',
    genres: 'Biography, Music, Musical',
    image:
      'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-10-600x885.jpg',
  },
  {
    id: 3,
    title: "Michael's Life",
    genres: 'Adventure, Family, Mystery',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-9-600x885.jpg',
  },
  {
    id: 4,
    title: 'The Pursuit of Dreams',
    genres: 'Family, Fantasy, Musical',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-8-370x545.jpg',
  },
  {
    id: 5,
    title: 'Historical Drama',
    genres: 'Drama, History, Romance',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-2-370x545.jpg',
  },
  {
    id: 6,
    title: 'Mystery Night',
    genres: 'Crime, Mystery, Thriller',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-7-370x545.jpg',
  },
  {
    id: 7,
    title: 'Elegant Evening',
    genres: 'Drama, Romance',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-6-370x545.jpg',
  },
  {
    id: 8,
    title: 'Dark Knight',
    genres: 'Action, Adventure, Fantasy',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-5-370x545.jpg',
  },
  {
    id: 9,
    title: 'Space Adventure',
    genres: 'Action, Sci-Fi, Thriller',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-4-370x545.jpg',
  },
  {
    id: 10,
    title: 'Love Story',
    genres: 'Drama, Romance',
    image:
      '	https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-3-370x545.jpg',
  },
  {
    id: 11,
    title: 'Action Hero',
    genres: 'Action, Adventure',
    image:
      'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/01/title-poster-1-370x545.jpg',
  },
])
</script>

<template>
  <section class="bg-black pb-16 pt-8 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <movie-display-card-component v-for="movie in movies" :key="movie.id" :movie="movie" />
      </div>
    </div>
  </section>
</template>
