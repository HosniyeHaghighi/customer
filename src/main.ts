import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PandoraHeader from './components/PandoraHeader.vue'

const app = createApp(App)
app.component('PandoraHeader', PandoraHeader)

app.mount('#app')
