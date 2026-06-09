import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { useTaskStore } from '@/stores/taskStore'
import { useUiStore } from '@/stores/uiStore'

import './style.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

useTaskStore().loadTasks()
useUiStore().loadState()

app.mount('#app')
