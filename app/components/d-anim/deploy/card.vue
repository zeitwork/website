<script setup lang="ts">
import { GitMerge, GitCommitHorizontal, MoreHorizontal, Loader2Icon } from "lucide-vue-next";

type Props = {
  id: string;
  env: string;
  state: "building" | "ready";
  branch: string;
  commit: string;
  commitMessage: string;
};

const {
  id = "EjnklDbk2",
  env = "Production",
  branch = "main",
  state = "building",
} = defineProps<Props>();

const timer = ref(0);
let intervalId: NodeJS.Timeout | null = null;

const mounted = ref(false);

onMounted(() => {
  if (!process.client) return;

  if (state === "building") {
    timer.value = 0;
    intervalId = setInterval(() => {
      timer.value += 1;
    }, 1000);
  }
});

watch(
  () => state,
  (newState) => {
    if (newState === "ready" && intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  },
);

onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
});
</script>
<template>
  <div
    class="border-neutral bg-surface flex w-[982px] rounded-xl border p-[18px]"
    :date-mounted="mounted"
  >
    <!-- App ID and Environment -->
    <div class="flex w-[109px] flex-col gap-0.5">
      <p class="text-copy text-sm uppercase">{{ id }}</p>
      <p class="text-copy text-neutral-subtle">{{ env }}</p>
    </div>

    <!-- Status and Time -->
    <div class="flex w-[120px] flex-col gap-0.5">
      <div v-if="state === 'ready'" class="text-neutral flex items-center gap-1.5">
        <div class="size-2.5 rounded-full bg-green-500"></div>
        <p class="text-copy">Ready</p>
      </div>
      <div v-else="state === 'building'" class="text-neutral flex items-center gap-1.5">
        <div class="size-2.5 rounded-full bg-amber-500"></div>
        <p class="text-copy">Building</p>
      </div>
      <div>
        <Transition name="fade-up">
          <p
            v-if="state === 'building'"
            class="text-copy text-neutral-subtle absolute flex items-center gap-1.5"
          >
            <span>
              <Loader2Icon class="size-2.5 animate-spin stroke-[5px]" />
            </span>
            <span>{{ timer }}s</span>
          </p>
          <p v-else class="text-copy text-neutral-subtle absolute">{{ timer }}s (now)</p>
        </Transition>
      </div>
    </div>

    <!-- Branch and Commit -->
    <div class="flex w-[332px] flex-col gap-0.5">
      <div class="flex items-center gap-2">
        <GitMerge class="text-copy size-3" />
        <p class="text-copy font-mono text-sm font-medium">{{ branch }}</p>
      </div>

      <div class="flex items-center gap-2">
        <div class="text-neutral-subtle flex items-center gap-1">
          <GitCommitHorizontal class="text-copy size-3" />
          <p class="text-copy font-mono text-sm">{{ commit }}</p>
        </div>
        <p class="text-copy line-clamp-1 flex-1 text-sm">{{ commitMessage }}</p>
      </div>
    </div>
  </div>
</template>
