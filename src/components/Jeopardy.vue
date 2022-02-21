<template>
  <div>
    <div class="p-grid">
      <div class="p-lg-2"></div>
      <Card class="card p-lg-4">
        <template #header>

        </template>
        <template #title>
          Placeri Curioase
        </template>
        <template #content>
        </template>
        <template #footer>
          <Button class="button" v-if="this.messageReceived()" label="STIU EU DOMNU'" @click="finish()"/>
        </template>
      </Card>

      <reaction-times-ranking class="p-lg-4"/>
      <div class="p-lg-2"></div>
    </div>
  </div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";
import ReactionTimesRanking from "@/components/ReactionTimesRanking";

export default {
  name: "Jeopardy",
  components: {ReactionTimesRanking},
  data() {
    return {
      fromUrl: null,
      toPage: null,
      start: null,
      end: null
    }
  },
  methods: {
    connect() {
      console.log(process.env.VUE_APP_TARGET_WITHOUT_V1 + "/ws/wikipedia");
      this.socket = new SockJS(process.env.VUE_APP_TARGET_WITHOUT_V1 + "/ws/wikipedia");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
          {},
          frame => {
            this.connected = true;
            console.log(frame);
            this.stompClient.subscribe("/socket/wikipedia", (tick) => {
              console.log();
              const body = JSON.parse(tick.body);
              console.log(body);
              this.fromUrl = body.fromUrl;
              this.toPage = body.toPage;
              console.log(this.fromUrl, this.toPage);
              this.start = new Date();
            });
          },
          error => {
            console.log(error);
            this.connected = false;
          }
      );
    },
    messageReceived() {
      return this.toPage;
    },
    finish() {
      this.end = new Date();
      const delta = this.end - this.start;
      console.log(delta);
      this.stompClient.send('/ws/wikipediaPress', JSON.stringify({from: this.$store.getters['user/username'], ms: delta}));
    }
  },
  mounted() {
    this.connect();
  }
}
</script>

<style scoped>
.p-grid{
  margin-top: 2%;
}

.button {
  width: 100%;
}

label {
  color: gray;
}

a {
  color: white;
}

.header {
  background-size: cover;
}
</style>
