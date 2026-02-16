<script setup lang="ts">
type Props = {
  center?: boolean;
};

const { center } = defineProps<Props>();

import { CheckCircleIcon, XCircleIcon } from "@heroicons/vue/16/solid";
const email = ref("");
const isSuccess = ref<boolean | null>(null);
const responseMessage = ref("");
let timeoutId: NodeJS.Timeout | null = null;

const { data: waitlistInfo } = await useFetch("/api/waitlist");

const waitlistCount = computed(() => waitlistInfo.value?.count ?? 0);

async function handleSubmit() {
  console.log("handleSubmit", email.value);
  if (!email.value) return;

  try {
    const res = await $fetch("/api/waitlist", {
      method: "POST",
      body: {
        email: email.value,
      },
    });
    if (res.success) {
      email.value = "";
      responseMessage.value = "Check your email to confirm!";
      isSuccess.value = true;
    }
  } catch (error) {
    console.error(error);
    responseMessage.value = "Something went wrong. Please try again.";
    isSuccess.value = false;

    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      responseMessage.value = "";
      isSuccess.value = null;
    }, 5000);
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="flex flex-col gap-2 sm:inline-flex">
    <div
      class="flex gap-2 rounded-full bg-white/10 p-1 ring-[4px] ring-black/[0.02] backdrop-blur transition-all hover:bg-white/30 hover:ring-black/[0.04] has-focus-visible:bg-white/50 has-focus-visible:ring-[6px] has-focus-visible:ring-black/[0.06] sm:inline-flex"
    >
      <input
        id="email"
        v-model="email"
        autocomplete="email"
        type="email"
        placeholder="Your Email"
        class="text-copy-lg text-neutral flex min-w-0 flex-1 items-center rounded-full px-5 py-1.5 focus:outline-none"
      />
      <d-button type="submit" variant="primary" size="md"> Join Waitlist </d-button>
    </div>

    <div class="relative">
      <Transition name="fade-up">
        <div
          v-if="responseMessage"
          class="absolute top-0 mt-4 flex items-center gap-2 rounded-full px-3 py-2"
          :class="[
            isSuccess ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600',
            center ? 'left-1/2 -translate-x-1/2' : '',
          ]"
        >
          <div>
            <CheckCircleIcon v-if="isSuccess" class="size-4" />
            <XCircleIcon v-else class="size-4" />
          </div>
          <p class="text-copy font-medium whitespace-nowrap">
            {{ responseMessage }}
          </p>
        </div>
        <div
          v-else
          class="absolute top-0 mt-2 flex items-center gap-4 px-3"
          :class="[center ? 'left-1/2 -translate-x-1/2' : '']"
        >
          <div class="relative mb-0.5 size-2 rounded-full bg-green-500">
            <div
              class="absolute top-1/2 left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 animate-pulse rounded-full bg-green-500 blur"
            ></div>
          </div>
          <p class="text-copy-lg whitespace-nowrap opacity-60">
            {{ waitlistCount }} people already joined
          </p>
        </div>
      </Transition>
    </div>
  </form>
</template>
