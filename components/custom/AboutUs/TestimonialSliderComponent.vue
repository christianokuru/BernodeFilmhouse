<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const testimonials = [
  {
    id: 1,
    text: "Noxe has created a masterpiece with their latest movie. The attention to detail, stunning visuals, and captivating storyline had me on the edge of my seat throughout. It's no wonder they continue to win awards for their exceptional filmmaking skills.",
    name: "Harley Finkelstein"
  },
  {
    id: 2,
    text: "I had the pleasure of working with Noxe on a film project, and I can say with complete confidence that their team is incredibly talented and passionate about what they do. They went above and beyond to ensure that every aspect of the project was executed flawlessly.",
    name: "Ada Johnson"
  },
  {
    id: 3,
    text: "I had the pleasure of working with Noxe on a recent project and was blown away by their professionalism and creativity. They truly go above and beyond to bring their vision to life and create a final product that exceeds expectations. I highly recommend them for any future projects.",
    name: "Steven Butler"
  }
]

const currentSlide = ref(0)
let autoplayInterval = null

const goToSlide = (index) => {
  currentSlide.value = index
  resetAutoplay()
}

const nextSlide = () => {
  if (currentSlide.value < testimonials.length - 1) {
    currentSlide.value++
    resetAutoplay()
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
    resetAutoplay()
  }
}

const startAutoplay = () => {
  autoplayInterval = setInterval(() => {
    if (currentSlide.value < testimonials.length - 1) {
      currentSlide.value++
    } else {
      currentSlide.value = 0
    }
  }, 8000)
}

const resetAutoplay = () => {
  clearInterval(autoplayInterval)
  startAutoplay()
}

onMounted(() => {
  startAutoplay()
})

onUnmounted(() => {
  clearInterval(autoplayInterval)
})
</script>

<template>
  <div class="w-full py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="relative overflow-hidden">
        <!-- Slider Wrapper -->
        <div 
          class="flex transition-transform duration-[1500ms] ease-in-out"
          :style="{ transform: `translate3d(-${currentSlide * 100}%, 0px, 0px)` }"
        >
          <div 
            v-for="testimonial in testimonials"
            :key="testimonial.id"
            class="w-full flex-shrink-0"
          >
            <div class="px-8 md:px-16">
              <div class="text-center">
                <p class="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
                  {{ testimonial.text }}
                </p>
                <div class="text-white font-semibold">
                  <span>{{ testimonial.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Controls -->
        <div class="flex items-center justify-center gap-8 mt-12">
          <!-- Previous Button -->
          <button
            @click="prevSlide"
            :disabled="currentSlide === 0"
            :class="[
              'w-12 h-12 flex items-center justify-center border rounded-full border-gray-600 text-white transition-all duration-300',
              currentSlide === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/30 hover:text-black cursor-pointer'
            ]"
            aria-label="Previous slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <!-- Pagination -->
          <div class="flex items-center gap-4">
            <button
              v-for="(testimonial, index) in testimonials"
              :key="testimonial.id"
              @click="goToSlide(index)"
              :class="[
                'w-10 h-10 flex items-center justify-center text-sm transition-all duration-300',
                currentSlide === index 
                  ? 'bg-white rounded-full text-black font-bold' 
                  : 'text-gray-400 hover:text-white'
              ]"
              :aria-label="`Go to slide ${index + 1}`"
            >
              {{ index + 1 }}
            </button>
          </div>

          <!-- Next Button -->
          <button
            @click="nextSlide"
            :disabled="currentSlide === testimonials.length - 1"
            :class="[
              'w-12 h-12 flex items-center justify-center border rounded-full border-gray-600 text-white transition-all duration-300',
              currentSlide === testimonials.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/30 hover:text-black cursor-pointer'
            ]"
            aria-label="Next slide"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

