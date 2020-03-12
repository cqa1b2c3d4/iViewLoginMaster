<template>
  <Menu mode="horizontal" @on-select="changeSelectName" :theme="theme" :active-name="onSelectName">
    <MenuItem name="1" to="/">
      <Icon type="ios-paper" />
      首页
    </MenuItem>
    <MenuItem name="2" to="/APPDownload">
      <Icon type="md-download" />
      APP下载
    </MenuItem>
    <MenuItem name="3" to="/chargeCenter">
      <Icon type="logo-usd" />
      充值中心
    </MenuItem>
    <MenuItem name="4" to="/socketTest">
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
                theme: 'light',
                onSelectName:'1'
            }
        },

        mounted(){
            let activeName = this.$store.state.activeName;
            console.log('选择的路由tab是: '+activeName);
            this.onSelectName = activeName;
        },

        methods:{
            changeSelectName(name){
                this.$store.commit('changeActiveTab',name);
                this.onSelectName=this.$store.state.activeName;
            }

        }

    }
</script>

<style scoped>

</style>
