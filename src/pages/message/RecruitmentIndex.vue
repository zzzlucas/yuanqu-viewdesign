<template>
  <div class="zj-recruitment-index">
    <Breadcrumb class="breadcrumb-box" separator=">">
      <BreadcrumbItem to="/">首页</BreadcrumbItem>
      <BreadcrumbItem to="/components/breadcrumb">人才招聘</BreadcrumbItem>
    </Breadcrumb>
    <h1 class="zj-recruitment-title">人才招聘</h1>
    <div class="zj-recruitment-search">
      <ul>
        <span class="title">薪资：</span>
        <li v-for="(salary,index) in salaryList" @click="salaryClass(index)" v-bind:class="{
         ischeck:index==salaryCurrent}">
          {{salary.title}}
        </li>
      </ul>
      <ul>
        <span class="title">经验：</span>
        <li v-for="(experience,index) in experienceList" @click="experienceClass(index)" v-bind:class="{
         ischeck:index==experienceCurrent}">
          {{experience.title}}
        </li>
      </ul>
      <ul>
        <span class="title">学历：</span>
        <li v-for="(learn,index) in learnList" @click="learnClass(index)" v-bind:class="{
         ischeck:index==learnCurrent}">
          {{learn.title}}
        </li>
      </ul>
    </div>
    <div class="zj-recruitment-box">
      <Table :columns="table" :data="data"></Table>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'RecruitmentIndex',
  data () {
    return {
      table: [
        {
          title: '序号',
          key: 'id'
        },
        {
          title: '职位名称',
          key: 'name'
        },
        {
          title: '招聘人数',
          key: 'num'
        },
        {
          title: '薪资',
          key: 'salary'
        },
        {
          title: '学历',
          key: 'learn'
        },
        {
          title: '经验',
          key: 'experience'
        },
        {
          title: '预览次数',
          key: 'preview'
        }
      ],
      data: [
        {
          id: '1',
          name: 'IT技术员',
          num: '18',
          salary: '8000-20000',
          learn: '本科以上',
          experience: '2年以上',
          preview: 200
        },
        {
          id: 2,
          name: 'IT技术员',
          num: '18',
          salary: '8000-20000',
          learn: '本科以上',
          experience: '2年以上',
          preview: 200
        },
        {
          id: 3,
          name: 'IT技术员',
          num: '18',
          salary: '8000-20000',
          learn: '本科以上',
          experience: '2年以上',
          preview: 200
        },
        {
          id: 4,
          name: 'IT技术员',
          num: '18',
          salary: '8000-20000',
          learn: '本科以上',
          experience: '2年以上',
          preview: 200
        },
        {
          id: 5,
          name: 'IT技术员',
          num: '18',
          salary: '8000-20000',
          learn: '本科以上',
          experience: '2年以上',
          preview: 200
        }
      ],
      salaryCurrent: 0,
      salaryList: [
        {title: '不限'},
        {title: '6K-8K'},
        {title: '9K-10K'},
        {title: '10K-15K'},
        {title: '20K以上'}
      ],
      experienceCurrent: 0,
      experienceList: [
        {title: '不限'},
        {title: '1年以下'},
        {title: '1-2年'},
        {title: '2-3年'},
        {title: '3年以上'},
      ],
      learnCurrent: 0,
      learnList: [
        {title: '不限'},
        {title: '博士'},
        {title: '硕士'},
        {title: '本科'},
        {title: '大专'},
      ]
    }
  },

  methods: {
    salaryClass (index) {
      this.salaryCurrent = index
    },
    experienceClass (index) {
      this.experienceCurrent = index
    },
    learnClass (index) {
      this.learnCurrent = index
    }
  }
}
</script>

<style lang="less">
  .zj-recruitment-index {
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
          padding: 0 25px;
          height: 30px;
          line-height: 30px;
          list-style-type:none;
          cursor: pointer;
          text-align: center;
          margin-left: 50px;

        }
        .ischeck {
          background-color: #C40005;
          color: #fff;

        }
      }
    }
    .zj-recruitment-box {
      margin: 10px 30px;

    }
  }
</style>
