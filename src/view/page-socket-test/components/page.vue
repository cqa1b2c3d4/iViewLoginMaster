<template>
<div>
  <p>this is the test page of {{id}}</p>
  <div id="video2"></div>
  <ul id="messages"></ul>
  <form action="" @submit.prevent="submitForm">
    <input id="m" autocomplete="off" v-model="inputValue" /><button>Send</button>
  </form>
</div>
</template>

<script>
    import {mapMutations} from 'vuex';
    export default {
        name: 'pageBody',
        data(){
            return{
                id:'',
                inputValue:'',
                innerLi:'',
                enterChat: 1,
                videoObject: {
                    container: "#video2", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    autoplay: true, //自动播放
                    live: true,
/*                    loop: true,
                    debug: true, //是否开启调试模式
                    drag: 'start', //拖动的属性
                    seek: 0, //默认跳转的时间*/
                    video: "" //视频地址(必填)
                }
            }
        },
        sockets: {// 通过vue实例对象sockets实现组件中的事件监听
            connect: function () {// socket的connect事件
                this.id=this.$socket.id;
                console.log('socket connected from Page '+this.id);

            },
            broadcastingListen: function (data) {
                console.log('broadcastingListen: '+data)
            },
            conn: function (data) {
                //conn 代码撰写中
                if (data[0] === 'ok') {
                    console.log('socket reply conn: OK')
                    /*_DATA.enterChat = 1;
                    if (_DATA.user && _DATA.user.id && _DATA.anchor.id && _DATA.user.id != _DATA.anchor.id) {
                        var msg = '{"msg":[{"_method_":"requestFans","action":"","timestamp":"' + WlTools.FormatNowDate() + '","ct":"","msgtype":"1","level":"","uid":"","sex":"","uname":"","uhead":"","usign":"","city":"好像在黑洞","level":""}],"retcode":"000000","retmsg":"ok"}';
                        Socket.emitData('broadcast', msg);
                    }*/
                }else{
                    console.log('socket reply conn: NO')
                }
            },
            broadcast: function (data) {
                console.log('data from broadcast: ' + data);
            }
                //

        },
        mounted() {
            console.log('page mounted');
            this.$socket.emit('connect'); //在这里触发connect事件
            /*this.$socket.emit('conn', {uid:'737985',roomnum: '34029',nickname: 'beixin',stream:'34029_1563438344',equipment: 'pc',token:'d8d846630c6c9b58bd734da148ad3d2b'});
*/
            this.videoObject.video = "http://livepull.00yuyin.com/live/738115_1584356229.flv";
            var player = new ckplayer(this.videoObject);

            /*var videoObject = {
                container: '#video', //容器的ID或className
                variable: 'player', //播放函数名称
                loaded: 'loadedHandler', //当播放器加载后执行的函数
                loop: true, //播放结束是否循环播放
                config: '', //指定配置函数
                debug: true, //是否开启调试模式
                drag: 'start', //拖动的属性
                seek: 0, //默认跳转的时间
                promptSpot: [ //提示点
                    {
                        words: '提示点文字01',
                        time: 30
                    },
                    {
                        words: '提示点文字02',
                        time: 150
                    }
                ],
                video: [
                    ['http://img.ksbbs.com/asset/Mon_1703/05cacb4e02f9d9e.mp4', 'video/mp4', '中文标清', 0],
                    ['http://img.ksbbs.com/asset/Mon_1703/d0897b4e9ddd9a5.mp4', 'video/mp4', '中文高清', 0],
                    ['http://img.ksbbs.com/asset/Mon_1703/eb048d7839442d0.mp4', 'video/mp4', '英文高清', 10],
                    ['http://img.ksbbs.com/asset/Mon_1703/d30e02a5626c066.mp4', 'video/mp4', '英文超清', 0]
                ]
            };
            // 定义一个对象
            var player = new $_ckplayer(videoObject);*/

        },
        methods:{
            ...mapMutations(['socketConn','changeLogin']),
            submitForm(){
                var _msgList = document.getElementById('messages');
                var data = {client: '客户端1',msg: this.inputValue};
                if (data.msg === ''){
                    return false;
                }
                /*this.$socket.emit('sendOutMsg',data);*/
                this.innerLi += `<li>${data.client}:${data.msg}</li>`;
                _msgList.innerHTML=this.innerLi;

               /* this.getUserInfo();*/ //CORS未接通，先得到fake数据。


                /*var _userDataStr = '{"error":0,"userinfo":{"id":"-9921","user_nicename":"\u6e38\u5ba29921","avatar":"","avatar_thumb":"","sex":"0","signature":"0","consumption":"0","votestotal":"0","province":"","city":"","level":"0","token":"5d4a152882fd649ccfb04368af034a84","liveuid":34029,"usertype":30,"contribution":"0","guard_type":"0","vip":{"type":"0"},"laing":{"name":"0"},"car":{"id":"0","swf":"","swftime":"0","words":""},"sign":"0.1001","roomnum":34029,"stream":"34029_1563438344"},"iszombie":"0"}';
                var _userData = JSON.parse(_userDataStr);
                console.log(typeof _userData);
                console.log(_userData.userinfo.id);*/
                /*this.$socket.emit('conn', {uid:_userData.userinfo.id,roomnum: _userData.userinfo.roomnum,nickname: _userData.userinfo.user_nicename,stream:_userData.userinfo.stream,equipment: 'pc',token:_userData.userinfo.token});
*/              //通过00yuyin得到的data来尝试访问socket服务器


                var chatmsg = this.inputValue;

                var _msg = '{"msg":[{"_method_":"SendMsg","action":0,"ct":"'+chatmsg+'","msgtype":"2","tougood":"","touid":"","touname":"","ugood":"34029","uid":"34029","uname":"beixin","level":"1","vip_type":"0","liangname":"0","usertype":"30","guard_type":"0"}],"retcode":"000000","retmsg":"OK"}';
                //发送聊天信息
                /*this.$socket.emit('broadcast',_msg);*/
                this.inputValue = '';
                return false;

            },
            getUserInfo: function(showId, stream){
                let _this = this;
                this.$api.socket_api.socket_conn(showId, stream).then((response) => {
                    console.log(response.data);
                    /*let _data = response.data.data;
                    let _info = _data.info;
                    if (_data.code === 0) {
                        _this.$Message.success(_data.msg);
                        _this.userInfo.nickName = _info[0].user_nicename;
                        _this.userInfo.userAvatar = _info[0].avatar;
                        _this.userInfo.Authorization = _info[0].token;
                        _this.userInfo.UID = _info[0].id;
                        _this.changeLogin(_this.userInfo);
                    } else {
                        _this.$Message.error((_data.msg === "" || _data.msg === undefined) ? response.data.msg : _data.msg);
                    }
                    console.log(_info[0].token);
                    _this.$router.push("/") // 跳转到首页*/
                }).catch((error) => {
                    console.log('接口未接通')
                })
            },
            //系统通知
            systemNot:function(data){
                /* Chat.resetsH(); */
                console.log('系统消息： '+ data.ct)
            },
        },
    }
</script>

<style scoped>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { font: 13px Helvetica, Arial; }
  form { background: #000; padding: 3px; position: fixed; bottom: 0; width: 100%; z-index: 999}
  form input { border: 0; padding: 10px; width: 90%; margin-right: .5%; }
  form button { width: 9%; background: rgb(130, 224, 255); border: none; padding: 10px; }
  #messages { list-style-type: none; margin: 0; padding: 0; }
  #messages li { padding: 5px 10px; }
  #messages li:nth-child(odd) { background: #eee; }
  #video {
    margin: 0 auto;
    width: 80%;
    height: 500px;
  }
</style>
