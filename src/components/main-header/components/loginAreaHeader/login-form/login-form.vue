<template>
  <Form ref="loginForm" :model="form" :rules="ruleslogin" @keydown.enter.native="handleSubmit">
    <FormItem prop="username">
      <label>
        <Input v-model="form.username" placeholder="请输入用户名" @on-blur="checkStatus">
          <span slot="prepend">
          <Icon :size="16" type="ios-person"></Icon>
          </span>
        </Input>
      </label>
    </FormItem>
    <FormItem prop="password">
      <label>
        <Input type="password" v-model="form.password" placeholder="请输入密码">
          <span slot="prepend">
          <Icon :size="14" type="md-lock"></Icon>
          </span>
        </Input>
      </label>
    </FormItem>
    <FormItem>
      <Checkbox v-model="rememberLoginName" @on-change="checkStatus">记住用户名</Checkbox>
    </FormItem>
    <FormItem>
      <Button @click="handleSubmit" type="primary" long>登录</Button>
    </FormItem>
  </Form>
</template>

<script>
    export default {
        name: 'LoginForm',
        data() {
            return {
                rememberLoginName: false,
                form: {
                    username: '',
                    password: ''
                },
                ruleslogin: { // 校验表单规则
                    username: [ // FormItem标签中的 prop 属性预期值
                        {required: true, message: '用户名不能为空', trigger: 'blur'}
                    ],
                    password: [ // FormItem标签中的 prop 属性预期值
                        {required: true, message: '密码不能为空', trigger: 'blur'},
                        {type: 'string', min: 6, message: '6位数密码', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted(){
            var getNameFromCookie = this.$cookies.get('userName');
            if(getNameFromCookie !== null){
                this.form.username = getNameFromCookie;
                this.rememberLoginName = true;
            }else {
                this.form.username = '';
                this.form.password = '';
            }
        },
        methods: {
            handleSubmit() {
                this.$refs.loginForm.validate((valid) => {
                    // this.$refs.loginForm.validate : 获取表单校验结果; 校验正确-> valid为True; 校验失败-> valid为False;
                    if (valid) {
                        this.$emit('on-success-valid', {
                            username: this.form.username, // 将this.form.username和this.form.password传给父组件的on-success-valid参数
                            password: this.form.password // 并使用 username 和 password 接受
                        })
                    }
                })
            },
            checkStatus(){
                console.log(this.rememberLoginName);//不存在的cookie返回： null
                var remName = this.rememberLoginName;
                if (remName === true){
                    this.$cookies.set('userName', this.form.username,'2d');
                }else{
                    this.$cookies.isKey('userName')?this.$cookies.remove('userName'):'';
                }
            }
        }
    }
</script>
