<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '@/stores/players'

import PlayerSetup from './components/PlayerSetup.vue'
import DieFace from './components/DieFace.vue'
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
        </div>
        <div>
          <DieFace :side="1" />
          <DieFace :side="2" />
          <DieFace :side="3" />
          <DieFace :side="4" />
          <DieFace :side="5" />
          <DieFace :side="6" />
        </div>
      </div>
    </template>
  </main>
</template>
