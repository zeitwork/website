<script setup lang="ts">
const { links } = useSocialLinks()
</script>
<template>
  <d-wrapper>
    <div class="flex items-center justify-between gap-1 py-8">
      <NuxtLink
        to="/"
        class="p-2"
      >
        <d-logo class="text-neutral-subtle" />
      </NuxtLink>
      <div class="flex items-center gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.img"
          class="hover:bg-surface-subtle grid size-9 place-items-center rounded-full opacity-50 hover:opacity-100"
          :to="link.url"
          target="_blank"
        >
          <img :src="`/icon/${link.img}`" />
        </NuxtLink>
      </div>
    </div>
  </d-wrapper>
</template>
