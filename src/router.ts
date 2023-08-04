import Home from './components/Home.vue';
import Login from './components/Login.vue';
import Detail from "./components/ShowDetail.vue"
import CreateNew from "./components/NewRestro.vue"
import Update from './components/Update.vue';
import Register from './components/Register.vue'
import Profile from './components/Profile.vue'



import { createRouter, createWebHistory } from 'vue-router';


const routes = [
    { path: '/', component: Home, name: 'Home'},
    { path: '/login', component: Login, name: 'Login'},
    { path: '/new', component: CreateNew, name: 'CreateNew'},
    { path: '/register', component: Register, name: 'Register'},
    { path: '/profile', component: Profile, name: 'Profile'},
    { path: '/update/:id', component: Update, name: 'Update'},
    { path: '/:id', component: Detail, name: 'Detail'},


];


const router = createRouter({
    history: createWebHistory(),
    routes,
});


export default router;
