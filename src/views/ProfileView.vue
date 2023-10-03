<template>
  <div class="container">
    <Card class="card" style="min-width: 35em">
      <template #header>
        <vue-avatar class="vue-avatar" :size="100" border-radius="70%">
          <img class="profimage" src="" alt="Foto de perfil">
        </vue-avatar>
        <FileUpload class="btn" mode="basic" name="demo[]" chooseLabel="Editar" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" :maxFileSize="1000000"/>
      </template>
      <template #title> Perfil </template>
      <template #content>    
        <span class="p-float-label">
            <InputText id="user" class="usrinput" v-model="user" disabled />
            <label for="user">Usuario</label>
        </span>
        <br/>
        <span class="p-float-label">
            <InputText id="email" class="emailinput" v-model="email" disabled />
            <label for="email">Email</label>
        </span>
        <br/>
        <span class="p-float-label">
            <Textarea v-model="desc" autoResize  rows="5" cols="30" />
            <label>Descripcion</label>
        </span>
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Save" :loading="loading" @click="sendNewInfo()"/>
          <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
      </template>
    </Card>
  </div>
  
</template>

<script>
import { getCurrentUser } from 'vuefire';
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import VueAvatar from "@webzlodimir/vue-avatar";
import "@webzlodimir/vue-avatar/dist/style.css";
import { User, userConverter } from '../User.js';
const db = getFirestore();

export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {

    async customBase64Uploader(event) {
      const vueProfile = document.querySelector(".profimage");
      const file = event.files[0];
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      reader.onload = function (event) {
          vueProfile.setAttribute("src", `data:${file.type};base64,${btoa(event.target.result)}`)
      };
    },

    async sendNewInfo() {
      this.loading = true;
      const vueProfile = document.querySelector(".profimage");
      const vueUsername = document.querySelector(".usrinput");
      const vueEmail = document.querySelector(".emailinput");
      const user = await getCurrentUser();
      const ref = doc(db, "users", user.uid).withConverter(userConverter);   
      const userSnap = await getDoc(ref);
      const userFirestore = new User(vueUsername.getAttribute("value").toString(), vueEmail.getAttribute("value").toString(), vueProfile.getAttribute("src").toString(), userSnap.data().voted, userSnap.data().votes);  
      if (userSnap.exists()) {
          setDoc(ref, userFirestore);
      }
      this.loading = false;
    }
  },
  mounted: async () => {
    const user = await getCurrentUser();
    const vueProfile = document.querySelector(".profimage");
    const vueUsername = document.querySelector(".usrinput");
    const vueEmail = document.querySelector(".emailinput");
    const ref = doc(db, "users", user.uid).withConverter(userConverter);
    const userSnap = await getDoc(ref);
    if(userSnap.exists()) {
      vueProfile.setAttribute("src", userSnap.data().photo);
      vueUsername.setAttribute("value", userSnap.data().name);
      vueEmail.setAttribute("value", userSnap.data().email);
    }
  }
}
    
</script>

<style scoped>

.container {

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
