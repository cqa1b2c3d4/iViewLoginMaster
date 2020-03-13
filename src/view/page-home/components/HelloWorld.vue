<template>
  <div class="hello">
    <div>
      <div id="video"></div>
      <div>
        <ul>
          <li v-for=" liveItem in liveList"></li>
        </ul>
      </div>
    </div>
    <h2>测试链接</h2>
    <ul>
      <li>
        <a @click="resetTabName">
          socket test page
        </a>
      </li>
      <li>
        <a
          href="javascript:void(0)" @click="tokenTest"
        >
          token接口测试
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: 'helloWorld',
        data() {
            return {
                videoObject: {
                    container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    autoplay: true, //自动播放
                    live: false,
                    loop: true,
                    debug: true, //是否开启调试模式
                    drag: 'start', //拖动的属性
                    seek: 0, //默认跳转的时间
                    video: "" //视频地址(必填)
                },
            }
        },
        computed: {
            userName() {
                let token = sessionStorage.getItem('TOKEN');
                if (token === null || token === '') {
                    return "登录";
                } else {
                    this.login = 'javascript:void(0)';
                    console.log(this.$store.state);
                    return this.$store.state.nickName;
                }
            }
        },
        mounted() {
            this.videoObject.video = 'https://qiniu.00yuyin.com/233333.mp4';
            let player = new ckplayer(this.videoObject);
        },
        methods: {
            tokenTest() {
                console.log('start token test');
                let token = sessionStorage.getItem('TOKEN');
                if (token !== null && token !== '') {
                    console.log('token exist, start connect to api');
                    this.$api.api_login.token_test().then((response) => {
                        let _data = response.data;
                        console.log(_data);
                    }).catch((error) => {
                        console.log(error)
                    })

                }

            },
            resetTabName() {
                this.$store.commit('changeActiveTab', '4')
                this.$router.push('/socketTest')
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
    background: url(/static/images/home/index_live_bg.png) no-repeat;
    background-size: 100% 500px;
    max-width: 1200px;
    min-width: 800px;
    margin: 0 auto;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  #video {
    margin: 0 auto;
    width: 70%;
    height: 500px;
  }
</style>
