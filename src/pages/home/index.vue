<template>
  <div class="zj-home-index">
    <zj-slider></zj-slider>
    <div class="serve">
      <h1 class="title">服务</h1>
      <div class="serve-box">
        <div class="serve-box-left">
          <div class="serve-box-item">
            <img src="../../assets/images/u24.png" alt="">
          </div>
          <div class="serve-box-item" style="margin-top: 5px;">
            <img src="../../assets/images/u27.png" alt="">
          </div>
        </div>
        <div class="serve-box-center">
          <div class="serve-box-item">
            <img src="../../assets/images/u30.png" alt="">
          </div>
        </div>
        <div class="serve-box-right">
          <div class="serve-box-item">
            <img src="../../assets/images/u33.png" alt="">
          </div>
          <div class="serve-box-item" style="margin-top: 5px;">
            <img src="../../assets/images/u36.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="activity">
      <h1 class="title">精彩活动</h1>
      <Tabs>
        <TabPane label="全部活动">
          <div class="activity-all">
             <Card style="width:30%; margin-bottom: 20px;" v-for="(item, index) in proceed">
               <div style="text-align:center">
                 <div class="tier-box" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)" :accesskey="index">
                   <img style="width: 100%;" :src="item.addDocFiles">
                   <div class="tier" v-if="ishow && index==current">
                     <div class="tier-button">
                       <router-link :to="{name: 'ActivityView', params:{ id: item.activityId }}" class="tier-left">详情</router-link>
                       <div class="tier-right" @click="apply(item)">报名</div>
                     </div>
                   </div>
                 </div>
                 <h3 class="activity-all-left">{{item.title}}</h3><div class="activity-all-right">{{item.status_dictText}}</div>
                 <div class="clear">
                 </div>
                 <p class="introduce" v-html="item.context"></p>
                 <div class="activity-all-bottom">
                   <p style="text-align: left;"><i class="iconfont iconshijian" style="margin-right: 5px;"></i>{{item.begDate}}</p>
                   <p style="text-align: left;"><i class="iconfont icondizhi" style="margin-right: 5px;"></i>{{item.address}}</p>
                   <p style="text-align: right;">{{item.num +'/'+ item.applyMembersMax}}</p>
                 </div>
               </div>
             </Card>
          </div>
        </TabPane>
        <TabPane label="往期活动">
          <div class="activity-all">
            <Card style="width:30%; margin-bottom: 20px;" v-for="(item, index) in before">
              <div style="text-align:center">
                <div class="tier-box" v-on:mouseenter="showDialog(index)" v-on:mouseleave="hideDialog(index)" :accesskey="index">
                  <img style="width: 100%;" :src="item.addDocFiles">
                  <div class="tier" v-if="ishow && index==current">
                    <div class="tier-button">
                      <div class="tier-left">详情</div>
                      <div class="tier-right" @click="apply(item)">报名</div>
                    </div>
                  </div>
                </div>
                <h3 class="activity-all-left">{{item.title}}</h3><div class="activity-all-right">{{item.status_dictText}}</div>
                <div class="clear">
                </div>
                <p class="introduce" v-html="item.context"></p>
                <div class="activity-all-bottom">
                  <p style="text-align: left;"><i class="iconfont iconshijian" style="margin-right: 5px;"></i>{{item.begDate}}</p>
                  <p style="text-align: left;"><i class="iconfont icondizhi" style="margin-right: 5px;"></i>{{item.address}}</p>
                  <p style="text-align: right;">{{item.num +'/'+ item.applyMembersMax}}</p>
                </div>
              </div>
            </Card>
          </div>
        </TabPane>
      </Tabs>
      <router-link :to="{name: 'ActivityIndex'}" class="more">查看更多</router-link>
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
import ZjSlider from '../../components/slider/index'
import { api_activity } from './api/home'
export default {
  name: 'HomeIndex',
  components: {ZjSlider},
  data () {
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
      before: [
      ],
      proceed: [
      ],
      keyword: '',
      pageNo: 1,
      pageSize: 3,
      status: 1,
      parkId: ''
    }
  },

  created () {
    this.activityBefore()
    this.activityProceed()
  },
  methods: {
    async activityBefore() {
      let _data = await api_activity(this.keyword,this.parkId,this.pageNo, this.pageSize, 3)
      let res = _data.data
      this.before = res.result.records
      console.log(res.result.records)
    },
    async activityProceed() {
      let _data = await api_activity(this.keyword,this.parkId,this.pageNo, this.pageSize, 1)
      let res = _data.data
      this.proceed = res.result.records
    },
    showDialog (index, item) {
      this.ishow = true
      this.current = index
    },

    hideDialog (index, item) {
      this.ishow = false
      this.current = null
    },
    apply (data) {
      if (1 == 1) {
        return this.$router.push({name: 'LoginIndex'})
      }
      this.formModal = true
      this.form.date = data.date
      this.form.title = data.title
      this.form.id = data.id
    },
    activityFormCancel () {
      this.formModal = false
    }
  }
}
</script>

<style lang="less">
  .zj-home-index {
    margin-top: 80px;
    .serve {
      width: 90%;
      margin: 50px auto;
      .title {
        font-size: 20px;
        display: block;
        width: 50px;
        margin: auto;
      }
      .title:after {
        content: "";
        display: block;
        width: 50px;
        height: 3px;
        background: #000;
      }
      .serve-box {
        margin-top: 30px;
        display: flex;
        .serve-box-left, .serve-box-center, .serve-box-right {
          .serve-box-item {
            .serve-box-text:before {
              content: '';
              display: inline-block;
              height: 100%;
              vertical-align: middle;
              margin-right: -0.25em; /* Adjusts for spacing */
            }
          }
          width: 32%;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .serve-box-center, .serve-box-right {
          margin-left: 1%;
        }
      }
    }
    .activity {
      .title {
        font-size: 20px;
        display: block;
        margin: 10px auto;
      }
      .ivu-tabs-nav-scroll {
        margin: auto;
        width: 252px;
        .ivu-tabs-ink-bar {
          height: 2px;
          box-sizing: border-box;
          background-color: red;
          position: absolute;
          left: 0;
          bottom: 1px;
          z-index: 1;
          transition: transform .3s ease-in-out;
          transform-origin: 0 0;
        }
        .ivu-tabs-nav .ivu-tabs-tab-active {
          color: red;
        }
      }

      .activity-all {
        width: 90%;
        margin: auto;
        display: flex;
        flex-warp:warp;
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        .tier-box {
          width: 100%;
          position: relative;
          margin-bottom: 10px;
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
              }
              .tier-right {
                width: 100px;
                height: 30px;
                line-height: 30px;
                background-color: red;
                color: #fff;
                float: left;
                margin-left: 20px;
              }
            }
          }
        }
        .ivu-card-bordered {
          margin-left: 2%;
          .activity-all-left {
            float: left;
            font-weight: 500;
          }
          .activity-all-right{
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
          .introduce{
            color: rgb(153, 153, 153);
            text-align: left;
            margin-top: 10px;
            border-bottom: 1px solid #eee;
          }
          .activity-all-bottom {
            margin-top: 20px;
            p {
              font-weight: 400;
              font-size: 12px;
              color: rgb(153, 153, 153);
            }
          }

        }
      }
      .more {
        display: block;
        width: 264px;
        height: 40px;
        line-height: 40px;
        margin: 50px auto;
        color: #fff;
        background-color: rgba(240, 128, 119, 1);
        -webkit-border-radius: 20px;
        -moz-border-radius: 20px;
        border-radius: 20px;
      }
    }

  }
  .zj-home-activity-modal {
    .ivu-modal-footer {
      border-top: none;
    }
    .form-modal-footer {
      padding: 30px 0;
      .ivu-btn {
        padding: 0 25px;
        height: 36px;
        font-size: 14px;
      }
    }

  }
</style>
