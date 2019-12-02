<template>
  <div class="zj-policy-index">
    <Breadcrumb class="breadcrumb-box" separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">政策</BreadcrumbItem>
    </Breadcrumb>
    <div class="zj-policy-search">
      <ul>
        <span class="title">政策级别：</span>
        <li v-for="(level, index) in levelList"
            :key="index"
            :class="{ischeck:index === levelCurrent}"
            @click="levelClass(index)">
          {{level.title}}
        </li>
      </ul>
      <ul>
        <span class="title">发布部门：</span>
        <li v-for="(department, index) in departmentList"
            :key="index"
            :class="{ischeck: index === departmentCurrent}"
            @click="departmentClass(index)">
          {{department.title}}
        </li>
      </ul>
    </div>
    <div class="zj-policy-box">
      <div class="zj-policy-left">
        <div class="zj-policy-item" v-for="(item, key) in data" :key="key">
          <h1 class="title">
            <router-link class="title-font" to="/">{{item.title}}</router-link>
          </h1>
          <div class="info">
            <span style="margin-right: 10px;">
            <i class="iconfont iconshijian" style="margin-right: 5px;"></i>{{item.date}}
            </span>
            <span>
            <i class="iconfont iconyuedushuliang" style="margin-right: 5px;"></i>{{item.reading}}
            </span>
          </div>
        </div>
      </div>
      <div class="zj-policy-right">
        <h4 class="zj-policy-right-title">热门动态资讯</h4>
        <div class="zj-policy-item" v-for="(hot, key) in hots" :key="key">
          <h1 class="title">{{hot.title}}</h1>
          <p class="text">
            {{hot.text}}
          </p>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      data: [
        {title: '举办“展青春风采，扬热情服务”讲解比赛', date: '09-03 12:00', reading: '10000'},
        {title: '举办“展青春风采，扬热情服务”讲解比赛', date: '09-03 12:00', reading: '10000'},
        {title: '举办“展青春风采，扬热情服务”讲解比赛', date: '09-03 12:00', reading: '10000'}
      ],
      hots: [
        {title: '举办“展青春风采，扬热情服务”讲解比赛', text: '县委组织部副部长、县委两新工委书记黄斌及来自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及', date: '09-03 12:00', reading: '10000'},
        {title: '举办“展青春风采，扬热情服务”讲解比赛', text: '县委组织部副部长、县委两新工委书记黄斌及来自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及', date: '09-03 12:00', reading: '10000'},
        {title: '举办“展青春风采，扬热情服务”讲解比赛', text: '县委组织部副部长、县委两新工委书记黄斌及来自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及', date: '09-03 12:00', reading: '10000'}
      ],
      levelCurrent: 0,
      levelList: [
        {title: '不限'},
        {title: '人才政策'},
        {title: '金融服务政策'},
        {title: '财税政策'},
        {title: '专利资助'}
      ],
      departmentCurrent: 0,
      departmentList: [
        {title: '不限'},
        {title: '财政局'},
        {title: '发改局'},
        {title: '金融局'},
        {title: '经信委'},
        {title: '人保局'},
        {title: '科委'}
      ]
    }
  },

  methods: {
    levelClass (index) {
      this.levelCurrent = index
    },
    departmentClass (index) {
      this.departmentCurrent = index
    }
  }
}
</script>

<style lang="less">
    .zj-policy-index {
      margin-top: 85px;
      text-align: left;
      background-color: #fff;
      .breadcrumb-box {
        padding: 10px;
        border: 1px solid #eee;
        background-color: #fff;
        margin-bottom: 20px;
      }
      .zj-policy-search {
        background-color: #fff;
        border: 1px solid #eee;
        margin-bottom: 20px;
        ul {
          padding: 20px 0 20px 60px;
          display: flex;
          .title {
            margin-right: 30px;
            display: block;
            height: 30px;
            line-height: 30px;
          }
          li {
            padding: 0 25px;
            height: 30px;
            line-height: 30px;
            list-style-type:none;
            cursor: pointer;
            text-align: center;
            margin-left: 50px;

          }
          .ischeck {
            background-color: #C40005;
            color: #fff;

          }
        }
      }
      .zj-policy-box {
        display: flex;
        .zj-policy-left {
          width: 75%;
          padding: 30px;
          background-color: #fff;
          border: 1px solid #eee;
          .zj-policy-item {
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            .title {
              font-size: 16px;
              display: block;
              width: 80%;
              padding-left: 30px;
              font-weight: 500;
              .title-font {
                color: #333;
              }
            }
            .info {
              font-size: 12px;
              color: rgb(153, 153, 153);
              width: 20%;
            }
          }
        }
        .zj-policy-right {
          width: 22%;
          margin-left: 3%;
          background-color: #fff;
          border: 1px solid #eee;
          .zj-policy-right-title {
            padding: 20px 15px;
            border-bottom: 1px solid #eee;
          }
          .zj-policy-item {
            padding: 30px 0;
            margin: 0 15px;
            border-bottom: 1px solid #eee;
            .title {
              font-size: 18px;
              margin-bottom: 5px;
              font-weight: 400;
              color: rgb(102, 102, 102);
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 1;
              -webkit-box-orient: vertical;
            }
            .text {
              color: rgb(153, 153, 153);
              overflow : hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-line-clamp: 2;
              -webkit-box-orient: vertical;
            }
          }
        }
      }
    }
</style>
