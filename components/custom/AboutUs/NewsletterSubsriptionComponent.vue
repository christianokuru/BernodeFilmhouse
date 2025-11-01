<script setup>
import { ref } from 'vue'

const email = ref('')
const agreeToTerms = ref(false)
const honeypot = ref('')
const isSubmitting = ref(false)
const responseMessage = ref('')

const handleSubmit = async () => {
  if (honeypot.value) {
    return
  }
  
  if (!email.value || !agreeToTerms.value) {
    responseMessage.value = 'Please fill in all required fields'
    return
  }
  
  isSubmitting.value = true
  
  // Simulate form submission
  setTimeout(() => {
    responseMessage.value = 'Thank you for subscribing!'
    email.value = ''
    agreeToTerms.value = false
    isSubmitting.value = false
    
    setTimeout(() => {
      responseMessage.value = ''
    }, 3000)
  }, 1000)
}
</script>

<template>
  <div class="w-full py-16 px-4 bg-gray-900">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Left Column - Heading & Text -->
        <div>
          <h3 class="text-3xl md:text-4xl font-light text-white mb-6">
            Subscribe for Updates
          </h3>
          <p class="text-gray-400 leading-relaxed">
            Quisque turpis lectus, vestibulum vel neque a, rutrum luctus odio. Quisque est purus, elementum ut enim eu, sagittis venenatis sem. Pellentesque leo enim, varius eget felis sed, porttitor posuere dolor.
          </p>
        </div>

        <!-- Right Column - Form -->
        <div>
          <form @submit.prevent="handleSubmit">
            <!-- Email Input & Button -->
            <div class="flex gap-0 mb-4">
              <input 
                v-model="email"
                type="email" 
                name="email"
                placeholder="Your email address" 
                required
                class="flex-1 px-6 py-4 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="px-8 py-4 bg-primary text-white font-semibold hover:bg-red-700 transition-colors duration-300 disabled:opacity-50"
              >
                {{ isSubmitting ? 'Sending...' : 'Send' }}
              </button>
            </div>

            <!-- Terms & Conditions Checkbox -->
            <div class="flex items-start gap-3">
              <input 
                v-model="agreeToTerms"
                type="checkbox" 
                id="agree-terms"
                name="agree_to_terms"
                required
                class="mt-1 w-4 h-4 accent-red-600 cursor-pointer"
              />
              <label 
                for="agree-terms"
                class="text-gray-400 text-sm cursor-pointer select-none"
              >
                I have agree to the terms & conditions
              </label>
            </div>

            <!-- Honeypot (hidden) -->
            <input 
              v-model="honeypot"
              type="text" 
              name="honeypot"
              tabindex="-1"
              autocomplete="off"
              class="hidden"
              aria-hidden="true"
            />

            <!-- Response Message -->
            <div v-if="responseMessage" class="mt-4 text-green-400 text-sm">
              {{ responseMessage }}
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>