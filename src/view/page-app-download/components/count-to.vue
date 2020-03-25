<template>
  <div>这是count-to测试组件
    <slot name="left"></slot>
    <span ref="countNum" :class="countClass" :id="eleId"></span>
    <slot name="right"></slot>
  </div>

</template>

<script>
  import CountUp from 'countup';

  export default {

    name: "CountTo",

    data() {
      return {
        counter: {}
      }
    },

    computed: {
      eleId() {
        return `count_up_${this.uid}`
      },
      countClass() {
        return [
          'count-to-number',
          this.className
        ]
      },
    },

    props: {
      startVal: {
        type: Number,
        default: 0,
      },
      endVal: {
        type: Number,
        require: true,
      },
      decimals: {
        type: Number,
        default: 0
      },
      duration: {
        type: Number,
        default: 2,
      },
      useEasing: {
        type: Boolean,
        default: false,
      },
      useGrouping: {
        type: Boolean,
        default: true,
      },
      separator: {
        type: String,
        default: ','
      },
      decimal: {
        type: String,
        default: '.'
      },
      delay: {
        type: Number,
        default: 0
      },
      className: {
        type: String,
        default: ''
      }

    },

    methods: {
      getCount(){
        return  this.$refs.countNum.innerText;
      },
      emitEndEvent(){
        setTimeout(()=>{
          console.log(this.getCount());
          this.$emit('on-animation-end',this.getCount());
        },this.duration*1000 + 50)
      }
    },

    watch:{
      endVal(newVal, oldVal) {
          this.counter.update(newVal);
        this.emitEndEvent();
      }

    },

    mounted() {
      this.$nextTick(() => {
        this.counter = new CountUp(this.eleId, this.startVal, this.endVal, this.decimals, this.duration, {
          useEasing: this.useEasing,
          useGrouping: this.useGrouping,
          separator: this.separator,
          decimal: this.decimal,
        });

        setTimeout(() => {
          this.counter.start();
          this.emitEndEvent();
        }, this.delay);
      })

    }

  }
</script>

<style scoped>
@import './count-to.less';

</style>
