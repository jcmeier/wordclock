<template>
  <router-view/>
  <nav :class="{invisible: $route.query.hidenav === 'true'}">
    <router-link to="/">Home</router-link> |
    <router-link to="/timeselection">Time selection</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<style>
body {
  padding: 0;
  margin: 0;
  background-color: black;
}
#app {
  padding-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.invisible {
  display: none;
}
</style>
