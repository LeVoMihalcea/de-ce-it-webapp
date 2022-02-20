import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import axios from "axios";
import {createRouter, createWebHistory} from 'vue-router'

import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css';

import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Menubar from 'primevue/menubar';
import Card from 'primevue/card';
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Dropdown from "primevue/dropdown";

import store from '@/store/index.ts'
import Home from "@/components/Home";
import TeamRegistration from "@/components/TeamRegistration";
import Wikipedia from "@/components/Wikipedia";
import AdminDashboard from "@/components/AdminDashboard";
import WikipediaAdmin from "@/components/WikipediaAdmin";

const routes = [
    {path: '/', component: Home},
    {path: '/teams', component: TeamRegistration},
    {path: '/wikipedia', component: Wikipedia},
    {
        path: '/sigma', component: AdminDashboard,
        children: [
            {
                path: 'wikipedia',
                component: WikipediaAdmin
            },
        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)

axios.defaults.baseURL = process.env.VUE_APP_TARGET

console.log("Sending requests to: " + axios.defaults.baseURL);

app.use(PrimeVue);
app.use(store);
app.use(router);

app.component('Button', Button);
app.component('InputText', InputText);
app.component('Menubar', Menubar)
app.component("Card", Card);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("Dropdown", Dropdown);

router.beforeEach((to, from, next) => {
    if (store.getters['user/isAdmin']) next({ name: 'Sigma' })
    else next()
})

app.mount('#app');
