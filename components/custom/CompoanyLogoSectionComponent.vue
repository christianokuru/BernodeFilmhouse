<script setup>
const companies = [
  {
    id: 1,
    logo: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10">
        <path d="M12 2L2 7l10 5 10-5-10-5zm0 7l-10 5 10 5 10-5-10-5z"/>
      </svg>
    `,
    label: 'OpenVision',
  },
  {
    id: 2,
    logo: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10">
        <circle cx="12" cy="12" r="10"/>
      </svg>
    `,
    label: 'CircleWave',
  },
  {
    id: 3,
    logo: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10">
        <rect x="4" y="4" width="16" height="16" rx="2"/>
      </svg>
    `,
    label: 'SquareMedia',
  },
  {
    id: 4,
    logo: `
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="w-10 h-10">
        <path d="M3 12h18M12 3v18"/>
      </svg>
    `,
    label: 'PlusAgency',
  },
]
</script>

<template>
  <section class="bg-black text-white">
    <div class="max-w-6xl mx-auto px-7 bg-background rounded-2xl py-16 lg:py-24">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <div v-for="company in companies" :key="company.id" class="flex items-center gap-4">
          <div v-html="company.logo" class="text-primary"></div>
          <div class="text-2xl md:text-3xl font-bold opacity-50 font-fira">
            {{ company.label }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
