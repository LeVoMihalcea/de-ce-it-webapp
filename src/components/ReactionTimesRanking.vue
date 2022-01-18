<template>
  <div>
    <Card class="card">
      <template #title>
        Clasament
      </template>
      <template #content>
        <DataTable :value="ranking" stripedRows sortField="seconds" :sortOrder="+1" responsiveLayout="scroll">
          <Column field="username" header="Nume" :sortable="true"></Column>
          <Column field="seconds" header="Timp" :sortable="true"></Column>
        </DataTable>
      </template>
    </Card>
  </div>
</template>

<script>

import {fetchReactionTimes} from "@/services/reactionTimeService.ts";

export default {
  name: "ReactionTimesRanking",
  data() {
    return {
      ranking: null,
      interval: null
    }
  },
  methods: {
    refreshReactionTimes() {
      fetchReactionTimes().then(
          value => {
            console.log(value, this.ranking);
            this.ranking = value;
            this.ranking.forEach(
                value => {
                  console.log(value);
                  value.seconds = this.millisToMinutesAndSeconds(value.time);
                }
            )
          }
      ).catch(
          (reason) => {
            console.log(reason);
          }
      );
    },

    millisToMinutesAndSeconds(millis) {
      const date = new Date(millis);
      console.log(date.getMinutes())
      return `${date.getMinutes()}:${date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()}:${date.getMilliseconds()}`;
    }

  },
  created() {
    this.refreshReactionTimes()
    this.interval = setInterval(() => this.refreshReactionTimes(), 5000);
  },
  mounted() {
  },
  beforeUnmount() {
    clearInterval(this.interval);
  }
}
</script>

<style scoped>

</style>
