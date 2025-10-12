<script setup>
import GeneralHeroComponent from '~/components/custom/GeneralHeroComponent.vue'
import MovieGridSectionComponent from '~/components/custom/MovieGridSectionComponent.vue'

const heroSectionDetials = {
  text1: 'Most Popular Movies',
  heroTitle: 'Movie Listing',
  imageSrc:
    'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-bar-background.jpg',
  imageAlt: 'Mountain background',
}
</script>

<template>
  <div>
    <general-hero-component :heroSection="heroSectionDetials" />
    <movie-grid-section-component />
  </div>
</template>
