<script setup lang="ts">
type Props = {
  to: string
}

defineProps<Props>()
</script>
<template>
  <DHover
    class="text-copy text-neutral cursor-pointer px-2 py-0.5 transition-colors select-none"
    border-radius="rounded-full"
    background-color="bg-neutral-strong"
  >
    <NuxtLink :to="to">
      <slot />
    </NuxtLink>
  </DHover>
</template>
