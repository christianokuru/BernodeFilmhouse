<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    title: 'Creative Design',
    description: 'Innovative solutions for modern challenges',
  },
  {
    image: 'https://images.unsplash.com/photo-1492619375914-88005aa9e8fb?w=800',
    title: 'Film Production',
    description: 'Bringing stories to life through cinema',
  },
  {
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
    title: 'Digital Workspace',
    description: 'Modern tools for creative professionals',
  },
  {
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800',
    title: 'Team Collaboration',
    description: 'Working together to create magic',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    title: 'Strategic Planning',
    description: 'Planning for success and innovation',
  },
  {
    image: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800',
    title: 'Digital Workspace',
    description: 'Modern tools for creative professionals',
  },
  {
    image: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800',
    title: 'Team Collaboration',
    description: 'Working together to create magic',
  },
  {
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
    title: 'Strategic Planning',
    description: 'Planning for success and innovation',
  },
]

const swiperRef = ref(null)
let swiperInstance = null

onMounted(async () => {
  const Swiper = (await import('swiper')).default
  const { Navigation, Pagination } = await import('swiper/modules')

  swiperInstance = new Swiper(swiperRef.value, {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 0,
    loop: false,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      640: { slidesPerView: 1.3, spaceBetween: 12 },
      768: { slidesPerView: 2.3, spaceBetween: 18 },
      1024: { slidesPerView: 4.1, spaceBetween: 26 },
      1280: { slidesPerView: 3.6, spaceBetween: 30 },
    },
  })

  swiperInstance.slideTo(2, 0)
})

onBeforeUnmount(() => {
  if (swiperInstance) {
    swiperInstance.destroy()
    swiperInstance = null
  }
})
</script>

<template>
  <section class="bg-black py-20 px-0">
    <div class="relative">
      <div ref="swiperRef" class="swiper">
        <div class="swiper-wrapper">
          <div
            v-for="(slide, index) in slides"
            :key="index"
            class="swiper-slide"
          >
            <div class="relative h-80 overflow-hidden group cursor-pointer rounded-none">
              <img
                :src="slide.image"
                :alt="slide.title"
                class="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div
                class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center"
              >
                <div
                  class="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-6"
                >
                  <h3 class="text-white text-2xl font-bold mb-2">
                    {{ slide.title }}
                  </h3>
                  <p class="text-gray-300 text-sm">
                    {{ slide.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between mt-24 px-10">
        <button
          class="swiper-button-prev !static !w-10 !h-10 !bg-white/40 !rounded-full !text-black after:!text-xl after:!font-bold hover:!bg-gray-200 transition-colors"
        ></button>

        <div class="swiper-pagination flex justify-center"></div>

        <button
          class="swiper-button-next !static !w-10 !h-10 !bg-white/40 !rounded-full !text-black after:!text-xl after:!font-bold hover:!bg-gray-200 transition-colors"
        ></button>
      </div>
    </div>
  </section>
</template>

<style>
.swiper-pagination-bullet {
  background: red !important;
  opacity: 0.3 !important;
  width: 10px !important;
  height: 10px !important;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.swiper-pagination-bullet-active {
  background: red !important;
  opacity: 1 !important;
  transform: scale(1.2);
}
</style>
