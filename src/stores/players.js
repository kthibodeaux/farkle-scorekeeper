import { ref } from 'vue'
import { defineStore } from 'pinia'
import { usePlayerStore } from './player'

export const usePlayersStore = defineStore('players', () => {
  const players = ref([])

  const addPlayer = (name) => {
    players.value.push(usePlayerStore(name))
  }

  return {
    addPlayer,
    players,
  }
})
