import { createApp } from 'vue'
import App from './App.vue'
import { makeServer } from './server'
import './assets/main.css'

if (process.env.NODE_ENV === 'development') {
    makeServer()
}

new Vue({
    render: (h) => h(App),
}).$mount("#app");