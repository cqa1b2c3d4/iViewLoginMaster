<template>
  <div id="app">
    <main-header></main-header>
    <router-view key="default"></router-view>
    <router-view key="test" name="test"></router-view>
    <main-footer class="app-footer"></main-footer>
    <div style="clear: both"></div>
  </div>
</template>

<script>
  import mainHeader from "./components/main-header/mainHeader";
  import mainFooter from "./components/main-footer/mainFooter";

  export default {
    name: 'App',
    data: function () {
      return {}
    },
    components: {
      mainHeader,
      mainFooter
    }
  }
</script>

<style lang="less">

  body, #app {
    height: 100%;
  }

  html {
    box-sizing: border-box;
    background-color: #ffffff;
  }

  body {
    box-sizing: border-box;
    width: 100%;
    min-width: 1000px;
    min-height: 1000px;
    position: relative;
    margin: 0;
    padding: 0;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
  }

  #app {
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    width: 100%;
    background-color: #f7f7f7;
  }

  .app-footer {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  .router-enter {
    opacity: 0;
  }

  .router-enter-active {
    transition: opacity 1s ease;
  }

  .router-enter-to {
    opacity: 1;
  }

  .router-leave {
    opacity: 1;
  }

  .router-leave-active {
    transition: opacity 1s ease;
  }

  .router-leave-to {
    opacity: 0;
  }
</style>
