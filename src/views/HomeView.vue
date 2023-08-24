<template>
  <header>
    <img alt="Vue logo" class="logo" src="../assets/blue-lock.png" width="125" height="125" />

    <div class="card flex justify-content-center">    
      <h1> VOLLEY LOCK </h1>
    </div>
  </header>
  <main>
    <TheWelcome />
  </main>
</template>

<style>

header {
  margin-top: 10%;
  line-height: 1.5;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    margin-top: 10%;
    display: flex;
    flex-direction: row;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  main {
    margin-top: 15%;
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
</style>
