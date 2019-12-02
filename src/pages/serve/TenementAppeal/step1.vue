<template>
  <div class="tenement-appeal-step1">
    <h1 class="title">物业报修</h1>
    <div class="schedule">
      <Steps :current="1" status="error">
        <Step title="填写投诉单"></Step>
        <Step title="投诉成功"></Step>
      </Steps>
    </div>
    <div class="tenement-appeal-form">
      <p class="title">基本信息</p>
      <div class="tenement-appeal-form-body">
        <div class="form-box">
          <p class=""><span class="must">* </span> 自用部分：</p>
          <div class="form-radio">
            <Select v-model="form.type">
              <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 投诉描述：</p>
          <div class="form-radio">
            <Input v-model="form.content" maxlength="300" show-word-limit type="textarea" :rows="5" />
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
    <div class="tenement-appeal-form">
      <p class="title">联系信息</p>
      <div class="tenement-appeal-form-body">
        <div class="form-box">
          <p class=""><span class="must">*</span>联系人：</p>
          <div class="form-radio">
            <Input v-model="form.contactName" />
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
        <div class="form-box">
          <p class=""><span class="must">*</span>联系地址：</p>
          <div class="form-radio">
            <Input v-model="form.relationSite" />
          </div>
        </div>
        <Button type="error" class="next-btn" @click="next">提交</Button>
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
        type: 0,
        content: '',
        site: '',
        contactName: '',
        company: '',
        email: '',
        phone: ''
      },
      typeList: [
        {label: '房屋管理类', value: '0'},
        {label: '物业收费类', value: '1'},
        {label: '设备设施类', value: '2'},
        {label: '安全管理类', value: '3'},
        {label: '环境管理类', value: '4'},
        {label: '物业服务类', value: '5'},
        {label: '业户纠纷类', value: '6'},
        {label: '其它', value: '7'}
      ],
      defaultList: [
      ],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    next () {
      this.$router.push({name: 'TenementAppealStep2'})
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
  .tenement-appeal-step1 {
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

    .tenement-appeal-form {
      text-align: left;
      width: 80%;
      margin: 30px auto 0;
      .title {
        color: #797979;
        font-weight: 500;
      }
      .tenement-appeal-form-body {
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
