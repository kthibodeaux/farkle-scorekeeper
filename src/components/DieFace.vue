<script setup>
import { computed } from 'vue'

const props = defineProps({
  clickable: { type: Boolean, default: false },
  side: [String, Number],
  large: { type: Boolean, default: false },
})

const emit = defineEmits(['click'])

const dieClasses = computed(() => {
  return {
    dice: true,
    [`dice-${props.side}`]: true,
  }
})

const dieStyle = computed(() => {
  return {
    fontSize: props.large ? '6em' : '1em',
  }
})
</script>

<template>
  <a v-if="clickable" href="" @click.prevent="emit('click', side)">
    <span :class="dieClasses" :style="dieStyle"></span>
  </a>
  <span v-else :class="dieClasses" :style="dieStyle"></span>
</template>
