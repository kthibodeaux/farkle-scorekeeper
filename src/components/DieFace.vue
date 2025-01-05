<script setup>
import { computed } from 'vue'

const props = defineProps({
  side: Number,
  size: { type: String, default: '6em' },
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
    fontSize: props.size,
  }
})
</script>

<template>
  <a href="" @click.prevent="emit('click', side)">
    <span :class="dieClasses" :style="dieStyle"></span>
  </a>
</template>
