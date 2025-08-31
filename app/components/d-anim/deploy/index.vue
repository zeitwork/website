<script setup lang="ts">
const MIN_BUILD_DURATION = 5
const MAX_BUILD_DURATION = 10
const DEPLOYMENT_WAIT_TIME = 1 // seconds between deployments

const commitMessages = [
  "Fix authentication bug",
  "Add user preferences",
  "Update dependencies",
  "Improve error handling",
  "Add dark mode support",
  "Optimize database queries",
  "Fix responsive layout",
  "Add search functionality",
  "Update API endpoints",
  "Refactor component structure"
]

const branches = ["main", "dev"]

function generateRandomId() {
  return Math.random().toString(36).substr(2, 8)
}

function generateRandomCommit() {
  return Math.random().toString(16).substr(2, 6)
}

function getRandomBuildDuration() {
  return (
    Math.floor(Math.random() * (MAX_BUILD_DURATION - MIN_BUILD_DURATION + 1)) + MIN_BUILD_DURATION
  )
}

function createCard(index: number, mounted = false) {
  return {
    index,
    id: generateRandomId(),
    branch: branches[Math.floor(Math.random() * branches.length)],
    commit: generateRandomCommit(),
    commitMessage: commitMessages[Math.floor(Math.random() * commitMessages.length)],
    mounted,
    state: "building" as const,
    buildDuration: getRandomBuildDuration(),
    exiting: false
  }
}

function createInitialCards(count: number) {
  return Array.from({ length: count }, (_, i) => createCard(i, true))
}

const cards = ref(createInitialCards(4))

function addCard() {
  if (cards.value.length > 0) {
    const lastCard = cards.value[cards.value.length - 1]
    if (lastCard.state === "building") {
      lastCard.state = "ready"
    }
  }

  setTimeout(() => {
    const newCard = createCard(cards.value[cards.value.length - 1].index + 1, false)

    cards.value.push(newCard)

    nextTick(() => {
      newCard.mounted = true
    })

    if (cards.value.length > 4) {
      cards.value[0].exiting = true
      setTimeout(() => {
        cards.value.shift()
      }, 100)
    }

    setTimeout(() => {
      addCard()
    }, newCard.buildDuration * 1000)
  }, DEPLOYMENT_WAIT_TIME * 1000)
}

onMounted(() => {
  if (process.client) {
    const initialCard = cards.value[cards.value.length - 1]
    setTimeout(() => {
      addCard()
    }, initialCard.buildDuration * 1000)
  }
})
</script>
<template>
  <div class="relative size-full p-5">
    <DAnimDeployCard
      v-for="(card, i) in cards"
      :key="card.id"
      class="ease-out-expo absolute top-1/2 left-0 origin-top-left transition-all duration-700"
      :id="card.id"
      :commit="card.commit"
      :commit-message="card.commitMessage"
      :state="card.state"
      :data-mounted="card.mounted"
      :style="[
        `--index: ${cards[cards.length - 1].index - card.index + 1}`,
        `transform: scale(calc(1 - ${card.exiting ? '(var(--index) + 1)' : 'var(--index)'} * 0.05)) translateY(calc(${card.mounted ? 'var(--index) * -15%' : '100%'})) translateX(calc(${card.exiting ? '(var(--index) + 1)' : 'var(--index)'} * 18px))`,
        `opacity: ${card.exiting ? 0 : card.mounted ? 1 : 0}`
      ]"
    />
  </div>
</template>
