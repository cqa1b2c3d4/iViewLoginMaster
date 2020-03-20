<template>
  <div class="live-room-left"><!--左边栏-->
    <div class="live-room-left-info"><!--主播信息区-->
      <div class="info-avatar"><!--主播头像-->
        <img :src="avatar" alt="avatar"/>
      </div>
      <div class="info-room"><!--房间信息-->
        <div><span>{{liveName}}</span></div>
        <div class="clear-both"></div>
        <div>
          <img :src="anchorLevel" alt="lev"/>
          <span>{{anchorName}}</span>
          <Breadcrumb separator=">">
            <BreadcrumbItem to="/">
              <Icon type="ios-microphone-outline"/>
              {{liveClassifyOne}}
            </BreadcrumbItem>
            <BreadcrumbItem to="/components/breadcrumb">
              <Icon type="ios-musical-notes"/>
              {{liveClassifyTwo}}
            </BreadcrumbItem>
          </Breadcrumb>
          <Icon type="md-home"/>
          <span>{{liveID}}</span>
          <Icon type="md-people"/>
          <span>{{audiences}}</span>
        </div>
      </div>
      <div><!--分享举报订阅等-->
        <span>举报</span>
        <span>分享</span>
        <span>客户端下载</span>
        <div>
          <Icon type="md-pricetags"/>
          订阅
          <Divider type="vertical"/>
          {{attentionNum}}
        </div>
      </div>
    </div>
    <div><!--直播播放-->
      <div v-if="liveStart" id="video"></div>
      <div v-else>
        <span>主播未开播，推荐观看：</span>
        <!--此处显示推荐直播间-->
      </div>
    </div>

    <div class="live-room-left-footer"><!--播放窗口底部栏，包含周星榜单链接，以及礼物选择区域-->
      <div class="gift-area-left">
        <a><img alt="weekStar" src=""/></a>
      </div>
      <div class="live-room-gift-area"><!--礼物选择区-->
        <div class="fl">
          <button :disabled="giftFirstPage" @click="giftChangePage('back')">
            <Icon type="ios-arrow-back"/>
          </button>
        </div>
        <div class="fl">
          <ul>
            <li v-for="(item,index) in giftList" v-bind:key="item.id" v-show="giftIfCurrentPage(index)"><img
              style="width: 20px;height: 20px" :src="item.gifticon"></li>
          </ul>
        </div>
        <div class="fr">
          <button :disabled="giftLastPage" @click="giftChangePage('next')">
            <Icon type="ios-arrow-forward"/>
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "LivePlayArea",
        data() {
            return {
                avatar: '',
                anchorName: '',
                anchorLevel: '',
                liveName: '',
                liveClassifyOne: '娱乐',
                liveClassifyTwo: '唱歌',
                liveID: '34029',
                audiences: '',
                attentionNum: '',
                liveStart: false,
                giftCurrentPage: 1,
                giftPerPage: '10',
                videoObject: {
                    container: "#video", //“#”代表容器的ID，“.”或“”代表容器的class
                    variable: "player", //该属性必需设置，值等于下面的new chplayer()的对象
                    autoplay: true, //自动播放
                    live: true,
                    /*                    loop: false,
                                        debug: true, //是否开启调试模式
                                        drag: 'start', //拖动的属性
                                        seek: 0, //默认跳转的时间*/
                    video: "https://qiniu.00yuyin.com/233333.mp4" //视频地址(必填)
                },
                giftList: [],
            }
        },
        computed: {
            giftTotalPage() {
                let totalGift = this.giftList.length;
                return Math.ceil(totalGift / this.giftPerPage);
            },
            giftFirstPage() {
                return this.giftCurrentPage === 1;
            },
            giftLastPage() {
                return this.giftCurrentPage === this.giftTotalPage;
            }
        },
        mounted() {
            this.giftGetList();
        },
        methods: {
            giftChangePage(type) {
                if (type === 'back') {
                    if (this.giftCurrentPage > 1) {
                        this.giftCurrentPage -= 1;
                    }
                } else if (type === 'next') {
                    if (this.giftCurrentPage < this.giftTotalPage) {
                        this.giftCurrentPage += 1;
                    }
                }
            },
            giftGetList() {
                let _this = this;
                this.$api.api_gift.get_gift_list(
                ).then((response) => {
                    var _data = response.data.data;
                    if (_data.code === 0) {
                        var _info = _data.info;
                        _this.giftList = [..._info[0].giftlist];
                    } else {
                        console.log('获取数据失败')
                    }
                }).catch((error) => {
                })
            },
            giftIfCurrentPage(index) {
                let pageStartIndex = 10 * (this.giftCurrentPage - 1) + 1;
                let pageEndIndex = 10 * (this.giftCurrentPage) + 1;
                return index > pageStartIndex && index < pageEndIndex;
            }
        }

    }
</script>

<style scoped>
  ul {
    list-style-type: none;
  }

  ul li {
    display: inline-flex;
  }

  .live-room-left-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
  }

  .live-room-left-footer .gift-area-left {
    width: 30%;
    float: left;
  }
  .live-room-left-info{
    width: 100%;
    height: 40px;
  }

  .live-room-gift-area {
    width: 70%;
    float: left;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }
  .clear-both{
    clear: both;
  }
  .live-room-left{
    width: 100%;
    height: 100%;
    position: relative;
  }

</style>
