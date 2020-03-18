<template>
<div>

  <hello-world></hello-world>
  <live-classify></live-classify>
  <hot-activity></hot-activity>
  <hot-live></hot-live>

</div>

</template>

<script>
  import hotActivity from "./components/hotActivityArea/hotActivity";
  import hotLive from "./components/hotLiveArea/hotLive";
  import liveClassify from "./components/liveClassifyArea/liveClassify";
  import HelloWorld from "./components/HelloWorld";


    export default {
        name: "pageHome",
        data: function () {
            return{
              testData: ''

            }
        },
        components:{
            HelloWorld,
            hotLive,
            hotActivity,
            liveClassify,
        }
    }
</script>

<style scoped>

</style>
