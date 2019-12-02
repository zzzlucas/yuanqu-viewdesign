<template>
  <div class="urban-road-step1">
    <h1 class="title">临时占用城市道路备案申请</h1>
    <div class="schedule">
      <Steps :current="0" status="error">
        <Step title="临时占用城市道路备案申请"></Step>
        <Step title="申请成功"></Step>
      </Steps>
    </div>
    <div class="urban-road-form">
      <p class="title">基本信息</p>
      <div class="urban-road-form-body">
        <div class="form-box">
          <p class=""><span class="must">* </span> 企业名称：</p>
          <div class="form-radio">
            <Input v-model="form.enterpriseName" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 经办人：</p>
          <div class="form-radio">
            <Input v-model="form.agent" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 联系方式：</p>
          <div class="form-radio">
            <Input v-model="form.phone" />
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span> 项目名称：</p>
          <div class="form-radio">
            <Input v-model="form.name" />
          </div>
        </div>
        <div class="form-box">
          <p class="">
            <span class="must">*</span> 申请挖掘或占用期限：</p>
          <div class="form-radio"><Row>
            <Col span="11"><DatePicker type="date" style="width: 100%"></DatePicker></Col>
            <Col span="2" style="text-align: center;line-height: 32px;">至</Col>
            <Col span="11"><DatePicker type="date" style="width: 100%"></DatePicker></Col>
          </Row>
          </div>
        </div>
        <div class="form-box">
          <p class=""><span class="must">*</span>附件：</p>
          <div class="form-radio">
            <div class="demo-upload-list" v-for="item in uploadList">
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
            <div class="form-box">
              <p>注意：请先下载需要的表格，<span style="color: red;">填写完毕并进行盖章后以图片或pdf形式进行上传。</span></p>
            </div>
            <div class="form-box">
              <p>表格下载链接：<span style="color: red;">建筑垃圾处置申请备案表.docx</span></p>
            </div>
            <Button type="default" class="next-btn" @click="next">暂存</Button>
            <Button type="error" class="next-btn" @click="next">提交</Button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UrbanRoadStep1',
  data() {
    return {
      form: {
        enterpriseName: '',
        agent: '',
        phone: '',
        name: '',
      },
      defaultList: [
      ],
      imgName: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    next() {
      this.$router.push({name: 'UrbanRoadStep2'})
    },
    handleView (name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove (file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess (res, file) {
      file.url = 'https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar';
      file.name = '7eb99afb9d5f317c912f08b5212fd69a';
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: 'The file format is incorrect',
        desc: 'File format of ' + file.name + ' is incorrect, please select jpg or png.'
      });
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: 'Exceeding file size limit',
        desc: 'File  ' + file.name + ' is too large, no more than 2M.'
      });
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: 'Up to five pictures can be uploaded.'
        });
      }
      return check;
    }
  }
}
</script>

<style lang="less">
  .urban-road-step1 {
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

    .urban-road-form {
      text-align: left;
      width: 80%;
      margin: 30px auto 0;
      .title {
        color: #797979;
        font-weight: 500;
      }
      .urban-road-form-body {
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
