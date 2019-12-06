<template>
  <div class="rubbish-disposition-step1">
    <h1 class="title">新建租赁项目申请</h1>
    <div class="schedule">
      <Steps :current="0" status="error">
        <Step title="新建租赁项目申请"></Step>
        <Step title="新建租赁项目申请(租赁)成功"></Step>
      </Steps>
    </div>
    <Form ref="form" :model="form">
      <!-- :rules="ruleValidate" :label-width="80" -->
      <div class="rubbish-disposition-form">
        <p class="title">项目基本情况</p>
        <div class="rubbish-disposition-form-body">
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <FormItem label="填报单位：" prop="fillUnit">
                  <Input v-model="form.fillUnit" />
                </FormItem>
              </Col>
              <Col span="12">
                <FormItem label="填报日期：" prop="reportTime">
                  <DatePicker v-model="form.reportTime" type="date" style="width: 100%"></DatePicker>
                </FormItem>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <FormItem label="项目名称：" prop="projectName">
              <Input v-model="form.projectName" />
            </FormItem>
          </div>

          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 产品名称：
                </p>
                <div class="form-radio">
                  <Input v-model="form.mainProduct" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 行业类别：
                </p>
                <div class="form-radio">
                  <Select v-model="form.industrySectorValue">
                    <Option
                      v-for="(item, key) in dict.industrySectorValueExt"
                      :value="item.value"
                      :key="key"
                    >{{ item.text }}</Option>
                  </Select>
                </div>
              </Col>
            </Row>
          </div>

          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 建设地址：
                </p>
                <div class="form-radio">
                  <Input v-model="form.getLandBuildingAddress" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 所属主体：
                </p>
                <div class="form-radio">
                  <Input v-model="form.belongSubject" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 法人代表：
                </p>
                <div class="form-radio">
                  <Input v-model="form.legalPerson" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 联系电话（法人）：
                </p>
                <div class="form-radio">
                  <Input v-model="form.legalTel" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 经办人：
                </p>
                <div class="form-radio">
                  <Input v-model="form.agentPerson" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span>联系电话（经办人）：
                </p>
                <div class="form-radio">
                  <Input v-model="form.agentTel" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <p class>
              <span class="must">*</span> 公司概况：
            </p>
            <div class="form-radio">
              <Input v-model="form.companyDescription" type="textarea" :rows="5" />
            </div>
          </div>
          <div class="form-box">
            <p class>
              <span class="must">*</span> 团队成员情况：
            </p>
            <div class="form-radio">
              <Input v-model="form.teamMemberDescription" type="textarea" :rows="5" />
            </div>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 年产值(万元)：
                </p>
                <div class="form-radio">
                  <Input v-model="form.annualProductionValue" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span>年税金(万元)：
                </p>
                <div class="form-radio">
                  <Input v-model="form.annualTaxes" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 投资主体：
                </p>
                <div class="form-radio">
                  <Select v-model="form.investorValue">
                    <Option
                      v-for="(item, key) in dict.investorValueExt"
                      :value="item.value"
                      :key="key"
                    >{{ item.text }}</Option>
                  </Select>
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 是否人才项目：
                </p>
                <div class="form-radio">
                  <RadioGroup v-model="form.isTalents">
                    <Radio label="1">
                      <span>是</span>
                    </Radio>
                    <Radio label="0">
                      <span>否</span>
                    </Radio>
                  </RadioGroup>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      <div class="rubbish-disposition-form">
        <p class="title">投资情况</p>
        <div class="rubbish-disposition-form-body">
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 总投资（万元）：
                </p>
                <div class="form-radio">
                  <Input v-model="form.totalInvestment" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 注册资本(万元)：
                </p>
                <div class="form-radio">
                  <Input v-model="form.registeredCapital2" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 是否外资：
                </p>
                <div class="form-radio">
                  <RadioGroup v-model="form.isForeign">
                    <Radio label="1">
                      <span>是</span>
                    </Radio>
                    <Radio label="0">
                      <span>否</span>
                    </Radio>
                  </RadioGroup>
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 注册资本(万元)：
                </p>
                <div class="form-radio">
                  <Input v-model="form.registeredCapital" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 是否外资：
                </p>
                <div class="form-radio">
                  <Input v-model="form.totalInvestment" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 租赁面积（m²）：
                </p>
                <div class="form-radio">
                  <Input v-model="form.area" />
                </div>
              </Col>
            </Row>
          </div>
          <div class="form-box">
            <Row :gutter="36">
              <Col span="12">
                <p class>
                  <span class="must">*</span> 联系邮箱：
                </p>
                <div class="form-radio">
                  <Input v-model="form.email" />
                </div>
              </Col>
              <Col span="12">
                <p class>
                  <span class="must">*</span> 单位面积固定资产投资（万元/平方米）：
                </p>
                <div class="form-radio">
                  <Input v-model="form.industryType" />
                </div>
              </Col>
            </Row>
          </div>

          <div class="form-box">
            <p class>
              <span class="must">*</span>附件：
            </p>
            <div class="form-radio">
              <div class="demo-upload-list" v-for="(item, key) in uploadList" :key="key">
                <template v-if="item.status === 'finished'">
                  <img :src="item.url" />
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
                style="display: inline-block;width:100px;"
              >
                <div style="width: 100px;height:100px;line-height: 100px;">
                  <Icon type="ios-camera" size="20"></Icon>
                </div>
              </Upload>
              <Modal title="View Image" v-model="visible">
                <img
                  :src="'https://o5wwk8baw.qnssl.com/' + imgName + '/large'"
                  v-if="visible"
                  style="width: 100%"
                />
              </Modal>
            </div>
            <div class="form-box">
              <p>
                注意：请先下载需要的表格，
                <span style="color: red;">填写完毕并进行盖章后以图片或pdf形式进行上传。</span>
              </p>
            </div>
            <div class="form-box">
              <p>
                表格下载链接：
                <span style="color: red;">建筑垃圾处置申请备案表.docx</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Form>
    <div style>
      <Button type="default" class="next-btn" @click="handleSubmitStaging">暂存</Button>
      <Button type="error" class="next-btn" @click="handleSubmit">提交</Button>
    </div>
  </div>
</template>

<script>
import { getAction, putAction, postAction } from "@/api/manage";
import qs from "querystring";
import moment from "moment";
import { initDictOptions } from "@/api/dict";

export default {
  name: "RubbishDispositionStep1",
  data() {
    return {
      form: {
        unit: "",
        projectName: "",
        productName: "",
        industryType: "",
        architecture: "",
        subject: "",
        legalPerson: "",
        legalPersonPhone: "",
        agent: "",
        agentPhone: "",
        survey: "",
        membersSituation: "",
        annualOutputValue: "",
        tax: "",
        investmentSubject: "",
        totalInvestment: "",
        totalInvestment2: "",
        registeredCapital: "",
        isTalents: "",
        isForeign: "",
        registeredCapital2: "",
        email: ""
      },
      investmentSubjectList: [
        { label: "500强企业", value: 0 },
        { label: "大型央企，国企", value: 1 },
        { label: "优质民资企业", value: 2 },
        { label: "优质外贸企业", value: 3 }
      ],
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: [],
      dict: {}
    };
  },
  created() {
    initDictOptions("industrySectorValue").then(res => {
      if (res.code === 0 && res.success) {
        this.dict.industrySectorValueExt = res.result;
        console.log(this.dict.industrySectorValueExt);
      }
    });
    //原先的投资主体
    initDictOptions("investor_value").then(res => {
      if (res.code === 0 && res.success) {
        this.dict.investorValueExt = res.result;
        console.log(this.dict.investorValueExt);
      }
    });
  },
  methods: {
    handleSubmit(form) {
      this.$refs.form.validate(valid => {
        if (valid) {
          //直接获取form现有数据
          let formData = this.form;
          //处理时间格式
          formData.reportTime = formData.reportTime
            ? moment(formData.reportTime).format("YYYY-MM-DD")
            : null;
          //便于提交表单的临时设置
          formData.parkId = "1193719771573518336";
          formData.projectName = "前台数据" + formData.projectName;
          formData = qs.stringify(formData);
          postAction(
            "/park.project/mgrProjectInfo/addProjectLease",
            formData
          ).then(res => {
            if (res.code === 200 && res.success) {
              this.$Message.success("表单提交成功！");
            } else {
              this.$Message.error("表单提交失败！");
            }
          });
        }
      });
    },
    //暂存，区别是
    handleSubmitStaging() {
      //具备该字段的情况下，表单内容会被认为暂不生效
      this.form.stage = 1;
      this.handleSubmit(form);
    },
    handleOK() {
      return new Promise((resolve, reject) => {
        console.log("handleOK");
        // let { keyword, parkId, pageNo, pageSize } = this;
        this.form.validate(err => {
          console.log("err");
          console.log(err);
          // if (!err) {
          //   console.log("values");
          //   console.log(values);
          // }
        });
        let formData = {};

        postAction("/park.project/mgrProjectInfo/addProjectLease", formData)
          .then(res => {
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
    //来自首页
    getData(status) {
      return new Promise((resolve, reject) => {
        let { keyword, parkId, pageNo, pageSize } = this;
        getAction("/park.service/mgrActivityInfo/list", {
          keyword,
          parkId,
          pageNo,
          pageSize,
          status
        })
          .then(res => {
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
    next() {
      this.$router.push({ name: "RubbishDispositionStep2" });
    },
    handleView(name) {
      this.imgName = name;
      this.visible = true;
    },
    handleRemove(file) {
      const fileList = this.$refs.upload.fileList;
      this.$refs.upload.fileList.splice(fileList.indexOf(file), 1);
    },
    handleSuccess(res, file) {
      file.url =
        "https://o5wwk8baw.qnssl.com/7eb99afb9d5f317c912f08b5212fd69a/avatar";
      file.name = "7eb99afb9d5f317c912f08b5212fd69a";
    },
    handleFormatError(file) {
      this.$Notice.warning({
        title: "The file format is incorrect",
        desc:
          "File format of " +
          file.name +
          " is incorrect, please select jpg or png."
      });
    },
    handleMaxSize(file) {
      this.$Notice.warning({
        title: "Exceeding file size limit",
        desc: "File  " + file.name + " is too large, no more than 2M."
      });
    },
    handleBeforeUpload() {
      const check = this.uploadList.length < 5;
      if (!check) {
        this.$Notice.warning({
          title: "Up to five pictures can be uploaded."
        });
      }
      return check;
    }
  }
};
</script>

<style lang="less">
.rubbish-disposition-step1 {
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

  .rubbish-disposition-form {
    text-align: left;
    width: 80%;
    margin: 30px auto 0;

    .title {
      color: #797979;
      font-weight: 500;
    }

    .rubbish-disposition-form-body {
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
