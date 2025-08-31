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
  <div>
    <NuxtRouteAnnouncer />
    <SectionHero />
    <SectionDevExperience />
    <SectionHowShip />
    <SectionRunAnything />
    <SectionTechYouLove />
    <SectionArchitecture />
    <SectionBuiltForTeams />
    <SectionOpenSource />
    <SectionCta />
  </div>
</template>
