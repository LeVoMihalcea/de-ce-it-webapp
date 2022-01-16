<template>
  <Card class="card p-shadow-22">
    <template #title>
      Team Registration
    </template>
    <template #content>
      <div class="p-fluid">
        <div class="p-field">
          <label for="firstname">Your name</label>
          <InputText id="firstname" type="text" v-model="username"/>
        </div>
        <div class="p-field">
          <label for="lastname">Team name</label>
          <InputText id="lastname" type="text" v-model="teamName"/>
        </div>
      </div>
    </template>
    <template #footer>
      <Button class="button" label="Register" @click="registerTeam()"/>
    </template>
  </Card>
</template>

<script>
import {registerTeam} from "@/services/userService.ts";

export default {
  name: "TeamRegistration",
  data: function () {
    return {
      username: "",
      teamName: "",
    };
  },
  methods: {
    handleSuccess() {
      this.$store.dispatch('user/registerTeam', {username: this.username, teamName: this.teamName});
      this.$router.push('/');
      localStorage.setItem('username', this.username);
      localStorage.setItem('teamName', this.teamName);
    },

    registerTeam() {
      console.log(this.username, this.teamName);

      registerTeam({name: this.username, team: this.teamName})
          .then(this.handleSuccess)
          .catch(reason => console.log(reason));
    }
  }
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
