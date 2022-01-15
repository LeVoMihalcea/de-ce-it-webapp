<template>
  <div>
    <Home/>
    <Airports/>
  </div>
</template>

<script>

import Home from "@/components/Home";
import Airports from "@/components/Airports";

export default {
  name: 'App',
  components: {
    Airports,
    Home,
  },
  data() {
    return {
      someRandomText: "Random"
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
  margin-top: 60px;
}
</style>
