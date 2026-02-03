<script setup lang="ts">
useHead({
  script: [
    ...(process.env.NODE_ENV === "production"
      ? [
          {
            defer: true,
            "data-domain": "zeitwork.com",
            src: "https://plausible.io/js/script.js"
          }
        ]
      : [])
  ]
})
</script>

<template>
  <div class="bg-stone-50 shadow-[0px_4px_20px_0px_rgba(0,0,0,0.05)]">
    <NuxtRouteAnnouncer />
    <LandingHero />
    <LandingPainPoint />
    <LandingFeatures />
    <LandingWhyZeitwork />
    <LandingCta />
  </div>
</template>
