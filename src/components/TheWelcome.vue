<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import SupportIcon from './icons/IconSupport.vue'
import NavBar from './NavBar.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Documentación</template>

    Documentación del 
    <a href="https://vuejs.org/" target="_blank" rel="noopener">proyecto</a>
    mestra los componentes y funciones por si se necesitaran entender y modificar en un futuro. 
    <br />
    Por otro lado, también se encuentra disponible la documentación de la  
    <a href="192.168.1.78:3000/docs" target="_blank" rel="noopener">API</a> 
    utilizada para este sistema
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Desarrollo</template>

    El proyecto ha sido desarrollado y construido con 
    <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite</a> 
    además del uso de Vue 3 y de 
    <a href="primevue.org/dialog/" target="_blank" rel="noopener">PrimeVue</a> 
    para la mayoria de los componentes implementados
    <br />
  </WelcomeItem>
</template>
