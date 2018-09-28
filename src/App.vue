<template>
  <div id="app">
    <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper blue">
        <a href="#!" class="brand-logo">Kanban App</a>
        <ul class="right hide-on-med-and-down">
          <li><router-link to="/">Home</router-link></li>
          <li> <router-link to="/about">About</router-link></li>
        </ul>
      </div>
    </nav>
  </div>
  <div id="nav"></div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color:whitesmoke;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
