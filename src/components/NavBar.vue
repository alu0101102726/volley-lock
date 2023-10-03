<template>
  <div class="card">
    <Menubar  :model="items">
      <template #start>
        <img alt="logo" src="../assets/blue-lock.svg" height="40" class="mr-2" />
      </template>
      <template #end>
        <div v-if="!logged">
          <Button class="auth" icon="pi pi-google" severity="info" aria-label="User" label="Iniciar sesión" @click="googleAuth"/>
        </div>
        <div v-else>
          <Button icon="pi pi-sign-out" aria-label="User" @click="singOutFirebase"/>
        </div>
      </template>
    </Menubar >
  </div>
</template>

<script>
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc, getDocs, query, collection, where } from "firebase/firestore";
import { useFirebaseAuth, getCurrentUser } from 'vuefire';
import { User, userConverter } from '../User.js';
const db = getFirestore();

export default {
  data() {
    return {
      items: [
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
          label: 'Gráfica',
          icon: 'pi pi-fw pi-chart-line',
          to: '/graph'
        }
      ],
      itemsAux: [],
      user: null,
      username: "",
      logged: false
    }
  },
  methods: {

    async initialEnvironment() {
      this.logged = await this.userLogged();
      if(this.items.length < 5 && this.logged) {
        this.items.push(
          {
            label: 'Perfil',
            icon: 'pi pi-fw pi-user',
            to: '/profile'
          }
        )
      }
      if(!this.logged) {
        this.itemsAux = this.items;
        this.items = [];
      }
    },

    async singOutFirebase() {
      const auth = useFirebaseAuth();
      const loggedOut = await signOut(auth).then(() => {
          this.$swal('Cierre de sesión con éxito', '', 'success')
          return false;
      }).catch((error) => {
          this.$swal('ERROR al cerrar sesión', error.toString(), 'error')
      });
      this.logged = loggedOut;
      this.currentUser = null;
      this.$router.push('/');
      if(this.items.length == 5) {
        this.items.pop();
      }
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

    async userLogged() {
      const userAuth = await getCurrentUser();
      if(userAuth != null) {
        this.user = userAuth;
        this.username = this.getUsername(userAuth);
        return true;
      }
      else { 
        return false;
      }
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

    async googleAuth() {
      const provider = new GoogleAuthProvider();
      const auth = useFirebaseAuth();
      (this.userLogged) ? this.singOutFirebaseNoSwal() : false;
      const singInData = await signInWithPopup(auth, provider)
        .then((result) => {
          return {            
            user : result.user,
            logged : true
          }
        }).catch((error) => {
          this.$swal('ERROR en la autenticación', error.toString(), 'error')
      });
      if (this.userLogged) {
          this.items = this.itemsAux;
          this.user = singInData.user;      
          this.logged = singInData.logged;          
          const userFirestore = new User(this.user.uid, this.user.displayName, this.user.email, this.user.photoURL);
          const ref = doc(db, "users", this.user.uid).withConverter(userConverter);
          const userSnap = await getDoc(ref);
          if (!userSnap.exists()) {
              this.refreshVotes();
              setDoc(ref, userFirestore);
          }
          this.items.push(
            {
              label: 'Perfil',
              icon: 'pi pi-fw pi-user',
              to: '/profile'
            }
          )
      };
    }
  },
  mounted() {
    this.initialEnvironment()
  }

}
</script>
