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
          <RouterLink to="/profile">
            <Button plain text> {{ username }} </Button>
          </RouterLink>
          &nbsp;
          <Button class="auth" icon="pi pi-sign-out" severity="info" aria-label="User" label="Cerrar sesión" @click="singOutFirebase"/>
        </div>
      </template>
    </Menubar >
  </div>
</template>

<script>
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useFirebaseAuth, getCurrentUser } from 'vuefire';
import { RouterLink } from 'vue-router'

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
      user: null,
      username: "",
      logged: this.userLogged()
    }
  },
  methods: {

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
    },

    displayProfile(){

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
      if(userAuth) {
        this.user = userAuth;
        this.username = this.getUsername(userAuth);
        return true;
      }
      else {
        return false;
      }
    },

    async fetchPostRegister(data) {
      let endpoint = "http://localhost:3000/register";
      const options = {
        method: "POST",
        headers: {'Content-Type': "application/x-www-form-urlencoded"},
        mode: 'no-cors',
        body: JSON.stringify(data, null, 2)
      };
      await fetch(endpoint, options);

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
          this.user = singInData.user;      
          this.username = this.getUsername(singInData.user);
          this.logged = singInData.logged;
          const userObj = {
            id: this.user.uid,
            name: this.user.displayName,
            email: this.user.email,
            photo: `${this.user.photoURL}`
          }
          this.fetchPostRegister(userObj)
      };
    }
  }

}
</script>
