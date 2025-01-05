<script setup>
import { useCurrentTurnStore } from '@/stores/current_turn'
import calculateScore from '@/lib/calculate_score'

import DieFace from './DieFace.vue'

const currentTurn = useCurrentTurnStore()
</script>

<template>
  <div>
    <input :disabled="!currentTurn.canUndo" type="submit" class="secondary" @click="currentTurn.undo"
      value="Undo Last" />
  </div>
  <div v-for="(roll, index) in currentTurn.lockedIn" :key="index">
    <DieFace v-for="(side, index) in roll" :key="index" :side="side" size="1em" :clickable="false" />
    = {{ calculateScore(roll) }}
  </div>
</template>
