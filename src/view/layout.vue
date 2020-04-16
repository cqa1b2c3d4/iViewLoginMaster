<template>
  <div class="layout-wrapper">
    <Layout class="layout-outer">
      <Sider :width="200" collapsible hide-trigger v-model="isCollapsed" breakpoint="sm">
        <side-menu :collapsed="isCollapsed" :list="menuList"></side-menu>
      </Sider>
      <Layout>
        <Header class="layout-header">
          <Icon :class="triggerClasses" type="md-menu" :size="32" @click.native="shrinkSider"></Icon>
          <router-link to="/home">home</router-link>
        </Header>
        <Content class="content-con">
          <Card shadow class="page-card">
            <router-view></router-view>
          </Card>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
  import SideMenu from '@/components/side-menu'

  export default {
    name: "layout",
    data() {
      return {
        isCollapsed: false,
        menuList: [
          {
            title: '111',
            name: 'menu1',
            icon: 'ios-albums'
          },
          {
            title: '222',
            name: 'menu2',
            icon: 'ios-albums'
          },
          {
            title: '333',
            name: 'menu3',
            icon: 'ios-albums',
            children: [
              {
                title: '333-1',
                name: 'menu31',
                icon: 'ios-albums'
              },
              {
                title: '333-2',
                name: 'menu32',
                icon: 'ios-albums'
              },
              {
                title: '333-3',
                name: 'menu33',
                icon: 'ios-albums',
                children: [
                  {
                    title: '333-3-1',
                    name: 'menu331',
                    icon: 'ios-albums'
                  },
                  {
                    title: '333-3-2',
                    name: 'menu332',
                    icon: 'ios-albums'
                  },
                  {
                    title: '333-3-3',
                    name: 'menu333',
                    icon: 'ios-albums',
                    children: [
                      {
                        title: '333-3-3-1',
                        name: 'menu3331',
                        icon: 'ios-albums'
                      },
                      {
                        title: '333-3-3-2',
                        name: 'menu3332',
                        icon: 'ios-albums'
                      },
                      {
                        title: '333-3-3-3',
                        name: 'menu3333',
                        icon: 'ios-albums'
                      }
                    ]
                  }
                ]

              },
            ]
          },
          {
            title: '444',
            name: 'menu4',
            icon: 'ios-albums'
          },
        ],
      }
    },

    computed: {
      triggerClasses() {
        return [
          'trigger-icon',
          this.isCollapsed ? 'rotate' : ''
        ]
      }
    },

    components: {
      SideMenu
    },

    methods: {
      shrinkSider() {
        this.isCollapsed = !this.isCollapsed;
      }

    }
  }
</script>

<style lang="less">
  .layout-wrapper {
    height: 100%;
    padding-bottom: 200px;

    .layout-outer {
      height: 100%;
    }

    .layout-header {
      background: #c3c3c3;
      box-shadow: 1px 1px #d19a66;
      padding: 9px 30px;

      .trigger-icon {
        cursor: pointer;
        transition: transform .3s ease;

        &.rotate {
          transform: rotateZ(-90deg);
          transition: transform .3s ease;
        }
      }
    }

    .content-con {
      padding: 10px;
    }

    .page-card {
      min-height: ~"calc(100vh - 64px)";
    }
  }

</style>
