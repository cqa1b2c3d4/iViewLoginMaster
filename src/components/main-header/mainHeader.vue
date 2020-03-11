<template>
  <div id="headerInMain">
    <Row id="headerContainer" >
      <Col span="3">
        <logo-in-header></logo-in-header>
      </Col>
      <Col span="12">
        <router-tab></router-tab>
      </Col>
      <Col span="6">
        <search-in-header></search-in-header>
      </Col>
      <Col span="3">
        <click-to-login></click-to-login>
      </Col>
    </Row>
    <div class="clear-both"></div>
  </div>
</template>

<script>
    import clickToLogin from "./components/loginAreaHeader/clickToLogin";
    import logoInHeader from './components/logoAreaHeader/logo'
    import routerTab from "./components/routerTabAreaHeader/routerTab";
    import searchInHeader from "./components/searchAreaHeader/search";

    export default {
        name: "mainHeader",
        components: {
            clickToLogin,
            logoInHeader,
            routerTab,
            searchInHeader
        }
    }
</script>

<style scoped>
  #headerInMain {
    width: 100%;
    max-width: 1200px;
    height: 80px;
  }

  #headerContainer {
    height: 100%;
  }

  .clear-both{
    clear: both;
  }
</style>
