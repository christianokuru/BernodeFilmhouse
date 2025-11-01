<script setup>
import TeamCardComponent from '@/components/custom/AboutUs/TeamCardComponent'

const teamMembers = [
  {
    id: 1,
    image: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/team-1.jpg',
    alt: 'Team Member 1',
    name: 'John Doe',
    role: 'Director'
  },
  {
    id: 2,
    image: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/team-2.jpg',
    alt: 'Team Member 2',
    name: 'Jane Smith',
    role: 'Producer'
  },
  {
    id: 3,
    image: 'https://demo.gloriathemes.com/noxe/demo/wp-content/uploads/2020/02/team-3.jpg',
    alt: 'Team Member 3',
    name: 'Mike Johnson',
    role: 'Cinematographer'
  }
]
</script>

<template>
  <div class="w-full py-12 px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <team-card-component
          v-for="member in teamMembers"
          :key="member.id"
          :image="member.image"
          :alt="member.alt"
          :name="member.name"
          :role="member.role"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Additional custom styles if needed */
</style>