<style lang="less">
  @import 'login.less';
</style>

<template>
  <div class="login">
    <div class="login-con">
      <Card icon="log-in" title="欢迎登录" :bordered="false">
        <div class="form-con">
          <login-form @on-success-valid="handleSubmit"></login-form>
          <p class="login-tip">输入任意用户名和密码即可</p>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
    import LoginForm from '@/components/loginAreaHeader/login-form'; // 驼峰命名法
    import {mapMutations} from 'vuex';

    export default {
        data() {
            return {
                userInfo: {
                    nickName: '',
                    userAvatar: '',
                    Authorization: '',
                    UID: ''
                }
            }
        },
        components: {
            LoginForm
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
                    _this.$router.push("/") // 跳转到首页
                }).catch((error) => {
                })
            }
        }
    }
</script>

