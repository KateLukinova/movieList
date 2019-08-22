<template>
  <div id="app">
    <my-header></my-header>
    <div id="nav">
      <router-link to="/"></router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
}
a {
  text-decoration: none;
  color: #2c3e50;
}
  h1, h2 {
    font-family: Montserrat;
    font-weight: normal;
    text-align: left;
  }
</style>
