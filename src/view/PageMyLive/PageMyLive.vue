<template>
  <div>
    <main-header></main-header>
    <my-live></my-live>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";
    import MyLive from "./components/MyLive";

    export default {
        name: "PageMyLive",

        data(){
            return{

            }
        },
        components:{
            mainFooter,
            mainHeader,
            MyLive
        }
    }
</script>

<style scoped>

</style>
