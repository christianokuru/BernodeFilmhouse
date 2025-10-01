<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<template>
    <section class="bg-whit py-8 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
          <!-- Rating Section -->
          <div class="flex flex-col items-center md:items-start border-r border-gray-200 pr-6">
            <!-- Star Rating Display -->
            <div class="flex items-center gap-1 mb-2">
              <svg 
                v-for="i in 10" 
                :key="i"
                class="w-4 h-4"
                :class="i <= Math.floor(movie.rating) ? 'text-yellow-400' : 'text-gray-300'"
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <div class="text-gray-600 text-sm">
              {{ movie.rating }} / 4
            </div>
          </div>
  
          <!-- IMDb Rating -->
          <div class="flex flex-col items-center md:items-start border-r border-gray-200 pr-6">
            <div class="text-5xl font-bold text-gray-900 mb-1">
              {{ movie.rating }}
            </div>
            <div class="text-sm text-gray-600 font-medium">
              IMDb
            </div>
          </div>
  
          <!-- Network -->
          <div class="flex flex-col items-center md:items-start border-r border-gray-200 pr-6">
            <div class="text-sm text-gray-500 mb-1">Network</div>
            <div class="text-base font-semibold text-gray-900">
              {{ movie.network || 'FX' }}
            </div>
          </div>
  
          <!-- Status -->
          <div class="flex flex-col items-center md:items-start">
            <div class="text-sm text-gray-500 mb-1">Status</div>
            <div class="text-base font-semibold text-gray-900 capitalize">
              {{ movie.status }}
            </div>
          </div>
        </div>
  
        <!-- Action Buttons -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <!-- Add to Watchlist Button -->
          <button class="bg-black text-white py-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
            </svg>
            Add to Watchlist
          </button>
  
          <!-- Add to Favorites Button -->
          <button class="bg-white text-gray-900 py-4 rounded-lg font-semibold border-2 border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Add to Favorites
          </button>
        </div>
      </div>
    </section>
  </template>
  
