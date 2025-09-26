<script setup>
import { links } from '~/lib/navlinks'
import { quickLinks } from '@/lib/quicklinks'
import { contacts } from '@/lib/contacts'
import { socials } from '@/lib/socials'
import { ref } from 'vue'

const logoLink = 'https://kit.envalabdemos.com/filma/wp-content/uploads/2023/09/Main-Logo.png'

const instagramPosts = ref([
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758903152/Perfocal_17-11-2019_TYWFAQ_100_standard-3_oiwwwx.jpg',
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758899817/2596440-black-woman-arms-crossed-and-standing-isolated-on-gray-background-for-confident-profile-or-empowerment.-portrait-of-african-american-female-model-with-serious-face-for-leadership-or-management-fit_400_400_r7hgb9.jpg',
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758898112/Private-Black-Female-Photographers-and-Content-Creators-You-Should-Work-With-in-2022_tfpeca.jpg',
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758903464/1700856394133_mzkqsr.jpg',
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758899979/laughing-is-the-best-of-life_ws2h5f.jpg',
  'https://res.cloudinary.com/dtuexazs1/image/upload/v1758903526/premium_photo-1690359582591-3b3ab6399885_sdgkdj.jpg',
])
</script>

<template>
  <footer
    class="relative bg-black text-white bg-cover bg-center"
    style="
      background-image: url('https://res.cloudinary.com/dtuexazs1/image/upload/v1758903526/premium_photo-1690359582591-3b3ab6399885_sdgkdj.jpg');
    ">
    <!-- Dark overlay for readability -->
    <div class="py-16 px-4 lg:py-20 bg-black/80">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <!-- Logo & Contacts -->
          <div class="lg:col-span-1">
            <nuxt-link to="/" class="mb-5 block">
              <nuxt-img :src="logoLink" alt="logo" width="180" height="100" />
            </nuxt-link>
            <p class="text-gray-400 text-sm leading-relaxed mb-8">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor
              incididunt.
            </p>
            <div class="space-y-3">
              <div
                v-for="(contact, index) in contacts"
                :key="index"
                class="flex items-center text-sm">
                <svg
                  class="w-4 h-4 text-primary mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path :d="contact.icon" />
                </svg>
                <span class="text-gray-300">{{ contact.text }}</span>
              </div>
            </div>
          </div>

          <!-- Quick Links -->
          <div class="lg:col-span-1">
            <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
            <div class="space-y-3">
              <div v-for="link in quickLinks" :key="link.id">
                <nuxt-link
                  :to="link.href"
                  class="text-gray-400 text-sm hover:text-white transition-colors duration-300">
                  {{ link.label }}
                </nuxt-link>
              </div>
            </div>
          </div>

          <!-- Instagram -->
          <div class="lg:col-span-1">
            <h4 class="text-lg font-semibold mb-6">Follow Instagram</h4>
            <div class="grid grid-cols-3 gap-2">
              <div
                v-for="(post, index) in instagramPosts"
                :key="index"
                class="aspect-square rounded overflow-hidden">
                <nuxt-img
                  :src="post"
                  alt="Instagram post"
                  class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                  provider="cloudinary" />
              </div>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="lg:col-span-1">
            <h4 class="text-lg font-semibold mb-6">Newsletter</h4>
            <p class="text-gray-400 text-sm mb-6 leading-relaxed">
              Subscribe to our newsletter for discounts and more.
            </p>
            <div class="flex mb-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                class="flex-1 bg-gray-800 border border-gray-700 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors duration-300 rounded-l" />
              <button
                class="bg-primary hover:bg-red-600 px-4 py-3 transition-colors duration-300 rounded-r">
                <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
                </svg>
              </button>
            </div>
            <div class="flex space-x-4">
              <a
                v-for="social in socials"
                :key="social.id"
                :href="social.href"
                class="bg-gray-800 hover:bg-primary p-2 rounded transition-colors duration-300">
                <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom -->
    <div class="border-t border-gray-800 bg-black/90">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row md:justify-between md:items-center">
          <div class="text-gray-500 text-sm mb-4 md:mb-0">
            © {{ new Date().getFullYear() }} ENVALAB. All Rights Reserved.
          </div>
          <div class="flex flex-wrap gap-6 text-gray-500 text-sm">
            <nav class="hidden md:flex space-x-9">
              <div v-for="navLinks in links" :key="navLinks.name" class="font-semibold">
                <nuxt-link
                  :to="navLinks.path"
                  active-class="text-red-500 border-b-2 border-red-500">
                  {{ navLinks.name }}
                </nuxt-link>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
