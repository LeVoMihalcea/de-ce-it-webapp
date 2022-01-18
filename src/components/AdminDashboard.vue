<template>
  <div class="p-grid">
    <div class="p-lg-2"></div>
    <Card class="card p-lg-3">
      <template #title>
        Buna ziua Sigma-ule
      </template>
      <template #content>
        <div class="p-fluid">
          <Dropdown v-model="selectedChallenge" :options="challenges" optionLabel="name"
                    placeholder="Alege o proba sefule"
                    @change="this.$router.push(selectedChallenge.path)"
          />
        </div>
      </template>
      <template #footer>
      </template>
    </Card>

    <div class="p-lg-5">
      <router-view></router-view>
    </div>
    <div class="p-lg-2"></div>

  </div>
</template>

<script>
export default {
  name: "AdminDashboard",
  data(){
    return {
      challenges: [
        {name: 'Placeri Informative', path: '/sigma/wikipedia'},
        {name: 'Placeri Performative', path: '/tbd'},
      ],
      selectedChallenge: null
    }
  },
}
</script>

<style scoped>
.card {
  margin: 32px auto 0 auto;
}
</style>
