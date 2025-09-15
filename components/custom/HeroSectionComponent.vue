<script setup>
import { Button } from '../ui/button';

const heroImage = 'https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc.jpg'
</script>

<template>
  <section 
    class="h-screen w-full bg-cover bg-center relative flex flex-col px-[22rem] justify-center text-white"
    :style="`background-image: url(${heroImage})`"
  >
    <div class="bg-black bg-opacity-90 absolute inset-0"></div>

    <div class="relative z-10 border">
      <div class="">
        <h1 class="text-3xl text-gray-400 font-normal">Welcome</h1>
      </div>
      <p class="mt-4 text-[80px] font-bold font-fira text-primary">LET'S MAKE YOUR FILM + TV SHOWS AND MORE</p>
      <p class="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <div>
        <Button variant="outline" class="text-red-500 font-semibold">Show Plan</Button>
        <Button>Get Started</Button>
      </div>
    </div>
  </section>
</template>
