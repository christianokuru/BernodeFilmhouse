<script setup>
const heroData = {
  title: "Any your idea, thought, project is realizable.",
  description: "Reach out and let your voice be heard. Connect with Noxe, the movie company that values your feedback and cherishes meaningful conversations. We're here to listen and collaborate, making every interaction count."
}
</script>

<template>
  <section class="w-full py-16 md:py-24">
    <div class="max-w-6xl mx-auto px-4">
      <div class="text-center max-w-4xl mx-auto">
        <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-fira">
          {{ heroData.title }}
        </h1>
        <p class="text-base md:text-lg text-gray-400 leading-relaxed">
          {{ heroData.description }}
        </p>
      </div>
    </div>
  </section>
</template>