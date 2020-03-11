<template>
  <div>
    <Input search placeholder="请输入用户名/用户ID" v-model="searchVal" @search="clickToSearch"/>
  </div>
</template>

<script>
    export default {
        name: "searchInHeader",
        data(){
            return{
                searchVal:''

            }
        },
        methods:{
            clickToSearch() {
                console.log('点击开始搜索')
            }

        }
    }
</script>

<style scoped>

</style>
