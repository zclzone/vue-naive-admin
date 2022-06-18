import '@/styles/reset.css'
import '@/styles/variables.css'
import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import { setupRouter } from '@/router'
import { setupStore } from '@/store'
import App from './App.vue'

function setupApp() {
  const app = createApp(App)

  setupStore(app)

  setupRouter(app)

  app.mount('#app')
}

setupApp()
