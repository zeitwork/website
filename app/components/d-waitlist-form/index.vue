<script setup lang="ts">
const email = ref("")
const isSuccess = ref<boolean | null>(null)
const responseMessage = ref("")

const { data: waitlistInfo } = await useFetch("/api/waitlist")

const waitlistCount = computed(() => waitlistInfo.value?.count ?? 0)

async function handleSubmit() {
  console.log("handleSubmit", email.value)
  if (!email.value) return

  try {
    const res = await $fetch("/api/waitlist", {
      method: "POST",
      body: {
        email: email.value
      }
    })
    if (res.success) {
      email.value = ""
      responseMessage.value = "You're on the waitlist!"
      isSuccess.value = true
    }
  } catch (error) {
    console.error(error)
    responseMessage.value = "Something went wrong. Please try again."
    isSuccess.value = false
  }
}
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex w-full flex-col gap-2"
  >
    <div class="flex gap-2">
      <input
        id="email"
        v-model="email"
        autocomplete="email"
        type="email"
        placeholder="Email"
        class="text-copy-lg bg-surface-subtle hover:bg-neutral-strong text-neutral flex cursor-pointer items-center rounded-full px-5 py-1.5 focus:outline-none"
      />
      <d-button
        type="submit"
        variant="primary"
        size="md"
      >
        Join Waitlist
      </d-button>
    </div>
    <div>{{ waitlistCount }} already on the waitlist</div>
    <div
      v-if="responseMessage"
      class="text-copy-sm mx-auto mt-4 text-center font-medium"
      :class="[isSuccess ? 'text-green-600' : 'text-red-600']"
    >
      {{ responseMessage }}
    </div>
  </form>
</template>
