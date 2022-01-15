<template>
  <div class="wrapper">
    <div v-for="airport in $store.state.airport.favorites" :key="airport.abbreviation">
      <AirportCard :airport="airport"/>
    </div>
  </div>
</template>

<script>
import AirportCard from "@/components/AirportCard";

export default {
  name: "Favourites",
  components: {AirportCard}
}
</script>

<style scoped>
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 1rem;
  max-width: 960px;
  margin: 0 auto;
}

p,
h3 {
  grid-column: span 3;
}
</style>