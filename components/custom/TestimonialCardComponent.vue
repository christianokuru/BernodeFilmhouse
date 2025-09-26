<script setup>
const props = defineProps({
  testimonial: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <div class="bg-gray-900 border border-gray-800 rounded-lg p-8 text-center">
    <div class="flex justify-center mb-6">
      <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
      </svg>
    </div>

    <div class="mb-8">
      <p class="text-gray-300 text-base leading-relaxed">
        {{ testimonial.content }}
      </p>
    </div>

    <div class="flex items-center justify-center space-x-4">
      <div class="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <nuxt-img
          :src="testimonial.avatar"
          :alt="testimonial.name"
          class="w-full h-full object-cover"
          loading="lazy"
          provider="cloudinary" />
      </div>

      <div class="text-left">
        <h4 class="text-white font-semibold text-lg">{{ testimonial.name }}</h4>
        <p class="text-primary text-sm font-medium">{{ testimonial.role }}</p>
      </div>
    </div>
  </div>
</template>
