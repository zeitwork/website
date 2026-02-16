<template>
  <div class="bg-neutral py-20 md:py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>Early Access Program</d-title>
          <d-description>
            We're building Zeitwork in the open and looking for developers who want to shape the
            future of cloud infrastructure.
          </d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-2">
          <d-card>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-neutral mb-5 text-2xl">What You Get</p>
              <div class="flex flex-col gap-3">
                <d-check>Direct access to the founding team</d-check>
                <d-check>Priority feature requests</d-check>
                <d-check>Free usage during early access</d-check>
                <d-check>Shape the platform from day one</d-check>
                <d-check>Early access to new regions and features</d-check>
              </div>
            </div>
          </d-card>
          <d-card>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-neutral mb-5 text-2xl">What We're Looking For</p>
              <div class="flex flex-col gap-3">
                <d-check>Developers frustrated with current platforms</d-check>
                <d-check>Teams running complex applications</d-check>
                <d-check>Open source enthusiasts</d-check>
                <d-check>Builders who value simplicity and power</d-check>
              </div>
              <div class="mt-3">
                <d-button variant="secondary" size="sm"> Migrate now </d-button>
              </div>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
