<template>
  <d-wrapper as="section">
    <div class="flex flex-col gap-[42px]">
        <div class="flex flex-col gap-3">
          <h2
            class="text-2xl font-medium leading-[1.15] tracking-[-0.64px] text-stone-900 sm:text-[32px]"
          >
            Built for teams who've outgrown the simple stuff
          </h2>
          <p
            class="text-2xl font-medium leading-[1.3] tracking-[-0.64px] text-stone-500 sm:text-[32px]"
          >
            You've hit the wall with platforms that work for prototypes but break under real load.
            You need real backend power but you dread the AWS learning curve. You just want to ship
            code.
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
  </d-wrapper>
</template>
