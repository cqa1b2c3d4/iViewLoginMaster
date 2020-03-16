<template>
  <div>
    <Dropdown trigger="click" style="margin-left: 20px" @on-visible-change="visible">
      <Button class="focus-none" type="text" @click="btnClick">{{userName}}
        <Icon :type="switchUpAndDown"></Icon>
      </Button>
      <DropdownMenu v-if="isLogin" slot="list">
        <DropdownItem><p @click="routerTo('personal')">个人中心</p></DropdownItem>
        <DropdownItem><p @click="routerTo('noble')">我的贵族</p></DropdownItem>
        <DropdownItem><p @click="routerTo('message')">我的消息</p></DropdownItem>
        <DropdownItem><p @click="routerTo('live')">我的直播</p></DropdownItem>
        <DropdownItem><p @click="btnLogout">退出登录</p></DropdownItem>
      </DropdownMenu>
    </Dropdown>
    <Modal v-model="modal1">
      <div slot="header"></div>
      <div class="login">
        <div class="login-con">
          <Card icon="log-in" :title="titleOfModal" :bordered="false" dis-hover>
            <div class="form-con">
              <login-form @on-success-valid="handleSubmit"></login-form>
              <p class="login-tip">请输入正确的用户名和密码</p>
            </div>
          </Card>
        </div>
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
    import loginForm from "./login-form"; // 驼峰命名法
    import {mapMutations} from 'vuex';

    export default {
        name: "clickToLogin",
        data() {
            return {
                titleOfModal:'欢迎登录',
                modal1: false,
                isLogin: false,
                userName: '登录',
                switchUpAndDown: 'ios-arrow-up',
                userInfo: {
                    nickName: '',
                    userAvatar: '',
                    Authorization: '',
                    UID: ''
                },
                routerInThisPage:{
                    personal: '/Personal',
                    live:'/MyLive',
                    message:'/MyMessage',
                    noble:'/MyNoble'
                }
            }
        },
        watch:{
            userName: function (newVal,oldVal) {
                console.log('clickToLogin页面'+ newVal + oldVal)
            }
        },
        computed: {},
        mounted() {
            let token = sessionStorage.getItem('TOKEN');
            if (token === null || token === '') {
                this.userName = "登录";
                this.isLogin = true;
            } else {
                this.userName = this.$store.state.nickName;
                this.isLogin = false;
            }
        },
        components: {
            loginForm
        },
        methods: {
            ...mapMutations(['changeLogin']),
            handleSubmit({username, password}) {
                let _this = this;
                this.$api.api_login.post_user_login_api(
                    username, password
                ).then((response) => {
                    let _data = response.data.data;
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
                    location.reload();
                    /*_this.$router.push("/");*/ // 跳转到首页
                }).catch((error) => {
                })
            },
            btnClick() {
                if (this.userName === '登录') {
                    this.modal1 = true;
                    this.isLogin = false;
                } else {
                    this.isLogin = true;
                    return false;
                }
            },
            visible(status) {
                if (this.isLogin === true) {
                    if (status === true) {
                        this.switchUpAndDown = 'ios-arrow-down';
                    } else {
                        this.switchUpAndDown = 'ios-arrow-up';
                    }
                } else {
                    this.switchUpAndDown = 'ios-arrow-up';
                }

            },
            btnLogout() {
                sessionStorage.clear();
                location.reload();
            },
            routerTo(p){
                if (this.$route.path === this.routerInThisPage[p]){
                    return
                }
                this.$router.push(this.routerInThisPage[p]).catch(err => {
                    console.log('输出报错',err)
                });
            },
        }
    }
</script>

<style scoped>
  @import "login/login.less";

  .focus-none:focus {
    box-shadow: none;
  }
</style>
