<template>
  <div class="hello">
    <div class="live-show-container">
      <div class="enterLiveRoom">
        <!-- <router-link :to="dynamicRoute">进入直播间</router-link>-->
        <a :href="dynamicRoute">进入直播间</a>
      </div>
      <div id="video"></div>
      <div class="live-list">
        <ul>
          <li :class="{'active': index === clickIndex}" v-for="(item,index) in liveList" :key="item.id"
              @click="clickThisLive(index)">
            <div><img style="height: 100%; margin: 0 auto" :src="item.avatar"></div>
          </li>
        </ul>
      </div>
    </div>
    <h2>测试链接</h2>
    <ul>
      <li>
        <router-link to="/socketTest" @click.native="resetTabName">socket test page by router-link</router-link>
        <!--<a @click="resetTabName">socket test page</a>-->
      </li>
      <li>
        <a href="javascript:void(0)" @click="tokenTest">token接口测试</a>
      </li>
    </ul>
  </div>
</template>

<script>

    import {mapMutations} from "vuex";

    export default {
        name: 'helloWorld',
        data() {
            return {
                clickIndex: 0,
                dynamicRoute: '/',
                testLiveUrl: 'https://qiniu.00yuyin.com/233333.mp4',
                videoObject: {
                    container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    autoplay: true, //自动播放
                    live: true,
                    /*                    loop: false,
                                        debug: true, //是否开启调试模式
                                        drag: 'start', //拖动的属性
                                        seek: 0, //默认跳转的时间*/
                    video: "" //视频地址(必填)
                },
                liveList: [
                    {
                        id: '34029',
                        nickName: '夏诗沫直播回放',
                        url: 'https://qiniu.00yuyin.com/233333.mp4',
                        avatar: 'https://qiniu.9kyouxi.com/20190604/5cf609bdf0d4c.jpg'
                    },
                    {
                        id: '738115',
                        nickName: '顺顺宝贝',
                        url: 'http://livepull.00yuyin.com/live/738115_1584356229.flv', //张靓颖《我的梦》
                        avatar: 'http://qiniu.9kyouxi.com/20191209175211_92fbe3c38ef9387116ebef81413013d1?imageView2/2/w/600/h/600'
                    },
                    {
                        id: '738045',
                        nickName: '是娜娜呀～',
                        url: 'http://livepull.00yuyin.com/live/738045_1584356381.flv',
                        avatar: 'http://qiniu.9kyouxi.com/20200112144018_aa4855d1ce56cc4a0d5f52645912cf5b?imageView2/2/w/600/h/600'
                    },
                    {
                        id: '340292',
                        nickName: '夏诗沫直播回放',
                        url: 'http://livepull.00yuyin.com/live/692370_1584410035.flv',
                        avatar: 'https://qiniu.9kyouxi.com/20190604/5cf609bdf0d4c.jpg'
                    },
                    {
                        id: '340293',
                        nickName: '夏诗沫直播回放',
                        url: 'https://qiniu.00yuyin.com/233333.mp4',
                        avatar: 'https://qiniu.9kyouxi.com/20190604/5cf609bdf0d4c.jpg'
                    }
                ],
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
            this.dynamicRoute = '/live/' + this.liveList[this.clickIndex].id;
            this.videoObject.video = this.testLiveUrl;
            let player = new ckplayer(this.videoObject);
        },
        methods: {
            ...mapMutations(['changeActiveTab']),
            clickThisLive(index) {
                this.clickIndex = index;
                this.videoObject.video = this.liveList[index].url;
                let player = new ckplayer(this.videoObject);
                this.dynamicRoute = '/live/' + this.liveList[index].id;

            },
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
                this.changeActiveTab('4');
                console.log('router-link click 事件发送')
                /* this.$router.push('/socketTest')*/ //使用router-link可以直接导航到对应页面，不需要router.push
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .hello {
    background: url(/static/images/home/index_live_bg.png) no-repeat;
    background-size: 100% 500px;
    width: 80%;
    max-width: 1800px;
    min-width: 1200px;
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
    width: 80%;
    height: 100%;
    float: left;
  }

  .live-list {
    width: 20%;
    float: left;
  }

  .live-list li {
    padding: 10px 0 10px 0;
    margin: 0;
    width: 100%;
    height: 100px;
    display: block;
    float: left;
  }

  .live-list li div {
    background: #c3c3c3;
    opacity: 0.5;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .live-list li.active {
    border: 2px #d19a66 solid;
  }

  .live-list li div:hover {
    background: #d19a66;
    opacity: 1;
  }

  .live-show-container {
    position: relative;
    margin: 0 auto;
    width: 70%;
    height: 500px;
  }

  .enterLiveRoom {
    position: absolute;
    width: 100px;
    height: 20px;
    left: 37%;
    top: 240px;
    z-index: 999999;
  }
</style>
