<script setup>
import { useCurrentTurnStore } from '@/stores/current_turn'

import DieFace from './DieFace.vue'

const currentTurn = useCurrentTurnStore()
</script>

<template>
  <div v-for="(roll, index) in currentTurn.lockedIn" :key="index">
    <DieFace v-for="(side, index) in roll" :key="index" :side="side" size="1em" />
  </div>
</template>
