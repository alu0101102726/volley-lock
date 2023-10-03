import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp, db } from './firebase.js'
import { doc, setDoc, addDoc, getDoc, Timestamp } from "firebase/firestore"; 
import App from './App.vue'
import router from './router'
import { User, userConverter } from './User'

import PrimeVue from 'primevue/config'
import 'primevue/resources/themes/saga-blue/theme.css' //theme
import 'primevue/resources/primevue.min.css' //core CSS
import 'primeicons/primeicons.css' //icons

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

import ToastService from 'primevue/toastservice';
const admin = new User("admin","admin", "voleylock@gmail.com", "");
const adminRef = doc(db, "users", admin.name).withConverter(userConverter);

const timeLimitVotes = 5;
const date = new Date();
const nextDate = new Date(date);
nextDate.setDate(date.getDate() +  timeLimitVotes);
const dateRef = doc(db, "votes", `${nextDate.getDate()}-${nextDate.getMonth() + 1}-${nextDate.getFullYear()}`);
const dateSnap = await getDoc(dateRef);
const adminSnap = await getDoc(adminRef);
if (!adminSnap.exists()) {
    setDoc(adminRef, admin);
}

if (!dateSnap.exists()) {
    await setDoc(dateRef, {endDate: nextDate, initialDate: date, votes: {}})
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
app.mount('#app')
