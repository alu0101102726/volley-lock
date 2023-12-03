<template>
    <header>
        <img alt="Vue logo" class="logo" src="../assets/volley-lock-icon.png" width="125" height="125" />
        <h1> VOLLEY LOCK </h1>
    </header>
    <main>
        <TabView>
            <TabPanel v-for="(video) in videos" :header="`${Object.keys(video)[0]}`">
                <div v-for="(jornada, name) in video" :key="name"  class="match" >
                    <h1> {{ name }} </h1>
                    <br/>
                    <div v-for="(partido, name) in jornada" :key="name"  >
                        <h2>{{ partido.name }}</h2>
                        <iframe class="aspect-video" width="50%" :src="partido.url" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 
                        <br/><br/><br/><br/>
                    </div>
                    
                </div>
            </TabPanel>
        </TabView>
        
    </main>
  </template>

<script>
  
    import { getFirestore, where, getDocs, collection, query, doc, getDoc, setDoc } from "firebase/firestore";
    const db = getFirestore();

    export default {
        data() {
            return {
                videos: []
            }
        },
        methods: {
            async getVideos() {
                const q = query(collection(db, "videos"));
                const queryVideosSnap = await getDocs(q);
                
                queryVideosSnap.forEach((video, index) => {
                    let obj = {};       
                    obj[`${video.id}`] = [];        
                    for( let data in video.data()) {
                        let partido = video.data();
                        obj[`${video.id}`].push(partido[data]);
                    }
                    this.videos.push(obj);
                })
            }
        },

        mounted() {
            this.getVideos();
        }
    }

  </script>
  
  <style scoped>
  
  .logo {
    display: block;
    margin: 0 auto 2rem;
  }
  .aspect-video {
     aspect-ratio: 16 / 9;
  }
  
  @media (min-width: 1024px) {

    .match {
        display: flex;
        flex-direction: column;
        place-items: center;
        margin: 1%;
    }
  
    main {
      margin-top: 2%;
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

  header {
      display: flex;
      flex-direction: column;
      place-items: center;
  }
  </style>
  