<script setup lang="ts">
type Props = {
  variant: "primary" | "secondary";
};

const { variant = "primary" } = defineProps<Props>();

const variantClasses = {
  primary: "bg-neutral-900 text-white hover:bg-neutral-700",
  secondary: "bg-neutral-subtle hover:bg-neutral-strong",
};
</script>
<template>
  <button
    class="px-5 h-12 flex items-center rounded-full text-copy-lg cursor-pointer"
    :class="[variantClasses[variant]]"
  >
    <slot />
  </button>
</template>
