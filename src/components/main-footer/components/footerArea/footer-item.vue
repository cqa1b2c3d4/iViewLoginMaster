<template>
<div class="footer-container">
  <Row>
    <Col span="8"><h2 class="contact-msg">联系方式</h2></Col>
  </Row>
  <div class="contact-details">
  <Row type="flex" justify="center" align="middle" class="code-row-bg">
    <Col span="4"><p>联系人: 王雪燕</p></Col>
    <Divider type="vertical" />
    <Col span="4"><p>固定电话: 023-49585977</p></Col>
    <Divider type="vertical" />
    <Col span="4"><p>邮箱: sun860811qq.com</p></Col>
    <Divider type="vertical" />
    <Col span="5"><p>地址: 重庆市永川区和顺大道799号</p></Col>
  </Row>
</div>
  <div id="doc-ft">
    <div class="container">
      <p class="footer">重庆硕讯时空数字科技有限公司 网络文化经营许可单位</p>
      <div style="width:300px;margin:0 auto; padding:20px 0;">
        <img src="/static/images/batb.png"/>
        <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=50011802010229" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="" style="float:left;"/><p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">渝公网安备 50011802010229号</p></a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
    export default {
        name: "footerItem",
        data () {
            return {

            }
        },
    }
</script>

<style scoped>
  .footer-container{
    width: 100%;
    background-color: #fff;
  }
  .contact-msg {
    font-size: 20px;
    height: 20px;
    margin-left: 40px;
    margin-bottom: 20px;
    color: #5f6464;
  }
  .contact-details p {
    color: #aaaaaa;
    width: auto;
    height: 20px;
    font-size: 14px;
  }

  #doc-ft {
    width: 100%;
  }
  #doc-ft .container {
    margin: 0 auto;
    text-align: center;
  }
  #doc-ft .container p {
  }
</style>
