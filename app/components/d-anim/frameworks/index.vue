<script setup lang="ts">
import { useFrameworks } from "~/utils/useFrameworks"

const { frameworks, getFrameworkPath, getFrameworkName } = useFrameworks()

const ROTATION_INTERVAL = 3000
const ITEM_GAP = 120

const positions = ref([0, 1, 2, 3, 4])

// Calculate position style based on position index
function getPositionStyle(position: number) {
  switch (position) {
    case 0: // Off-screen left
      return "scale-0 translate-x-[-250%] opacity-0"
    case 1: // Left of active
      return "translate-x-[-180%] scale-75"
    case 2: // Active center
      return "translate-x-[-50%] scale-100 opacity-100 z-10"
    case 3: // Right of active
      return "translate-x-[80%] scale-75"
    case 4: // Off-screen right
      return "translate-x-[150%] scale-50 opacity-0"
    default: // Should never happen
      return ""
  }
}

// Get the class for a framework at a given index
function getFrameworkClass(frameworkIndex: number) {
  const position = positions.value.indexOf(frameworkIndex)
  if (position === -1) {
    // This framework is not currently visible
    return "translate-x-[600px] scale-0 opacity-0"
  }
  return getPositionStyle(position)
}

function rotateCarousel() {
  // Move everything one position to the left
  const newPositions = [...positions.value]

  // The item at position 0 goes off-screen, we need a new item at position 4
  const exitingIndex = newPositions[0]

  // Shift all positions left
  for (let i = 0; i < 4; i++) {
    newPositions[i] = newPositions[i + 1]
  }

  // Add new item at position 4 (coming from the right)
  // Get the next framework index after the current position 4
  const currentLastIndex = newPositions[3]
  newPositions[4] = (currentLastIndex + 1) % frameworks.length

  positions.value = newPositions
}

onMounted(() => {
  if (process.client) {
    const interval = setInterval(rotateCarousel, ROTATION_INTERVAL)

    onUnmounted(() => {
      clearInterval(interval)
    })
  }
})
</script>

<template>
  <div class="relative h-48 w-full overflow-hidden">
    <div class="absolute inset-0 flex items-center">
      <div
        v-for="(framework, index) in frameworks"
        :key="`${framework}-${index}`"
        class="absolute top-1/2 left-1/2 flex size-24 -translate-y-1/2 items-center justify-center overflow-hidden rounded-3xl bg-white shadow-sm transition-all duration-700 ease-out"
        :style="`--index: ${index}`"
        :class="[getFrameworkClass(index)]"
      >
        <img
          :src="getFrameworkPath(framework)"
          :alt="getFrameworkName(framework)"
          class="size-full object-contain"
        />
      </div>
    </div>
  </div>
</template>
