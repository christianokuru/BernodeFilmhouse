<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
  price: Number,
  features: Array,
  popular: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <div
    class="bg-[#111] border border-white/15 text-white rounded-xl shadow-lg overflow-hidden flex flex-col relative">
    <div class="text-center py-8" :class="popular ? 'bg-primary' : 'bg-[#111]'">
      <h3 class="text-2xl font-bold font-fira">{{ title }}</h3>
      <p class="text-sm text-gray-300">{{ subtitle }}</p>
    </div>

    <div
      v-if="popular"
      class="absolute top-5 -right-10 bg-black text-white text-xs font-semibold px-10 py-1 rotate-45 shadow-lg font-fira">
      POPULAR
    </div>

    <div class="p-6 flex flex-col items-center">
      <p class="flex items-start justify-center gap-1 mb-4">
        <span class="text-4xl font-extrabold font-fira">${{ price }}</span>
        <span class="text-sm text-primary font-semibold font-fira">Monthly</span>
      </p>

      <ul class="space-y-3 mb-8 w-full">
        <li v-for="(feature, index) in features" :key="index" class="flex items-center space-x-3">
          <span class="w-3 h-3 bg-primary rounded-full"></span>
          <span>{{ feature }}</span>
        </li>
      </ul>

      <button
        class="w-1/2 px-6 py-2 my-6 rounded-md border border-primary text-primary hover:bg-primary hover:text-white transition font-semibold">
        Select Plan
      </button>
    </div>
  </div>
</template>
