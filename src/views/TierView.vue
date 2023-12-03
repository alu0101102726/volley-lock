<template>
  <div class="tier-list" v-if="!voted && votation">
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
    <div id="char4 row" class="sort ui-sortable" style="padding-top:25px;" >
      <img class="profile" v-for="image in images"
           v-bind:key="image.alt"
           :id="image.alt"
           :alt="image.alt"
           :src="image.src">
    </div>
    <Button style="backgroundColor: var(pink-200)" type="button" label="Enviar Resultados" icon="pi pi-check" :loading="loading" @click="sendInformation()"/>
  </div>
  <div class="registration" v-else>
    <h1>TIER LIST - {{ listName }}</h1>
    
    <h2>La votación comienza en:</h2>
    <div id="timer">
      <span id="days"></span>días
      <span id="hours"></span>horas
      <span id="minutes"></span>minutos
      <span id="seconds"></span>segundos
    </div>

  </div>
</template>

<script>
import Sortable from 'sortablejs'
import { User, userConverter } from '../User.js';
import { getFirestore, where, getDocs, collection, query, doc, getDoc, setDoc } from "firebase/firestore";
import { getCurrentUser } from 'vuefire';
import { timeBetweenDates } from '../utils/timer'
const db = getFirestore();

export default {
  data() {
    return {
      listName: 'Volley Lock',
      images: [],
      loading: false,
      voted: false,
      registration: false,
      votation: false,
      jsonConfig: {},
      timer: null
    }
  },

    methods: {

      async getImages() {
        const user = await getCurrentUser();
        const q = query(collection(db, "users"), where("email", "not-in", [user.email, "voleylock@gmail.com"]));
        const queryUserSnap = await getDocs(q);

        queryUserSnap.forEach((users, index) => {  
          this.images.push({src: users.data().photo, alt: users.data().name, list: 0});
        });
      },

      async sendInformation() {
        this.loading = true;
        const user = await getCurrentUser();
        const userRef = doc(db, "users", user.uid).withConverter(userConverter);    
        const q = query(collection(db, "votes"));
        const queryDatesSnap = await getDocs(q); 
        const votes = queryDatesSnap.docs[0].data();
        const endDate = new Date(votes.endDate.toDate())
        const dateRef = doc(db, "votes", `${endDate.getDate()}-${endDate.getMonth() + 1}-${endDate.getFullYear()}`);      
        const userSnap = await getDoc(userRef);
        const tiers = document.querySelectorAll('.list-group');
        let curentVotes = {};
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
            if(votes.votes[`${currentImage.alt}`]) {
              votes.votes[`${currentImage.alt}`] += score
            }
            else {              
              votes.votes[`${currentImage.alt}`] = score;
            }
            curentVotes[`${currentImage.alt}`] = score
          }
        });

        if(!userSnap.data().voted) {
          this.$swal({
            title: "¿Seguro que quieres registrar los datos?",
            text: "Una vez mandado no podrás volver a votar",
            icon: "warning",
            showCancelButton: true   
          }).then((result) => {
            if (result.isConfirmed) {
              const userFirestore = new User(userSnap.data().id, userSnap.data().name, userSnap.data().email, userSnap.data().photo, true, curentVotes);
              console.log(dateRef,votes)  
              if (userSnap.exists()) {
                  setDoc(userRef, userFirestore);
                  setDoc(dateRef, votes);
                  this.voted = true;
              }
              this.$swal('Enviado!', '', 'success')
            } else {
              this.$swal('Puedes seguir editando!', '', 'info')
            }
          })
        }
        else {          
          this.$swal('Ya has votado!', '', 'info')
        }
        this.loading = false;
        
      }
    },
    async mounted() {
      const q = query(collection(db, "config"));
      const queryConfigSnap = await getDocs(q);
      this.jsonConfig = queryConfigSnap.docs[0].data();
      const currentDate = new Date();
      const voteDate = new Date(this.jsonConfig.votesDateStart);
      if (currentDate > voteDate) {
        this.registration = false;
        this.votation = true;
        let rows = document.getElementsByClassName('sort');
        Array.from(rows).forEach(row => {
            new Sortable(row, {
                group: 'shared', // set both lists to same group
                animation: 500
            });
        });
        
        this.getImages();      
      }
      
      this.timer = setInterval(function() {
        timeBetweenDates(voteDate);
      }, 1000);
    },
    beforeUnmount() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }


}
</script>

<style scoped>

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

  .drag-el {
    background-color: #fff;
    margin-bottom: 10px;
    padding: 5px;
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
    cursor: move;
  }

  .registration {
    display: flex;
    flex-direction: column;
    place-items: center;
  }
  
</style>
