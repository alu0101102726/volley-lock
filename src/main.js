import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp, db } from './firebase.js'
import { doc, setDoc, getDoc } from "firebase/firestore"; 
import App from './App.vue'
import router from './router'
import { User, userConverter } from './User'

import PrimeVue from 'primevue/config'
import './assets/lara-light-pink/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core CSS
import 'primeicons/primeicons.css' //icons
import { jsonConfig } from './config.json';

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import Menubar from 'primevue/menubar';
import TheWelcome from './components/TheWelcome.vue'
import NavBar from './components/NavBar.vue'
import Dialog from 'primevue/dialog';
import Password from 'primevue/password';
import FileUpload from 'primevue/fileupload';
import Card from 'primevue/card';
import Textarea from 'primevue/textarea';
import Steps from 'primevue/steps';
import Message from 'primevue/message';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import ToastService from 'primevue/toastservice';
const admin = new User("admin","admin", "voleylock@gmail.com", "");
const adminRef = doc(db, "users", admin.name).withConverter(userConverter);
const configRef = doc(db, "config", "config");

const date = new Date(jsonConfig.votesDateStart);
const nextDate = new Date(jsonConfig.votesDateEnd);
const voteRef = doc(db, "votes", `${nextDate.getDate()}-${nextDate.getMonth() + 1}-${nextDate.getFullYear()}`);
const voteSnap = await getDoc(voteRef);
const adminSnap = await getDoc(adminRef);
if (!adminSnap.exists()) {
    setDoc(adminRef, admin);
    setDoc(configRef, jsonConfig);
}

if (!voteSnap.exists()) {
    await setDoc(voteRef, {endDate: nextDate, initialDate: date, votes: {}})
}

const app = createApp(App)
app.use(PrimeVue)
app.use(router)
app.use(ToastService)
app.use(VueSweetalert2)
app.use(VueFire, {
    firebaseApp: firebaseApp,
    modules: [
        VueFireAuth(firebaseApp)
    ],
})
app.component('Menubar', Menubar)
app.component('Button', Button)
app.component('TheWelcome', TheWelcome)
app.component('NavBar', NavBar)
app.component('Dialog', Dialog)
app.component('InputText', InputText)
app.component('Password', Password)
app.component('Toast', Toast)
app.component('FileUpload', FileUpload)
app.component('Card', Card)
app.component('Textarea', Textarea)
app.component('Steps', Steps)
app.component('Message', Message)
app.component('TabView',TabView)
app.component('TabPanel',TabPanel)
app.mount('#app')
