<template>
  <div id="headerInMain">
    <Row id="headerContainer" >
      <Col span="4">
        <logo-in-header></logo-in-header>
      </Col>`
      <Col span="8">
        <router-tab></router-tab>
      </Col>
      <Col span="8">
        <search-in-header></search-in-header>
      </Col>
      <Col span="4">
        <click-to-login></click-to-login>
      </Col>
    </Row>
  </div>
</template>

<script>
    import clickToLogin from "./components/loginAreaHeader/clickToLogin";
    import logoInHeader from './components/logoAreaHeader/logo'
    import routerTab from "./components/routerTabAreaHeader/routerTab";
    import searchInHeader from "./components/searchAreaHeader/search";

    export default {
        name: "mainHeader",
        components: {LogoInHeader, RouterTab, SearchInHeader, ClickToLogin},
        comments: {
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
    height: 300px;
  }

  #headerContainer {
    height: 100%;
  }

</style>
