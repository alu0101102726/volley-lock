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
  </div>
</template>

<script>
import Sortable from 'sortablejs'
import { getFirestore, where, getDocs, collection, query, doc, getDoc, setDoc } from "firebase/firestore";
const db = getFirestore();

export default {
    data() {
        return {
            project: 'default',
            listName: 'VolleyLock',
            images: [],
            maxValue: 0,
            peopleVoted: 0,
            loading: false
        }
    },

    methods: {

      getEmptyBoard() {
        for(let i = 1; i <= 6; i++) {
          const div = document.querySelector(`.label${i}`);
          var child = div.lastElementChild; 
          while (child) {
            div.removeChild(child);
            child = div.lastElementChild;
          }
        }
      },

      async getImages() {
        const q = query(collection(db, "users"), where("email", "not-in", ["voleylock@gmail.com"]));
        const queryUserSnap = await getDocs(q);

        queryUserSnap.forEach((users, index) => {  
          if(users.data().voted) {
            this.peopleVoted += 1;
          }
          this.images.push({src: users.data().photo, alt: users.data().name, list: 0});
        });
      },

      async getVotes() {
        const q = query(collection(db, "votes"));
        const queryDatesSnap = await getDocs(q); 
        const votes = queryDatesSnap.docs[0].data();
        this.peopleVoted = (this.peopleVoted > 1) ? this.peopleVoted - 1 : this.peopleVoted;
        this.maxValue = this.peopleVoted * 6;
        this.images.forEach((user) => {
          Object.getOwnPropertyNames(votes.votes).forEach((vote) => {
            if(user.alt == vote) {
              const value = Math.floor(votes.votes[`${vote}`] / this.peopleVoted);
              const div = document.querySelector(`.label${value}`);
              let imageLabel = new Image(96,96);
              imageLabel.src = user.src;
              imageLabel.style.pointerEvents = 'none';
              imageLabel.alt = user.alt;
              div.appendChild(imageLabel);
            }
          })
        })
      }
    },
    mounted() {
      this.getEmptyBoard();
      let rows = document.getElementsByClassName('sort');
      Array.from(rows).forEach(row => {
          new Sortable(row, {
              group: 'shared', // set both lists to same group
              animation: 500
          });
      });

      this.getImages();   
      this.getVotes();
    },


}
</script>

<style scoped>
  
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
