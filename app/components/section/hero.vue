<script setup>
const { elementId, projectId } = useUnicornStudio("AwvRdOcGsL2B2n5Cake3")
</script>

<template>
  <div class="relative flex h-svh flex-col items-start justify-center py-30">
    <d-wrapper>
      <div class="relative z-10 flex max-w-2xl flex-col items-start gap-8">
        <h1 class="text-4xl leading-tight tracking-tight md:text-6xl">
          The Open Source Cloud That Runs Everything
        </h1>
        <p class="text-copy-lg text-neutral">
          <span class="text-neutral">Deploy any application in seconds.</span>
          <span class="opacity-60">
            If it runs in a container, it runs on Zeitwork. Built on highly optimized microVMs,
            deployed on our metal, scaled automatically worldwide.
          </span>
        </p>
        <div class="w-full">
          <d-waitlist-form />
        </div>
        <!-- <div class="flex items-center gap-2">
          <d-button>Get Early Access</d-button>
          <d-button variant="secondary">View on GitHub</d-button>
        </div> -->
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
