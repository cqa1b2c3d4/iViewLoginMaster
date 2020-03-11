<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
      <li>
        <a
          :href="login">
          {{userName}}
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a :href="page">
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
                msg: 'Welcome to Your Vue.js App',
                login: '/#/',
                page:'/#/socketTest'
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

            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
