<script setup>
import ContactHeroSection from '~/components/custom/ContactUs/ContactHeroSection.vue';
import ContactInfoFormSection from '~/components/custom/ContactUs/ContactInfoFormSection.vue';
import ContactMapSection from '~/components/custom/ContactUs/ContactMapSection.vue';

// Page meta configuration
useHead({
  title: 'Contact Us - Noxe',
  meta: [
    { name: 'description', content: 'Get in touch with Noxe, the movie company that values your feedback and cherishes meaningful conversations.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a]">
    <contact-hero-section />
    <contact-info-form-section />
    <contact-map-section />
  </div>
</template>