<script setup>
const partners = [
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502012/download_ocynfo.webp', alt: 'Amanda Keller Film Director', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502147/logos-2_oflkfh.webp', alt: 'Ella Miller Creative Film Studio', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502165/logos-3_bt9uff.webp', alt: 'W', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502170/logos-4_ajvq3d.webp', alt: 'Gallery Film Company', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502178/logos-5_nj3q6s.webp', alt: 'Elaine Hess Screenwriter Actress', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502190/logos-6_ztkvrl.webp', alt: 'John Doe Actor & Writer', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502207/logos-9_dhlll8.webp', alt: 'Digimedia Production Studio', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502220/logos-7_vox1yx.webp', alt: 'Livetalk', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502228/logos-8_njhvs3.webp', alt: 'CC', link: '#' },
  { src: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1761502235/logos-10_ukvjt5.webp', alt: 'Spiral', link: '#' }
]
</script>

<template>
  <section class="py-16 px-4">
    <div class="max-w-6xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <p class="text-gray-400 text-sm uppercase tracking-wider mb-4">Our Partners</p>
        <h2 class="text-white text-3xl max-md:text-2xl max-sm:text-xl font-bold font-fira">
          We are happy to work and share creative vision<br class="max-sm:hidden" />
          with international partners such as:
        </h2>
      </div>

      <!-- Partners Grid -->
      <div class="grid grid-cols-5 max-lg:grid-cols-3 max-sm:grid-cols-2 gap-12 max-md:gap-8 items-center">
        <nuxt-link
          v-for="partner in partners" 
          :key="partner.alt"
          :to="partner.link"
          class="flex items-center justify-center"
        >
          <nuxt-img 
            :src="partner.src" 
            :alt="partner.alt" 
            provider="cloudinary"
            loading="lazy"
            class="max-w-full w-[77%] h-auto brightness-0 invert opacity-70 hover:opacity-100 transition-all" 
          />
      </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Add any additional custom styles if needed */
</style>