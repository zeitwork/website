<script setup>
useUnicornStudio()
</script>

<template>
  <div class="h-screen py-30">
    <d-wrapper>
      <div class="relative z-10 flex max-w-xl flex-col gap-8 py-40">
        <h1 class="text-4xl leading-tight tracking-tight md:text-6xl">
          The Open Source Cloud That Runs Everything
        </h1>
        <p class="text-copy-lg text-neutral-subtle">
          <span class="text-neutral">Deploy any application in seconds.</span>
          If it runs in a container, it runs on Zeitwork. Built on highly optimized microVMs,
          deployed on our metal, scaled automatically worldwide.
        </p>
        <d-waitlist-form />
        <!-- <div class="flex items-center gap-2">
          <d-button>Get Early Access</d-button>
          <d-button variant="secondary">View on GitHub</d-button>
        </div> -->
      </div>
      <div
        data-us-project="AwvRdOcGsL2B2n5Cake3"
        class="absolute inset-0 h-full w-full"
      ></div>
    </d-wrapper>
  </div>
</template>
