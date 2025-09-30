<script setup>
import { links } from '~/lib/navlinks'
import { ref } from 'vue'

const logoLink = 'https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/Main-Logo.png'

const isOpen = ref(false)
</script>

<template>
  <header class="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-lg">
    <div class="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
      <nuxt-link to="/">
        <nuxt-img :src="logoLink" alt="logo" width="180" height="100" />
      </nuxt-link>

      <nav class="hidden md:flex space-x-9">
        <div v-for="navLinks in links" :key="navLinks.name" class="font-semibold">
          <nuxt-link :to="navLinks.path" active-class="text-primary border-b-2 border-primary">
            {{ navLinks.name }}
          </nuxt-link>
        </div>
      </nav>

      <!-- Mobile Hamburger -->
      <button class="md:hidden flex flex-col space-y-1" @click="isOpen = !isOpen">
        <span
          class="block w-6 h-0.5 bg-white transition"
          :class="{ 'rotate-45 translate-y-1.5': isOpen }" />
        <span class="block w-6 h-0.5 bg-white transition" :class="{ 'opacity-0': isOpen }" />
        <span
          class="block w-6 h-0.5 bg-white transition"
          :class="{ '-rotate-45 -translate-y-1.5': isOpen }" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="slide-fade">
      <nav
        v-if="isOpen"
        class="md:hidden bg-black bg-opacity-90 backdrop-blur-md px-6 py-4 space-y-4">
        <div v-for="navLinks in links" :key="navLinks.name" class="font-semibold">
          <nuxt-link
            :to="navLinks.path"
            class="block"
            active-class="text-red-500"
            @click="isOpen = false">
            {{ navLinks.name }}
          </nuxt-link>
        </div>
      </nav>
    </transition>
  </header>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
