<template>
  <div class="side-menu-wrapper">
    <slot></slot>
    <Menu v-show="!collapsed" width="auto" theme="dark" @on-select="handleSelect">
      <template v-for="(item, index) in list">
        <re-submenu
          v-if="item.children"
          :key="`submenu_${item.name}`"
          :name="item.name"
          :parent="item">
        </re-submenu>
        <menu-item v-else :key="`submenu_${item.name}`" :name="item.name">
          <Icon :type="item.icon"/>
          {{item.title}}
        </menu-item>
      </template>
    </Menu>
    <div v-show="collapsed">
      <template v-for="(item,index) in list">
        <re-dropdown
          v-if="item.children"
          :key="`dropdown_${item.name}`"
          :parent="item"
          :icon-color="`#fff`"
          :show-title="false"
          @on-select="handleSelect"
        ></re-dropdown>
        <Tooltip v-else transfer :content="item.title" :key="`drop_${item.name}`" placement="right">
          <span @click="handleClick(item.name)"  class="drop-menu-span">
            <Icon :type="item.icon" color="#fff" :size="20"></Icon>
          </span>
        </Tooltip>
      </template>
    </div>
  </div>
</template>

<script>
  import ReSubmenu from '@/components/side-menu/re-submenu.vue'
  import ReDropdown from '@/components/side-menu/re-dropdown.vue'

  export default {

    name: "side-menu",

    components: {
      ReSubmenu,
      ReDropdown
    },

    props: {
      collapsed: {
        type: Boolean,
        default: false
      },
      list: {
        type: Array,
        default: () => [],
      }
    },

    methods: {
      handleSelect(name){
        console.log(name)
      },
      handleClick(name){
        console.log(name)
      }

    }

  }
</script>

<style lang="less">
  .side-menu-wrapper {
    width: 100%;
  }

  .ivu-tooltip {
    display: block;
    &-rel {
      width: 100%;
    }
  }
  .ivu-dropdown{
    width: 100%;
  }
  .ivu-select-dropdown{
    width: auto;
    min-width: 120px;
  }
  .drop-menu-span {
    display: block;
    text-align: center;
    padding: 6px 0;
    *{
      display: inline-block;
    }
  }
</style>
