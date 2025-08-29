<script setup lang="ts">
const email = ref("")
const isSuccess = ref<boolean | null>(null)
const responseMessage = ref("")

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
    class="flex w-full max-w-md flex-col justify-center gap-2"
  >
    <div class="flex w-full flex-col justify-center gap-2 md:flex-row">
      <input
        id="email"
        v-model="email"
        autocomplete="email"
        type="email"
        placeholder="Email"
        class="inline rounded-xl bg-neutral-100 px-4 py-2.5 text-sm text-neutral-900 outline-offset-0 hover:bg-neutral-200 focus:outline-2 active:bg-neutral-200"
      />
      <d-button
        type="submit"
        variant="primary"
        size="md"
      >
        Join Waitlist
      </d-button>
    </div>
    <div
      v-if="responseMessage"
      class="text-copy-sm mx-auto mt-4 text-center font-medium"
      :class="[isSuccess ? 'text-green-600' : 'text-red-600']"
    >
      {{ responseMessage }}
    </div>
  </form>
</template>
