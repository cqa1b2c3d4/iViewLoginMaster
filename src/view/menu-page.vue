<template>
  <div class="menu-box">
    this is menu-page
    <!--<a-menu>
      <a-menu-item>111</a-menu-item>
      <a-menu-item>222</a-menu-item>
      <a-submenu>
        <template v-slot:title>
          333
        </template>
        <a-menu-item>333-1</a-menu-item>
        <a-menu-item>333-2</a-menu-item>
        <a-submenu>
          <template v-slot:title>
            333-3
          </template>
          <a-menu-item>333-3-1</a-menu-item>
          <a-menu-item>333-3-2</a-menu-item>
        </a-submenu>
        <a-menu-item>333-4</a-menu-item>

      </a-submenu>
      <a-menu-item>444</a-menu-item>
    </a-menu>-->

    <a-menu>
      <template v-for="(item,index) in list">
        <a-menu-item v-if="!item.children" :key="`menu_item_${index}`">{{item.title}}</a-menu-item>
        <re-submenu v-else :key="`reSubmenu_item_${index}`" :parent="item" :index="index"></re-submenu>
      </template>
    </a-menu>

  </div>
</template>

<script>
  import menuComponents from '@/components/menu'
  import ReSubmenu from '@/components/re-submenu.vue'

  const {AMenuItem, AMenu, ASubmenu} = menuComponents;

  export default {
    name: "menu-page",

    data() {
      return {
        list: [
          {
            title: '111',
          },
          {
            title: '222',
          },
          {
            title: '333',
            children: [
              {
                title: '333-1',
              },
              {
                title: '333-2',
              },
              {
                title: '333-3',
                children: [
                  {
                    title: '333-3-1',
                  },
                  {
                    title: '333-3-2',
                  },
                ]
              },
            ]
          },
          {
            title: '444',
          },
        ]
      }
    },

    components: {
      AMenu, AMenuItem, ASubmenu, ReSubmenu
    }
  }
</script>

<style lang="less">
  .menu-box {
    width: 300px;
    height: 400px;
  }

</style>
