<script setup lang="ts">
type Props = {
  center?: boolean
}
const { center = true } = defineProps<Props>()
</script>
<template>
  <div
    class="flex flex-col gap-3"
    :class="center ? 'text-center' : ''"
  >
    <slot />
  </div>
</template>
