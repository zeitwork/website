<script setup lang="ts">
const tabs = [
  {
    title: "Connect your repository",
    description:
      "Link your GitHub repo with a single click. We'll detect your framework automatically."
  },
  {
    title: "Push your code",
    description:
      "Every push to main deploys globally. Branch previews and one-click rollbacks included."
  },
  {
    title: "Automatic scaling",
    description:
      "We monitor your app and scale horizontally based on real usage. Your instances are always running."
  }
]

const activeTab = ref(0)
</script>
<template>
  <div class="py-20 md:py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container center>
          <d-title>How Developers Ship on Zeitwork</d-title>
          <d-description>
            No Dockerfiles to write. No Kubernetes to learn. No infrastructure to manage.
            <br />
            Just push code and let us handle the rest.
          </d-description>
        </d-title-container>
        <div class="flex flex-col-reverse gap-6 md:grid md:grid-cols-12">
          <div class="col-span-5 flex flex-col gap-4">
            <button
              @click="activeTab = index"
              class="focus-visible:bg-surface focus:border-neutral flex cursor-pointer flex-col rounded-xl border text-left transition-all outline-none select-none"
              :class="
                activeTab === index
                  ? 'bg-surface border-neutral shadow-md'
                  : 'bg-surface-weak hover:bg-surface hover:border-neutral border-transparent hover:shadow-md'
              "
              v-for="(tab, index) in tabs"
            >
              <p
                class="text-copy-lg text-neutral ease-out-expo transition-all duration-500"
                :class="activeTab === index ? 'px-6 pt-6 pb-2' : 'p-6'"
              >
                {{ tab.title }}
              </p>
              <div
                class="ease-out-expo grid transition-all duration-500"
                :class="
                  activeTab === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <p
                    class="text-copy-lg text-neutral-subtle ease-out-cubic mt-2 px-6 pb-6 transition-all duration-500"
                    :class="
                      activeTab === index
                        ? 'translate-y-0 scale-100 opacity-100'
                        : 'translate-y-10 scale-96 opacity-0'
                    "
                  >
                    {{ tab.description }}
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div
            class="bg-surface-weak relative col-span-7 h-[280px] overflow-hidden rounded-xl select-none md:h-auto"
          >
            <div
              v-for="(tab, index) in tabs"
              class="ease-out-expo absolute inset-6 transition-all duration-500"
              :class="
                activeTab === index
                  ? 'z-10 scale-100 opacity-100'
                  : `${index > activeTab ? 'translate-y-[40%]' : '-translate-y-[40%]'} scale-80 opacity-0`
              "
            >
              <img
                class="size-full object-contain"
                :src="`/illustration/how-use/0${index + 1}.png`"
                :alt="tabs[activeTab]?.title"
              />
            </div>
          </div>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
