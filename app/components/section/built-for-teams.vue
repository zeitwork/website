<template>
  <div class="dark bg-surface-subtle py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Built for Teams That Ship</d-title>
          <d-description>Ship faster, safer, and without second-guessing.</d-description>
        </d-title-container>
        <div class="flex flex-col gap-3">
          <d-card>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Git-Native Workflows</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Branch previews for every PR. One-click rollbacks. Your existing workflow,
                supercharged.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Security by Default</p>
              <div class="text-coyp-lg text-neutral-subtle grid gap-2 md:grid-cols-2">
                <d-check>Encrypted secrets management</d-check>
                <d-check>Automatic security patches</d-check>
                <d-check>Hardware-level isolation for every app</d-check>
                <d-check>Automatic SSL provisioning</d-check>
              </div>
            </div>
          </d-card>
          <d-card>
            <div class="flex flex-col gap-2 p-6">
              <div class="flex items-center gap-2">
                <p class="text-copy-lg text-neutral">Global Metal Fleet</p>
                <div class="bg-surface text-neutral-subtle inline-flex rounded-full px-2">
                  Coming soon
                </div>
              </div>
              <p class="text-coyp-lg text-neutral-subtle max-w-xl">
                We will offer multiple regions across the globe, ensuring direct peering with
                leading ISPs. This setup guarantees low latency for your users.
              </p>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
