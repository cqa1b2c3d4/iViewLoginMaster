<template>
  <div>

    <p>this is an charge page(这是一个充值页面)</p>
    <p>{{busValue}}</p>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </div>
</template>

<script>

    export default {
        name: "pageCharge",
        data() {
            return {
              busValue:''
            }
        },

      mounted() {
          this.$bus.$on('on-click',(data) => this.busValue += data)
      }
    }
</script>

<style scoped>

</style>
