<script setup>
defineProps({
  isCurrentTurn: Boolean,
  name: String,
  score: Number,
})
</script>

<template>
  <div>
    <span v-if="isCurrentTurn">-></span> {{ name }}
    <br />
    {{ score }}
  </div>
</template>
