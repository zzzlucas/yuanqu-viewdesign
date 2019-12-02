<template>
  <div class="parking-apply-step1">
    <h1 class="title">填写停车位申请单</h1>
    <div class="schedule">
      <Steps :current="1" status="error">
        <Step title="填写停车位申请单"></Step>
        <Step title="提交成功"></Step>
      </Steps>
    </div>
    <div class="parking-apply-form">
      <p class="title">基本信息</p>
      <div class="parking-apply-form-body">
        <div class="form-box">
          <p class=""><span class="must">* </span> 使用开始时间：</p>
          <div class="form-radio">
            <DatePicker type="date" style="width: 100%"></DatePicker>
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">* </span> 使用结束时间：</p>
          <div class="form-radio">
            <DatePicker type="date" style="width: 100%"></DatePicker>
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 需求描述:：</p>
          <div class="form-radio">
            <Input v-model="form.describe" maxlength="300" show-word-limit type="textarea" :rows="5" />
          </div>
        </div>

      </div>
    </div>
    <div class="parking-apply-form">
      <p class="title">联系信息</p>
      <div class="parking-apply-form-body">
        <div class="form-box">
          <p class=""><span class="must">*</span>联系人：</p>
          <div class="form-radio">
            <Input v-model="form.name" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span>公司/企业：</p>
          <div class="form-radio">
            <Input v-model="form.company" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span>联系邮箱：</p>
          <div class="form-radio">
            <Input v-model="form.email" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span>手机号码：</p>
          <div class="form-radio">
            <Input v-model="form.phone" />
          </div>
        </div>
        <Button type="error" class="next-btn" @click="next">下一步</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TenementAppealStep1',
  data () {
    return {
      form: {
        startDate: 0,
        endDate: 0,
        public: 0,
        describe: '',
        name: '',
        company: '',
        email: '',
        phone: ''
      },
    }
  },
  methods: {
    next () {
      this.$router.push({name: 'ParkingApplyStep2'})
    },
  }
}
</script>

<style lang="less">
  .parking-apply-step1 {
    margin: 100px auto;
    width: 95%;
    .title {
      text-align: left;
      font-size: 18px;
      border-bottom: 1px solid #eee;
      padding-bottom: 20px;
    }
    .schedule {
      width: 60%;
      margin: 30px auto 0;
      .ivu-steps-item {
        text-align: left;
        .ivu-steps-head-inner {
          border-color: #999999;
          .ivu-steps-icon {
            color: #999999;
          }
        }
      }
    }

    .parking-apply-form {
      text-align: left;
      width: 80%;
      margin: 30px auto 0;
      .title {
        color: #797979;
        font-weight: 500;
      }
      .parking-apply-form-body {
        width: 60%;
        margin: 30px auto 0;
        .form-box {
          margin-top: 30px;
          .form-radio {
            margin-top: 20px;
            .zj-radio {
              color: #999999;
            }
          }
          .must {
            color: red;
          }
        }
        .next-btn {
          margin-top: 30px;
          padding: 0 30px;
          height: 38px;
          line-height: 38px;
        }

      }
    }
  }

</style>
