<template>
  <div class="py-20 md:py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container center>
          <d-title>
            Developer experience
            <br />
            without the limitations
          </d-title>
          <d-description>No infrastructure expertise required.</d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-6">
          <d-card class="md:col-span-3">
            <div class="flex h-[180px] overflow-hidden">
              <DAnimSecurity class="h-full w-full" />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">No DevOps required.</p>
              <p class="text-coyp-lg text-neutral-subtle">
                We handle SSL certificates, and scaling. You just push code.
              </p>
            </div>
          </d-card>
          <d-card class="md:col-span-3">
            <div class="flex h-[180px] items-center">
              <DAnimDeploy class="h-full w-full" />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Deploy from Git</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Simply push and enjoy branch previews, rollbacks and deployment history.
              </p>
            </div>
          </d-card>
          <d-card class="md:col-span-2">
            <div class="h-[180px]">
              <div class="flex h-[180px] items-center">
                <DAnimDetect class="h-full w-full" />
              </div>
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Zero configuration</p>
              <p class="text-coyp-lg text-neutral-subtle">
                We detect your framework and build it automatically.
              </p>
            </div>
          </d-card>
          <d-card class="md:col-span-2">
            <div class="h-[180px]">
              <img
                src="/illustration/04.png"
                alt="Auto Scaling"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Auto Scaling</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Handle traffic spikes without manual intervention.
              </p>
            </div>
          </d-card>
          <d-card class="md:col-span-2">
            <div class="flex h-[180px] items-center">
              <DAnimFrameworks class="h-full w-full" />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Full application support</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Long-running processes, background jobs, WebSockets.
              </p>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
