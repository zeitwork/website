<script setup lang="ts">
type Props = {
  as?: "div" | "section" | "header" | "footer"
}

const { as = "div" } = defineProps<Props>()
</script>

<template>
  <component
    :is="as"
    class="mx-auto w-full max-w-6xl"
    :class="{ 'py-16 sm:py-[120px]': as === 'section' }"
  >
    <div class="px-5 sm:px-20">
      <slot></slot>
    </div>
  </component>
</template>
