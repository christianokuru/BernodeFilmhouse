<script setup>
import { movies } from '@/lib/movies'
import HeroSectionComponent from '@/components/custom/MovieDetails/HeroSectionComponent.vue'
import RatingSectionComponent from '~/components/custom/MovieDetails/RatingSectionComponent.vue'

const route = useRoute()
const movie = movies.find(m => m.slug === route.params.slug)

// Handle movie not found
if (!movie) {
  throw createError({
    statusCode: 404,
    message: 'Movie not found'
  })
}

// Format the release date
const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  })
}
</script>

<template>
  <div>
    <hero-section-component />
    <rating-section-component  :movie="movie"/>
  </div>
</template>