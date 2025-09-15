<script setup>
const heroImage = 'https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc.jpg'
</script>

<template>
  <section 
    class="h-screen w-full bg-cover bg-center relative flex flex-col justify-center items-center text-white"
    :style="`background-image: url(${heroImage})`"
  >
    <div class="bg-black bg-opacity-90 absolute inset-0"></div>

    <div class="relative z-10 text-center">
      <h1 class="text-5xl font-bold">Welcome to My Website</h1>
      <p class="mt-4 text-lg">This is the hero section content</p>
      <button class="mt-6 px-6 py-3 bg-red-600 rounded-lg">Get Started</button>
    </div>
  </section>
</template>
