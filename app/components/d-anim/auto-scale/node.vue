<script setup lang="ts">
type Props = {
  height: number;
};

const { height } = defineProps<Props>();

const colorClass = computed(() => {
  if (height > 70) return "bg-orange-500";
  if (height > 30) return "bg-green-500";
  return "bg-neutral-200";
});
</script>
<template>
  <div
    class="border-neutral-subtle bg-surface-subtle ease-out-expo flex h-32 w-14 items-end rounded-[16px] border-3 p-0.5 transition-all duration-500"
  >
    <div
      class="ease-out-expo w-full rounded-[12px] transition-all duration-300"
      :class="colorClass"
      :style="{ height: `${height}%` }"
    />
  </div>
</template>
