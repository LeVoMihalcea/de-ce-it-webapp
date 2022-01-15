<template>
  <div>Airports</div>
  <div class="wrapper">
    <p>{{ $store.getters['user/fullName'] }}</p>
    <div v-for="airport in airports" :key="airport.abbreviation">
      <AirportCard :airport=airport @click="$store.dispatch('addToFavourites', airport)"></AirportCard>
    </div>
  </div>
  <br>

  <Favourites/>
</template>

<script>
import allAirports from "@/data/allAirports.ts";
import AirportCard from "@/components/AirportCard";
import {ref} from "vue";
import Favourites from "@/components/Favourites";

export default {
  name: "Airports",
  components: {Favourites, AirportCard},

  setup() {
    const airports = ref(allAirports);
    return {airports}
  }
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