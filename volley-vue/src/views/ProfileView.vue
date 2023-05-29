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
      let blob = await fetch(file.objectURL).then((r) => r.blob())

      reader.readAsDataURL(blob);

      reader.onloadend = function () {
          const base64data = reader.result;
          console.log(base64data);
          vueProfile.setAttribute("src", base64data)
          vueProfile.setAttribute("alt", "Foto de perfil")
      };
    },
    async sendNewInfo() {
      const vueProfile = document.querySelector(".profimage");
      const user = await getCurrentUser();
      const imageObj = {id: user.uid, name: user.displayName, email: user.email, photo: vueProfile.getAttribute("src")}
      let endpoint = "http://localhost:3000/profile";
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
    const profile = await fetch(`http://localhost:3000/${user.uid}`);
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
