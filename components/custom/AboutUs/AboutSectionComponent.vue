<script setup>
const aboutData = {
  foundedYear: '2007',
  founder: 'Bernard Inyang',
  founderTitle: 'President of Bernode Filmhouse',
  description:
    'Bernode Filmhouse, a leading movie company, is dedicated to crafting exceptional cinematic experiences. With a passion for storytelling and innovation, we bring captivating films to audiences worldwide. From heartwarming dramas to thrilling adventures, Bernode Filmhouse embraces diverse genres, aiming to inspire, entertain, and leave a lasting impact. With a commitment to artistic excellence, we strive to push boundaries, ignite imaginations, and create unforgettable moments on the big screen. Join us on our cinematic journey as we continue to redefine the art of storytelling and immerse viewers in the magic of film. Welcome to Bernode Filmhouse, where movies come to life.',
}
</script>

<template>
  <section class="bg-black text-white pb-20">
    <div class="max-w-6xl mx-auto">
      <!-- Decorative zigzag -->
      <div class="flex justify-center mb-12">
        <svg width="100" height="20" viewBox="0 0 100 20" class="text-white">
          <polyline
            points="0,10 10,0 20,10 30,0 40,10 50,0 60,10 70,0 80,10 90,0 100,10"
            fill="none"
            stroke="currentColor"
            stroke-width="2" />
        </svg>
      </div>

      <h1
        class="font-fira text-3xl md:text-4xl lg:text-4xl max-w-4xl mx-auto font-bold text-center mb-8 leading-tight">
        Founded in 2015 by {{ aboutData.founder }}, {{ aboutData.founderTitle }}, we are a global production company
        with offices in
        <span class="underline hover:text-gray-300 transition-colors">Calabar</span>,
        <span class="underline hover:text-gray-300 transition-colors">Port-Harcourt</span> and
        <span class="underline hover:text-gray-300 transition-colors">Lagos</span>.
      </h1>
      <p class="text-base md:text-lg text-gray-300 text-center leading-relaxed max-w-5xl mx-auto">
        {{ aboutData.description }}
      </p>
    </div>
  </section>
</template>
