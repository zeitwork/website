<script setup>
const { elementId, projectId } = useUnicornStudio("xMPzWbUJSJQq7Nfyb3Cu")
</script>

<template>
  <div class="relative flex flex-col items-start justify-center py-80 text-center">
    <d-wrapper>
      <div class="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-8">
        <div class="space-y-3">
          <h1 class="text-4xl leading-tight tracking-tight md:text-5xl">Ready to ship faster?</h1>
          <p class="text-copy-lg text-neutral">
            Stop wrestling with infrastructure. Stop overpaying for cloud. Start building.
          </p>
        </div>
        <div class="w-full">
          <d-waitlist-form center />
        </div>
      </div>
      <div
        :id="elementId"
        :data-us-project="projectId"
        data-us-production="true"
        class="absolute inset-0 h-full w-full"
      ></div>
    </d-wrapper>
  </div>
</template>
