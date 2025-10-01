<script setup>
import { movies } from '@/lib/movies'
import HeroSectionComponent from '@/components/custom/MovieDetails/HeroSectionComponent.vue'
import RatingSectionComponent from '~/components/custom/MovieDetails/RatingSectionComponent.vue'
import MovieVideoSectionComponent from '~/components/custom/MovieDetails/MovieVideoSectionComponent.vue'

const route = useRoute()
const movie = movies.find(m => m.slug === route.params.slug)

// Handle movie not found
if (!movie) {
  throw createError({
    statusCode: 404,
    message: 'Movie not found'
  })
}

</script>

<template>
  <div>
    <hero-section-component />
    <rating-section-component  :movie="movie"/>
    <movie-video-section-component />
  </div>
</template>