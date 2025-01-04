<script setup>
import { computed } from 'vue'

const props = defineProps({
  side: Number,
})

const emit = defineEmits(['click'])

const diceClasses = computed(() => {
  return {
    dice: true,
    [`dice-${props.side}`]: true,
  }
})
</script>

<template>
  <a href="" @click.prevent="emit('click', side)">
    <span :class="diceClasses" style="font-size: 6em;"></span>
  </a>
</template>
