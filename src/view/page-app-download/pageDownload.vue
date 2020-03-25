<template>
  <div>
    <p>this is an APP download page(这是一个app下载页)</p>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="getEmitFormCountTo">
      <template v-slot:left>countUp左边</template>
      <template v-slot:right>countUp右边</template>
    </count-to>
    <button @click="getNumber">获取countTo数值</button>
    <button @click="updateCount">更新count数值</button>
  </div>
</template>

<script>

  import CountTo from './components/count-to';

  export default {
    name: "pageDownload",
    data() {
      return {
        endVal: 1999
      }
    },
    components: {
      CountTo,

    },
    methods: {
      getNumber() {
        this.$refs.countTo.getCount()
      },
      updateCount() {
        this.endVal += 500;
      },
      getEmitFormCountTo(value) {
        this.$nextTick(() => {
            console.log(value)
          }
        );

      }
    }
  }
</script>

<style scoped>

</style>
