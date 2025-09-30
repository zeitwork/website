<script setup lang="ts">
import { NuxtLink } from "#components"

type Props = {
  variant: "primary" | "secondary"
  size: "sm" | "md"
  to?: string
}

const { variant = "primary", to, size = "md" } = defineProps<Props>()

const variantClasses = {
  primary: "bg-surface-inverse text-neutral-onsurface hover:bg-surface-inverse-subtle",
  secondary: "bg-surface-subtle hover:bg-neutral-strong text-neutral"
}

const sizeClasses = {
  sm: "h-9 px-4",
  md: "h-12 px-5"
}

const comp = computed(() => {
  return to ? NuxtLink : "button"
})
</script>
<template>
  <component
    :is="comp"
    :to="to"
    class="text-copy-lg inline-flex cursor-pointer items-center rounded-full whitespace-nowrap ring-offset-2 transition-all outline-none select-none focus-visible:ring-2 focus-visible:ring-blue-600"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </component>
</template>
