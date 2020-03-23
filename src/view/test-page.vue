<template>
    <div>
      test vue page
      <button @click="handleClick">click me</button>
    </div>
</template>

<script>
    export default {
        name: "testPage",
      data(){
          return{
            busData: 'hi, this is test page'
          }
      },
      mounted() {
          console.log(this.$bus)
      },
      methods:{
          handleClick(){
            this.$bus.$emit('on-click',this.busData)
          }
      }
    }
</script>

<style scoped>

</style>
