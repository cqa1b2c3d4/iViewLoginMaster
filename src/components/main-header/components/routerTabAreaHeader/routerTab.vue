<template>
  <Menu mode="horizontal" @on-select="changeSelectName" :theme="theme" :active-name="onSelectedName">
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
    import {mapMutations,mapState} from "vuex";

    export default {
        name: "routerTab",
        data () {
            return {
                theme: 'light',
            }
        },

        computed:{
            //为什么要使用...mapState, 对象结构，如果在...mapState之前还有其他计算属性，可以直接结构到同一个computed对象中
            ...mapState({
                routersNoAuthor:'routersNoAuthor',
                activeName: 'activeName'
            }),
            onSelectedName(){
                let activeName = this.activeName;
                return ''+ activeName;
            }
        },

        mounted(){
            if (this.routersNoAuthor.indexOf(this.$route.path)  === -1){
                this.changeActiveTab('')
            } else {
                this.changeActiveTab(this.routersNoAuthor.indexOf(this.$route.path)+1);
            }
        },

        methods:{
            ...mapMutations(['changeActiveTab']),
            changeSelectName(name){
                this.changeActiveTab(name);
            }

        }

    }
</script>

<style scoped>

</style>
