<script setup lang="ts">
import { CheckCircleIcon, XCircleIcon, ExclamationTriangleIcon } from "@heroicons/vue/16/solid";

const route = useRoute();
const status = computed(() => route.query.confirmed as string | undefined);

const config = computed(() => {
  switch (status.value) {
    case "true":
      return {
        icon: CheckCircleIcon,
        iconClass: "text-green-500",
        title: "You're on the waitlist!",
        message: "Your email has been confirmed. We'll let you know as soon as your spot is ready.",
      };
    case "already":
      return {
        icon: CheckCircleIcon,
        iconClass: "text-green-500",
        title: "Already confirmed",
        message: "Your email was already confirmed. You're on the waitlist.",
      };
    case "invalid":
      return {
        icon: ExclamationTriangleIcon,
        iconClass: "text-amber-500",
        title: "Invalid link",
        message: "This confirmation link is invalid or has expired. Please try signing up again.",
      };
    case "error":
      return {
        icon: XCircleIcon,
        iconClass: "text-red-500",
        title: "Something went wrong",
        message: "We couldn't confirm your email. Please try again later.",
      };
    default:
      return {
        icon: ExclamationTriangleIcon,
        iconClass: "text-neutral-weak",
        title: "Waitlist",
        message: "Nothing to see here.",
      };
  }
});
</script>

<template>
  <div class="flex min-h-[60vh] items-center justify-center px-6">
    <div class="flex max-w-sm flex-col items-center text-center">
      <component :is="config.icon" class="size-8" :class="config.iconClass" />
      <h1 class="text-title-sm text-neutral-strong mt-4">{{ config.title }}</h1>
      <p class="text-copy-lg text-neutral mt-2">{{ config.message }}</p>
      <d-button to="/" variant="secondary" size="sm" class="mt-6">Back to home</d-button>
    </div>
  </div>
</template>
