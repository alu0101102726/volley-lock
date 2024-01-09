<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/volley-lock-icon.png" width="125" height="125" />
    <h1> VOLLEY LOCK </h1>
  </header>
  <div v-if="!userLogged" class="container">  
    <Button icon="pi pi-google" severity="info" label=" Registrarse" @click="googleAuth"/>
  </div> 
</template>

<script>
import { firebaseLogin } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { useFirebaseAuth } from 'vuefire';
import { User, userConverter } from '../User.js';
const db = getFirestore();

export default {
  data() {
    return {
      loading: false,
      userLogged: false
    }
  },
  methods: {

    singOutFirebaseNoSwal() {
      const auth = useFirebaseAuth();
      signOut(auth);
    },

    async googleAuth() {
      const user = firebaseLogin();
      this.userLogged = (user.currentUser) ? true : false; 
      if (!this.userLogged) {
          this.user = user;         
          const userFirestore = new User(this.user.uid, this.user.displayName, this.user.email, this.user.photoURL);
          const ref = doc(db, "users", this.user.uid).withConverter(userConverter);
          const userSnap = await getDoc(ref);
          if (!userSnap.exists()) {
              this.refreshVotes();
              setDoc(ref, userFirestore);
          }
          this.$router.replace('/');
      };
    }
  },
  mounted() {    
    const user = firebaseLogin();
    this.userLogged = (user.currentUser) ? true : false; 
    if ( this.userLogged ) {
      this.$router.replace('/');
    }    
  }
}
    
</script>

<style scoped>
header {
  background: var(--color-background);
  display: flex;
  color: white;
  margin-top: 6%;
  line-height: 1.5;
  align-items: center;
  flex-direction: column;
}
header:before,
header:after {
  content: '';
  margin: auto 1em;
  border-bottom: solid 1px;
  flex: 1;
}
h1 {
  position: relative;
  padding: 0.25em 1em;
  margin-top: 3%;
  overflow: hidden;
  background: linear-gradient(white, white) no-repeat top center, linear-gradient(white, white) no-repeat bottom center;
  background-size: calc(100% - 1.7em) 1px;
}
h1:before,
h1:after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-top: none;
  border-bottom: none;
  transform: skew(45deg)
}
h1:after {
  transform: skew(-45deg)
}

@media (max-width: 1024px) {
  main {
    display: flex;
    flex-direction: row;
    place-items: center;
    margin-top: 5%;
    padding-right: calc(var(--section-gap) / 2);
  }
}

@media (min-width: 1024px) {
  header {
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  main {
    margin-top: 15%;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
.container {
  margin-top: 3%;
  align-items: center;
  text-align:center;
  padding-top: 3%;
}

.profimage {
  width: 200px;
  height: 200px;
}

.vue-avatar {
    display: block;
    position: relative;
    width: 100%;
}

.card {
  align-items: center;
  text-align:center;
  padding-top: 3%;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
