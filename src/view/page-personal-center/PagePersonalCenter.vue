<template>
  <div>
    <main-header></main-header>
    <personal-info></personal-info>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";
    import PersonalInfo from "./components/PersonalInfo";

    export default {
        name: "PagePersonalCenter",

        data(){
            return{

            }
        },
        components:{
            mainFooter,
            mainHeader,
            PersonalInfo
        }
    }
</script>

<style scoped>

</style>
