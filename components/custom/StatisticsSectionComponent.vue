<script setup>
const stats = [
  {
    id: 1,
    number: '62+',
    label: 'YEARS EXPERIENCE',
  },
  {
    id: 2,
    number: '1,889+',
    label: 'HAPPY CLIENT',
  },
  {
    id: 3,
    number: '2,239+',
    label: 'MUSIC VIDEO',
  },
  {
    id: 4,
    number: '1,978+',
    label: 'SHORT FILM',
  },
]
</script>

<template>
  <section class="bg-black text-white">
    <div class="max-w-6xl mx-auto bg-background rounded-2xl py-16 lg:py-24">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="stat in stats" :key="stat.id" class="text-center">
          <div class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 font-fira">
            {{ stat.number }}
          </div>
          <div class="text-primary text-xs md:text-sm font-semibold tracking-wider uppercase">
            {{ stat.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
