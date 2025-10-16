<script setup>
import Director from '@/assets/icons/director.svg'
import Production from '@/assets/icons/camera.svg'
import Studio from '@/assets/icons/video.svg'
import Awards from '@/assets/icons/awards.svg'

const services = [
  {
    title: 'Directors',
    description: 'Our visionary directors bring stories to life with their passion, creativity, and expertise. Join us.',
    icon: Director,
    alt: 'Director Icon'
  },
  {
    title: 'Production',
    description: 'Crafting stunning visual stories with cutting-edge technology and a passionate team of experts.',
    icon: Production,
    alt: 'camera Icon'
  },
  {
    title: 'Studio',
    description: 'A movie company with a state-of-the-art studio for producing and refining cinematic content.',
    icon: Studio,
    alt: 'Studio Icon'
  },
  {
    title: 'Awards',
    description: 'Recognitions received by Noxe for excellence in filmmaking. Celebrating our team\'s hard work and creativity.',
    icon: Awards,
    alt: 'Awards Icon'
  }
]
</script>

<template>
  <section class="bg-black py-20 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-0">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="border border-stone-700 p-8 py-20 hover:shadow-lg transition-shadow duration-300 bg-black"
        >
          <img :src="service.icon" class="w-16 h-16 mb-6" :alt="service.alt" />
          <h3 class="text-xl font-bold mb-4 text-white">{{ service.title }}</h3>
          <p class="text-gray-400 leading-relaxed">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>