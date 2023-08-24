<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <NavBar class="nav-menu" />
  <RouterView/>
</template>

<style scoped>


@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
.nav-menu {
  position:block;
  margin-bottom: 2%;
  top:0;
  width: 95%;
}
</style>
