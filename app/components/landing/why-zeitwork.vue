<script setup lang="ts">
type Reason = {
  title: string
  description: string
}

const reasons: Reason[] = [
  {
    title: "One platform, not five",
    description:
      "Vercel, Neon, and Upstash means three bills and writing glue code to make them work together."
  },
  {
    title: "Real compute, not toys",
    description:
      "They give you edge functions that break complex apps. We give you standards. No limits. No rewrites."
  },
  {
    title: "Boring tech that works",
    description: "Other platforms force you to learn new DSLs. Zeitwork gives you standards."
  },
  {
    title: "Vercel's simplicity, AWS's power",
    description: "The ease of a modern platform with the capability of real infrastructure."
  }
]
</script>

<template>
  <d-wrapper as="section">
    <div class="flex flex-col gap-[42px]">
        <h2
          class="text-2xl font-medium leading-[1.15] tracking-[-0.64px] text-stone-900 sm:text-[32px]"
        >
          Why teams choose Zeitwork
        </h2>
        <div class="grid grid-cols-1 gap-6 sm:h-[640px] sm:grid-cols-2 sm:grid-rows-2">
          <div
            v-for="reason in reasons"
            :key="reason.title"
            class="flex flex-col justify-between overflow-hidden rounded bg-stone-100 p-6"
          >
            <h3 class="text-2xl font-medium leading-normal tracking-[-0.48px] text-stone-900">
              {{ reason.title }}
            </h3>
            <p class="text-lg font-medium leading-[1.4] tracking-[-0.18px] text-stone-500">
              {{ reason.description }}
            </p>
          </div>
        </div>
    </div>
  </d-wrapper>
</template>
