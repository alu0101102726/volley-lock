<template>
  <div class="container">
    <Card class="card" style="width: 35em">
      <template #header>
        <vue-avatar class="vue-avatar" :size="100" border-radius="70%">
          <img class="profimage" src="" alt="Foto de perfil">
        </vue-avatar>
        <FileUpload class="btn" mode="basic" name="demo[]" chooseLabel="Editar" url="/api/upload" accept="image/*" customUpload @uploader="customBase64Uploader" :maxFileSize="1000000"/>
      </template>
      <template #title> Perfil </template>
      <template #content>    
        <span class="p-float-label">
            <InputText id="user" v-model="user" disabled />
            <label for="user">Usuario</label>
        </span>
        <br/>
        <span class="p-float-label">
            <InputText id="email" v-model="email" disabled/>
            <label for="email">Email</label>
        </span>
        <br/>
        <span class="p-float-label">
            <Textarea v-model="desc" autoResize  rows="5" cols="30" />
            <label>Descripcion</label>
        </span>
      </template>
      <template #footer>
          <Button icon="pi pi-check" label="Save" @click="sendNewInfo()"/>
          <Button icon="pi pi-times" label="Cancel" severity="secondary" style="margin-left: 0.5em" />
      </template>
    </Card>
  </div>
  
</template>

<script>
import { getCurrentUser } from 'vuefire';
import VueAvatar from "@webzlodimir/vue-avatar";
import "@webzlodimir/vue-avatar/dist/style.css";

const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace('data:', '').replace(/^.+,/, '');

export default {
  data() {
      return {
        profilePic: null,
        user: null,
        email: null
      }
  },
  methods: {

    async customBase64Uploader(event) {
      const vueProfile = document.querySelector(".profimage");
      const file = event.files[0];
      const reader = new FileReader();
      reader.readAsBinaryString(file);
      const user = this.user;

      reader.onload = function (event) {
          vueProfile.setAttribute("src", `data:${file.type};base64,${btoa(event.target.result)}`)
          vueProfile.setAttribute("alt", user)
      };
    },

    async sendNewInfo() {
      const vueProfile = document.querySelector(".profimage");
      const user = await getCurrentUser();
      const imageObj = {id: user.uid, name: user.displayName, email: user.email, photo: vueProfile.getAttribute("src").toString()}
      let endpoint = "https://volley-ranking-server.onrender.com/profile";
      const options = {
        method: "POST",
        headers: {'Content-Type': "application/x-www-form-urlencoded"},
        mode: 'no-cors',
        body: JSON.stringify(imageObj)
      };
      await fetch(endpoint, options);
    }
  },
  mounted: async () => {
    const user = await getCurrentUser();
    const profile = await fetch(`https://volley-ranking-server.onrender.com/${user.uid}`);
    const data = await profile.json();
    const vueProfile = document.querySelector(".profimage");
    if(user != null) {
      vueProfile.setAttribute("src", data.photo)
    }
  }
}
    
</script>

<style>

.container {
  margin: auto;
  width: 50%;

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
