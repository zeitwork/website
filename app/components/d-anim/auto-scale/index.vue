<script setup lang="ts">
import { animate } from "animejs";

const state = ref(0);
const spacing = ref(60);
const node1Height = ref(20);
const node2Height = ref(20);

onMounted(() => {
  const duration = 5000;

  animate(node1Height, {
    keyframes: {
      "0%": { value: 20 },
      "20%": { value: 80, ease: "outQuad" },
      "35%": { value: 60, ease: "inOutQuad" },
      "70%": { value: 20, ease: "inQuad" },
      "100%": { value: 20 },
    },
    duration,
    loop: true,
    autoplay: true,
  });

  animate(node2Height, {
    keyframes: {
      "0%": { value: 20 },
      "20%": { value: 20 },
      "35%": { value: 40, ease: "inOutQuad" },
      "70%": { value: 20, ease: "inQuad" },
      "100%": { value: 20 },
    },
    duration,
    loop: true,
    autoplay: true,
  });

  animate(state, {
    keyframes: {
      "0%": { value: 0 },
      "20%": { value: 0 },
      "20.1%": { value: 1 },
      "70%": { value: 1 },
      "70.1%": { value: 0 },
      "100%": { value: 0 },
    },
    duration,
    loop: true,
    autoplay: true,
    ease: "linear",
  });
});
</script>

<template>
  <div
    class="relative flex size-full items-center justify-center p-5"
    :style="`--block-spacing: ${spacing}%;`"
  >
    <DAnimAutoScaleNode
      class="absolute z-10"
      state="gray"
      :height="node1Height"
      :class="state === 1 ? '-translate-x-(--block-spacing)' : ''"
    />
    <DAnimAutoScaleNode
      class="absolute scale-0"
      state="gray"
      :height="node2Height"
      :class="state === 1 ? 'translate-x-(--block-spacing) scale-100' : ''"
    />
  </div>
</template>
