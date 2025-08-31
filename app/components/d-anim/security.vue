<script setup lang="ts">
const spread = ref(22)
const lowDuration = ref(1000)
const highDuration = ref(1200)

function getRandomValue(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
</script>
<template>
  <div class="relative h-full w-full">
    <svg
      class="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      width="104"
      height="125"
      viewBox="0 0 104 125"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g class="shield">
        <path
          v-for="(shield, index) in [3, 2, 1, 0]"
          :key="shield"
          :style="[
            `--index: ${shield};`,
            'transform: scale(calc(1 - var(--index)*0.08)) translateY(calc(var(--index)*-13px))',
            `opacity: calc(1 - var(--index) * 0.4`
          ]"
          class="animate-shield-stack relative origin-center"
          d="M47.166 16.8408C49.9183 14.3861 54.0817 14.3861 56.834 16.8408C67.7022 26.5347 81.447 33.0668 96.6279 35.0117C100.152 35.4632 102.832 38.3952 102.95 41.9404C102.983 42.9304 103 43.9244 103 44.9219C103 78.9615 83.6493 108.484 55.3496 123.183C53.2505 124.273 50.7495 124.273 48.6504 123.183C20.3507 108.484 1 78.9615 1 44.9219C1 43.9244 1.01676 42.9304 1.0498 41.9404C1.16822 38.3952 3.84832 35.4632 7.37207 35.0117C22.553 33.0668 36.2978 26.5347 47.166 16.8408Z"
          fill="#FAFAFA"
          stroke="#E5E5E5"
          stroke-width="2"
        />
      </g>
      <path
        class="animate-shield-scale origin-center"
        d="M47.166 16.8408C49.9183 14.3861 54.0817 14.3861 56.834 16.8408C67.7022 26.5347 81.447 33.0668 96.6279 35.0117C100.152 35.4632 102.832 38.3952 102.95 41.9404C102.983 42.9304 103 43.9244 103 44.9219C103 78.9615 83.6493 108.484 55.3496 123.183C53.2505 124.273 50.7495 124.273 48.6504 123.183C20.3507 108.484 1 78.9615 1 44.9219C1 43.9244 1.01676 42.9304 1.0498 41.9404C1.16822 38.3952 3.84832 35.4632 7.37207 35.0117C22.553 33.0668 36.2978 26.5347 47.166 16.8408Z"
        fill="#F5F5F5"
      />
      <path
        class="animate-shield-scale origin-center"
        d="M47.166 16.8408C49.9183 14.3861 54.0817 14.3861 56.834 16.8408C67.7022 26.5347 81.447 33.0668 96.6279 35.0117C100.152 35.4632 102.832 38.3952 102.95 41.9404C102.983 42.9304 103 43.9244 103 44.9219C103 78.9615 83.6493 108.484 55.3496 123.183C53.2505 124.273 50.7495 124.273 48.6504 123.183C20.3507 108.484 1 78.9615 1 44.9219C1 43.9244 1.01676 42.9304 1.0498 41.9404C1.16822 38.3952 3.84832 35.4632 7.37207 35.0117C22.553 33.0668 36.2978 26.5347 47.166 16.8408Z"
        fill="url(#pattern0_712_18644)"
        fill-opacity="0.2"
      />
      <path
        class="animate-shield-scale origin-center"
        d="M47.166 16.8408C49.9183 14.3861 54.0817 14.3861 56.834 16.8408C67.7022 26.5347 81.447 33.0668 96.6279 35.0117C100.152 35.4632 102.832 38.3952 102.95 41.9404C102.983 42.9304 103 43.9244 103 44.9219C103 78.9615 83.6493 108.484 55.3496 123.183C53.2505 124.273 50.7495 124.273 48.6504 123.183C20.3507 108.484 1 78.9615 1 44.9219C1 43.9244 1.01676 42.9304 1.0498 41.9404C1.16822 38.3952 3.84832 35.4632 7.37207 35.0117C22.553 33.0668 36.2978 26.5347 47.166 16.8408Z"
        stroke="#E5E5E5"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <path
        d="M60.625 57.9834C62.4177 55.7287 65.713 55.34 67.9893 57.1074C70.2725 58.8803 70.6723 62.1552 68.874 64.417L53.291 84.0176C52.4052 85.1315 51.1001 85.8364 49.6797 85.9746C48.2593 86.1127 46.8418 85.6725 45.7549 84.752L35.8379 76.3516C33.6324 74.4832 33.3743 71.1948 35.2676 69.0117C37.1551 66.8355 40.4633 66.5858 42.6621 68.4482L48.4238 73.3291L60.625 57.9834Z"
        fill="white"
        stroke="#E5E5E5"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <defs>
        <pattern
          id="pattern0_712_18644"
          patternUnits="userSpaceOnUse"
          patternTransform="matrix(10.368 0 0 17.9579 -0.0784669 14.2709)"
          preserveAspectRatio="none"
          viewBox="-3.46411 -2 17.28 29.9298"
          width="1"
          height="1"
        >
          <use
            xlink:href="#pattern0_712_18644_inner"
            transform="translate(-17.28 -29.9298)"
          />
          <use
            xlink:href="#pattern0_712_18644_inner"
            transform="translate(0 -29.9298)"
          />
          <use
            xlink:href="#pattern0_712_18644_inner"
            transform="translate(-17.28 0)"
          />
          <g id="pattern0_712_18644_inner">
            <path
              d="M18 0L0 31.1769"
              stroke="#D4D4D4"
              stroke-width="8"
            />
          </g>
        </pattern>
      </defs>
    </svg>

    <div class="relative h-1/2">
      <DAnimLine
        v-for="(line, index) in 4"
        :key="index"
        :duration="getRandomValue(lowDuration, highDuration)"
        :height="(index + 1) * spread"
        class="absolute bottom-0 w-full"
      />
    </div>
    <div class="relative h-1/2 -scale-y-100">
      <DAnimLine
        v-for="(line, index) in 4"
        :key="index"
        :duration="getRandomValue(lowDuration, highDuration)"
        :height="(index + 1) * spread"
        class="absolute bottom-0 w-full"
      />
    </div>
  </div>
</template>

<style scoped>
@keyframes shield-stack {
  0% {
    transform: scale(calc(1 - var(--index) * 0.08)) translateY(calc(var(--index) * -13px));
    opacity: calc(1 - var(--index) * 0.3);
  }
  100% {
    transform: scale(calc(1 - (var(--index) + 1) * 0.08))
      translateY(calc((var(--index) + 1) * -13px));
    opacity: calc(1 - (var(--index) + 1) * 0.3);
  }
}

.animate-shield-stack {
  animation: shield-stack 2000ms var(--ease-out-expo) infinite;
}

@keyframes shield-scale {
  0% {
    transform: scale(1);
  }
  45% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
}

.animate-shield-scale {
  animation: shield-scale 2000ms var(--ease-out-expo) infinite;
  animation-delay: 1100ms;
}
</style>
