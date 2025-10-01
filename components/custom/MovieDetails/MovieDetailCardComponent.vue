<script setup>
defineProps({
  video: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="flex flex-col items-center">
    <!-- Thumbnail -->
    <div class="relative w-full h-48 md:h-52 group cursor-pointer">
      <img 
        :src="video.thumbnail" 
        alt="video thumbnail"
        class="w-full h-full object-cover rounded-md"
      />

      <!-- Play Button Overlay -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center border border-white group-hover:bg-black/70 transition">
          <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M6 4l12 6-12 6V4z" />
          </svg>
        </div>
      </div>

      <!-- Duration -->
      <span class="absolute bottom-2 left-2 text-white text-sm font-semibold bg-black/70 px-2 py-0.5 rounded">
        {{ video.duration }}
      </span>
    </div>

    <!-- Title -->
    <p class="mt-3 text-sm md:text-base font-semibold text-center text-black dark:text-white">
      {{ video.title }}
    </p>
  </div>
</template>
