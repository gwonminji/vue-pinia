import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from 'axios'
import App from './App.vue'

const app = createApp(App);

app.config.globalProperties.$axios = axios;

app.use(createPinia())

app.mount('#app');
// createApp(App).use(createPinia()).mount('#app')
