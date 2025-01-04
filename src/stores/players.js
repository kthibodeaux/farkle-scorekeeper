import { ref } from 'vue'
import { defineStore } from 'pinia'
import { usePlayerStore } from './player'

export const usePlayersStore = defineStore('players', () => {
  const players = ref([])
  const currentPlayerIndex = ref(0)

  const addPlayer = (name) => {
    players.value.push(usePlayerStore(name))
  }

  const nextPlayersTurn = () => {
    if (players.value[currentPlayerIndex.value + 1]) {
      currentPlayerIndex.value++
    } else {
      currentPlayerIndex.value = 0
    }
  }

  return {
    addPlayer,
    currentPlayerIndex,
    nextPlayersTurn,
    players,
  }
})
