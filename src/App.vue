<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <div class="padding-right-needed" @click="goHome()">
          De ce IT?
        </div>
      </template>
      <template #end>
        <div v-if="this.$store.getters['user/fullName']?.length">
          {{ $store.getters['user/fullName'] }}
        </div>
      </template>
    </Menubar>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      items: [
        {
          label: 'File',
          icon: 'pi pi-fw pi-file'
        },
        {

          separator: true
        },
        {
          label: 'Log Out',
          icon: 'pi pi-sign-out',
          command: () => this.logOut()
        },
      ]
    }
  }
  ,
  methods: {
    goHome() {
      this.$router.push('/')
    },

    logOut() {
      localStorage.setItem('username', null);
      localStorage.setItem('teamName', null);
      this.$store.dispatch('user/registerTeam', {username: null, teamName: null});
    }
  }
  ,
  mounted() {
    const username = localStorage.getItem('username');
    const teamName = localStorage.getItem('teamName');

    if(username !== "null" && teamName !== "null") this.$store.dispatch('user/registerTeam', {username, teamName});
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: #121212;
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}

.logo {
  max-height: 40px;
}

.padding-right-needed {
  padding-right: 20px;
}

.username {
  vertical-align: center;
}
</style>
