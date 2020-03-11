<template>
  <div>
    <main-header></main-header>
    <page-body></page-body>
    <mainFooter></mainFooter>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";
    import PageBody from "./components/page";

    export default {
        name: "pageSocket",
        data(){
            return{

            }
        },
        components: {
            PageBody,
            mainHeader,
            mainFooter
        }
    }
</script>

<style scoped>

</style>
