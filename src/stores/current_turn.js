import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import calculateScore from '@/lib/calculate_score'

export const useCurrentTurnStore = defineStore('currentTurn', () => {
  const lockedIn = ref([])
  const toLockIn = ref([])

  const lock = function() {
    lockedIn.value.push(toLockIn.value)
    toLockIn.value = []
  }

  const add = function(value) {
    toLockIn.value.push(value)
  }

  const reset = function() {
    lockedIn.value = []
    toLockIn.value = []
  }

  const clear = function() {
    toLockIn.value = []
  }

  const remove = function(index) {
    toLockIn.value.splice(index, 1)
  }

  const lockedInScore = computed(() => {
    return lockedIn.value.reduce((acc, val) => acc + calculateScore(val), 0)
  })

  const toLockInScore = computed(() => {
    return calculateScore(toLockIn.value)
  })

  const toBankScore = computed(() => {
    return lockedInScore.value + toLockInScore.value
  })

  return {
    add,
    clear,
    lock,
    remove,
    reset,
    toBankScore,
    toLockIn,
    toLockInScore,
  }
})
