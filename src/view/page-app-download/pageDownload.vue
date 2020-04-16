<template>
  <div>
    <p>this is an APP download page(这是一个app下载页)</p>
    <count-to ref="countTo" :end-val="endVal" @on-animation-end="getEmitFormCountTo">
      <template v-slot:left>countUp左边</template>
      <template v-slot:right>countUp右边</template>
    </count-to>
    <button @click="getNumber">获取countTo数值</button>
    <button @click="updateCount">更新count数值</button>
    <div class="menu-box">
      <!--<a-menu>
        <a-menu-item>111</a-menu-item>
        <a-menu-item>222</a-menu-item>
        <a-menu-item>333</a-menu-item>
        <a-submenu>
          <template v-slot:title>
            <div> 444</div>
          </template>
          <a-menu-item>444-1</a-menu-item>
          <a-menu-item>444-2</a-menu-item>
          <a-menu-item>
            <a-submenu>
              <template v-slot:title>
                <div> 555</div>
              </template>
              <a-menu-item>555-1</a-menu-item>
              <a-menu-item>555-2</a-menu-item>
              <a-menu-item>555-2</a-menu-item>
            </a-submenu>
          </a-menu-item>
        </a-submenu>
      </a-menu>-->
      <a-menu>
        <template v-for="(item,index) in list">
          <a-menu-item :key="`menu_item_${index}`">{{item.title }}</a-menu-item>
        </template>
      </a-menu>
    </div>
  </div>
</template>

<script>

  import CountTo from './components/count-to';
  import menuComponents from '@/components/menu';
  const {AMenu,AMenuItem,ASubmenu} = menuComponents;

  export default {
    name: "pageDownload",
    data() {
      return {
        endVal: 1999,
        list: [
          {title: '111'},
          {title: '222'},
          {
            title: '333',
            children: [
              {
                title: '333-1',
              },
              {
                title: '333-2',
                children: [
                  {title: '333-2-1'},
                  {title: '333-2-2'}
                ]
              }
            ]
          }
        ]
      }
    },
    components: {
      ASubmenu,
      AMenuItem,
      AMenu,
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

<style lang="less">
  .menu-box {
    width: 300px;
    height: 400px;
  }

</style>
