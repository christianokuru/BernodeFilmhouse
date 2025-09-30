<template>
  <section class="h-screen w-full overflow-hidden">
    <div class="absolute inset-0">
      <nuxt-img
        src="https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/title-bar-background.jpg"
        alt="Mountain background"
        class="h-full w-full object-cover"
        loading="lazy" />

      <div class="absolute inset-0 bg-black opacity-50"></div>
    </div>

    <div class="relative z-10 flex h-full items-center justify-center px-4">
      <div class="text-center">
        <p class="mb-4 text-sm font-semibold tracking-widest text-white/70 uppercase">
          Most Popular Movies
        </p>
        <h1
          class="text-6xl md:text-7xl lg:text-8xl font-fira font-bold text-white uppercase tracking-wider">
          <span class="inline-block"> Movie Listing </span>
        </h1>
      </div>
    </div>
  </section>
</template>
