<template>
  <ul class="a-sub-menu">
    <div class="a-sub-menu-title" @click="handleItemShow">
      <slot name="title"></slot>
      <span class="shrink-icon" :style="{ transform:`rotateZ(${shrinkIconRotate}deg)`}">^</span>
    </div>
    <div v-show="itemShow" class="a-sub-menu-item">
      <slot></slot>
    </div>
  </ul>
</template>

<script>
  export default {
    name: "ASubmenu",
    data() {
      return {
        itemShow: false,
      }
    },

    computed:{
      shrinkIconRotate(){
        if (this.itemShow) {
          return 0
        }
        else {
          return 180
        }

      }

    },

    methods: {
      handleItemShow() {
        this.itemShow = !this.itemShow;
      }
    }

  }
</script>

<style lang="less">
  @padding: 15px;
  .a-sub-menu {
    &-title {
      background-color: #795da3;
      color: #ffffff;
      position: relative;
      .shrink-icon {
        position: absolute;
        right: 10px;
      }
    }

    &-item {
      padding-left: @padding;
    }
  }
</style>

