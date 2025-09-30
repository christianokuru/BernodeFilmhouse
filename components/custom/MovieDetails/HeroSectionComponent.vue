<script setup>
import { movies } from '@/lib/movies'

const route = useRoute()
const movie = movies.find((m) => m.slug === route.params.slug)

// Handle movie not found
if (!movie) {
  throw createError({
    statusCode: 404,
    message: 'Movie not found',
  })
}
</script>

<template>
  <div class="bg-black min-h-screen text-white">
    <!-- Hero Section with Movie Details -->
    <section class="h-screen w-full overflow-hidden">
      <!-- Background Image with Overlay -->
      <div class="absolute inset-0">
        <nuxt-img
          :src="movie.image"
          :alt="movie.title"
          class="h-full w-full object-cover"
          loading="lazy" />
        <!-- Dark Overlay -->
        <div class="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 flex h-full items-center px-6">
        <div class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Movie Poster -->
          <div class="hidden md:block">
            <nuxt-img
              :src="movie.image"
              :alt="movie.title"
              class="w-full max-w-md rounded-lg shadow-2xl" />
          </div>

          <!-- Movie Info -->
          <div class="text-white">
            <p class="text-lg font-semibold mb-4 text-gray-300">
              {{ new Date(movie.releaseDate).getFullYear() }}
            </p>

            <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              {{ movie.title }}
            </h1>

            <p class="text-lg text-gray-300 leading-relaxed mb-8 max-w-2xl">
              {{ movie.description }}
            </p>

            <!-- Watch Trailer Button & Meta Info -->
            <div class="flex flex-col gap-6">
              <div class="flex items-center">
                <svg
                  xmlns="https://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-play">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span class="ml-2">Watch Trailer</span>
              </div>

              <div class="flex flex-wrap items-center gap-3 text-sm md:text-base text-gray-300">
                <span class="font-semibold">{{ movie.duration }}</span>
                <span>•</span>
                <span>{{ movie.genres }}</span>
                <span>•</span>
                <span>{{
                  new Date(movie.releaseDate).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Content Section (Optional) -->
    <section class="max-w-6xl mx-auto px-6 py-16">
      <!-- You can add cast, crew, reviews, etc. here -->
    </section>
  </div>
</template>
