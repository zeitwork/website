<script setup lang="ts">
import { Loader2, Check } from "lucide-vue-next"

const isDetecting = ref(false)
const detectionComplete = ref(false)
const isPressed = ref(false)

function startDetection() {
  if (isDetecting.value) return

  // Quick press animation
  isPressed.value = true
  setTimeout(() => {
    isPressed.value = false
  }, 150)

  // Start detection after press animation
  setTimeout(() => {
    isDetecting.value = true
    detectionComplete.value = false

    setTimeout(() => {
      isDetecting.value = false
      detectionComplete.value = true

      setTimeout(() => {
        detectionComplete.value = false
      }, 2000)
    }, 5000)
  }, 100)
}

onMounted(() => {
  if (process.client) {
    setTimeout(() => {
      startDetection()
    }, 1000)

    setInterval(() => {
      startDetection()
    }, 10000)
  }
})
</script>

<template>
  <div class="relative flex size-full items-center justify-center p-5">
    <button
      class="bg-neutral-strong ease-out-expo relative flex h-10 items-center justify-center gap-1.5 rounded-full px-5 py-2.5 transition-all duration-300"
      :class="[detectionComplete ? 'w-54 bg-green-500/10' : 'w-44', isPressed ? 'scale-95' : '']"
      :style="isPressed ? 'transition-duration: 150ms' : ''"
      @click="startDetection"
    >
      <Transition name="fade-up">
        <div
          v-if="!isDetecting && !detectionComplete"
          key="start"
          class="absolute flex items-center gap-1.5"
        >
          <span class="text-copy-lg text-neutral tracking-wide whitespace-nowrap">
            Start Detection
          </span>
        </div>

        <div
          v-else-if="isDetecting"
          key="detecting"
          class="absolute flex items-center gap-1.5"
        >
          <Loader2 class="anim-spin size-4 stroke-[4px] text-neutral-300" />

          <span class="text-copy-lg text-neutral tracking-wide whitespace-nowrap">
            Detecting Setup
          </span>
        </div>

        <div
          v-else-if="detectionComplete"
          key="complete"
          class="absolute flex items-center gap-1.5"
        >
          <Check class="size-4 stroke-[4px] text-green-600" />

          <span class="text-copy-lg text-neutral tracking-wide whitespace-nowrap">
            Framework Detected
          </span>
        </div>
      </Transition>

      <div
        v-for="i in 3"
        :key="i"
        class="border-neutral-strong/30 ease-out-expo pointer-events-none absolute rounded-full border transition-all"
        :class="[
          i === 1 ? 'border-2' : i === 2 ? 'border' : 'border',
          i === 1
            ? 'duration-1000'
            : i === 2
              ? 'delay-100 duration-1000'
              : 'delay-200 duration-1000'
        ]"
        :style="[
          `--index: ${i}`,
          isDetecting
            ? `inset: calc(var(--index) * -15px); opacity: 0`
            : `inset: calc(var(--index) * -5px); opacity: ${0.6 - i * 0.2}`
        ]"
      />
    </button>
  </div>
</template>

<style scoped>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.anim-spin {
  animation: spin 400ms linear infinite;
}
</style>
