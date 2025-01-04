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
  <input type="button" @click="emit('submit')" value="Start Game" />
</template>
