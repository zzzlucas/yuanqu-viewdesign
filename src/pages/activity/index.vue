<template>
  <div class="activity-index">
    <div class="activity-index-box">
      <Breadcrumb separator=">">
        <BreadcrumbItem :to="{name: 'HomeIndex'}">首页</BreadcrumbItem>
        <BreadcrumbItem>活动</BreadcrumbItem>
      </Breadcrumb>

      <div class="content">
        <h4 class="title">活动</h4>
        <div class="card-box">
          <div class="card" v-for="(item, index) in data" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)" :accesskey="index">
            <div class="card-img">
              <img :src="item.image" alt="">
              <div class="tier" v-if="ishow && index==current">
                <div class="tier-button">
                  <router-link :to="{name: 'ActivityView', params:{ id:item.activityId }}" class="tier-left">详情</router-link>
                  <div class="tier-right" @click="apply(item)">报名</div>
                </div>
              </div>
            </div>
            <div class="card-top">
              <h4>{{item.title}}</h4>
              <div class="apply">{{item.status_dictText}}</div>
              <div class="clear"></div>
            </div>
            <p class="introduce" v-html="item.context">
            </p>
            <div class="card-bottom">
              <p><i class="iconfont iconshijian" style="margin-right: 5px;"></i>{{item.begDate}}</p>
              <p><i class="iconfont icondizhi" style="margin-right: 5px;"></i>{{item.address}}</p>
              <p class="apply-num">{{item.num +'/'+ item.applyMembersMax}} 报名</p>
            </div>
          </div>
        </div>
        <div class="content-page">
          <Page :total="total" prev-text="<上一页" next-text="下一页>" />
        </div>
      </div>
    </div>
    <Modal v-model="formModal" width="600" class="zj-home-activity-modal">
      <p slot="header" style="color:#000;text-align:left">
        <span>活动报名</span>
      </p>
      <div style="text-align:center; width: 400px; margin: auto;">
        <Form :model="form" label-position="left" :label-width="100">
          <FormItem label="活动名称:">
            <Input v-model="form.title" disabled="disabled"></Input>
          </FormItem>
          <FormItem label="活动时间:">
            <Input v-model="form.date" disabled="disabled"></Input>
          </FormItem>
          <FormItem label="报名人">
            <Input v-model="form.name"></Input>
          </FormItem>
          <FormItem label="手机号码">
            <Input v-model="form.phone"></Input>
          </FormItem>
          <FormItem label="联系邮箱">
            <Input v-model="form.email"></Input>
          </FormItem>
          <FormItem label="备注">
            <Input v-model="form.remark" type="textarea" :rows="5" placeholder="" />
          </FormItem>
        </Form>
      </div>
      <div class="form-modal-footer" slot="footer">
        <Button size="large" type="error">确认</Button>
        <Button size="large" @click="activityFormCancel">取消</Button>
      </div>
    </Modal>

  </div>
</template>

<script>
import { api_index } from './api/activity'
export default {
  name: 'ActivityIndex',
  data() {
    return {
      ishow: false,
      current: null,
      formModal: false,
      form: {
        activityId: '',
        title: '',
        date: '',
        name: '',
        phone: '',
        email: '',
        remark: ''
      },
      data: [
      ],
      total: 0,
      keyword: '',
      pageNo: 1,
      pageSize: 12,
      status: 1,
      parkId: ''
    }
  },
  created() {
    this.init();
  },
  methods: {
    async init() {
      let _data = await api_index(this.keyword,this.parkId,this.pageNo, this.pageSize, this.status);
      let res = _data.data
      this.data = res.result.records;
      this.total = res.result.total
      console.log(res)
    },
    showDialog(index, item) {
      this.ishow = true;
      this.current = index;
    },

    hideDialog(index, item) {
      this.ishow = false;
      this.current = null;
    },
    apply(data) {
      if (1 == 1) {
        return this.$router.push({name: 'LoginIndex'})
      }
      this.formModal = true;
      this.form.date = data.date;
      this.form.title = data.title;
      this.form.id = data.id;
    },
    activityFormCancel() {
      this.formModal = false
    }
  }
}
</script>

<style lang="less">
  .activity-index {
    margin-top: 90px;
    width: 100%;
    background-color: rgba(246, 246, 246, 1);
    .activity-index-box {
      width: 90%;
      margin: auto;
      .ivu-breadcrumb {
        text-align: left;
        padding: 10px;
        border: 1px solid #eee;
        background-color: #fff;
      }
      .content {
        background-color: #fff;
        text-align: left;
        .title {
          padding: 20px 0;
          font-size: 18px;
          width: 95%;
          margin: auto;
          border-bottom: 1px solid #eee;
        }
        .card-box {
          width: 95%;
          display: flex;
          margin: 20px auto;
          flex-warp:warp;
          -ms-flex-wrap: wrap;
          -webkit-flex-wrap: wrap;

          .card {
            border: 1px solid #eee;
            width: 30%;
            margin-left: 2%;
            margin-bottom: 20px;
            .card-img {
              cursor: pointer;
              position: relative;
              .tier {
                width: 100%;
                height: 100%;
                background-color: rgba(0,0,0,0.2);
                position: absolute;
                top: 0;
                left: 0;
                cursor: pointer;
                .tier-button {
                  margin: 115px auto;
                  width: 220px;

                  .tier-left {
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    color: red;
                    border: 1px solid red;
                    float: left;
                    text-align: center;
                  }
                  .tier-right {
                    width: 100px;
                    height: 30px;
                    line-height: 30px;
                    background-color: red;
                    color: #fff;
                    float: left;
                    margin-left: 20px;
                    text-align: center;
                  }
                }
              }
              img {
                width: 100%;
              }

            }
            .card-top {
              padding: 5px 20px;
              h4 {
                float: left;
                font-size: 16px;
              }
              .apply {
                text-align: center;
                float: right;
                width: 50px;
                height: 20px;
                -webkit-border-radius: 2em 2em 2em 0;
                -moz-border-radius: 2em 2em 2em 0;
                border-radius: 2em 2em 2em 0;
                background: red;
                color: #fff;
                font-size: 12px;
                line-height: 20px;
              }
              .clear {
                clear:both
              }
            }

            .introduce {
              padding: 5px 20px;
              border-bottom: 1px solid #eee;
              color: #999999;
              font-size: 13px;
            }
            .card-bottom {
              padding: 5px 20px;
              p {
                width: 100%;
                text-align: left;
                font-weight: 400;
                font-size: 12px;
                margin: 5px 0;
                color: #999999;
              }
              .apply-num {
                text-align: right;
              }
            }
          }
        }
        .content-page {
          width: 100%;
          text-align: center;
          padding: 20px 0;
          .ivu-page-custom-text {
            border: 1px solid #eee;
            padding: 0 10px;
          }
          .ivu-page-item-active {
            background-color: red;
            color: #fff;
            border-color: unset;
          }
          .ivu-page-item {
            border: 1px solid red;
          }

          .ivu-page-item:hover a {
            color: red !important;
          }
          .ivu-page-item-active a {
            color: #fff !important;
          }

          .ivu-page-item-active:hover a {
            color: #fff !important;
          }
        }
      }
    }
  }
</style>
