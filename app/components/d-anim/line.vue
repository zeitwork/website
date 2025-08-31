<script setup lang="ts">
import { animate, svg, stagger } from "animejs"

type Props = {
  duration: number
  height?: number
  chance?: number
}

const { duration = 2000, height = 80, chance = 0.2 } = defineProps<Props>()

const line = ref(null)
let drawable: any = null
let animationRef: any = null

const pathD = computed(() => {
  const topY = 0
  const bottomY = height
  return `M0 ${topY}C97.0453 ${topY} 151.455 ${bottomY} 248.5 ${bottomY}C345.545 ${bottomY} 399.955 ${topY} 497 ${topY}`
})

const runAnimation = () => {
  if (!drawable) return

  animationRef = animate(drawable, {
    keyframes: {
      "0%": { draw: "0 0", stroke: "orange" },
      "20%": { draw: "0 .2" },
      "50%": { stroke: "orange" },
      "80%": { draw: ".8 1", stroke: "green" },
      "100%": { draw: "1 1", stroke: "green" }
    },
    duration: duration,
    ease: "easeInOutExpo"
  })
}

const scheduleNext = () => {
  const shouldPlay = Math.random() < chance
  const delay = shouldPlay ? 500 : Math.random() * 3000 + 2000

  setTimeout(() => {
    runAnimation()
    setTimeout(scheduleNext, duration)
  }, delay)
}

onMounted(() => {
  drawable = svg.createDrawable(line.value)
  const startDelay = Math.random() * 2000

  setTimeout(() => {
    runAnimation()
    setTimeout(scheduleNext, duration)
  }, startDelay)
})
</script>
<template>
  <svg
    width="497"
    :height="height"
    :viewBox="`0 0 497 ${height}`"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="path">
      <path
        id="path-bottom"
        :d="pathD"
        stroke="#EEEEEE"
      />
      <path
        ref="line"
        id="path-top"
        :d="pathD"
        stroke="trasparent"
        stroke-width="4"
      />
    </g>
  </svg>
</template>
