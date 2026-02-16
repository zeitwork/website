<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core";

const { y } = useWindowScroll();

const { links } = useSocialLinks();

const isScrolled = computed(() => y.value > 20);
</script>

<template>
  <div class="fixed top-0 isolate z-50 mx-auto w-full px-2 py-2">
    <div class="">
      <div
        class="ease-out-expo mx-auto flex items-center justify-between rounded-xl border px-2 py-2 transition-all duration-500"
        :class="[
          isScrolled
            ? 'max-w-xl border-black/5 bg-white/50 shadow backdrop-blur-xl'
            : 'max-w-4xl border-transparent bg-white/50 backdrop-blur-xl md:bg-white/0 md:backdrop-blur-none',
        ]"
      >
        <NuxtLink to="/" class="p-2">
          <d-logo class="text-black" />
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
    </div>
  </div>
</template>
