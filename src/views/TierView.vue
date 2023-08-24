<template>
  <div class="tier-list">
    <h1>TIER LIST - {{ listName }}</h1>
    <div class="list-group row">
      <input type="text" value="S" class="tier6 level" readonly>
      <div class="tier label6 sort ui-sortable"></div>
    </div>
    <div class="list-group row ">
      <input type="text" value="A" class="tier5 level" readonly>
      <div class="tier label5 sort ui-sortable"></div>
    </div>
    <div class="list-group row">
      <input type="text" value="B" class="tier4 level" readonly>
      <div class="tier label4 sort ui-sortable"></div>
    </div>
    <div class="list-group row">
      <input type="text" value="C" class="tier3 level" readonly>
      <div class="tier label3 sort ui-sortable"></div>
    </div>
    <div class="list-group row">
      <input type="text" value="D" class="tier2 level" readonly>
      <div class="tier label2 sort ui-sortable"></div>
    </div>
    <div class="list-group row last">
      <input type="text" value="E" class="tier1 level" readonly>
      <div class="tier label1 sort ui-sortable"></div>
    </div>

    <div id="char4 row" class="sort ui-sortable" style="padding-top:25px;">
      <img class="profile" v-for="image in Object.keys(images)"
           v-bind:key="images[image].alt"
           :alt="image"
           :src="images[image]">
    </div>
    <Button type="button" label="Enviar Resultados" icon="pi pi-check" :loading="loading" @click="sendInformation()"/>
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import { getCurrentUser } from 'vuefire';

export default {
    data() {
        return {
            project: 'default',
            listName: 'VolleyLock',
            images: {},
            loading: false
        }
    },
    mounted: async function () {
      const infoData = await fetch("https://volley-ranking-server.onrender.com/info");
      const dataInfo = await infoData.json();

      let data = await fetch("https://volley-ranking-server.onrender.com/votes");
      let voteInfo = await data.json();
      
      const user = await getCurrentUser();
      let images = {}
      dataInfo.forEach((datas, index) => {  
        let user = JSON.parse(datas);
        let image = new Image(100,85);
        image.src = user.photo;
        image.style.pointerEvents = 'none';
        image.alt = user.name;
        images[image.alt] = user.photo;
      });

      voteInfo.forEach(element => {
        const voteData = JSON.parse(element);
        if (voteData.id == user.uid) {
          Object.keys(voteData.data).forEach(vote => {
            const value = voteData.data[vote];
            const div = document.querySelector(`.label${value}`);
            let imageLabel = new Image(96,96);
            imageLabel.src = images[vote];
            imageLabel.style.pointerEvents = 'none';
            imageLabel.alt = vote;
            div.appendChild(imageLabel);
          })
        }
      })
      this.images = images;
    },

    methods: {

      async fetchPostVotes(data) {
        const user = await getCurrentUser();
        data.id = user.uid;
        let endpoint = "https://volley-ranking-server.onrender.com/vote";
        const options = {
          method: "POST",
          headers: {'Content-Type': "application/x-www-form-urlencoded"},
          mode: 'no-cors',
          body: JSON.stringify(data)
        };
        await fetch(endpoint, options);

      },
      modifyJSON(newJSON) {
        this.loading = false;
        this.fetchPostVotes(newJSON)
      },

      sendInformation() {
        this.loading = true;
        let JSONresult = {data: {}};
        const tiers = document.querySelectorAll('.list-group');
        tiers.forEach((row, index) => {
          const tier = row.querySelector('.level').value;
          const people = row.querySelector('.sort').childNodes;
          for (let currentImageIndex = 0; currentImageIndex < people.length; currentImageIndex++) {
            let currentImage = people[currentImageIndex];
            let score = 0;
            switch(tier) {
              case "S":
                score = 6;
              break;
              case "A":
                score = 5;
              break;
              case "B":
                score = 4;
              break;
              case "C":
                score = 3;
              break;
              case "D":
                score = 2;
              break;
              case "E":
                score = 1;
              break;
            }
            JSONresult.data[`${currentImage.alt}`] = score;
          }
        });
        this.$swal({
          title: "¿Seguro que quieres registrar los datos?",
          text: "Una vez mandado no podrás volver a votar",
          icon: "warning",
          showCancelButton: true   
        }).then((result) => {
          if (result.isConfirmed) {
            this.$swal('Enviado!', '', 'success')
            this.modifyJSON(JSONresult)
          } else {
            this.$swal('Puedes seguir editando!', '', 'info')
          }
        })
        
      }
    },


}
</script>

<style>
  
  .tier-list {
    margin-top: 10%;
  }

  h1 {
    font-style: italic;
    font-weight: 100;
    color: white;
    margin-left: 2%;
    padding-right: 1px;
    text-align: left;
  }
  
  .row {
    height: 97px; 
    width: 100%;
    border: solid 1px #dedede; /* the official color of smash */
    border-bottom: 0;
    text-align: left;
  }

  .last {
    border-bottom: solid 1px #dedede;
  }

  input[type="text"] {
    height: 97px;
    width: 10%;
    text-align: center;
    border: none;
    font-weight: 600;
    margin: 0;
    display: inline-block;
    vertical-align: top;
  }

  input[type="text"].levelPM {
    height: 54px;
  }

  .tier {
    width: 90%;
    height:  97px;  
    display: inline-block;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
  }

  .tier6 {
    background-color: #ed6764;
  }
  .tier5 {
    background-color: #f88157;
  }
  .tier4 {
    background-color: #eae286;
  }
  .tier3 {
    background-color: #8abc6e;
  }
  .tier2 {
    background-color: #779fde;
  }
  .tier1 {
    background-color: #627ee0;
  }

  #char4 {
    width: 100%;
    margin: 10px auto;
    overflow-x: auto;
    overflow-y: hidden;
  }

  img.profile {
    width: 96px;
    height: 96px;
  }
</style>
