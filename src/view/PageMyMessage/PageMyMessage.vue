<template>
  <div>
    <main-header></main-header>
    <my-message></my-message>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";
    import MyMessage from "./components/MyMessage";

    export default {
        name: "PageMyMessage",

        data(){
            return{

            }
        },
        components:{
            mainFooter,
            mainHeader,
            MyMessage
        }
    }
</script>

<style scoped>

</style>
