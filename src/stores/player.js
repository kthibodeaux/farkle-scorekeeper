import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePlayerStore = (name) => {
  return defineStore(`player-${name}`, () => {
    const score = ref(0)

    const bank = function(value) {
      score.value += value
    }

    return {
      bank,
      name,
      score,
    }
  })()
}
