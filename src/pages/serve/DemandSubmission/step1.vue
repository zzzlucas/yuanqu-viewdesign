<template>
  <div class="demand-submission-step1">
    <h1 class="title">物业报修</h1>
    <div class="schedule">
      <Steps :current="0" status="error">
        <Step title="填写需求提报单"></Step>
        <Step title="申请成功"></Step>
      </Steps>
    </div>
    <div class="demand-submission-form">
      <p class="title">基本信息</p>
      <div class="demand-submission-form-body">
        <div class="form-box">
          <p class=""><span class="must">* </span> 投诉类型：</p>
          <div class="form-radio">
            <Input v-model="form.type" disabled />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 需求描述：</p>
          <div class="form-radio">
            <Input v-model="form.text" maxlength="300" show-word-limit type="textarea" :rows="5" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span>附件：</p>
          <div class="form-radio">
            <div class="demo-upload-list" v-for="(item, key) in uploadList" :key="key">
              <template v-if="item.status === 'finished'">
                <img :src="item.url">
                <div class="demo-upload-list-cover">
                  <Icon type="ios-eye-outline" @click.native="handleView(item.name)"></Icon>
                  <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
                </div>
              </template>
              <template v-else>
                <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
              </template>
            </div>
            <Upload
              ref="upload"
              :show-upload-list="false"
              :default-file-list="defaultList"
              :on-success="handleSuccess"
              :format="['jpg','jpeg','png']"
              :max-size="2048"
              :on-format-error="handleFormatError"
              :on-exceeded-size="handleMaxSize"
              :before-upload="handleBeforeUpload"
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
              style="display: inline-block;width:100px;">
              <div style="width: 100px;height:100px;line-height: 100px;">
                <Icon type="ios-camera" size="20"></Icon>
              </div>
            </Upload>
            <Modal title="View Image" v-model="visible">
              <img :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'" v-if="visible" style="width: 100%">
            </Modal>
          </div>
        </div>
      </div>
    </div>
    <div class="demand-submission-form">
      <p class="title">联系信息</p>
      <div class="demand-submission-form-body">
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
        oneself: 0,
        public: 0,
        describe: '',
        type: '房屋管理类',
        site: '',
        name: '',
        company: '',
        email: '',
        phone: ''
      },
      defaultList: [
      ],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    next () {
      this.$router.push({name: 'DemandSubmissionStep2'})
    },
    handleView (name) {
      this.imgName = name
      this.visible = true
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar'
      file.name = '7eb99afb9d5f317c912f08b5212fd69a'
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      })
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        })
      }
      return check
    }
  }
}
</script>

<style lang="less">
  .demand-submission-step1 {
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

    .demand-submission-form {
      text-align: left;
      width: 80%;
      margin: 30px auto 0;
      .title {
        color: #797979;
        font-weight: 500;
      }
      .demand-submission-form-body {
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
