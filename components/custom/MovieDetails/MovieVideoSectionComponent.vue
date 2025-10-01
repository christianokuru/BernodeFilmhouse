<script setup>
import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { ref } from "vue"
import MovieDetailCardComponent from "@/components/custom/MovieDetails/MovieDetailCardComponent.vue"

const videos = [
  {
    id: 1,
    title: "Official Teaser",
    duration: "00:03:37",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-11-600x885.jpg"
  },
  {
    id: 2,
    title: "Best Scenes in The Film",
    duration: "00:02:00",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-10-600x885.jpg"
  },
  {
    id: 3,
    title: "Roles That John Doe Turned Down",
    duration: "00:02:17",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-9-600x885.jpg"
  },
  {
    id: 4,
    title: "A Guide to the Films of Sonia Williams",
    duration: "00:14:22",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-8-370x545.jpg"
  },
  {
    id: 5,
    title: "Roles That John Doe Turned Down",
    duration: "00:02:17",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-2-370x545.jpg"
  },
  {
    id: 6,
    title: "Roles That John Doe Turned Down",
    duration: "00:02:17",
    thumbnail: "https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-poster-9-600x885.jpg"
  },
]

const swiperRef = ref(null)

const slideNext = () => {
  if (swiperRef.value) swiperRef.value.slideNext()
}
const slidePrev = () => {
  if (swiperRef.value) swiperRef.value.slidePrev()
}
</script>

<template>
  <section class="max-w-6xl mx-auto py-10 text-white">
    <Swiper
      :modules="[Pagination]"
      :slides-per-view="1"
      :space-between="20"
      :breakpoints="{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 4 }
      }"
      :pagination="{ el: '.swiper-pagination', clickable: true }"
      class="pb-28"
      @swiper="swiperRef = $event"
    >
      <SwiperSlide v-for="video in videos" :key="video.id">
        <MovieDetailCardComponent :video="video" />
      </SwiperSlide>
    </Swiper>

    <div class="border-t border-border/40 mt-6"></div>

    <div class="flex justify-between items-center mt-4 px-4">
      <button
        @click="slidePrev"
        class="p-2 rounded-full hover:bg-white/10 bg-white/20 transition"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <div class="swiper-pagination gap-2 !relative flex justify-center"></div>

      <button
        @click="slideNext"
        class="p-2 rounded-full hover:bg-white/10 bg-white/20 transition"
      >
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  </section>
</template>

<style scoped>
:deep(.swiper-pagination-bullet) {
  background: rgba(255, 0, 0, 0.4) !important;
  opacity: 1 !important;
}

:deep(.swiper-pagination-bullet-active) {
  background: red !important;
}
</style>
