<script setup lang="ts">
import { useWindowScroll } from "@vueuse/core"

const { y } = useWindowScroll()

const isScrolled = computed(() => y.value > 20)
</script>

<template>
  <div class="fixed top-0 isolate z-50 mx-auto w-full px-2 py-2">
    <div
      class="ease-out-expo mx-auto flex items-center justify-between rounded-xl border px-2 py-2 transition-all duration-500"
      :class="[
        isScrolled
          ? 'max-w-2xl border-black/5 bg-white/50 shadow backdrop-blur-xl'
          : 'max-w-5xl border-transparent bg-transparent'
      ]"
    >
      <NuxtLink
        to="/"
        class="p-2"
      >
        <d-logo class="text-stone-900" />
      </NuxtLink>

      <div class="flex items-center gap-2">
        <NuxtLink
          to="/login"
          class="flex h-8 items-center rounded-full bg-stone-200 px-3.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300"
        >
          Log In
        </NuxtLink>
        <NuxtLink
          to="/signup"
          class="flex h-8 items-center rounded-full bg-stone-900 px-3.5 text-sm font-medium text-white shadow-sm transition-colors hover:bg-stone-800"
        >
          Get Started
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
