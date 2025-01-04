<script setup>
import { useCurrentTurnStore } from '@/stores/current_turn'
import { usePlayersStore } from '@/stores/players'

import DieFace from './DieFace.vue'

const currentTurn = useCurrentTurnStore()
const players = usePlayersStore()

const add = function (die) {
  currentTurn.add(die)
}

const bank = function () {
  players.currentPlayer.bank(currentTurn.toBankScore)
  reset()
}

const reset = function () {
  currentTurn.reset()
  players.nextPlayersTurn()
}
</script>

<template>
  <DieFace :side="1" @click="add" />
  <DieFace :side="2" @click="add" />
  <DieFace :side="3" @click="add" />
  <DieFace :side="4" @click="add" />
  <DieFace :side="5" @click="add" />
  <DieFace :side="6" @click="add" />
  <hr />
  <div role="button" @click="currentTurn.clear">Clear</div>
  <br />
  <div role="button" @click="currentTurn.lock">Lock {{ currentTurn.toLockInScore }}</div>
  <br />
  <div role="button" @click="reset">Bust</div>
  <br />
  <div role="button" @click="bank">Bank {{ currentTurn.toBankScore }}</div>
  <hr />
  <DieFace v-for="(side, index) in currentTurn.toLockIn" :key="index" :side="side" />
</template>
