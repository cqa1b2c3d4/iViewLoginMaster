<template>
<div>
  <main-header></main-header>
  <hello-world></hello-world>
  <live-classify></live-classify>
  <hot-activity></hot-activity>
  <hot-live></hot-live>
  <main-footer></main-footer>
</div>

</template>

<script>
  import hotActivity from "./components/hotActivityArea/hotActivity";
  import hotLive from "./components/hotLiveArea/hotLive";
  import liveClassify from "./components/liveClassifyArea/liveClassify";
  import HelloWorld from "./components/HelloWorld";
  import mainFooter from "../../components/main-footer/mainFooter";
  import mainHeader from "../../components/main-header/mainHeader";

    export default {
        name: "pageHome",
        data: function () {
            return{
              testData: ''

            }
        },
        components:{
            HelloWorld,
            mainFooter,
            hotLive,
            hotActivity,
            liveClassify,
            mainHeader
        }
    }
</script>

<style scoped>

</style>
