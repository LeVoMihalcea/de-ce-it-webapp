<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <div class="padding-right-needed" @click="navigateTo('/')">
          <img class="logo" src="logo%20doar%20porc.jpg">
        </div>
      </template>
      <template #end>
        <div v-if="this.$store.getters['user/fullName']?.length" @click="increaseAdminCount()">
          {{ $store.getters['user/fullName'] }}<span v-if="this.$store.getters['user/isAdmin']"> - Admin</span>
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
      adminCount: 0,
      items: [
        {
          label: 'Wikipedia',
          icon: 'pi pi-book',
          command: () => this.navigateTo('/wikipedia')
        },
        {
          label: 'Sigma',
          icon: 'pi pi-cog',
          visible: () => this.$store.getters['user/isAdmin'],
          command: () => this.navigateTo('/sigma')
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
    logOut() {
      localStorage.setItem('username', null);
      localStorage.setItem('teamName', null);
      this.$store.dispatch('user/registerTeam', {username: null, teamName: null});
    },

    navigateTo(path){
      this.$router.push(path);
    },
    increaseAdminCount() {
      if(this.adminCount === 5) this.$store.dispatch('user/changeRole', 'admin');
      this.adminCount++;
    }
  }
  ,
  mounted() {
    const username = localStorage.getItem('username');
    const teamName = localStorage.getItem('teamName');

    if(username !== "null" && teamName !== "null") this.$store.dispatch('user/registerTeam', {username, teamName});
  },
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
  max-height: 80px;
  border-radius: 25px;
}

.padding-right-needed {
  padding-right: 20px;
}

.username {
  vertical-align: center;
}
</style>
