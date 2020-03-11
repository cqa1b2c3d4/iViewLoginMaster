<template>
  <Menu mode="horizontal" :theme="theme" active-name="1">
    <MenuItem name="1" to="/">
      <Icon type="ios-paper" />
      首页
    </MenuItem>
    <MenuItem name="2" to="/home/APPDownload">
      <Icon type="md-download" />
      APP下载
    </MenuItem>
    <MenuItem name="3" to="/home/chargeCenter">
      <Icon type="logo-usd" />
      充值中心
    </MenuItem>
    <MenuItem name="4" to="/page">
      <Icon type="ios-cog-outline" />
      socket测试页
    </MenuItem>
  </Menu>
</template>

<script>
    export default {
        name: "routerTab",
        data () {
            return {
                theme: 'light'
            }
        }
    }
</script>

<style scoped>

</style>
