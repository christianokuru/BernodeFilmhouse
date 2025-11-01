<script setup>
const props = defineProps({
  image: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
})
</script>

<template>
  <div class="group">
    <div class="overflow-hidden">
      <img 
        :src="image" 
        :alt="alt"
        class="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
        decoding="async"
      />
    </div>
    <div class="mt-4 text-center">
      <h4 class="text-xl font-semibold text-white mb-1">{{ name }}</h4>
      <p class="text-sm text-gray-400 uppercase tracking-wider">{{ role }}</p>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>