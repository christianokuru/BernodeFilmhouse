<script setup>
// Icon components (you can replace these with your preferred icon library)
const ActionIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M18,4L20,8H17L15,4H9L7,8H4L6,4H18M21.5,11.5C21.5,12.3 20.8,13 20,13S18.5,12.3 18.5,11.5 19.2,10 20,10 21.5,10.7 21.5,11.5M8.5,11.5C8.5,12.3 7.8,13 7,13S5.5,12.3 5.5,11.5 6.2,10 7,10 8.5,10.7 8.5,11.5M7.09,16.5L6,18L12,22L18,18L16.91,16.5L12,19.5L7.09,16.5Z"/>
    </svg>
  `,
}

const FantasyIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2L13.09,8.26L20,7L14,12L20,17L13.09,15.74L12,22L10.91,15.74L4,17L10,12L4,7L10.91,8.26L12,2Z"/>
    </svg>
  `,
}

const ComedyIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20M16.5,9C17.3,9 18,8.3 18,7.5C18,6.7 17.3,6 16.5,6C15.7,6 15,6.7 15,7.5C15,8.3 15.7,9 16.5,9M7.5,9C8.3,9 9,8.3 9,7.5C9,6.7 8.3,6 7.5,6C6.7,6 6,6.7 6,7.5C6,8.3 6.7,9 7.5,9M12,17.5C14.3,17.5 16.3,16.04 17,14H7C7.7,16.04 9.7,17.5 12,17.5Z"/>
    </svg>
  `,
}

const DramaIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M12,20C16.4,20 20,16.4 20,12C20,7.6 16.4,4 12,4C7.6,4 4,7.6 4,12C4,16.4 7.6,20 12,20M16.5,9C17.3,9 18,8.3 18,7.5C18,6.7 17.3,6 16.5,6C15.7,6 15,6.7 15,7.5C15,8.3 15.7,9 16.5,9M7.5,9C8.3,9 9,8.3 9,7.5C9,6.7 8.3,6 7.5,6C6.7,6 6,6.7 6,7.5C6,8.3 6.7,9 7.5,9M12,14C10.3,14 8.7,14.6 7.6,15.5C8.1,16.5 9.5,17.5 12,17.5C14.5,17.5 15.9,16.5 16.4,15.5C15.3,14.6 13.7,14 12,14Z"/>
    </svg>
  `,
}

const MysteryIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M10,19H13V22H10V19M12,2C17.35,2.22 19.68,7.62 16.5,11.67C15.67,12.67 14.33,13.33 13.5,14.17C13,14.67 13,15.33 13,16H10C10,14.33 10,13.92 10.67,13.25C11.33,12.58 12.58,11.92 13.25,11.25C15.58,8.92 15.04,5.08 12,5A3,3 0 0,0 9,8H6A6,6 0 0,1 12,2Z"/>
    </svg>
  `,
}

const RomanceIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
    </svg>
  `,
}

const HorrorIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2C17.5,2 22,6.5 22,12C22,17.5 17.5,22 12,22C6.5,22 2,17.5 2,12C2,6.5 6.5,2 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M16.5,9C17.3,9 18,8.3 18,7.5C18,6.7 17.3,6 16.5,6C15.7,6 15,6.7 15,7.5C15,8.3 15.7,9 16.5,9M7.5,9C8.3,9 9,8.3 9,7.5C9,6.7 8.3,6 7.5,6C6.7,6 6,6.7 6,7.5C6,8.3 6.7,9 7.5,9M12,17.5C9.67,17.5 7.69,16.04 6.89,14H17.11C16.31,16.04 14.33,17.5 12,17.5Z"/>
    </svg>
  `,
}

const ThrillerIcon = {
  template: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V14H13V6H11M11,16V18H13V16H11Z"/>
    </svg>
  `,
}

const iconMap = {
  action: ActionIcon,
  fantasy: FantasyIcon,
  comedy: ComedyIcon,
  drama: DramaIcon,
  mystery: MysteryIcon,
  romance: RomanceIcon,
  horror: HorrorIcon,
  thriller: ThrillerIcon,
}

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  movieCount: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
})

const iconComponent = computed(() => iconMap[props.icon] || ActionIcon)
</script>

<template>
  <div
    class="bg-gray-900/50 border border-gray-800 rounded-lg p-6 hover:border-primary transition-all duration-300 group">
    <div class="flex items-center space-x-4">
      <!-- Icon Container -->
      <div class="bg-primary p-3 rounded-lg group-hover:bg-primary transition-colors duration-300">
        <component :is="iconComponent" class="w-6 h-6 text-white" />
      </div>

      <!-- Content -->
      <div class="flex-1">
        <h3 class="text-white text-lg font-semibold mb-1">{{ title }}</h3>
        <p class="text-gray-400 text-sm mb-2">{{ movieCount }}</p>
        <button
          class="text-primary text-sm font-medium hover:primary transition-colors duration-300 border-b border-gray-600 hover:border-red-400">
          View More
        </button>
      </div>
    </div>
  </div>
</template>
