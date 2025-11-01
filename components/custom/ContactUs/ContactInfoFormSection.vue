<script setup>
const contactBoxes = [
  {
    title: "Contact Us",
    content: "Get in touch with us hello@gloriathemes.com or tell about more your project in form and we contact with you."
  },
  {
    title: "Noxe Studio",
    lines: [
      "hello@gloriathemes.com",
      "+(01) 426-9824",
      "1418 Noxe Street, Suite 3845, California, USA"
    ]
  },
  {
    title: "Center Office",
    lines: [
      "+(01) 426-9824",
      "hello@gloriathemes.com",
      "12369, New York, USA"
    ]
  }
]

const formData = {
  name: '',
  email: '',
  subject: '',
  message: ''
}

const handleSubmit = () => {
  console.log('Form submitted:', formData)
}
</script>

<template>
  <section class="w-full py-12 md:py-16">
    <div class="max-w-6xl mx-auto px-4">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Contact Info Boxes -->
        <div class="lg:col-span-3">
          <div class="space-y-8">
            <div 
              v-for="(box, index) in contactBoxes" 
              :key="index"
              class="text-left"
            >
              <h3 class="text-xl font-semibold text-white mb-4">
                {{ box.title }}
              </h3>
              <p v-if="box.content" class="text-gray-400 text-sm leading-relaxed">
                {{ box.content }}
              </p>
              <div v-if="box.lines" class="text-gray-400 text-sm leading-relaxed space-y-1">
                <p v-for="(line, idx) in box.lines" :key="idx">
                  {{ line }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="lg:col-span-9">
          <div class="space-y-5">
            <!-- Name and Email Row -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label for="name" class="block text-white text-sm mb-2">Your Name</label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  maxlength="400"
                  required
                  class="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors"
                />
              </div>
              <div>
                <label for="email" class="block text-white text-sm mb-2">Your Email</label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  maxlength="400"
                  required
                  class="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors"
                />
              </div>
            </div>

            <!-- Subject -->
            <div>
              <label for="subject" class="block text-white text-sm mb-2">Subject</label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                maxlength="400"
                required
                class="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors"
              />
            </div>

            <!-- Message -->
            <div>
              <label for="message" class="block text-white text-sm mb-2">Your Message</label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="10"
                maxlength="2000"
                required
                class="w-full bg-[#1a1a1a] border border-[#2a2a2a] text-white px-4 py-3 rounded focus:outline-none focus:border-gray-600 transition-colors resize-none"
              ></textarea>
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                @click="handleSubmit"
                class="bg-white text-black font-semibold px-8 py-3 rounded hover:bg-gray-200 transition-colors"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>