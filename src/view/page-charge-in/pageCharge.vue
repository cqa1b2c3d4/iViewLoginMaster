<template>
  <div>
    <main-header></main-header>
    <p>this is an charge page(这是一个充值页面)</p>
    <main-footer></main-footer>
  </div>
</template>

<script>
    import mainFooter from "../../components/main-footer/mainFooter";
    import mainHeader from "../../components/main-header/mainHeader";

    export default {
        name: "pageCharge",
        data() {
            return {}
        },
        components: {
            mainFooter,
            mainHeader
        }
    }
</script>

<style scoped>

</style>
