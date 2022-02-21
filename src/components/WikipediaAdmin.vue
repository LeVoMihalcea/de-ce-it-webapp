<template>
  <Card class="card">
    <template #title>
      Placeri Informative
    </template>
    <template #content>
      <div class="p-fluid">
        <div class="p-field">
          <label for="start-link">Link de Start</label>
          <InputText id="start-link" type="text" v-model="fromUrl"/>
        </div>
        <div class="p-field">
          <label for="finish-topic">Topic</label>
          <InputText id="finish-topic" type="text" v-model="toPage"/>
        </div>
      </div>
    </template>
    <template #footer>
      <Button class="button" label="Send" @click="sendMessage()"/>
    </template>
  </Card>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "webstomp-client";

export default {
  name: "WikipediaAdmin",
  data() {
    return {
      fromUrl: null,
      toPage: null
    }
  },
  methods: {
    connect() {
      this.socket = new SockJS(process.env.VUE_APP_TARGET_WITHOUT_V1 + "/ws/wikipedia");
      this.stompClient = Stomp.over(this.socket);
      this.stompClient.connect(
          {},
          () => {
            this.connected = true;
            console.log(this.connected);
          },
          error => {
            console.log(error);
            this.connected = false;
          }
      );
    },
    sendMessage() {
      this.stompClient.send('/wikipedia', JSON.stringify({"fromUrl": this.fromUrl, "toPage": this.toPage}));
    }
  },
  mounted() {
    this.connect();
  }
}
</script>

