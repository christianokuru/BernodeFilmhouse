<script setup>
const props = defineProps({
  image: { type: String, default: '' },
  altName: { type: String, default: 'thumbnail-image' },
  categoryName: { type: String, required: true },
})
</script>

<template>
  <div class="rounded-xl overflow-hidden shadow-lg text-center cursor-pointer">
    <nuxt-img
      provider="cloudinary"
      :src="image"
      :alt="altName"
      format="webp"
      class="w-full h-48 object-cover" />
    <p class="mt-2 text-lg font-semibold">{{ categoryName }}</p>
  </div>
</template>
