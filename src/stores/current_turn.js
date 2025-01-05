import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import calculateScore from '@/lib/calculate_score'

export const useCurrentTurnStore = defineStore('currentTurn', () => {
  const lockedIn = ref([])
  const toLockIn = ref([])

  const lock = function() {
    if (toLockIn.value.length !== 0) {
      lockedIn.value.push(toLockIn.value)
      toLockIn.value = []
    }
  }

  const add = function(value) {
    if (toLockIn.value.length >= canLockInCount.value) {
      alert(`You can't lock in more than ${canLockInCount.value} dice`)
    } else {
      toLockIn.value.push(value)
    }
  }

  const canLockInCount = computed(() => {
    const remainder = lockedIn.value.flat().length % 6

    if (remainder === 0) {
      return 6
    } else {
      return 6 - remainder
    }
  })

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

  const undo = function() {
    console.log('undo')
    if (toLockIn.value.length === 0 && lockedIn.value.length > 0) {
      console.log('undo 2')
      toLockIn.value = lockedIn.value.pop()
    }
  }

  const canUndo = computed(() => {
    return toLockIn.value.length === 0 && lockedIn.value.length > 0
  })

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
    canUndo,
    clear,
    lock,
    lockedIn,
    remove,
    reset,
    toBankScore,
    toLockIn,
    toLockInScore,
    undo,
  }
})
