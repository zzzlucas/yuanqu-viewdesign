<template>
  <div class="rubbish-disposition-step1">
    <h1 class="title">新建租赁项目申请</h1>
    <div class="schedule">
      <Steps :current="0" status="error">
        <Step title="新建租赁项目申请"></Step>
        <Step title="新建租赁项目申请(租赁)成功"></Step>
      </Steps>
    </div>
    <Form ref="form" :model="form" :rules="ruleValidate">
      <!-- :rules="ruleValidate" :label-width="80" -->
      <div class="rubbish-disposition-form">
        <p class="title">项目基本情况</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="12">
              <FormItem label="填报单位：">
                <Input v-model="form.fillUnit" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="填报日期：" prop="reportTime">
                <DatePicker v-model="form.reportTime" type="date" style="width: 100%"></DatePicker>
              </FormItem>
            </Col>
          </Row>

          <FormItem label="项目名称：" prop="projectName">
            <Input v-model="form.projectName" />
          </FormItem>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="产品名称：" prop="mainProduct">
                <Input v-model="form.mainProduct" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="行业类别：" prop="industrySectorValue">
                <Select placeholder v-model="form.industrySectorValue">
                  <Option
                    v-for="(item, key) in dict.industrySectorValueExt"
                    :value="item.value"
                    :key="key"
                  >{{ item.text }}</Option>
                </Select>
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="建设地址：" prop="getLandBuildingAddress">
                <Input v-model="form.getLandBuildingAddress" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="所属主体：" prop="belongSubject">
                <Input v-model="form.belongSubject" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="法人代表：" prop="legalPerson">
                <Input v-model="form.legalPerson" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="联系电话（法人）：" prop="legalTel">
                <Input v-model="form.legalTel" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="经办人：" prop="agentPerson">
                <Input v-model="form.agentPerson" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="联系电话（经办人）：" prop="agentTel">
                <Input v-model="form.agentTel" />
              </FormItem>
            </Col>
          </Row>
          <FormItem label="公司概况：" prop="companyDescription">
            <Input v-model="form.companyDescription" type="textarea" :rows="5" />
          </FormItem>
          <FormItem label="团队成员情况：" prop="teamMemberDescription">
            <Input v-model="form.teamMemberDescription" type="textarea" :rows="5" />
          </FormItem>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="年产值(万元)：" prop="annualProductionValue">
                <Input v-model="form.annualProductionValue" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="年税金(万元)：" prop="annualTaxes">
                <Input v-model="form.annualTaxes" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="投资主体：" prop="investorValue">
                <Select placeholder v-model="form.investorValue">
                  <Option
                    v-for="(item, key) in dict.investorValueExt"
                    :value="item.value"
                    :key="key"
                  >{{ item.text }}</Option>
                </Select>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="是否人才项目：" prop="isTalentProject">
                <RadioGroup v-model="form.isTalentProject">
                  <Radio label="1">
                    <span>是</span>
                  </Radio>
                  <Radio label="2">
                    <span>否</span>
                  </Radio>
                </RadioGroup>
              </FormItem>
            </Col>
          </Row>
        </div>
      </div>

      <div class="rubbish-disposition-form">
        <p class="title">投资情况</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="12">
              <FormItem label="总投资（万元）:" prop="investAmount">
                <Input v-model="form.investAmount" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="注册资本(万元):" prop="registerCapital">
                <Input v-model="form.registerCapital" />
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="是否外资：" prop="isForeignCapital">
                <RadioGroup v-model="form.isForeignCapital">
                  <Radio label="1">
                    <span>是</span>
                  </Radio>
                  <Radio label="2">
                    <span>否</span>
                  </Radio>
                </RadioGroup>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="租赁面积（m²）：" prop="rentBuildArea">
                <Input v-model="form.rentBuildArea" />
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="联系邮箱：" prop="email">
                <Input v-model="form.email" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="单位面积固定资产投资（万元/m²）：">
                <Input v-model="form.areaFixedInvest" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="设备投资（万元）：">
                <Input v-model="form.deviceInvest" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="其他（万元）：">
                <Input v-model="form.otherInvest" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="建筑占地面积（m²）:">
                <Input v-model="form.buildingArea" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="总建筑面积（m²）:">
                <Input v-model="form.allBuildingArea" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="建筑密度（%）:" prop="buildingDensity">
                <Input v-model="form.buildingDensity" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="容积率（%）:" prop="plotRatio">
                <Input v-model="form.plotRatio" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="单位面积税收（元/m²）:">
                <Input v-model="form.areaTax" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="单位面积产值（元/m²）：">
                <Input v-model="form.areaOutput" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="开竣工日期:">
                <DatePicker
                  type="daterange"
                  placement="bottom-end"
                  style="width: 100%"
                  v-model="form.startAndEndDate"
                ></DatePicker>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="工业增加值（万元）:">
                <Input v-model="form.industryAddedValue" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="全员劳动生产率（%）:" prop="productionRate">
                <Input v-model="form.productionRate" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="万元工业增加值能耗（吨/万元）:">
                <Input v-model="form.addedEnergy" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="项目申请理由简述:">
                <Input type="textarea" v-model="form.applyReason" :rows="5" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="备注:">
                <Input type="textarea" v-model="form.remark" :rows="5" />
              </FormItem>
            </Col>
          </Row>
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
                action="/sys/common/upload"
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
      <Button type="warning" class="next-btn" @click="editMyForm">编辑(获取一张暂存表单)</Button>
    </div>
  </div>
</template>

<script>
import { getAction, putAction, postAction } from "@/api/manage";
import qs from "querystring";
import moment from "moment";
import { initDictOptions } from "@/api/dict";
import rules from "./rules.js";

export default {
  name: "RubbishDispositionStep1",
  data() {
    return {
      form: {},
      ruleValidate: rules,
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: [],
      dict: {
        industrySectorValueExt: [],
        investorValueExt: []
      },
      editBool: false
    };
  },
  //
  created() {
    this.form.reportTime = moment().format("YYYY-MM-DD");
    console.log(this.form.reportTime);
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
    handleSubmit() {
      // console.log(this.form.startAndEndDate);
      this.$refs.form.validate(valid => {
        if (valid) {
          //直接获取form现有数据
          let formData = this.form;
          //处理时间格式
          formData.startDate = formData.startAndEndDate[0]!=formData.startAndEndDate[1]
            ? moment(formData.startAndEndDate[0]).format("YYYY-MM-DD")
            : null;
          formData.endDate = formData.startAndEndDate[0]!=formData.startAndEndDate[1]
            ? moment(formData.startAndEndDate[1]).format("YYYY-MM-DD")
            : null;
          formData.reportTime = formData.reportTime
            ? moment(formData.reportTime).format("YYYY-MM-DD")
            : null;
          //便于提交表单的临时设置
          formData.parkId = "1193719771573518336";
          if (!this.editBool) {
            formData.projectName = "前台数据" + formData.projectName;
          }
          formData = qs.stringify(formData);
          if (!this.editBool) {
            postAction(
              "/park.project/mgrProjectInfo/addProjectLease",
              formData
            ).then(res => {
              if (res.code === 200 && res.success) {
                this.$Message.success("表单提交成功！");
                this.next();
              } else {
                this.$Message.error("表单提交失败！");
              }
            });
          } else {
            putAction(
              "/park.project/mgrProjectInfo/editProject",
              formData
            ).then(res => {
              if (res.code === 200 && res.success) {
                this.$Message.success("表单提交成功！");
                this.next();
              } else {
                this.$Message.error("表单提交失败！");
              }
            });
          }
        } else {
          this.$Message.error("请填写所有必填项！");
        }
      });
    },
    //暂存，区别是
    handleSubmitStaging() {
      //具备该字段的情况下，表单内容会被认为暂不生效
      this.form.stage = 1;
      this.handleSubmit(form);
    },
    //根据拿到的projectId来请求内容并填入表单
    editMyForm(record) {
      this.editBool = true;
      //当前没有数据record传入 ， 写死一个projectId  ,暂存后的编辑只获取此记录
      let projectId = "1202837322177970176";
      getAction("/park.project/mgrProjectInfo/queryProjectById", {
        projectId: projectId
      }).then(res => {
        let record = res.result;
        //后端部分数据不能直接获取，在此做处理
        if (record.mgrProjectCust) {
          record.fillUnit = record.mgrProjectCust.fillUnit;
          record.email = record.mgrProjectCust.email;
          record.setUpYear = record.mgrProjectCust.setUpYear;
          record.totalAsset = record.mgrProjectCust.totalAsset;
          record.legalPerson = record.mgrProjectCust.legalPerson;
          record.legalTel = record.mgrProjectCust.legalTel;
          record.companyDescription = record.mgrProjectCust.companyDescription;
          record.teamMemberDescription =
            record.mgrProjectCust.teamMemberDescription;
          record.reportTime = record.mgrProjectCust.reportTime;
        }
        if (record.mgrProjectInvestLease) {
          record.addDocFiles = record.mgrProjectInvestLease.addDocFiles;
          record.investAmount = record.mgrProjectInvestLease.investAmount;
          record.registerCapital = record.mgrProjectInvestLease.registerCapital;
          record.isForeignCapital =
            record.mgrProjectInvestLease.isForeignCapital;
          record.fixedAssetInvest =
            record.mgrProjectInvestLease.fixedAssetInvest;
          record.areaFixedInvest = record.mgrProjectInvestLease.areaFixedInvest;
          record.deviceInvest = record.mgrProjectInvestLease.deviceInvest;
          record.otherInvest = record.mgrProjectInvestLease.otherInvest;
          record.buildingArea = record.mgrProjectInvestLease.buildingArea;
          record.allBuildingArea = record.mgrProjectInvestLease.allBuildingArea;
          record.buildingDensity = record.mgrProjectInvestLease.buildingDensity;
          record.plotRatio = record.mgrProjectInvestLease.plotRatio;
          record.areaTax = record.mgrProjectInvestLease.areaTax;
          record.areaOutput = record.mgrProjectInvestLease.areaOutput;
          record.industryAddedValue =
            record.mgrProjectInvestLease.industryAddedValue;
          record.productionRate = record.mgrProjectInvestLease.productionRate;
          record.addedEnergy = record.mgrProjectInvestLease.addedEnergy;
          record.remark = record.mgrProjectInvestLease.remark;
          record.startDate = record.mgrProjectInvestLease.startDate;
          record.endDate = record.mgrProjectInvestLease.endDate;
        }
        delete record.mgrProjectCust;
        delete record.mgrProjectInvest;
        delete record.mgrProjectInvestLease;
        record.startAndEndDate = [record.startDate, record.endDate];
        this.form = record;
        console.log(this.form);
      });
    },

    handleOK() {
      return new Promise((resolve, reject) => {
        console.log("handleOK");
        // let { keyword, parkId, pageNo, pageSize } = this;
        this.form.validate(err => {
          console.log("err");
          console.log(err);
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
.ivu-form-item {
  .ivu-radio-group {
    width: 100%;
    margin-bottom: -2px;
    color: #515a6e;
  }
}
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
        p {
          color: #515a6e;
        }
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
