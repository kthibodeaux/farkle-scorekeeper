<script setup>
import { ref } from 'vue'
import { usePlayersStore } from '@/stores/players'

const playerStore = usePlayersStore()

const emit = defineEmits(['submit'])
const name = ref(null)

const add = () => {
  playerStore.addPlayer(name.value)
  name.value = null
}

const startGame = function () {
  window.addEventListener('beforeunload', function (e) {
    e.preventDefault()
    e.returnValue = ''

    return 'All score data will be lost. Are you sure you want to leave?'
  })

  emit('submit')
}
</script>

<template>
  <form @submit.prevent="add">
    <fieldset role="group">
      <input name="name" type="text" v-model="name" placeholder="Enter your name" required />
      <input type="submit" value="Add" />
    </fieldset>
  </form>
  <ul>
    <li v-for="player in playerStore.players" :key="player.name">
      {{ player.name }}
    </li>
  </ul>
  <br />
  <br />
  <input type="button" @click="startGame" value="Start Game" />
</template>
