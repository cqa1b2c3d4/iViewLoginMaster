<template>
  <div>
    <Button type="primary" @click="modal1 = true">点击登录</Button>
    <Modal
      v-model="modal1"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-cancel="cancel">
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
    </Modal>
  </div>
</template>

<script>
    import LoginForm from '@/components/loginAreaHeader/login-form'; // 驼峰命名法
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
        components: {
            LoginForm
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
                    _this.$router.push("/") // 跳转到首页
                }).catch((error) => {
                })
            }
        }
    }
</script>

<style scoped>
  @import '/src/components/main-header/components/loginAreaHeader/login/login.less';
</style>
