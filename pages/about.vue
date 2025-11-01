<script setup>
import GeneralHeroComponent from '~/components/custom/GeneralHeroComponent.vue'
import AboutSectionComponent from '~/components/custom/AboutUs/AboutSectionComponent.vue'
import ServicesSectionComponent from '~/components/custom/AboutUs/ServicesSectionComponent.vue'
import GallerySectionComponent from '~/components/custom/AboutUs/GallerySectionComponent.vue'
import PartnersSectionComponent from '~/components/custom/AboutUs/PartnersSectionComponent.vue'
import TeamSectionComponent from '~/components/custom/AboutUs/TeamSectionComponent.vue'
import TeamCardsSectionComponent from '~/components/custom/AboutUs/TeamCardsSectionComponent.vue'
import TestimonialSliderComponent from '~/components/custom/AboutUs/TestimonialSliderComponent.vue'
import NewsletterSubsriptionComponent from '~/components/custom/AboutUs/NewsletterSubsriptionComponent.vue'

const heroSectionDetials = {
  text1: 'Bernode Filmhouse',
  heroTitle: 'About Us',
  imageSrc:
    'https://res.cloudinary.com/dtuexazs1/image/upload/v1758898112/Private-Black-Female-Photographers-and-Content-Creators-You-Should-Work-With-in-2022_tfpeca.jpg',
  imageAlt: 'hero-image',
}
</script>

<template>
  <div>
    <general-hero-component :heroSection="heroSectionDetials" />
    <about-section-component />
    <services-section-component />
    <gallery-section-component />
    <partners-section-component />
    <team-section-component />
    <team-cards-section-component/>
    <testimonial-slider-component />
    <newsletter-subsription-component />
  </div>
</template>
