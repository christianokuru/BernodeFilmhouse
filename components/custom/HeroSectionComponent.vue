<script setup>
import { Button } from '../ui/button'
import RippleGlowComponent from '@/components/custom/RippleGlowComponent.vue'
import { ref } from 'vue'

const trailerVideo = ref('https://www.youtube.com/watch?v=8AyCuFxIMiQ&pp=ygUSYmVybm9kZSBmaWxtIGhvdXNl')

const heroImage = 'https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc.jpg'
</script>

<template>
  <section class="h-screen w-full bg-cover bg-center relative flex flex-col justify-center text-white" :style="`background-image: url(${heroImage})`">
    <div class="bg-black bg-opacity-90 absolute inset-0"></div>

    <div class="relative z-10 max-w-6xl mx-auto px-6 max-sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6">
      <div class="mt-16 max-md:mt-8 max-sm:mt-4 max-md:text-center">
        <h1 class="text-3xl max-md:text-2xl max-sm:text-xl text-gray-400 font-normal">Welcome</h1>

        <p class="mt-4 text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-sm:mb-3 font-bold font-fira leading-tight">LET'S MAKE YOUR FILM + TV SHOWS AND MORE</p>

        <p class="mb-5 text-base max-sm:text-sm text-gray-400 max-md:max-w-md max-md:mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>

        <div class="flex space-x-5 max-md:justify-center max-sm:flex-row max-sm:flex max-sm:items-center max-sm:space-x-5">
          <Button variant="outline" class="bg-transparent text-primary rounded-[7px] border-primary font-semibold hover:bg-primary hover:text-white max-sm:w-full"> Show Plan </Button>
          <Button class="font-semibold max-sm:w-full">Get Started</Button>
        </div>
      </div>

      <ripple-glow-component :videoLink="trailerVideo" linkText="WATCHING NOW" ripple-size="w-20 h-20" :glow="false"/>
    </div>
  </section>
</template>
