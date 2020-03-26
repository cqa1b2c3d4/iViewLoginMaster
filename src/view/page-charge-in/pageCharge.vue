<template>
  <div class="split-pane-con">

    <p>this is an charge page(这是一个充值页面)</p>
    <p>{{busValue}}</p>
    <split-pane></split-pane>
    <br>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

  </div>
</template>

<script>
  import SplitPane from '@/components/split-pane'

  export default {
    name: "pageCharge",
    data() {
      return {
        busValue: ''
      }
    },
      components:{
        SplitPane
      },

    mounted() {
      this.$bus.$on('on-click', (data) => this.busValue += data)
    }
  }
</script>

<style lang="less">
.split-pane-con {
  width: 400px;
  height: 200px;
  background-color: #d19a66;

}
</style>
