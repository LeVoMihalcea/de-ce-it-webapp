import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import {createRouter, createWebHistory} from 'vue-router'

import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';

import store from '@/store/index.ts'
import Home from "@/components/Home";
import TeamRegistration from "@/components/TeamRegistration";
import axios from "axios";

const routes = [
    { path: '/', component: Home },
    { path: '/teams', component: TeamRegistration },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

axios.defaults.baseURL = "http://localhost:8080/v1"

app.use(PrimeVue);
app.use(store);
app.use(router);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Menubar', Menubar)
app.component("Card", Card);

app.mount('#app');
