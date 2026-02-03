<template>
  <div class="pt-[120px]">
    <d-wrapper>
      <div class="flex flex-col gap-[62px]">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-[18px]">
            <h1 class="text-[32px] font-medium leading-[1.15] tracking-[-0.64px] text-stone-900">
              Ship your code.<br />
              We'll handle the rest.
            </h1>
            <p class="text-lg font-medium leading-[1.4] text-stone-500">
              Connect your repository. We build your code and deploy it to production.<br />
              No AWS console. No glue code. No infrastructure team required.
            </p>
          </div>
          <div class="flex items-center gap-2">
            <NuxtLink
              to="/signup"
              class="flex h-[42px] items-center rounded-full bg-stone-900 px-4 text-base font-medium text-white shadow-sm transition-colors hover:bg-stone-800"
            >
              Start deploying now
            </NuxtLink>
            <NuxtLink
              to="https://github.com/zeitwork"
              target="_blank"
              class="flex h-[42px] items-center gap-1 rounded-full bg-stone-200 px-4 text-base font-medium text-stone-900 transition-colors hover:bg-stone-300"
            >
              View on GitHub
            </NuxtLink>
          </div>
        </div>

        <!-- Dashboard Screenshot -->
        <div class="relative h-[300px] w-full overflow-hidden rounded sm:h-[474px]">
          <img
            src="/og-image.png"
            alt="Zeitwork Dashboard"
            class="h-full w-full object-cover object-top"
          />
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
