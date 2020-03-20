<template>
  <div class="live-room">
    <div>直播间页面,房间号：{{$route.params.id}}</div>
    <div class="live-room-container">
      <div class="live-room-play">
        <live-play-area></live-play-area>
      </div>
      <div class="live-room-chat">
        <live-chat-area></live-chat-area>
      </div>
    </div>
  </div>
</template>

<script>
    import LivePlayArea from "./components/live-play-window/LivePlayArea";
    import LiveChatArea from "./components/live-chat-window/LiveChatArea";

    export default {
        name: "PageLiveRoom",
        data() {
            return {}
        },
        components: {
            LivePlayArea,
            LiveChatArea
        }
    }
</script>

<style scoped>
  .live-room {
    width: 80%;
    margin: 0 auto;
  }

  .live-room-container {
    height: 500px;
  }

  .live-room-play {
    width: 60%;
    float: left;
    height: 100%;
    background-color: #969896;
  }

  .live-room-chat {
    width: 40%;
    float: left;
    height: 100%;
    background-color: #d19a66;
  }
</style>
