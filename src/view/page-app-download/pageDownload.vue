<template>
  <div>
    <main-header></main-header>
    <p>this is an APP download page(这是一个app下载页)</p>
    <main-footer></main-footer>
  </div>
</template>

<script>
  import mainFooter from "../../components/main-footer/mainFooter";
  import mainHeader from "../../components/main-header/mainHeader";
    export default {
        name: "pageDownload",
        data() {
            return{

            }
        },
        components:{
            mainFooter,
            mainHeader
        }
    }
</script>

<style scoped>

</style>
