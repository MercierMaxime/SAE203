import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyCevV08iYiaSinysyDs7rB6osLG7RJIvdk",
    authDomain: "vieuxcomme9---sae-203.firebaseapp.com",
    projectId: "vieuxcomme9---sae-203",
    storageBucket: "vieuxcomme9---sae-203.appspot.com",
    messagingSenderId: "520540402888",
    appId: "1:520540402888:web:23f6c264ef0d5d555761fd"
};

const appFirebase = initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
