<template>
  <div class="hello">
    <div class="live-show-container">
      <div class="enterLiveRoom">
        <!-- <router-link :to="dynamicRoute">进入直播间</router-link>--> <!--通过rooter-link跳转，页面会遵循路由守卫判断是否刷新-->
        <a :href="dynamicRoute">进入直播间</a> <!--通过a标签跳转，页面会刷新-->
      </div>
      <div id="video"></div>
      <div class="live-list">
        <ul>
          <li :class="{'active': index === clickIndex}" v-for="(item,index) in liveList" :key="index"
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
      <li><p>
        UIDWithToken: {{UIDWithToken}}<br>
        UIDWithToken from url: {{this.$store.getters.UIDWithToken}}<br>
        appNameWithVersion from user module: {{appNameWithVersion}}
      </p>
        <p>modules state: {{this.$store.state.user.appName}}</p>
        <!--<p>mapState from state: {{nickName}}</p>-->
        <p>mapState from user module: {{appVersion}}</p>
        <p>create...: {{appName}}</p>
        <button @click="setAppAuthor(author)">setAuthor</button>
        <p>appAuthor: {{appAuthor}}</p>
        <button @click="changeAppName('Trump')">changeAppName</button>
        <button @click="clickToChangeAppName">click to action</button>
        <button @click="registerModule">动态注册模块</button>
        <p v-for="(li, index) in todoList" :key="index">{{li}}</p>
      </li>
      <li>
        <!--        <input :value="stateValue" @input="stateValueChange($event.target.value)"></input>-->
        <input v-model="stateValue"></input>
        <p>{{stateValue}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

  import {mapState, mapMutations, mapGetters, mapActions} from "vuex";
  import {checkTokenStatus} from '@/lib/util'

  export default {
    name: 'helloWorld',
    data() {
      return {
        clickIndex: 0,
        author: 'Andrew',
        dynamicRoute: '/',
        videoObject: {
          container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
          variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
          autoplay: false, //自动播放
          live: true,
          /*                    loop: false,
                              debug: true, //是否开启调试模式
                              drag: 'start', //拖动的属性
                              seek: 0, //默认跳转的时间*/
          video: "" //视频地址(必填)
        },
        liveList: [],
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
      },
      ...mapGetters([
        'UIDWithToken',
        'appNameWithVersion',
      ]),
      ...mapState( /*[
        'appName',
        'appVersion'
      ]*/
        {
          appName: state => state.user.appName,
          appVersion: state => state.user.appVersion,
          appAuthor: state => state.appAuthor,
          todoList: state => state.user.todo ? state.user.todo.todoList : [],
          /*          stateValue: state => state.stateValue,*/
        }
      ),
      stateValue: {
        get() {
          return this.$store.state.stateValue;
        },
        set(val) {
          this.setStateValue(val)
        }

      },
    },
    mounted() {
      let _this = this;
      this.$api.api_live.get_hot_live().then((response) => {
        let _data = response.data;
        if (_data.ret === 200 && _data.data.code === 0) {
          let _list = _data.data.info[0].list;
          let myList = [];
          let j = _list.length > 5 ? 5 : _list.length;
          for (let i = 0; i < j; i++) {
            myList[i] = _list[i];
          }
          _this.liveList = myList;
          _this.dynamicRoute = '/live/' + _this.liveList[_this.clickIndex].uid;
          _this.videoObject.video = _this.liveList[_this.clickIndex].pull;
          let player = new ckplayer(_this.videoObject);
          console.log(myList)
        } else {
          console.log('未获取到数据')
        }
      }).catch((error) => {
        console.log(error)
      });

    },

    methods: {

      ...mapMutations(['changeActiveTab', 'setAppAuthor', 'changeAppName', 'setStateValue']),
      ...mapActions(['updateAppName']),

      registerModule() {
        this.$store.registerModule(['user', 'todo'], {
          state: {
            todoList: [
              '学习mutations',
              '学习actions'
            ]
          }
        })
      },

      clickThisLive(index) {
        this.clickIndex = index;
        this.videoObject.video = this.liveList[index].pull;
        let player = new ckplayer(this.videoObject);
        this.dynamicRoute = '/live/' + this.liveList[index].uid;

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
      },
      clickToChangeAppName() {
        /*this.updateAppName();*/
        checkTokenStatus();
        this.$store.dispatch('updateAppName');
      },
      stateValueChange(val) {
        console.log(val);
        this.setStateValue(val)
      }
      //
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
