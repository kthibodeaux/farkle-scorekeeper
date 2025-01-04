<script setup>
import { computed } from 'vue'

const props = defineProps({
  side: Number,
})

const diceClasses = computed(() => {
  return {
    dice: true,
    [`dice-${props.side}`]: true,
  }
})
</script>

<template>
  <span :class="diceClasses"></span>
</template>
