<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '@/stores/players'

import CurrentTurn from './components/CurrentTurn.vue'
import CurrentTurnLockedIn from './components/CurrentTurnLockedIn.vue'
import PlayerSetup from './components/PlayerSetup.vue'
import SidebarPlayer from './components/SidebarPlayer.vue'

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
          <template v-for="(player, index) in playerStore.players" :key="player.name">
            <SidebarPlayer :name="player.name" :score="player.score"
              :is-current-turn="playerStore.currentPlayerIndex === index" />
          </template>
          <CurrentTurnLockedIn />
        </div>
        <div>
          <CurrentTurn />
        </div>
      </div>
    </template>
  </main>
</template>
