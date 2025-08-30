<template>
  <div class="dark bg-neutral py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Open Source to the Core</d-title>
          <d-description>
            Zeitwork isn't just "open source friendly", we're radically transparent. Every
            component, from our control plane to our edge router, is available on GitHub.
          </d-description>
          <div>
            <d-button
              class="mt-4"
              size="sm"
              variant="secondary"
              to="https://github.com/zeitwork/zeitwork"
              target="_blank"
            >
              Explore on GitHub
            </d-button>
          </div>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-3">
          <d-card>
            <div class="h-[180px]">
              <img
                class="h-full w-full object-cover"
                src="/illustration/open-source/01.png"
                alt="Shield"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Run Your Own Zeitwork</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Deploy our entire platform on your infrastructure. Same code that powers our cloud,
                running in your data center.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                class="h-full w-full object-cover"
                src="/illustration/open-source/02.png"
                alt="Shield"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Contribute & Shape the Future</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Found a bug? Want a feature? The code is right there. PRs welcome, and we actually
                merge them.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                class="h-full w-full object-cover"
                src="/illustration/open-source/03.png"
                alt="Shield"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">No Vendor Lock-In</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Your apps run in standard containers. Export your config anytime. Move to any
                platform or self-host whenever you want.
              </p>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
