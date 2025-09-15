<script setup>
import { links } from "~/lib/navlinks";

const logoLink =
  "https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/Main-Logo.png";
</script>

<template>
  <div
    class="fixed top-0 left-0 w-full flex items-center justify-between px-52 py-4 z-50 bg-transparent"
  >
    <nuxt-link to="/">
      <nuxt-img :src="logoLink" alt="logo" width="250" height="143" />
    </nuxt-link>
    <div class="flex space-x-9">
      <nav v-for="navLinks in links" :key="navLinks.name">
        <div class="font-semibold">
          <nuxt-link
            :to="navLinks.path"
            active-class="text-red-500 border-b-2 border-red-500"
          >
            {{ navLinks.name }}
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
