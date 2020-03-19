<template>
  <div id="app">
  <div class="banner">
    <div id="nav">
      <router-link to="/">Menu</router-link> 
      <router-link to="/about"> | About | </router-link>
      <router-link to="/cart">View Cart (${{total}})</router-link>
    </div>
    <div class="home">
      <img alt="Villa logo" src="../public/images/logo.png">
      <h1>Villa Restaurant</h1>
    </div>
    
    </div>
    <router-view/>
    <footer>
    <p><a href="https://github.com/helgabalashova/cp3" target="_blank">Github</a></p>
    </footer>
  </div>
</template>
<script>
  export default {
  name: "Main",
  computed: {
    total() {
      return Math.round(this.$root.$data.total*100)/100;
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1 {
  color: #9cb227;
  font-size: 16px;
  margin-top: -5px;
}

.banner {
  height: 60vh;
  background-image: url(../public/images/main-photo.jpg);
  background-attachment: fixed;
  background-size: cover;
  backgground-position: center center;
  margin-bottom: 40px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
  letter-spacing: 1px;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #9cb227;
}

.home img {
  width: 400px;
}
</style>
