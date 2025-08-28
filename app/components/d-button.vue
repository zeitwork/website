<script setup lang="ts">
type Props = {
  variant: "primary" | "secondary"
  size: "sm" | "md"
}

const { variant = "primary", size = "md" } = defineProps<Props>()

const variantClasses = {
  primary: "bg-surface-inverse text-neutral-onsurface hover:bg-surface-inverse-subtle",
  secondary: "bg-surface-subtle hover:bg-neutral-strong text-neutral"
}

const sizeClasses = {
  sm: "h-9 px-4",
  md: "h-12 px-5"
}
</script>
<template>
  <button
    class="text-copy-lg flex cursor-pointer items-center rounded-full"
    :class="[variantClasses[variant], sizeClasses[size]]"
  >
    <slot />
  </button>
</template>
