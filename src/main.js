import { createApp } from 'vue'

import './style.css'
import App from './App.vue'
import router from './router'
import pinia from './stores/index'
import '@/scss/all.scss'
import 'bootstrap'
import VueSweetAlert from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

const app = createApp(App)

app.use(pinia)
app.use(router)
app.use(VueSweetAlert)
app.mount('#app')
