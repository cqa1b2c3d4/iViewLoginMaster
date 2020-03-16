<template>
  <div>
    <div><p>这是"我的消息"页面</p></div>
    <div id="video3"></div>
  </div>
</template>

<script>
    export default {
        name: "MyMessage",
        data() {
            return {
                videoObject: {
                    container: "#video3", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    autoplay: true, //自动播放
                    flashplayer:false,
                    video: "http://livepull.00yuyin.com/live/738045_1584356381.flv" //视频地址(必填)
                },
            }
        },

        mounted() {
            var player = new ckplayer(this.videoObject);
        }
    }
</script>

<style scoped>

</style>
