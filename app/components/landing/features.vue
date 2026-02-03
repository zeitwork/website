<script setup lang="ts">
type Feature = {
  title: string
  description: string
  comingSoon?: boolean
}

const features: Feature[] = [
  {
    title: "Compute",
    description: "Containers. Standard Docker. No rewrites. No lock-in."
  },
  {
    title: "Database",
    description: "Postgres. The database you already know.",
    comingSoon: true
  },
  {
    title: "Storage",
    description: "S3-compatible. Drop in replacement.",
    comingSoon: true
  },
  {
    title: "Queues",
    description: "Durable Message Queue with guaranteed delivery.",
    comingSoon: true
  },
  {
    title: "Observability",
    description: "Logs and metrics without the configuration hell.",
    comingSoon: true
  }
]
</script>

<template>
  <d-wrapper as="section">
    <div class="flex flex-col gap-[42px]">
        <h2
          class="text-2xl font-medium leading-[1.15] tracking-[-0.64px] text-stone-900 sm:text-[32px]"
        >
          Everything your app needs. One platform.
        </h2>
        <div
          class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:h-[640px] lg:grid-cols-3 lg:grid-rows-2"
        >
          <div
            v-for="feature in features"
            :key="feature.title"
            class="flex flex-col justify-between overflow-hidden rounded bg-stone-100 p-6"
          >
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-2xl font-medium leading-normal tracking-[-0.48px] text-stone-900">
                {{ feature.title }}
              </h3>
              <span
                v-if="feature.comingSoon"
                class="shrink-0 whitespace-nowrap rounded-full bg-stone-200 px-2 py-1 text-sm leading-none tracking-[-0.28px] text-stone-600"
              >
                Coming soon
              </span>
            </div>
            <p class="text-lg font-medium leading-[1.4] tracking-[-0.18px] text-stone-500">
              {{ feature.description }}
            </p>
          </div>

          <!-- Missing something card -->
          <div class="flex flex-col justify-between overflow-hidden rounded bg-stone-100 p-6">
            <h3 class="text-2xl font-medium leading-normal tracking-[-0.48px] text-stone-500">
              Missing something?
            </h3>
            <NuxtLink
              to="https://github.com/zeitwork/zeitwork/discussions"
              target="_blank"
              class="flex h-8 w-fit items-center rounded-full bg-stone-200 px-3.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-300"
            >
              Suggest a feature
            </NuxtLink>
          </div>
        </div>
    </div>
  </d-wrapper>
</template>
