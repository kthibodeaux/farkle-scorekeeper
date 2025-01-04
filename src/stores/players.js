import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('player', () => {
  const players = ref([])

  return {
    players,
  }
})
