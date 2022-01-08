import '@/styles/index.scss'
import 'uno.css'

import { createApp } from 'vue'
import App from './App.vue'

import { setupRouter } from '@/router'
import { setupStore } from '@/store'

async function bootstrap() {
  const app = createApp(App)

  setupStore(app)
  setupRouter(app)

  app.mount('#app', true)
}

bootstrap()
