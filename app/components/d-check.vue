<script setup lang="ts">
import { CheckCircleIcon } from "@heroicons/vue/16/solid";
</script>
<template>
  <div class="flex items-center gap-2">
    <div><CheckCircleIcon class="size-4 text-green-500" /></div>
    <p class="text-neutral text-copy-lg"><slot /></p>
  </div>
</template>
