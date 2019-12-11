//混入通用设置
//翻页相关 
import { getAction, putAction, postAction } from "@/api/manage";
import moment from "moment";

const mixinPage = {
  data() {
    return {
      //此处parkId便于修改
      parkId: "1193719771573518336",
      pageNo: 1,
      pageSize: 10,
      pageTotal: 10,
      spinShow: false,
      newsListHot:[]
    }
  },
  // computed: {
  // },
  created() {
    this.loadData();
  },
  methods: {
    //具体请求在对应页面内
    //表格内容
    pageCurrentFun(i) {
      this.pageNo = i;
      this.loadData();
    },
    pageSizeFun(i) {
      this.pageSize = i;
      this.loadData();
    },
    //热门资讯列表获取
    getDataHot() {
      return new Promise((resolve, reject) => {
        let { isPublic, pageNo, pageSize, parkId } = this;
        getAction("/park.service/mgrNewsInfo/list", {
          isPublic,
          pageNo:1,
          pageSize:5,
          parkId,
          type: '4'
        })
          .then(res => {
            // console.log(this.$route.params.id);
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
    loadDataHot() {
      this.getDataHot().then(data => {
        //根据富文本内容获取摘要
        for (const item of data.records) {
          item.publishTime = moment(item.publishTime).format("MM-DD HH:mm");
          //在富文本内容很大的情况下，性能应该会很低下
          item.text = item.context;
          item.text = item.text.replace(/<\/?.+?>/g, "");
          item.text = item.text.replace(/&nbsp;/g, "");
          item.text = item.text.slice(0, 180) + "......";
          item.text = item.text.trim();
        }
        this.newsListHot = data.records;
      });
    }
  }
}


export {
  mixinPage
}