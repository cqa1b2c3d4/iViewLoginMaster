<template>
  <a-submenu>
    <template v-slot:title>
      {{parent.title}}
    </template>
    <template v-for="(item,i) in parent.children">
      <a-menu-item v-if="!item.children" :key="`reSubmenu_title_${index}_${i}`">
        {{item.title}}
      </a-menu-item>
      <re-submenu v-else :key="`reSubmenu_item_${index}_${i}`" :parent="item" :index="i"></re-submenu>
    </template>
  </a-submenu>
</template>

<script>
  import menuComponents from '@/components/menu';

  const {AMenuItem, ASubmenu} = menuComponents;
  export default {

    name: "ReSubmenu",

    props: {
      parent: {
        type: Object,
        default: () => ({})
      },
      index: {
        type: Number,
      }
    },

    components: {
      AMenuItem,
      ASubmenu
    }
  }
</script>

<style scoped>

</style>
