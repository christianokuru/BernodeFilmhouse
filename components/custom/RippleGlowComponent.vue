<script setup>
import { computed } from 'vue'

const props = defineProps({
  buttonSize: { type: String, default: 'w-20 h-20' },
  buttonColor: { type: String, default: 'bg-red-600 hover:bg-red-700' },
  rippleColor: { type: String, default: 'bg-primary' },
  rippleCount: { type: [Number, String], default: 6 },
  rippleSize: { type: String, default: 'w-32 h-32 max-md:w-24 max-sm:w-10 max-sm:h-10' },
  rippleDuration: { type: String, default: '4s' },
  rippleDelayStep: { type: Number, default: 0.2 },
  iconSize: { type: String, default: 'w-10 h-10 max-md:w-8 max-sm:w-6' },
  iconColor: { type: String, default: 'text-white' },
  ariaLabel: { type: String, default: 'Play trailer' },
  videoLink: { type: String, default: '' },
  linkText: { type: String, default: '' },
  glow: { type: Boolean, default: true },
})

const count = computed(() => {
  const n = parseInt(String(props.rippleCount || 0), 10)
  return Number.isFinite(n) && n > 0 ? n : 6
})

const ripples = computed(() => Array.from({ length: count.value }, (_, i) => i))
</script>

<template>
  <div class="flex flex-col items-center justify-center relative max-md:mt-8">
    <div class="relative flex items-center justify-center mb-7">
      <span
        v-for="(r, i) in ripples"
        :key="i"
        aria-hidden="true"
        class="absolute rounded-full opacity-90 animate-ripple"
        :class="[rippleSize, rippleColor]"
        :style="{
          animationDelay: `${(i * rippleDelayStep).toFixed(2)}s`,
          animationDuration: rippleDuration,
        }"></span>

      <component
        :is="videoLink ? 'a' : 'button'"
        :href="videoLink || undefined"
        target="_blank"
        rel="noopener noreferrer"
        :aria-label="ariaLabel"
        class="relative z-10 flex items-center justify-center rounded-full transition"
        :class="[buttonSize, buttonColor, glow ? 'animate-glow' : '']">
        <svg :class="[iconSize, iconColor]" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 5v14l11-7z" />
        </svg>
      </component>
    </div>

    <a
      v-if="linkText && videoLink"
      :href="videoLink"
      target="_blank"
      rel="noopener noreferrer"
      class="mt-4 text-base font-semibold text-white underline">
      {{ linkText }}
    </a>
  </div>
</template>
