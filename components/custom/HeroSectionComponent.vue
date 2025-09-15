<script setup>
import { Button } from "../ui/button";

const heroImage =
  "https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/back-view-of-creative-film-maker-working-on-a-movi-2021-08-27-17-08-20-utc.jpg";
</script>

<template>
  <section
    class="h-screen w-full bg-cover bg-center relative flex flex-col justify-center text-white"
    :style="`background-image: url(${heroImage})`"
  >
    <div class="bg-black bg-opacity-90 absolute inset-0"></div>

    <div
      class="relative z-10 max-w-6xl mx-auto px-6 max-sm:px-4 grid grid-cols-1 md:grid-cols-2 gap-8 max-md:gap-6"
    >
      <div class="mt-16 max-md:mt-8 max-sm:mt-4 max-md:text-center">
        <h1
          class="text-3xl max-md:text-2xl max-sm:text-xl text-gray-400 font-normal"
        >
          Welcome
        </h1>

        <p
          class="mt-4 text-[70px] max-lg:text-[50px] max-md:text-[40px] max-sm:text-[30px] max-sm:mb-3 font-bold font-fira leading-tight"
        >
          LET'S MAKE YOUR FILM + TV SHOWS AND MORE
        </p>

        <p
          class="mb-5 text-base max-sm:text-sm text-gray-400 max-md:max-w-md max-md:mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>

        <div
          class="flex space-x-5 max-md:justify-center max-sm:flex-row max-sm:flex max-sm:items-center max-sm:space-x-5"
        >
          <Button
            variant="outline"
            class="bg-transparent text-primary rounded-[7px] border-primary font-semibold hover:bg-primary hover:text-white max-sm:w-full"
          >
            Show Plan
          </Button>
          <Button class="font-semibold max-sm:w-full">Get Started</Button>
        </div>
      </div>

      <div class="flex items-center justify-center relative max-md:mt-8">
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-30 animate-ripple"
        ></span>
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-20 animate-ripple delay-100"
        ></span>
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-20 animate-ripple delay-300"
        ></span>
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-20 animate-ripple delay-500"
        ></span>
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-20 animate-ripple delay-700"
        ></span>
        <span
          class="absolute w-32 h-32 max-md:w-24 max-md:h-24 max-sm:w-20 max-sm:h-20 rounded-full bg-red-600 opacity-10 animate-ripple delay-900"
        ></span>

        <button
          class="relative z-10 flex items-center justify-center w-20 h-20 max-md:w-16 max-md:h-16 max-sm:w-14 max-sm:h-14 rounded-full bg-red-600 hover:bg-red-700 transition"
        >
          <svg
            class="w-10 h-10 max-md:w-8 max-md:h-8 max-sm:w-6 max-sm:h-6 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>
