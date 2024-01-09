<template>
  <Menubar v-if="userLogged" :model="itemsLogged">
    <template #start>
      <img alt="logo" src="../assets/volley-lock-icon-noletter.svg" height="40" class="mr-2" />
    </template>
    <template #end>
      <Button severity="danger" icon="pi pi-sign-out" aria-label="User" @click="singOutFirebase"/>
    </template>
  </Menubar >
  <Menubar v-else :model="itemAnonimus">
    <template #start>
      <img alt="logo" src="../assets/volley-lock-icon-noletter.svg" height="40" class="mr-2" />
    </template>
    <template #end>
    <Button icon="pi pi-google" severity="info" label=" Iniciar sesión" @click="checkLogin"/>
    </template>
  </Menubar >
</template>

<script>
import { firebaseLogin, firebaseLogout } from "../utils/firebase";
import { getFirestore, doc, setDoc, getDocs, query, collection, where } from "firebase/firestore";
import { useFirebaseAuth } from 'vuefire';
import { User, userConverter } from '../User.js';
const db = getFirestore();

export default {
  data() {
    return {
      itemsLogged: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Votación',
          icon: 'pi pi-fw pi-th-large',
          to: '/tier'
        },
        {
          label: 'Resultados',
          icon: 'pi pi-fw pi-sort-amount-up-alt',
          to: '/results'
        },
        {
          label: 'Youtube',
          icon: 'pi pi-fw pi-youtube',
          to: '/youtube'
        }
      ],
      itemAnonimus: [
        {
          label: 'Home',
          icon: 'pi pi-fw pi-home',
          to: '/'
        },
        {
          label: 'Resultados',
          icon: 'pi pi-fw pi-sort-amount-up-alt',
          to: '/results'
        },
        {
          label: 'Youtube',
          icon: 'pi pi-fw pi-youtube',
          to: '/youtube'
        }

      ],
      user: null,
      username: "",
      userLogged: false
    }
  },
  methods: {

    checkLogin() {
      (firebaseLogin().currentUser != null) ? this.userLogged = true : this.$swal('No estás registrad@ en el proyecto', '', 'error');
    },

    async singOutFirebase() {    
      this.userLogged = await firebaseLogout(this.$swal);
      this.currentUser = null;
    },

    getUsername(user) {
      const username = user.displayName.split(' ');
      let capitalize = username[0].toLowerCase();
      return capitalize.charAt(0).toUpperCase() + capitalize.slice(1);
    },

    singOutFirebaseNoSwal() {
      const auth = useFirebaseAuth();
      signOut(auth);
    },

    async refreshVotes() {
      const qDates = query(collection(db, "votes"));
      const queryDatesSnap = await getDocs(qDates); 
      const votes = queryDatesSnap.docs[0].data();
      votes.votes = {}
      const endDate = new Date(votes.endDate.toDate())
      const dateRef = doc(db, "votes", `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`);   
      setDoc(dateRef, votes);

      const qUsers = query(collection(db, "users"), where("email", "not-in", ["voleylock@gmail.com"]));
      const queryUsersSnap = await getDocs(qUsers);
      queryUsersSnap.docs.forEach((user, index) => {  
        const currentUser = user.data();
        const userRef = doc(db, "users", currentUser.id).withConverter(userConverter);    
        currentUser.votes = {};
        currentUser.voted = false;
        setDoc(userRef, currentUser);
      });
    },

  },
  mounted() {
    const user = firebaseLogin();
    this.userLogged = (user.currentUser) ? true : false;
  },

}
</script>

<style>
Button {
  border-radius: 15px;
}
</style>
