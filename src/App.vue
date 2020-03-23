<template>
  <div id="app">
    <main-header></main-header>
    <transition-group name="router">
      <router-view key="default"></router-view>
      <router-view key="test" name="test"></router-view>
    </transition-group>
    <main-footer></main-footer>
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

<style>
  #app {
    box-sizing: border-box;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: left;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #f7f7f7;
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
