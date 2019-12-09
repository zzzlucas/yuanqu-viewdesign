<template>
  <div class="meeting-room-1209">
    <Breadcrumb class="breadcrumb-box" separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">会议室预订</BreadcrumbItem>
    </Breadcrumb>
    <div class="recruit-body">
      <h1 class="zj-recruitment-title">会议室预订</h1>
      <div class="zj-recruitment-search">
        <ul>
          <span class="title">容纳人数：</span>
          <li
            v-for="(capacity, index) in dict.meetingRoomCapacity"
            :key="index"
            :class="{ischeck: index === capacityCurrent}"
            @click="capacityClass(index)"
          >{{capacity.title}}</li>
        </ul>
        <ul>
          <span class="title">设备提供：</span>
          <li
            v-for="(device, index) in dict.meetingRoomDevice"
            :key="index"
            :class="{ischeck: index === deviceCurrent}"
            @click="deviceClass(index)"
          >{{device.title}}</li>
        </ul>
      </div>
      <div class="zj-recruitment-box">
        <Table :columns="table" :data="data" @on-row-click="goDetail">
          <!-- table start -->
          <template slot-scope="{ row, index }" slot="roomName">
            <div class="room-block-left">
              <img :src="getRoomPreview(row.addDocFiles)" alt v-if="row.addDocFiles" />
              <Icon type="ios-image-outline" v-else />
            </div>
            <div class="room-block-right">
              <p class="title">{{ row.roomName }}</p>
              <span>详细位置：{{ row.address }}</span>
            </div>
          </template>
          <template slot-scope="{ row, index }" slot="maxCapacity">
            <div>容纳人数</div>
            <span>{{ row.maxCapacity }}人</span>
          </template>
          <template slot-scope="{ row, index }" slot="contactTel">
            <div>联系方式</div>
            <span>{{ row.contactPerson }}/{{ row.contactTel }}</span>
          </template>
          <template slot-scope="{ row, index }" slot="deviceGroupId">
            <div>标准配置</div>
            <span>{{ row.roomDevices }}</span>
          </template>
          <template slot-scope="{ row, index }" slot="chargingArea">
            <div>占地面积</div>
            <span>{{ row.chargingArea }}m²</span>
          </template>
          <template slot-scope="{ row, index }" slot="action">
            <!-- <Button @click.stop="handleCheck(index)">预定</Button> -->
            <a @click.stop="handleCheck(row)">预定</a>
          </template>
          <!-- table end -->
        </Table>
        <!-- page -->
        <div class="pageclass">
          <Page
            :total="pageTotal"
            show-elevator
            show-sizer
            @on-change="pageCurrentFun"
            @on-page-size-change="pageSizeFun"
          />
        </div>
      </div>
    </div>
    <Spin size="large" fix v-if="spinShow"></Spin>
    <modal-form ref="ModalForm"></modal-form>
  </div>
</template>

<script>
import { getAction, putAction, postAction } from "@/api/manage";
import moment from "moment";
import { initDictOptions, filterDictText } from "@/api/dict";
import ModalForm from "./ModalForm";
export default {
  name: "RecruitmentIndex",
  components: { ModalForm },
  data() {
    return {
      pageTotal: 10,
      spinShow: false,
      isPublic: "1",
      jobType: "",
      keyword: "",
      pageNo: "1",
      pageSize: "10",
      parkId: "1193719771573518336",
      dict: {
        monthlySalary: "",
        expType: "",
        educationType: ""
      },
      table: [
        // {
        //   title: "序号",
        //   dataIndex: "",
        //   key: "recruitId",
        //   width: 100,
        //   align: "center",
        //   render: (h, params) => {
        //     return h("div", [h("strong", params.index + 1)]);
        //   }
        // },
        {
          title: "名称-位置",
          align: "left",
          width: 360,
          slot: "roomName"
        },
        {
          title: "容纳人数",
          align: "left",
          width: 120,
          slot: "maxCapacity"
        },
        {
          title: "联系方式",
          align: "left",
          slot: "contactTel"
        },
        {
          title: "配置",
          align: "left",
          slot: "deviceGroupId"
        },
        {
          title: "占地面积",
          align: "left",
          width: 120,
          slot: "chargingArea"
        },
        {
          title: "操作",
          align: "left",
          width: 100,
          slot: "action"
        }
      ],
      data: [],
      dict: {
        meetingRoomCapacity: [],
        meetingRoomDevice: []
      },
      capacityCurrent: 0,
      deviceCurrent: 0,
      ary: {
        meetingRoomCapacityAry: [],
        meetingRoomDeviceAry: []
      },
      maxCapacity: 0,
      minCapacity: 0,
      device: []
    };
  },
  created() {
    this.loadData();
    initDictOptions("	meeting_room_capacity").then(res => {
      if (res.code === 0 && res.success) {
        res.result.unshift({
          value: 0,
          text: "不限",
          title: "不限"
        });
        this.dict.meetingRoomCapacity = res.result;
        for (let item of this.dict.meetingRoomCapacity) {
          this.ary.meetingRoomCapacityAry.push(item.value);
        }
        console.log(this.ary.meetingRoomCapacityAry);
      }
    });
    initDictOptions("meeting_room_device").then(res => {
      if (res.code === 0 && res.success) {
        res.result.unshift({
          value: 0,
          text: "不限",
          title: "不限"
        });
        this.dict.meetingRoomDevice = res.result;
        for (let item of this.dict.meetingRoomDevice) {
          this.ary.meetingRoomDeviceAry.push(item.value);
        }
        console.log(this.ary.meetingRoomDeviceAry);
      }
    });
  },
  methods: {
    pageCurrentFun(i) {
      this.pageNo = i;
      this.loadData();
    },
    pageSizeFun(i) {
      this.pageSize = i;
      this.loadData();
    },

    getRoomPreview(files) {
      return files.split(",")[0];
    },
    handleCheck(record) {
      this.$refs.ModalForm.check(record);
    },
    goDetail(info) {
      this.$router.push({
        name: "RecruitmentDetail",
        params: { id: info.recruitId }
      });
    },
    getData(status) {
      return new Promise((resolve, reject) => {
        let {
          maxCapacity,
          minCapacity,
          device,
          pageNo,
          pageSize,
          parkId
        } = this;
        getAction("/park.service/baseMeetingroomInfo/list", {
          maxCapacity,
          minCapacity,
          device,
          pageNo,
          pageSize,
          parkId
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
    loadData() {
      // this.spinShow = true;
      this.getData().then(data => {
        this.data = data.records;
        this.pageTotal = data.total;
        this.spinShow = false;
      });
    },
    capacityClass(index) {
      this.capacityCurrent = index;
      let a = this.ary.meetingRoomCapacityAry[index];
      if (a == 0) {
        this.minCapacity = 0;
        this.maxCapacity = 0;
      } else {
        a = a.split("-");
        this.minCapacity = a[0];
        this.maxCapacity = a[1];
      }
      console.log(this.minCapacity);
      console.log(this.maxCapacity);
      this.loadData();
    },
    deviceClass(index) {
      this.deviceCurrent = index;
      let DEVICE = this.ary.meetingRoomDeviceAry[index];
      //device 是 ids
      //点击添加，再点除去  并且样式跟随
      this.device.push(DEVICE);
      console.log(this.device);
      this.loadData();
    }
  }
};
</script>
<style lang="less">
.meeting-room-1209 {
  .pageclass {
    padding: 20px;
    // margin: 20px;
    .ivu-page {
      float: right;
    }
  }
  thead {
    display: none;
  }
  .ivu-table-row {
    height: 100px;
    .room-block-left {
      height: 40px;
      width: 40px;
      float: left;
      background: #f2f2f2;
      margin-right: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      .ivu-icon {
        font-size: 36px;
      }
    }
    .room-block-right {
      float: left;
    }
    .title {
      font-weight: bold;
      color: #333;
    }
    span {
      color: #999;
    }
    div {
      color: #999;
    }
  }
  .ivu-table th {
    background-color: rgba(242, 242, 242, 0.9);
  }
  .recruit-body {
    padding: 20px;
    width: 1200px;
    margin: 20px auto;
    border: 1px solid rgba(200, 200, 200, 0.5);
    h1 {
      font-weight: normal;
      font-size: 20px;
    }
    h3 {
      font-weight: bold;
      font-size: 14px;
      margin: 20px 0;
    }
  }

  margin-top: 85px;
  text-align: left;
  background-color: #fff;
  .zj-recruitment-title {
    font-size: 18px;
    padding: 0 20px 20px 30px;
  }

  .breadcrumb-box {
    padding: 10px;
    border: 1px solid #eee;
    background-color: #fff;
    margin-bottom: 20px;
  }

  .zj-recruitment-search {
    background-color: #fff;
    border: 1px solid #eee;
    margin-bottom: 20px;

    ul {
      padding: 20px 0 20px 60px;
      display: flex;

      .title {
        margin-right: 30px;
        display: block;
        height: 30px;
        line-height: 30px;
      }

      li {
        padding: 0 15px;
        height: 30px;
        line-height: 30px;
        list-style-type: none;
        cursor: pointer;
        text-align: center;
        margin-left: 50px;
      }

      .ischeck {
        background-color: #c40005;
        color: #fff;
      }
    }
  }
  .zj-recruitment-box {
    margin: 10px 30px;
  }
}
</style>
