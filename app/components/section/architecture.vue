<template>
  <div class="dark bg-neutral py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>The Architecture Behind Your Apps</d-title>
          <d-description>
            Build with your favorite framework. No Dockerfile? No problem: our CLI generates
            containers for most popular frameworks, including Rails, Phoenix, Django, Node, Laravel,
            and NET.
          </d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-2">
          <d-card>
            <div class="h-[180px]">
              <img
                class="h-full w-full object-cover"
                src="/illustration/architecture/01.png"
                alt="Shield"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Highly Optimized MicroVMs</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Always operational with no cold starts, featuring hardware-level isolation and
                memory-safe virtualization, all while utilizing appropriately sized resources.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                src="/illustration/architecture/02.png"
                alt="Deployments"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Global Metal Fleet</p>
              <p class="text-coyp-lg text-neutral-subtle">
                We offer multiple regions across the globe, ensuring direct peering with leading
                ISPs. This setup guarantees low latency for your users, all powered by 100%
                renewable energy.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                src="/illustration/architecture/03.png"
                alt="Detecting Setup"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Intelligent Auto-Scaling</p>
              <p class="text-coyp-lg text-neutral-subtle">
                Automatic horizontal scaling, adjusting resources to meet demand seamlessly. With
                always-on instances, you can rely on consistent performance. Predictive scaling
                leverages historical data to optimize resource allocation, eliminating manual
                adjustments.
              </p>
            </div>
          </d-card>
          <d-card>
            <div class="h-[180px]">
              <img
                src="/illustration/architecture/04.png"
                alt="Auto Scaling"
              />
            </div>
            <div class="flex flex-col gap-2 p-6">
              <p class="text-copy-lg text-neutral">Edge-Native Networking</p>
              <p class="text-coyp-lg text-neutral-subtle">
                We provide Anycast routing for efficient traffic management, along with automatic
                failover to maintain service continuity. Built-in DDoS protection safeguards your
                applications, and we offer free SSL certificates to enhance security.
              </p>
            </div>
          </d-card>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
