<template>
  <div class="split-pane-wrapper" ref="outer">
    <div class="pane pane-left" :style="{width: leftWidthPercent}">
      <button @click="changeLeftWidth">change this splict</button>
    </div>
    <div class="pane-trigger-width" :style="{left: leftWidthPercent}" @mousedown="handleMouseDown"></div>
    <div class="pane pane-right" :style="{left: leftWidthPercent}"></div>

  </div>

</template>

<script>
  export default {
    name: "SplitPane",

    data() {
      return {
        leftWidth: 0.3,
        canMove: false,
        initOffset: 0,
      }
    },
    computed: {
      leftWidthPercent() {
        return `${this.leftWidth * 100}%`
      }
    },
    methods: {
      changeLeftWidth() {
        return this.leftWidth -= 0.02;
      },
      handleMouseDown(event) {
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        this.initOffset = event.pageX - event.srcElement.getBoundingClientRect()
        this.canMove = true;
      },
      handleMouseUp() {
        this.canMove = false;
      },
      handleMouseMove(event) {
        if (!this.canMove) return
        const outerRect = this.$refs.outer.getBoundingClientRect();
        const offset = event.pageX - outerRect.left;
        this.leftWidth = (offset / outerRect.width)

      }

    }
  }

</script>

<style lang="less">
  .split-pane-wrapper {
    height: 100%;
    width: 100%;
    position: relative;

    .pane {
      position: absolute;
      top: 0;
      height: 100%;

      &-left {
        background-color: #56b6c2;
      }

      &-right {
        right: 0;
        background-color: #c678dd;
      }

      &-trigger-width {
        width: 8px;
        height: 100%;
        background-color: #e7e7e7;
        position: absolute;
        top: 0;
        z-index: 1;
        user-select: none;
      }
      user-select: none;
    }
  }

</style>
