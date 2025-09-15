<script setup lang="ts">
import NavbarComponent from "@/components/custom/NavbarComponent.vue";
import { Toaster } from "@/components/ui/sonner";
import "vue-sonner/style.css";
import { useRoute } from "vue-router";

const route = useRoute();

const { progress, isLoading, error, start, finish, clear } =
  useLoadingIndicator({
    throttle: 900,
    duration: 1000,
  });
</script>

<template>
  <NuxtLoadingIndicator color="orange" />
  <div class="bg-black">
    <div class="bg-black h-screen text-white border border-gray-700">
      <Toaster :position="'bottom-right'" :rich-colors="true" />
      <navbar-component />
      <main :class="[route.path !== '/' ? 'pt-24' : '']">
        <nuxt-page />
      </main>
      <footer-component />
    </div>
  </div>
</template>

<!-- mx-52 -->
