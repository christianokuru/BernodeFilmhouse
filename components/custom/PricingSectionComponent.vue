<script setup>
import PricingcardComponent from '@/components/custom/PricingcardComponent.vue'

const plans = [
  {
    title: 'Basic Plan',
    subtitle: 'Basic Plan Service',
    price: 49,
    features: ['No ads', 'HD+ Quality Streaming', 'Watch on any device', 'Offline Viewing'],
    popular: false
  },
  {
    title: 'Enterprise Plan',
    subtitle: 'Enterprise Plan Service',
    price: 59,
    features: ['No ads', 'HD+ Quality Streaming', 'Watch on any device', 'Offline Viewing'],
    popular: true
  },
  {
    title: 'Professional Plan',
    subtitle: 'Professional Plan Service',
    price: 69,
    features: ['No ads', 'HD+ Quality Streaming', 'Watch on any device', 'Offline Viewing'],
    popular: false
  }
]
</script>

<template>
  <section class="bg-black py-16">
    <div class="text-center mb-12">
      <h2 class="text-primary text-sm font-bold mb-4 uppercase">Pricing Plan</h2>
      <h1 class="text-4xl max-w-sm md:text-4xl font-extrabold font-fira mx-auto text-white">
        Choose The Plan That Suits For You
      </h1>
      <p class="text-gray-400 max-w-xl mx-auto mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>

   
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
      <pricingcard-component
        v-for="(plan, index) in plans"
        :key="index"
        :title="plan.title"
        :subtitle="plan.subtitle"
        :price="plan.price"
        :features="plan.features"
        :popular="plan.popular"
      />
    </div>
  </section>
</template>


