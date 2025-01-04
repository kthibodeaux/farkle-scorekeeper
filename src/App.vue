<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '@/stores/players'

import PlayerSetup from './components/PlayerSetup.vue'
import DieFace from './components/DieFace.vue'

const gameStarted = ref(false)
const playerStore = usePlayersStore()
</script>

<template>
  <main class="container" style="margin-top: 20px;">
    <template v-if="!gameStarted">
      <PlayerSetup @submit="gameStarted = true" />
    </template>
    <template v-else>
      <div class="main-grid">
        <div>
          <div v-for="player in playerStore.players" :key="player.name">
            {{ player.name }}
          </div>
        </div>
        <div>
        </div>
      </div>
    </template>
  </main>
</template>
