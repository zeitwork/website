<script setup lang="ts">
type Props = {
  height: number
}

const { height } = defineProps<Props>()

const colorClass = computed(() => {
  if (height > 80) return "bg-red-500"
  if (height > 70) return "bg-orange-500"
  return "bg-green-500"
})
</script>
<template>
  <div
    class="border-neutral bg-surface-strong ease-out-expo flex h-32 w-14 items-end rounded-[18px] border-3 p-0.5 transition-all duration-500"
  >
    <div
      class="ease-out-expo w-full rounded-[14px] transition-all duration-300"
      :class="colorClass"
      :style="{ height: `${height}%` }"
    />
  </div>
</template>
