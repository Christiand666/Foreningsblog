<template>
    <div class="container">
      <Navbar />
      <router-view></router-view>
      <FooterSection />
    </div>
</template>

<script>
import FooterSection from './components/MenuItems/Footer.vue'
import Navbar from './components/MenuItems/Navbar.vue'


export default {
  name: 'App',
  setup(){
     
  },
  components: {
    FooterSection,
    Navbar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>