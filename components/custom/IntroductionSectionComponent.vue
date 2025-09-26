<script setup>
const images = {
  main: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015658/film-industry-2021-08-29-12-40-39-utc_jqckof.jpg',
  bottom:
    'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015692/content-creator-blogger-vlogger-setting-up-recor-2021-08-30-23-40-27-utc_rqvczc.jpg',
  side: 'https://res.cloudinary.com/dtuexazs1/image/upload/v1758015720/beautiful-girl-prepares-delicious-healthy-food-and-2021-09-23-20-25-58-utc_p2hqld.jpg',
}
</script>

<template>
  <section class="bg-black text-white max-lg:px-4 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="relative order-2 lg:order-1">
          <div
            v-if="images.main"
            class="relative w-full h-64 md:h-80 lg:h-96 -mt-[6.6rem] rounded-lg overflow-hidden">
            <nuxt-img
              :src="images.main"
              alt="Designer working at desk with dual monitors"
              class="w-full h-full object-cover"
              loading="lazy"
              provider="cloudinary" />
          </div>

          <div
            v-if="images.bottom"
            class="absolute -bottom-8 -left-4 md:-bottom-12 md:-left-6 lg:-bottom-[6.6rem] lg:left-96">
            <div
              class="w-32 h-40 md:w-40 md:h-48 lg:w-48 lg:h-56 rounded-lg overflow-hidden shadow-2xl">
              <nuxt-img
                :src="images.bottom"
                alt="Woman cooking in modern kitchen"
                class="w-full h-full object-cover"
                loading="lazy"
                provider="cloudinary" />
            </div>
          </div>

          <div
            v-if="images.side"
            class="absolute -top-4 -right-4 md:-top-6 md:-right-6 lg:top-[13rem] lg:right-[14rem]">
            <div
              class="w-32 h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 rounded-lg overflow-hidden shadow-2xl">
              <nuxt-img
                :src="images.side"
                alt="Person with headphones in creative workspace"
                class="w-full h-full object-cover"
                loading="lazy"
                provider="cloudinary" />
            </div>
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="space-y-6">
            <div class="text-primary text-sm font-semibold tracking-wider uppercase">
              OUR INTRODUCTION
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-bold font-fira leading-tight">
              Let's make great things together
            </h2>

            <div
              class="space-y-4 text-base max-sm:text-sm text-gray-400 md:text-lg leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Mikeaz veniam, quis nostrud
                exercitation ullamco laboris.
              </p>
              <p>
                Mikeaz veniam, quis nostrud exercitation ullamco laboris. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque laudantium totam
                aperiam. Lorem ipsum dolor sit amet consectetur adipiscing elit.
              </p>
            </div>

            <div class="pt-4">
              <button
                class="border border-primary text-primary px-8 py-3 rounded hover:bg-red-500 hover:text-white transition-all duration-300 font-medium">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
