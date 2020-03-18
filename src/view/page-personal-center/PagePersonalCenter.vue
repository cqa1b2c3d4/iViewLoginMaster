<template>
  <div>

    <personal-info></personal-info>

  </div>
</template>

<script>

    import PersonalInfo from "./components/PersonalInfo";

    export default {
        name: "PagePersonalCenter",

        data(){
            return{

            }
        },
        components:{
            PersonalInfo
        }
    }
</script>

<style scoped>

</style>
