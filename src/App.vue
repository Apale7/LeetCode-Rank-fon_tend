<template>
  <div id="app">
<!--    <img src="./assets/logo.png">-->
<!--    <Rank></Rank>-->
    <router-view/>
  </div>
</template>

<script>
import Rank from "./components/LeetCodeRank";
export default {
  name: 'App',
  components: {Rank}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
