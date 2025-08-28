<script setup lang="ts">
const tabs = [
  {
    title: "Connect your repository",
    description:
      "Link your GitHub repo with a single command. We'll detect your framework automatically."
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
  <div class="py-32">
    <d-wrapper>
      <div class="flex flex-col gap-16">
        <d-title-container>
          <d-title>How Developers Ship on Zeitwork</d-title>
          <d-description>
            No Dockerfiles to write. No Kubernetes to learn. No infrastructure to manage.
            <br />
            Just push code and let us handle the rest.
          </d-description>
        </d-title-container>
        <div class="grid gap-6 md:grid-cols-12">
          <div class="col-span-5 flex flex-col gap-4">
            <button
              @click="activeTab = index"
              class="flex cursor-pointer flex-col rounded-xl border p-6 text-left transition-all"
              :class="
                activeTab === index
                  ? 'bg-surface border-neutral shadow-md'
                  : 'bg-surface-weak hover:bg-surface hover:border-neutral border-transparent hover:shadow-md'
              "
              v-for="(tab, index) in tabs"
            >
              <p class="text-copy-lg text-neutral">{{ tab.title }}</p>
              <div
                class="ease-out-expo grid transition-all duration-500"
                :class="
                  activeTab === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                "
              >
                <div class="overflow-hidden">
                  <p
                    class="text-copy-lg text-neutral-subtle ease-out-cubic mt-2 transition-all duration-500"
                    :class="
                      activeTab === index ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                    "
                  >
                    {{ tab.description }}
                  </p>
                </div>
              </div>
            </button>
          </div>
          <div class="bg-surface-weak relative col-span-7 rounded-xl">
            <div
              v-for="(tab, index) in tabs"
              class="ease-out-expo absolute inset-6 transition-all duration-500"
              :class="
                activeTab === index
                  ? 'scale-100 opacity-100'
                  : `${index > activeTab ? 'translate-y-10' : '-translate-y-10'} scale-90 opacity-0`
              "
            >
              <img
                class="size-full object-contain"
                :src="`/illustration/how-use/0${index + 1}.png`"
                :alt="tabs[activeTab].title"
              />
            </div>
          </div>
        </div>
      </div>
    </d-wrapper>
  </div>
</template>
