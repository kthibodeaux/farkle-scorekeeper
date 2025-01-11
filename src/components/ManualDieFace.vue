<script setup>
import { computed } from 'vue'

const props = defineProps({
  side: String,
  size: { type: String, default: '1em' },
})

const dieStyle = computed(() => {
  return {
    fontSize: props.size,
  }
})
</script>

<template>
  <div class="manual dice" :style="dieStyle">
    <span>{{ side }}</span>
  </div>
</template>
