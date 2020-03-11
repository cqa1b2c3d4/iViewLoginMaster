<template>
  <div class="hd-logo">
    <a :href='voidClick' class="links"><img :src="srcLogo" style="height: 100%;width: 100%;" alt="logo"/></a>
  </div>
</template>

<script>
    export default {
        name: "logoInHeader",
        data() {
            return {
                voidClick: 'javascript:void(0)',
                srcLogo: '/static/images/logo-new.png'
            }
        }
    }
</script>

<style scoped>
  .hd-logo a img {
    height: 100%;
    width: 100%;
  }

  .hd-logo a {
    width: 100%;
    height: 100%;
    display: table-cell;
    vertical-align: middle;
  }

  .hd-logo {
    height: 100%;
    width: 100%;
    display: table;
  }

</style>
