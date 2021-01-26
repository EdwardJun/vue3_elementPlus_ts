import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/css/common.less'

const app = createApp(App)
app.use(ElementPlus)
app.use(store)
app.use(router)
app.mount('#app')
