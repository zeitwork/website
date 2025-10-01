<script setup lang="ts">
type Props = {
  borderRadius?: string
  backgroundColor?: string
}

const { borderRadius = "rounded-lg", backgroundColor = "bg-neutral-subtle" } = defineProps<Props>()
</script>
<template>
  <div class="group/dhover relative">
    <div class="relative z-10">
      <slot></slot>
    </div>
    <div
      :class="[
        'ease-out-expo absolute inset-0.5 opacity-0 transition-all duration-500 group-hover/dhover:inset-0 group-hover/dhover:opacity-100',
        borderRadius,
        backgroundColor
      ]"
    ></div>
  </div>
</template>
