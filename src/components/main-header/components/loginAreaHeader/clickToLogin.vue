<template>
  <div>
    <Button class="focus-none" type="text" @click="userName ==='登录'? modal1 = true:false">{{userName}}</Button>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
      <div slot="header"></div>
      <div class="login">
        <div class="login-con">
          <Card icon="log-in" title="欢迎登录" :bordered="false" dis-hover>
            <div class="form-con">
              <login-form @on-success-valid="handleSubmit"></login-form>
              <p class="login-tip">输入任意用户名和密码即可</p>
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
                modal1: false,
                userInfo: {
                    nickName: '',
                    userAvatar: '',
                    Authorization: '',
                    UID: ''
                }
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
        components: {
            loginForm
        },
        methods: {
            ...mapMutations(['changeLogin']),
            ok() {
                this.$Message.info('Clicked ok');
            },
            cancel() {
                this.$Message.info('Clicked cancel');
            },
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
            }
        }
    }
</script>

<style scoped>
  @import "login/login.less";

  .focus-none:focus{
    box-shadow: none;
  }
</style>
