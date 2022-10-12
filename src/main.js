import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import components from '@/components/UI/index'

const app = createApp(App)

components.forEach((comp) => {
    app.component(comp.name, comp)
})

app
    .use(store)
    .use(router)
    .mount('#app')
