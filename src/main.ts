import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import router from './router'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import App from './App.vue'
import axios from 'axios';

axios.defaults.baseURL = 'http://127.0.0.1:3000/api/v1';


axios.defaults.headers.common['Accept'] = 'application/json';


axios.interceptors.request.use(
    (config) => {
        const jwtToken = localStorage.getItem('jwtToken');
        if (jwtToken) {
            config.headers['Authorization'] = `Bearer ${jwtToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);



const pinia=createPinia()

const app = createApp(App)


app.use(router)
app.use(pinia)



app.mount('#app')
