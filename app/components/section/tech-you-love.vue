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

        <div class="relative h-32 overflow-hidden">
          <div class="marquee flex items-center">
            <div
              v-for="(item, index) in [...tech, ...tech, ...tech, ...tech, ...tech, ...tech]"
              :key="`${item}-${index}`"
              class="mr-16 flex h-20 w-20 flex-shrink-0 items-center justify-center"
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
              class="mr-16 flex h-20 w-20 flex-shrink-0 items-center justify-center"
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
    </d-wrapper>
  </div>
</template>

<script setup lang="ts">
const tech = ["golang", "nuxt", "next", "rails"]
</script>

<style scoped>
.marquee {
  animation: scroll 30s linear infinite;
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
