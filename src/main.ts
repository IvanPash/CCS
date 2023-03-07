import { createApp } from 'vue'
import './global/styles/style.css'
import App from './pages/MainPage/MainPage.vue'
import Store from './global/store/index.js'

createApp(App).use(Store).mount('#app')
