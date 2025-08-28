<script setup lang="ts">
const tech = ["golang", "nuxt", "next", "rails"]
const marqueeRef = ref()

const config = {
  minScale: 0.5,
  maxScale: 1.0,
  minOpacity: 0.4,
  maxOpacity: 1.0,
  speed: 40
}

function updateScales() {
  if (!marqueeRef.value) return
  const logos = marqueeRef.value.querySelectorAll(".logo")
  const viewportCenter = window.innerWidth / 2

  logos.forEach((logo: HTMLElement) => {
    const rect = logo.getBoundingClientRect()
    const logoCenter = rect.left + rect.width / 2
    const distance = Math.abs(logoCenter - viewportCenter)
    const maxDistance = window.innerWidth / 2
    const normalizedDistance = Math.min(distance / maxDistance, 1)
    const scale = config.minScale + (1 - normalizedDistance) * (config.maxScale - config.minScale)
    const opacity =
      config.minOpacity + (1 - normalizedDistance) * (config.maxOpacity - config.minOpacity)

    logo.style.transform = `scale(${scale})`
    logo.style.opacity = opacity.toString()
  })
}

onMounted(() => {
  const interval = setInterval(updateScales, 16)
  onUnmounted(() => clearInterval(interval))
})
</script>
<template>
  <div class="py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Use the Tech You Love</d-title>
          <d-description>
            Build with your favorite framework. No Dockerfile? No problem: our CLI generates
            containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel,
            and NET.
          </d-description>
        </d-title-container>
      </div>
    </d-wrapper>

    <div
      class="relative mt-16 h-32 overflow-hidden"
      style="mask: linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)"
    >
      <div
        ref="marqueeRef"
        class="marquee flex items-center"
        :style="`--speed: ${config.speed}s`"
      >
        <div
          v-for="(item, index) in [...tech, ...tech, ...tech, ...tech, ...tech, ...tech]"
          :key="`${item}-${index}`"
          class="logo mr-16 flex h-20 w-20 flex-shrink-0 items-center justify-center"
        >
          <img
            :src="`illustration/tech/${item}.png`"
            :alt="`${item} logo`"
            class="h-full w-full object-contain"
          />
        </div>
        <div
          v-for="(item, index) in [...tech, ...tech, ...tech, ...tech, ...tech, ...tech]"
          :key="`duplicate-${item}-${index}`"
          class="logo mr-16 flex h-20 w-20 flex-shrink-0 items-center justify-center"
        >
          <img
            :src="`illustration/tech/${item}.png`"
            :alt="`${item} logo`"
            class="h-full w-full object-contain"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  animation: scroll var(--speed, 30s) linear infinite;
  width: fit-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
