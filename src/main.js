import './assets/grid.css'
import './assets/dice.min.css'
import './assets/pico.min.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
