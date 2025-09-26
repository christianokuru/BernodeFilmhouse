<script setup>
import TestimonialCardComponent from '@/components/custom/TestimonialCardComponent.vue'

const currentSlide = ref(0)

const testimonials = [
  {
    id: 1,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Christine Rose',
    role: 'Customer',
    avatar:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758899817/2596440-black-woman-arms-crossed-and-standing-isolated-on-gray-background-for-confident-profile-or-empowerment.-portrait-of-african-american-female-model-with-serious-face-for-leadership-or-management-fit_400_400_r7hgb9.jpg',
  },
  {
    id: 2,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Katrina Grace',
    role: 'Customer',
    avatar:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758899979/laughing-is-the-best-of-life_ws2h5f.jpg',
  },
  {
    id: 3,
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    name: 'Katrina Grace',
    role: 'Customer',
    avatar:
      'https://res.cloudinary.com/dtuexazs1/image/upload/v1758899980/photo-1652095319417-4bf8a0de1a3d_kbxisi.jpg',
  },
]
</script>

<template>
  <section class="bg-black text-white py-16 px-4 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-12 lg:mb-16">
        <div class="lg:w-1/2 mb-8 lg:mb-0">
          <div class="text-primary text-sm font-medium tracking-wider uppercase mb-4">
            OUR TESTIMONIALS
          </div>

          <h2 class="font-fira text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            What Our Client Says About Our Services
          </h2>
        </div>

        <div class="lg:w-1/3">
          <p class="text-gray-300 text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Mikeaz veniam, quis nostrud exercitation
            ullamco laboris.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
        <testimonial-card-component
          v-for="testimonial in testimonials"
          :key="testimonial.id"
          :testimonial="testimonial" />
      </div>

      <div class="flex justify-center space-x-3">
        <button
          v-for="(dot, index) in 3"
          :key="index"
          :class="[
            'w-3 h-3 rounded-full transition-colors duration-300',
            index === 0 ? 'bg-primary' : 'bg-gray-600 hover:bg-gray-500',
          ]"
          @click="currentSlide = index"></button>
      </div>
    </div>
  </section>
</template>
