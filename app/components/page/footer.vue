<script setup lang="ts">
const { links } = useSocialLinks()
</script>

<template>
  <footer class="bg-stone-50 py-8 sm:py-12">
    <d-wrapper>
      <div class="flex items-center justify-between">
        <NuxtLink to="/">
          <d-logo class="text-stone-500" />
        </NuxtLink>
        <div class="flex items-center gap-3">
          <NuxtLink
            v-for="link in links"
            :key="link.img"
            :to="link.url"
            target="_blank"
            class="grid size-8 place-items-center opacity-50 transition-opacity hover:opacity-100"
          >
            <img
              :src="`/icon/${link.img}`"
              :alt="link.img.replace('.svg', '')"
              class="size-5"
            />
          </NuxtLink>
        </div>
      </div>
    </d-wrapper>
  </footer>
</template>
