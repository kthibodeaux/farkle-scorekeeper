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

const remove = function (index) {
  currentTurn.remove(index)
}

const reset = function () {
  currentTurn.reset()
  players.nextPlayersTurn()
}
</script>

<template>
  <DieFace side="1" large clickable @click="add" />
  <DieFace side="2" large clickable @click="add" />
  <DieFace side="3" large clickable @click="add" />
  <DieFace side="4" large clickable @click="add" />
  <DieFace side="5" large clickable @click="add" />
  <DieFace side="6" large clickable @click="add" />
  <hr />
  <div class="grid">
    <div><input class="contrast" type="submit" @click="currentTurn.clear" value="Clear" /></div>
    <div><input class="contrast" type="submit" @click="reset" value="Bust" /></div>
  </div>
  <div class="grid">
    <div><input type="submit" @click="currentTurn.lock" :value="`Lock ${currentTurn.toLockInScore}`" /></div>
    <div><input type="submit" @click="bank" :value="`Bank ${currentTurn.toBankScore}`" /></div>
  </div>
  <hr />
  <DieFace v-for="(side, index) in currentTurn.toLockIn" :key="index" :side="side" large clickable
    @click="remove(index)" />
</template>
