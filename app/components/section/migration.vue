<template>
  <div class="bg-neutral py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Migration in Minutes</d-title>
          <d-description>
            Planning to migrate from another platform? We make it simple.
          </d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-2">
          <d-card>
            <div class="h-[180px]">
              <img
                class="size-full object-contain"
                src="/illustration/migrate/01.png"
                alt="Shield"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">From Vercel/Netlify</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Keep your frontend there, or bring it over. We handle full-stack apps they can't.
              </p>
              <div class="mt-3">
                <d-button
                  variant="secondary"
                  size="sm"
                >
                  Migrate now
                </d-button>
              </div>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                class="size-full object-contain"
                src="/illustration/migrate/02.png"
                alt="Deployments"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">From AWS/GCP/Azure</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Stop managing infrastructure. Get the same power with 90% less complexity.
              </p>
              <div class="mt-3">
                <d-button
                  variant="secondary"
                  size="sm"
                >
                  Migrate now
                </d-button>
              </div>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                class="size-full object-contain"
                src="/illustration/migrate/03.png"
                alt="Detecting Setup"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">From Heroku</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Remember when deployment was simple? We're bringing that feeling back, at scale.
              </p>
              <div class="mt-3">
                <d-button
                  variant="secondary"
                  size="sm"
                >
                  Migrate now
                </d-button>
              </div>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                src="/illustration/migrate/04.png"
                alt="Auto Scaling"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">From Kubernetes</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Love the power, hate the complexity? Get orchestration without the YAML.
              </p>
              <div class="mt-3">
                <d-button
                  variant="secondary"
                  size="sm"
                >
                  Migrate now
                </d-button>
              </div>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
