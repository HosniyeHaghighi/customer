import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import PandoraHeader from './components/PandoraHeader.vue'
import PForm from './components/IdentityInfo.vue'

const app = createApp(App)
app.component('PandoraHeader', PandoraHeader)
app.component('PForm', PForm)
app.mount('#app')
