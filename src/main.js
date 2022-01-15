import {createApp} from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/md-dark-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

import Button from "primevue/button";
import InputText from "primevue/inputtext";

import store from '@/store/index.ts'

const app = createApp(App)
app.use(PrimeVue);
app.use(store);

app.component('Button', Button);
app.component('InputText', InputText);

app.mount('#app');
