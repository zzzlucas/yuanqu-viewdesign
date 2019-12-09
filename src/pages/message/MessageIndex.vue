<template>
  <div class="zj-message-index">
    <Breadcrumb class="breadcrumb-box" separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">新闻动态</BreadcrumbItem>
    </Breadcrumb>
    <div class="zj-message-box">
      <div class="zj-message-left">
        <div class="zj-message-item" v-for="(item, key) in newsList" :key="key">
          <h1>
            <router-link class="title" :to="'/message/detail/' + item.newId">{{item.titile}}</router-link>
            <!-- :to="'/home/newsinfo/' + item.id" -->
          </h1>
          <p>
            <router-link class="text" :to="'/message/detail/' + item.newId" v-html="item.text"></router-link>
          </p>
          <div class="info">
            <span style="margin-right: 10px;">
              <i class="iconfont iconshijian" style="margin-right: 5px;"></i>
              {{item.publishTime}}
            </span>
            <!-- <span>
              <i class="iconfont iconyuedushuliang" style="margin-right: 5px;"></i>
              {{item.reading}}
            </span>-->
          </div>
        </div>
      </div>
      <div class="zj-message-right">
        <h4 class="zj-message-right-title">热门动态资讯</h4>
        <div class="zj-message-item" v-for="(hot, key) in hotsList" :key="key">
          <h1 class="title">{{hot.title}}</h1>
          <p class="text">{{hot.text}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAction, putAction, postAction } from "@/api/manage";
import moment from "moment";
export default {
  name: "index",
  data() {
    return {
      newsList: [],
      hotsList: [
        {
          title: "举办“展青春风采，扬热情服务”讲解比赛",
          text:
            "县委组织部副部长、县委两新工委书记黄斌及来自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及自县委组织部、县委党校、嘉兴南湖革命纪念馆及",
          date: "09-03 12:00",
          reading: "10000"
        }
      ],
      isPublic: "",
      keyword: "",
      pageNo: 1,
      pageSize: 5,
      parkId: "1193719771573518336",
      type: ''
    };
  },
  // computed: {
  //   type() {
  //     console.log(type);
  //   },
  //   $route() {
  //     console.log(1);
  //   },
  // },
  watch: {
    //router-link路由切换时，未触发created时的加载
    $route(val){
      // console.log(val.params.id);
      this.loadData();
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    getData(status) {
      return new Promise((resolve, reject) => {
        let { isPublic, keyword, pageNo, pageSize, parkId, type } = this;
        getAction("/park.service/mgrNewsInfo/list", {
          isPublic,
          keyword,
          pageNo,
          pageSize,
          parkId,
          type:this.$route.params.id
        })
          .then(res => {
            // console.log(this.$route.params.id);
            if (res.code === 200 && res.success) {
              resolve(res.result);
            } else {
              reject(res.message);
            }
          })
          .catch(err => {
            reject(err);
          });
      });
    },
    loadData() {
      this.getData().then(data => {
        //根据富文本内容获取摘要
        for (const item of data.records) {
          item.publishTime = moment(item.publishTime).format("MM-DD HH:mm");
          //在富文本内容很大的情况下，性能应该会很低下
          item.text = item.context;
          item.text = item.text.replace(/<\/?.+?>/g, "");
          item.text = item.text.replace(/&nbsp;/g, "");
          item.text = item.text.slice(0, 180) + "......";
          item.text = item.text.trim();
        }
        this.newsList = data.records;
      });
    }
  }
};
</script>

<style lang="less">
.zj-message-index {
  margin-top: 85px;
  text-align: left;
  background-color: #eee;
  .breadcrumb-box {
    padding: 10px;
    border: 1px solid #eee;
    background-color: #fff;
    margin-bottom: 20px;
  }
  .zj-message-box {
    display: flex;
    .zj-message-left {
      width: 75%;
      padding: 30px;
      background-color: #fff;
      .zj-message-item {
        padding: 30px 0;
        border-bottom: 1px solid #eee;
        .title {
          font-size: 16px;
          margin-bottom: 15px;
          color: #333333;
        }
        .text {
          color: rgb(153, 153, 153);
        }
        .info {
          font-size: 12px;
          color: rgb(153, 153, 153);
          margin-top: 10px;
        }
      }
    }
    .zj-message-right {
      width: 22%;
      margin-left: 3%;
      background-color: #fff;
      .zj-message-right-title {
        padding: 20px 15px;
        border-bottom: 1px solid #eee;
      }
      .zj-message-item {
        padding: 30px 0;
        margin: 0 15px;
        border-bottom: 1px solid #eee;
        .title {
          font-size: 18px;
          margin-bottom: 5px;
          font-weight: 400;
          color: rgb(102, 102, 102);
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
        }
        .text {
          color: rgb(153, 153, 153);
          overflow: hidden;
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
