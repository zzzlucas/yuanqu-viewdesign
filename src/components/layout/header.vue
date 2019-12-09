<template>
  <div class="herder">
    <div class="herder-left">
      <ul class="menu">
        <li>
          <img
            class="logo"
            src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3615831237,1510664097&fm=26&gp=0.jpg"
          />
        </li>
        <li>
          <router-link to="/">其他园区</router-link>
        </li>
        <li>
          <router-link :to="{name: 'HomeIndex'}">首页</router-link>
        </li>
        <li>
          <router-link :to="{name: 'ActivityIndex'}">活动</router-link>
        </li>
        <li class="serve-box" v-on:mouseenter="showServeMenu" v-on:mouseleave="hideServeMenu">
          <a href="javascript:void(0)">服务</a>

          <!--下拉菜单-->
          <div class="serve-menu" v-show="serveMenuShow">
            <div class="serve-menu-triangle"></div>
            <ul>
              <p class="serve-menu-title">入驻</p>
              <li @click="goRouter('TenementRepairsStep1')">物业报修</li>
              <li @click="goRouter('TenementAppealStep1')">物业申诉</li>
              <li @click="goRouter('DemandSubmissionStep1')">需求提报</li>
              <li @click="goRouter('ParkingApplyStep1')">停车位申请</li>
              <li @click="goRouter('ItRepairsStep1')">IT报修</li>
              <li @click="goRouter('AdvertisingApplyStep1')">广告服务申请</li>
            </ul>
            <ul>
              <p class="serve-menu-title">园区管理</p>
              <li @click="goRouter('PublicFacilitiesStep1')">公共设施</li>
              <li @click="goRouter('EnterprisesRecordStep1')">施工企业备案</li>
              <li @click="goRouter('RubbishDispositionStep1')">建筑垃圾处置</li>
              <li @click="goRouter('UrbanRoadStep1')">临时占用道路</li>
            </ul>
            <ul>
              <p class="serve-menu-title">项目申请</p>
              <li @click="goRouter('NewRentalProjectStep1')">新项目申请（租凭）</li>
              <li @click="goRouter('NewLandProjectStep1')">新项目申请（拿地）</li>
              <li @click="goRouter('NewTechProjectStep1')">技改项目申请</li>
            </ul>
            <ul>
              <p class="serve-menu-title">空间</p>
              <li>会议室预定</li>
              <li>广告位预定</li>
            </ul>
          </div>
        </li>
        <li
          class="information-box"
          v-on:mouseenter="showInformationMenu"
          v-on:mouseleave="hideInformationMenu"
        >
          <a href="javascript:void(0)">资讯</a>
          <div class="information-menu" v-show="informationMenuShow">
            <div class="information-menu-triangle"></div>
            <ul>
              <!-- <li @click="goRouter('MessageIndex','2')">通知公告</li>
              <li @click="goRouter('MessageIndex','3')">新闻动态</li> -->
              <!-- 导航栏内容不美观 -->
              <router-link tag="li" :to="'/message/index/' + '2'">通知公告</router-link>
              <router-link tag="li" :to="'/message/index/' + '3'">新闻动态</router-link>
              <li @click="goRouter('RecruitmentIndex')">人才招聘</li>
            </ul>
          </div>
        </li>
        <li>
          <router-link :to="{name: 'PolicyIndex'}">政策</router-link>
        </li>
      </ul>
    </div>

    <div class="herder-right">
      <div class="herder-right-box">
        <div class="search">
          <Input search placeholder="输入搜索关键词" />
        </div>
      </div>
      <router-link to="/" class="right-icon">
        <i class="iconfont iconxiaoxi"></i>
      </router-link>
      <router-link to="/" class="right-icon">
        <i class="iconfont iconshezhi"></i>
      </router-link>
      <router-link class="right-icon" :to="{name: 'LoginIndex'}">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "head",
  data() {
    return {
      serveMenuShow: false,
      informationMenuShow: false
    };
  },
  methods: {
    showServeMenu() {
      this.serveMenuShow = true;
    },
    hideServeMenu() {
      this.serveMenuShow = false;
    },
    showInformationMenu() {
      this.informationMenuShow = true;
    },
    hideInformationMenu() {
      this.informationMenuShow = false;
    },
    goRouter(route, type) {
      this.$router.push({ name: route, params: { type } });
      this.serveMenuShow = false;
    }
  }
};
</script>

<style lang="less">
.herder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: rgba(52, 52, 52, 1);
  z-index: 999;

  .herder-left {
    width: 50%;
    height: 80px;
    float: left;

    .menu {
      display: flex;
      line-height: 80px;
      padding: 0;
      margin: 0;
      .serve-box {
        position: relative;

        .serve-menu {
          display: flex;
          width: 892px;
          height: 406px;
          background-color: #fff;
          position: absolute;
          top: 80px;
          left: -100px;
          padding: 20px 20px;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
          .serve-menu-triangle {
            width: 0;
            height: 0;
            border-width: 0 12px 12px;
            border-style: solid;
            border-color: transparent transparent #fff;
            position: absolute;
            top: -12px;
            left: 135px;
          }
          ul {
            width: 200px;
            text-align: left;
            margin-left: 20px;
            .serve-menu-title {
              height: 45px;
              line-height: 40px;
              font-size: 14px;
              font-weight: 600;
              border-bottom: 1px solid rgba(233, 233, 233, 1);
              padding: 0;
              margin: 0;
            }
            li,
            li > a {
              height: 50px;
              line-height: 50px;
              text-align: left;
              color: #999999;
              cursor: pointer;
              a:hover {
                background-color: unset;
              }
            }
          }
        }
      }

      .information-box {
        position: relative;

        .information-menu {
          display: flex;
          width: 168px;
          height: 175px;
          background-color: #fff;
          position: absolute;
          top: 80px;
          left: -10px;
          padding: 20px 20px;
          border-left: 1px solid #eee;
          border-bottom: 1px solid #eee;
          border-right: 1px solid #eee;
          .information-menu-triangle {
            width: 0;
            height: 0;
            border-width: 0 12px 12px;
            border-style: solid;
            border-color: transparent transparent #fff;
            position: absolute;
            top: -12px;
            left: 45px;
          }
          ul {
            width: 168px;
            text-align: left;
            li {
              height: 50px;
              line-height: 50px;
              text-align: left;
              color: #999999;
              cursor: pointer;
            }
          }
        }
      }

      li {
        padding: 0;
        width: 100%;
        height: 80px;
        line-height: 80px;
        list-style-type: none;
        text-decoration: none;
        text-align: center;
        .logo {
          width: 50px;
          margin-top: 15px;
          -webkit-border-radius: 50%;
          -moz-border-radius: 50%;
          border-radius: 50%;
        }
        a {
          color: #fff;
          text-decoration: none;
          display: block;
          height: 100%;
          width: 100%;
          font-weight: 700;
        }

        a:hover {
          background-color: #000;
          color: red;
        }
      }
    }
  }
  .herder-right {
    width: 50%;
    height: 80px;
    line-height: 80px;
    float: right;
    display: flex;
    .herder-right-box {
      padding-left: 150px;
      .search {
        width: 300px;
      }
    }
    .right-icon {
      display: block;
      margin-left: 35px;
      font-size: 16px;
      color: red;
    }
  }
}
</style>
