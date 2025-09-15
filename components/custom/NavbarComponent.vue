<script setup>
import { links } from "~/lib/navlinks";
</script>

<template>
  <div class="border flex items-center justify-between">
    <h1 class="capitalize text-5xl font-bold">Filma</h1>
    <div class="flex space-x-9">
      <nav v-for="navLinks in links" key="navLinks.name" class="">
        <div class="font-semibold">
          <nuxt-link :to="navLinks.path" active-class="text-red-500 border-b-2 border-red-500">{{ navLinks.name }}</nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>
