<script setup lang="ts">
import NavbarComponent from "@/components/custom/NavbarComponent.vue";
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";

const { progress, isLoading, error, start, finish, clear } =
  useLoadingIndicator({
    throttle: 900,
    duration: 1000,
  });
</script>

<template>
  <NuxtLoadingIndicator color="orange" />
 <div class="bg-black">
   <div class="bg-black h-screen text-white mx-52 border border-gray-700 ">
    <Toaster :position="'bottom-right'" :rich-colors="true" />
    <navbar-component />
    <nuxt-page />
    <footer-component />
  </div>
 </div>
</template>
