<template>
  <div class="rubbish-disposition-step1">
    <h1 class="title">新建技改项目申请</h1>
    <div class="schedule">
      <Steps :current="0" status="error">
        <Step title="新建技改项目申请"></Step>
        <Step title="新建技改项目申请成功"></Step>
      </Steps>
    </div>
    <Form ref="form" :model="form" :rules="ruleValidate">
      <!-- :rules="ruleValidate" :label-width="80" -->
      <div class="rubbish-disposition-form">
        <p class="title">项目基本情况</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="12">
              <FormItem label="项目单位:" prop="fillUnit">
                <Input v-model="form.fillUnit" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="组织机构代码:" prop="creditCode">
                <Input v-model="form.creditCode" />
                <!-- <DatePicker v-model="form.reportTime" type="date" style="width: 100%"></DatePicker> -->
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="单位地址:" prop="unitAddress">
                <Input v-model="form.unitAddress" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="成立年份:" prop="setUpYear">
                <Input v-model="form.setUpYear" />
                <!-- <Select placeholder v-model="form.industrySectorValue">
                  <Option
                    v-for="(item, key) in dict.industrySectorValueExt"
                    :value="item.value"
                    :key="key"
                  >{{ item.text }}</Option>
                </Select>-->
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="企业登记注册类型:" prop="companyRegisterType">
                <Select v-model="form.companyRegisterType" placeholder>
                  <Option
                    v-for="(item, key) in dict.companyRegisterTypeExt"
                    :value="item.value"
                    :key="key"
                  >{{ item.text }}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="注册资金（万元）:" prop="registerMoney">
                <Input v-model="form.registerMoney" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="企业总资产（万元）:" prop="totalAsset">
                <Input v-model="form.totalAsset" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="固定资产净值（万元）:" prop="fixedAsset">
                <Input v-model="form.fixedAsset" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="法人代表:" prop="legalPerson">
                <Input v-model="form.legalPerson" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="联系电话（法人）:" prop="legalTel">
                <Input v-model="form.legalTel" />
              </FormItem>
            </Col>
          </Row>
          <Row :gutter="36">
            <Col span="12">
              <FormItem label="经办人:" prop="agentPerson">
                <Input v-model="form.agentPerson" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="联系电话（经办人）:" prop="agentTel">
                <Input v-model="form.agentTel" />
              </FormItem>
            </Col>
          </Row>
          <FormItem label="电子信箱:" prop="email">
            <Input v-model="form.email" />
          </FormItem>
          <FormItem label="公司概况:" prop="companyDescription">
            <Input v-model="form.companyDescription" type="textarea" :rows="5" />
          </FormItem>
          <FormItem label="团队成员情况:" prop="teamMemberDescription">
            <Input v-model="form.teamMemberDescription" type="textarea" :rows="5" />
          </FormItem>

          <Row :gutter="36">
            <Col span="12">
              <FormItem label="年产值(万元):" prop="annualProductionValue">
                <Input v-model="form.annualProductionValue" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="年税金(万元):" prop="annualTaxes">
                <Input v-model="form.annualTaxes" />
              </FormItem>
            </Col>
          </Row>

          <Row :gutter="36"></Row>
        </div>
      </div>
      <!-- 22222222222222222222222 -->
      <div class="rubbish-disposition-form">
        <p class="title">项目信息</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="24">
              <FormItem label="建设项目名称:" prop="projectName">
                <Input v-model="form.projectName" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="拟建设地址:" prop="getLandBuildingAddress">
                <Input v-model="form.getLandBuildingAddress" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="主要建设内容及规模（生产能力）:" prop="mainBuildingContent">
                <Input type="textarea" :rows="5" v-model="form.mainBuildingContent" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="亩均效绩介（A类、B类、C类、D类）:" prop="areaPerformance">
                <Input type="textarea" :rows="5" v-model="form.areaPerformance" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="主要原料:" prop="mainMaterial">
                <Input v-model="form.mainMaterial" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="消耗量或产出量:" prop="materialCost">
                <Input v-model="form.materialCost" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="主要产品:" prop="mainProduct">
                <Input v-model="form.mainProduct" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="消耗量或产出量:" prop="productOutput">
                <Input v-model="form.productOutput" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="水、电等配套情况:" prop="waterElec">
                <Input type="textarea" :rows="5" v-model="form.waterElec" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="环保、消防等措施:" prop="greenFire">
                <Input type="textarea" :rows="5" v-model="form.greenFire" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="总用地面积（m²）:" prop="allUseArea">
                <Input v-model="form.allUseArea" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="新征用地面积（m²）:" prop="newUseArea">
                <Input v-model="form.newUseArea" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="租赁建设面积（m²）:" prop="rentBuildArea">
                <Input v-model="form.rentBuildArea" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="所属行业:" prop="industrySectorValue">
                <Select v-model="form.industrySectorValue" placeholder>
                  <Option
                    v-for="(item, key) in dict.industrySectorValueExt"
                    :value="item.value"
                    :key="key"
                  >{{ item.text }}</Option>
                </Select>
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="建设起止年限:">
                <DatePicker
                  type="daterange"
                  placement="bottom-end"
                  style="width: 100%"
                  v-model="form.startAndEndDate"
                ></DatePicker>
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="拿地面积（m²）:" prop="gainArea">
                <Input v-model="form.gainArea" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="是否人才项目:" prop="isTalentProject">
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
      <!-- 3333333333333333333333333333333 -->
      <div class="rubbish-disposition-form">
        <p class="title">投资情况</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="12">
              <FormItem label="项目总投资（万元）:" prop="investAmount">
                <Input v-model="form.investAmount" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="其中项目用汇（万美元）:" prop="projectUseInvest">
                <Input v-model="form.projectUseInvest" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label=" 注册资本（万元）:" prop="registerCapital">
                <Input v-model="form.registerCapital" />
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="是否外资:" prop="isForeignCapital">
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
              <FormItem label="固定资产投资（万元）:" prop="fixedAssetInvest">
                <Input v-model="form.fixedAssetInvest" />
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="土建:" prop="civilWork">
                <Input v-model="form.civilWork" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="安装:" prop="install">
                <Input v-model="form.install" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="设备:" prop="device">
                <Input v-model="form.device" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="工程建设其他费用:" prop="projectBuilding">
                <Input v-model="form.projectBuilding" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="预备费:" prop="budget">
                <Input v-model="form.budget" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="建设期利息:" prop="buildingInterest">
                <Input v-model="form.buildingInterest" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="铺底流动资金:" prop="bottomWorkingCapital">
                <Input v-model="form.bottomWorkingCapital" />
              </FormItem>
            </Col>

            <Col span="12">
              <FormItem label="自有资金:" prop="freeCapital">
                <Input v-model="form.freeCapital" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="股票/债券" prop="sharesBond">
                <Input v-model="form.sharesBond" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="银行贷款:" prop="bankLoan">
                <Input v-model="form.bankLoan" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="其他:" prop="otherCapital">
                <Input v-model="form.otherCapital" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="新增销售收入（万元）:" prop="newSale">
                <Input v-model="form.newSale" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="新增利润（万元）:" prop="newProfit">
                <Input v-model="form.newProfit" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="新增税金（万元）:" prop="newTax">
                <Input v-model="form.newTax" />
              </FormItem>
            </Col>
            <Col span="12">
              <FormItem label="创汇（万美元）:" prop="foreignEarning">
                <Input v-model="form.foreignEarning" />
              </FormItem>
            </Col>
          </Row>
        </div>
      </div>
      <div class="rubbish-disposition-form">
        <p class="title">项目用地</p>
        <div class="rubbish-disposition-form-body">
          <Row :gutter="36">
            <Col span="24">
              <FormItem label prop="applyReason">
                <div class="my-input-text">
                  <p class="myinput">
                    1.项目总用地面积
                    <Input v-model="form.totalUseArea" style="width:100px" />平方米；其中：新征用地面积
                    <Input v-model="form.newUseArea" style="width:100px" />平方米。项目利用企业已有土地的，土地证等证书文件编号
                    <Input v-model="form.ownLandNumber" style="width:200px;" />。租赁使用其他企业厂房的，出租房土地证等证书文件编号
                    <Input v-model="form.rentLandNumber" style="width:200px;" />。
                    <br />2.项目原建筑面积
                    <Input v-model="form.originalBuildArea" style="width:100px" />平方米，实施技术改造后建筑面积
                    <Input v-model="form.afterChangeBuildArea" style="width:100px" />平方米。新增建筑面积
                    <Input v-model="form.newBuildArea" style="width:100px" />平方米。实施技术改造是否涉及主体建筑结构改变
                    <Input v-model="form.isChangeBuild" style="width:100px" />（填“是”或“否”）。
                  </p>
                </div>
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="项目申请理由简述:" prop="applyReason">
                <Input type="textarea" :rows="5" v-model="form.applyReason" />
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="项目工艺流程（图示式）及说明:" prop="projectTechnologyFlow">
                <!-- <Input v-model="form.projectTechnologyFlow" /> -->
                <!-- <Editor v-model="form.content"/> -->
              </FormItem>
            </Col>
            <Col span="24">
              <FormItem label="备注:" prop="remark">
                <Input type="textarea" :rows="5" v-model="form.remark" />
              </FormItem>
            </Col>
          </Row>
          <div class="form-box">
            <p class>
              <span class="must">*</span>附件（可上传设备清单等）:
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
import Editor from "@/components/Editor";

export default {
  name: "RubbishDispositionStep1",
  components: [Editor],
  data() {
    return {
      form: {},
      ruleValidate: rules,
      defaultList: [],
      imgName: "",
      visible: false,
      uploadList: [],
      dict: {
        companyRegisterTypeExt: [],
        industrySectorValueExt: []
      },
      editBool: false
    };
  },
  //
  created() {
    initDictOptions("mgr-attr-addpl-companyRegisterType").then(res => {
      if (res.code === 0 && res.success) {
        this.dict.companyRegisterTypeExt = res.result;
        console.log(this.dict.companyRegisterTypeExt);
      }
    });
    initDictOptions("industrySectorValue").then(res => {
      if (res.code === 0 && res.success) {
        this.dict.industrySectorValueExt = res.result;
        console.log(this.dict.industrySectorValueExt);
      }
    });
  },
  methods: {
    handleSubmit() {
      console.log(this.form.startAndEndDate);
      this.$refs.form.validate(valid => {
        if (valid) {
          //直接获取form现有数据
          let formData = this.form;
          //处理时间格式
          formData.buildingBeginDate =
            formData.startAndEndDate[0] != formData.startAndEndDate[1]
              ? moment(formData.startAndEndDate[0]).format("YYYY-MM-DD")
              : null;
          formData.buildingEndDate =
            formData.startAndEndDate[0] != formData.startAndEndDate[1]
              ? moment(formData.startAndEndDate[1]).format("YYYY-MM-DD")
              : null;

          //便于提交表单的临时设置
          formData.parkId = "1193719771573518336";
          //这项设置是长期有效的
          formData.workFlowUseObject = "test";
          if (!this.editBool) {
            formData.projectName = "前台数据" + formData.projectName;
          }
          formData = qs.stringify(formData);
          if (!this.editBool) {
            postAction("/park.project/mgrProjectLand/add", formData).then(
              res => {
                if (res.code === 200 && res.success) {
                  this.$Message.success("表单提交成功！");
                  this.next();
                } else {
                  this.$Message.error("表单提交失败！");
                }
              }
            );
          } else {
            putAction("/park.project/mgrProjectLand/edit", formData).then(
              res => {
                if (res.code === 200 && res.success) {
                  this.$Message.success("表单提交成功！");
                  this.next();
                } else {
                  this.$Message.error("表单提交失败！");
                }
              }
            );
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
      let projectId = "1203185460491321344";
      getAction("/park.project/mgrProjectLand/queryById", {
        id: projectId
      }).then(res => {
        let record = res.result;
        //后端部分数据不能直接获取，在此做处理
        record.startAndEndDate = [
          record.buildingBeginDate,
          record.buildingEndDate
        ];
        this.form = record;
        console.log(this.form);
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
.my-input-text {
}
.ivu-form-item {
  .ivu-radio-group {
    width: 100%;
    // margin-bottom: -2px;
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
