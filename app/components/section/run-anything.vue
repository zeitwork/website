<script setup lang="ts">
import {
  WindowIcon,
  ClockIcon,
  BoltIcon,
  CircleStackIcon,
  CalendarDateRangeIcon,
  CloudIcon
} from "@heroicons/vue/16/solid"
const cards = [
  {
    icon: WindowIcon,
    title: "Full-Stack Applications",
    description:
      'Next.js, Rails, Django, Laravel. Your entire app, not just the "serverless parts."'
  },
  {
    icon: ClockIcon,
    title: "Long-Running Services",
    description:
      "Background workers, queue processors, cron jobs. They run continuously, as they should."
  },
  {
    icon: BoltIcon,
    title: "Real-Time & Persistent Connections",
    description: "WebSockets, gRPC, game backends. Connections that last hours, not milliseconds."
  },
  {
    icon: CircleStackIcon,
    title: "Data & ML Workloads",
    description:
      "Training pipelines, inference endpoints, Jupyter notebooks. GPU acceleration coming soon."
  },
  {
    icon: CalendarDateRangeIcon,
    title: "Legacy Applications",
    description:
      "That 10-year-old Java monolith? The PHP app from 2015? If it containerizes, it scales."
  },
  {
    icon: CloudIcon,
    title: "Internal Tools & Automation",
    description:
      "Admin panels, data pipelines, automation scripts. The tools that power your business."
  }
]

const activeTab = ref(0)
</script>
<template>
  <div class="bg-surface-weak py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Run Anything. We Mean It.</d-title>
          <d-description>No infrastructure expertise required.</d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div
            class="text-neutral space-y-2 p-6"
            v-for="card in cards"
          >
            <component
              :is="card.icon"
              class="size-4"
            />
            <p class="text-copy-lg">{{ card.title }}</p>
            <p class="text-copy-lg text-neutral-subtle">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
