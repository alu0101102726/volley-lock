<template>

  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading> Registro </template>

    Para registrarse, el usuario debe iniciar sesión en Google (botón azul parte superior derecha). Para que finalice la fase de registro queda:
      <div id="timer">
        <span id="days"></span>días
        <span id="hours"></span>horas
        <br/>
        <span id="minutes"></span>minutos
        <span id="seconds"></span>segundos
      </div>
  </WelcomeItem>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading> ¿Qué es? </template>

    VolleyLock es una web que persigue fomentar la competitividad entre jugadores. Ha sido diseñado con el propósito de ser un ranking donde cada
    jugador seleccionado podrá votar a otros jugadores que se encuentren registrados utilizando un sistema de Tiers.
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading> Sistema de votación </template>
    
    El sistema implementado para la votación se basa en una estructura similar a un Tier List. Esta es una lista agrupando elementos
    por niveles (tiers) de peor a mejor. Para este caso se ha optado por tener los tiers teniendo cada uno asignada la siguiente puntuación:    
    <ul>
      <li> <div class="one-line"><p class="tier6">S</p> &nbsp; ⟼ 6 pts</div></li>
      <li> <div class="one-line"><p class="tier5">A</p> &nbsp; ⟼ 5 pts</div></li>
      <li> <div class="one-line"><p class="tier4">B</p> &nbsp; ⟼ 4 pts</div></li>
      <li> <div class="one-line"><p class="tier3">C</p> &nbsp; ⟼ 3 pts</div></li>
      <li> <div class="one-line"><p class="tier2">D</p> &nbsp; ⟼ 2 pts</div></li>
      <li> <div class="one-line"><p class="tier1">E</p> &nbsp; ⟼ 1 pts</div></li>

    </ul>
    <br />
  </WelcomeItem>
</template>

<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import SupportIcon from './icons/IconSupport.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
</script>

<script>
import { timeBetweenDates } from '../utils/timer'
import { getFirestore, getDocs, collection, query } from "firebase/firestore";
const db = getFirestore();
const q = query(collection(db, "config"));
const queryConfigSnap = await getDocs(q);
const jsonConfig = queryConfigSnap.docs[0].data();
const registrationDate = new Date(jsonConfig.registrationDateStart);        
const timer = setInterval(function() {
  timeBetweenDates(registrationDate);
}, 1000);

export default {
  methods: {
    beforeUnmount() {
      if (timer) {
        clearTimeout(timer);
      }
    }
  }
}
</script>

<style scoped>

#timer {
  display: flex;
}

#days {
  font-size: 20px;
}

#hours {
  font-size: 20px;
}

#minutes {
  font-size: 20px;
}

#seconds {
  font-size: 20px;
}

.one-line {
  display: flex;
  justify-content: left;
}

.tier6 {
  color: #ed6764;
}
.tier5 {
  color: #f88157;
}
.tier4 {
  color: #eae286;
}
.tier3 {
  color: #8abc6e;
}
.tier2 {
  color: #779fde;
}
.tier1 {
  color: #627ee0;
}
</style>
