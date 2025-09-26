<template>
  <section class="bg-black text-white py-16 px-4 lg:py-24">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div class="order-2 lg:order-1">
          <div class="relative rounded-lg overflow-hidden">
            <nuxt-img
              src="https://res.cloudinary.com/dtuexazs1/image/upload/v1758015692/content-creator-blogger-vlogger-setting-up-recor-2021-08-30-23-40-27-utc_rqvczc.jpg"
              alt="Woman cooking in kitchen with fresh ingredients"
              class="w-full h-64 md:h-80 lg:h-96 object-cover"
              loading="lazy" />
          </div>
        </div>

        <div class="order-1 lg:order-2">
          <div class="space-y-6">
            <div class="text-primary text-sm font-medium tracking-wider uppercase">
              WHY CHOOSE US
            </div>

            <h2 class="text-4xl md:text-5xl lg:text-6xl font-fira font-bold leading-tight">
              10+ Years Of Experience
            </h2>

            <p class="text-gray-300 text-base md:text-lg leading-relaxed font font-sans">
              Mikeaz veniam, quis nostrud exercitation ullamco laboris. Sed ut perspiciatis unde
              omnis iste natus error sit voluptatem accusantium doloremque laudantium totam aperiam.
              Lorem ipsum dolor sit amet consectetur adipiscing elit.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                class="bg-primary hover:bg-red-400 text-white px-8 py-3 rounded font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
                <span>WATCH TRAILER</span>
              </button>

              <button
                class="border border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded font-medium transition-all duration-300">
                VIEW ALL COMING SOON
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
