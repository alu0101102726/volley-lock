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
      const usersImpt = await import("../../public/users.js");
      const userdata = usersImpt.default.data;
      let data = await fetch("http://localhost:3000/votes");
      let voteInfo = await data.json();
      const user = await getCurrentUser();
      let images = {}
      userdata.forEach((user, index) => {  
        let image = new Image(100,85);
        image.src = user.image;
        image.style.pointerEvents = 'none';
        image.alt = user.name;
        images[image.alt] = user.image;
      });
        let rows = document.getElementsByClassName('sort');
        Array.from(rows).forEach(row => {
            new Sortable(row, {
                group: 'shared', // set both lists to same group
                animation: 500
            });
        });
        this.images = images;

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
    },

    methods: {

      async fetchPostVotes(data) {
        const user = await getCurrentUser();
        data.id = user.uid;
        let endpoint = "http://localhost:3000/vote";
        const options = {
          method: "POST",
          headers: {'Content-Type': "application/x-www-form-urlencoded"},
          mode: 'no-cors',
          body: JSON.stringify(data)
        };
        await fetch(endpoint, options);

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
