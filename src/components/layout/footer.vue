<template>
  <div class="footer">
    <div class="footer-menu">
      <div class="footer-menu-left">
        <div class="footer-menu-left-logo">
          <img src="http://img5.imgtn.bdimg.com/it/u=1994691428,56001411&fm=26&gp=0.jpg" alt="">
        </div>
        <p>工作时间：9:30-18:00</p>
        <h1>400 810 8220</h1>
      </div>
      <div class="footer-menu-center">
        <ul>
          <h4 class="title">关于我们</h4>
          <li>嘉善XXX信息服务有限公司</li>
          <li>浙江智界网络科技有限公司</li>
        </ul>
        <ul>
          <h4 class="title">快速通道</h4>
          <li>
            <router-link :to="{name: 'MessageIndex'}">资讯</router-link>
          </li>
          <li>
            <router-link :to="{name: 'ActivityIndex'}">活动</router-link>
          </li>
          <li>
            <router-link :to="{name: 'RecruitmentIndex'}">人才招聘</router-link>
          </li>
          <li>会议室</li>
        </ul>
        <ul>
          <h4 class="title">帮助中心</h4>
          <li>找回密码</li>
          <li>常见问题</li>
        </ul>
      </div>
      <div class="footer-menu-right">
        <h1>关注公众号</h1>
        <div class="footer-menu-right-img">
          <img src="http://img5.imgtn.bdimg.com/it/u=1994691428,56001411&fm=26&gp=0.jpg" alt="">
        </div>

      </div>

    </div>
    <div style="background-color: #000;height: 2px; width: 100%;"></div>
    <div class="footer-message">
        <p><span>Copyright© 2017-2018 www.8888888.cn</span><span>|</span><span>嘉善XXX信息服务有限公司</span><span>|</span><span>沪ICP备188888444号-1</span></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footer'
}
</script>

<style lang="less">
  .footer {
    width: 100%;
    .footer-menu {
      height: 247px;
      background-color: #333333;
      display: flex;
      flex-warp:warp;
      -ms-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      .footer-menu-left {
        color: #CCCCCC;
        width: 20%;
        .footer-menu-left-logo {
          width: 80px;
          height: 80px;
          margin: 40px auto 20px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
      .footer-menu-center {
        width: 54%;
        margin: 50px;
        display: flex;
        border-left: 1px solid #bbbbbb;
        border-right: 1px solid #bbbbbb;
        ul {
          width: 33%;
          margin-left: 20px;
          text-align: left;

          .title {
            font-size: 16px;
            color: #fff;
            margin-bottom: 10px;
          }

          li, li > a {
            color: #CCC;
            height: 35px;
            line-height: 35px;
            list-style:none;
            cursor: pointer;
          }

          li > a:hover {
            color: #fff;
          }
        }
      }
      .footer-menu-right {
        width: 18%;
        text-align: left;
        h1 {
          color: #fff;
          text-align: left;
          font-size: 18px;
          margin-top: 50px;
          margin-bottom: 10px;
        }
        .footer-menu-right-img {
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .footer-message {
      height: 67px;
      background-color: #333333;
      text-align: center;
      color: #CCCCCC;
      p {
        padding-top: 20px;
        span {
          margin: 0 15px;
        }
      }

    }
  }
</style>
