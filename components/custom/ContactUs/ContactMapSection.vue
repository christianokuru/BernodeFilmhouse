<script setup>
const mapLocations = [
  {
    lat: 37.7577627,
    lng: -122.4726194,
    title: "Center Office",
    details: [
      "hello@gloriathemes.com",
      "+(01) 426-9824",
      "1418 Noxe Street, Suite 3845, California, USA"
    ]
  },
  {
    lat: 37.5877647,
    lng: -122.4426184,
    title: "Noxe Studio",
    details: [
      "+(01) 426-9824",
      "hello@gloriathemes.com",
      "12369, New York, USA"
    ]
  }
]

const mapConfig = {
  zoom: 9,
  center: { lat: 37.7577627, lng: -122.4726194 },
  mapStyle: 'roadmap'
}
</script>

<template>
  <section class="w-full bg-[#0a0a0a]">
    <div class="w-full">
      <!-- Map Container -->
      <div class="relative w-full h-[70vh] bg-[#1a1a1a]">
        <!-- Placeholder for Google Maps -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="text-center">
            <p class="text-gray-400 text-lg mb-2">Google Maps Integration</p>
            <p class="text-gray-500 text-sm">
              Integrate Google Maps API with coordinates:<br>
              Center: {{ mapConfig.center.lat }}, {{ mapConfig.center.lng }}<br>
              Zoom: {{ mapConfig.zoom }}
            </p>
            <div class="mt-6 space-y-4 max-w-md mx-auto">
              <div 
                v-for="(location, index) in mapLocations" 
                :key="index"
                class="bg-[#0a0a0a] p-4 rounded text-left"
              >
                <h4 class="text-white font-semibold mb-2">{{ location.title }}</h4>
                <p 
                  v-for="(detail, idx) in location.details" 
                  :key="idx"
                  class="text-gray-400 text-sm"
                >
                  {{ detail }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Map Overlay/Filter -->
        <div class="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
      </div>
    </div>
  </section>
</template>