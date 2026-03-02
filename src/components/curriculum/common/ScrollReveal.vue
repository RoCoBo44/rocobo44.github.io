<script setup>
import { useElementVisibility } from '@/composables/useElementVisibility'

const props = defineProps({
  animation: {
    type: String,
    default: 'fade-up' // options: fade-up, fade-in, zoom-in, slide-left, slide-right
  },
  delay: {
    type: String,
    default: '0s'
  },
  duration: {
    type: String,
    default: '0.8s'
  },
  threshold: {
    type: Number,
    default: 0.1
  }
})

const { isVisible, target } = useElementVisibility({ threshold: props.threshold })
</script>

<template>
  <div
    ref="target"
    class="reveal-base"
    :class="[isVisible ? `reveal-${animation}-visible` : `reveal-${animation}-hidden`]"
    :style="{ transitionDelay: delay, transitionDuration: duration }"
  >
    <slot />
  </div>
</template>

<style scoped>
.reveal-base {
  transition-property: transform, opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform, opacity;
}

/* Fade Up */
.reveal-fade-up-hidden {
  opacity: 0;
  transform: translateY(40px);
}
.reveal-fade-up-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Fade In */
.reveal-fade-in-hidden {
  opacity: 0;
}
.reveal-fade-in-visible {
  opacity: 1;
}

/* Zoom In */
.reveal-zoom-in-hidden {
  opacity: 0;
  transform: scale(0.9);
}
.reveal-zoom-in-visible {
  opacity: 1;
  transform: scale(1);
}

/* Slide Left */
.reveal-slide-left-hidden {
  opacity: 0;
  transform: translateX(-40px);
}
.reveal-slide-left-visible {
  opacity: 1;
  transform: translateX(0);
}

/* Slide Right */
.reveal-slide-right-hidden {
  opacity: 0;
  transform: translateX(40px);
}
.reveal-slide-right-visible {
  opacity: 1;
  transform: translateX(0);
}
</style>
