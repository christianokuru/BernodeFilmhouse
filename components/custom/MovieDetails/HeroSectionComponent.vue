<script setup>
import { movies } from '@/lib/movies'

const route = useRoute()
const movie = movies.find((m) => m.slug === route.params.slug)

if (!movie) {
  throw createError({
    statusCode: 404,
    message: 'Movie not found',
  })
}
</script>

<template>
  <section class="h-[calc(100vh-6rem)] w-full overflow-hidden">
    <div class="absolute inset-0">
      <nuxt-img
        src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-bar-background.jpg"
        alt="hero-background"
        class="h-full w-full object-cover"
        loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 flex h-full items-center px-6">
      <div class="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="hidden md:block">
          <nuxt-img
            :src="movie.image"
            :alt="movie.title"
            class="w-full max-w-[22rem] rounded-lg shadow-2xl" />
        </div>

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

          <div class="flex flex-col gap-6">
            <button class="flex items-center gap-3 bg-transparent border-2 border-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 w-fit">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
              WATCH THE TRAILER
            </button>

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
</template>
