<template>
  <div>
    <main-header></main-header>
    <my-noble></my-noble>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";
    import MyNoble from "./components/MyNoble";

    export default {
        name: "PageMyNoble",

        data(){
            return{

            }
        },
        components:{
            mainFooter,
            mainHeader,
            MyNoble
        }
    }
</script>

<style scoped>

</style>
