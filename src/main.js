import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { router } from './routes/routes.js'
import {Quasar} from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import {createPinia} from 'pinia'


const pinia = createPinia()
const myApp = createApp(App)

myApp.use(router)


myApp.use(pinia)
myApp.use(Quasar, {
    plugins: {}, 
  })

myApp.mount('#app') 


