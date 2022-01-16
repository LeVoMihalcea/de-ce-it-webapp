<template>
  <div>
    <Card class="card p-shadow-22">
      <template #header>

      </template>
      <template #title>
        Bun venit la De Ce IT?
      </template>
      <template #content>

      </template>
      <template #footer>
        <Button class="button" v-if="shouldShowRegistrationButton()" label="Inscriere" @click="goToRegistration()"/>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "Home",
  methods: {
    goToRegistration() {
      this.$router.push('/teams')
    },
    shouldShowRegistrationButton() {
      return !this.$store.getters['user/fullName'];
    }
  },
}
</script>

<style scoped>
.card {
  max-width: 300px;
  margin: 50px auto 0 auto;
}

.button {
  width: 100%;
}

</style>
