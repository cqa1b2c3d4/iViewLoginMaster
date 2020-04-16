<template>
  <Dropdown @on-click="handleClick" class="" placement="right-start">
      <span class="drop-menu-span" :style="titleStyle" >
        <Icon :type="parent.icon" :color="iconColor" :size="20"></Icon>
        <span v-if="showTitle">{{parent.title}}</span>
        <Icon v-if="showTitle" type="ios-arrow-forward"></Icon>
      </span>

    <DropdownMenu slot="list">
      <template v-for="(item, index) in parent.children">
        <re-dropdown
          v-if="item.children"
          :key="`dropdown_${item.name}`"
          :parent="item"
        >
        </re-dropdown>
        <DropdownItem v-else :key="`dropdown_item_${item.name}`" :name="item.name">
          <Icon :type="item.icon" :size="20"></Icon>
          {{item.title}}
        </DropdownItem>
      </template>
    </DropdownMenu>
  </Dropdown>
</template>

<script>
  export default {

    name: "ReDropdown",

    props: {
      parent: {
        type: Object,
        default: () => ({})
      },
      iconColor:{
        type: String,
        Default: '#515a6e'
      },
      showTitle:{
        type: Boolean,
        default: true
      }
    },

    computed:{
      titleStyle() {
        return {
          textAlign: this.showTitle? 'left': 'center',
          paddingLeft: this.showTitle? '16px': '0',
        }
      }
    },

    methods:{
      handleClick(name){
        if (!this.showTitle) this.$emit('on-select',name)
      }
    }


  }
</script>

<style scoped>

</style>
