<template>
  <div class="activity-view">

    <div class="activity-bread-box">
      <Breadcrumb separator=">">
        <BreadcrumbItem to="/">首页</BreadcrumbItem>
        <BreadcrumbItem>活动</BreadcrumbItem>
      </Breadcrumb>
    </div>
    <div class="info">
      <div class="info-left">
        <img :src="data.addDocFiles" alt="">
      </div>
      <div class="info-right">
        <div class="title">{{data.title}} <span class="status">{{data.status_dictText}}</span></div>
        <p>活动时间：<span>{{data.begDate}}-{{data.endDate}}</span></p>
        <p>活动地点：<span>{{data.address}}</span></p>
        <p>报名人数：<span>{{data.num}}人</span></p>
        <p>主办单位：<span>{{data.hostUnit}}</span></p>
        <Button class="apply-button" type="error">报名</Button>
      </div>
    </div>

    <div class="introduce">
      <h4 class="title">活动详情</h4>
      <p v-html="data.context">
      </p>
    </div>
  </div>
</template>

<script>
import {getAction} from '@/api/manage'

export default {
  name: 'ActivityView',
  data () {
    return {
      data: {}
    }
  },
  created () {
    this.init(this.$route.params.id)
  },
  methods: {
    init (id) {
      getAction('/park.service/mgrActivityInfo/queryById', {
        activityId: id
      }).then(res => {
        if (res.success && res.code === 200) {
          this.data = res.result
        } else {
          this.$Message.error(res.message)
        }
      })
    }
  },
  watch: {
    '$route.params.id': function (id) {
      this.init(id)
    }
  }
}
</script>

<style lang="less">
  .activity-view {
    width: 100%;
    margin-top: 90px;
    background-color: rgba(246, 246, 246, 1);
    .activity-bread-box {
      width: 90%;
      margin: auto;
      .ivu-breadcrumb {
        text-align: left;
        padding: 10px;
        border: 1px solid #eee;
        background-color: #fff;
      }
    }
    .info {
      margin: 20px auto 0;
      border: 1px solid #eee;
      text-align: left;
      background-color: #fff;
      width: 90%;
      padding: 20px 10px 30px 10px;
      display: flex;
      .info-left {
        width: 30%;
        img {
          width: 100%;
        }

      }
      .info-right {
        width: 70%;
        padding-left: 30px;
        .title {
          font-size: 18px;
          border-bottom: 1px solid #eee;
          padding-bottom: 10px;
          font-weight: 600;
          position: relative;
          .status {
            padding: 3px 10px;
            background-color: red;
            font-size: 12px;
            margin-left: 10px;
            -webkit-border-radius: 2em 2em 2em 0;
            -moz-border-radius: 2em 2em 2em 0;
            border-radius: 2em 2em 2em 0;
            color: #fff;
          }

        }
        p {
          margin: 10px 0;
          color: #999;
          span {
            color: #000;
            margin-left: 15px;
          }
        }
        .apply-button {
          width: 86px;
          height: 32px;
          margin-top: 8px;
        }
      }
    }

    .introduce {
      margin: 20px auto;
      border: 1px solid #eee;
      text-align: left;
      background-color: #fff;
      width: 90%;
      padding: 20px 30px 30px 30px;
      .title {
        font-size: 18px;
        border-bottom: 1px solid #eee;
        padding-bottom: 10px;
      }
      p {
        margin: 20px 0;
      }
    }
  }
</style>
