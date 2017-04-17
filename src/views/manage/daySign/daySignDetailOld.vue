<template>
  <div class="comm-wrap">
    <el-button type="text"
               size="mini"
               @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回日历</el-button>
    <div class="day-info">
      {{day}}
    </div>
    <h2> 友情提示：日期已过，下边为2张该日期当天的日签</h2>
  
    <div v-if="show">
      <div class="img-item"
           v-for="item in imgList">
        <span v-text="item.name"></span>
        <img :src="item.url"
             alt=""
             width="320"
             height="400">
      </div>
    </div>
    <div v-else>
      <span class="msg">抱歉该系统启用前无数据</span>
    </div>
  
  </div>
</template>
<script>
import moment from 'moment';

export default {
  data() {
    return {
      day: "",
      show: true,
      imgList: [{
        name: "早上日签",
        url: "https://static.oschina.net/uploads/img/201703/27102256_ieZX.png"
      }, {
        name: "晚上日签",
        url: "https://static.oschina.net/uploads/img/201703/27102256_ieZX.png"
      }]
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.getData();
    });
  },
  methods: {
    getData() {
      // this.day = JSON.stringify(this.$route.query.day);
      // this.day = moment(this.$route.query.day).format("YYYY-MM-DD");
      this.day = "选择日期为： "+moment(this.$route.query.day).format("YYYY-MM-DD")
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>
<style  scoped>
.img-item {
  display: inline-block;
  text-align: center;
  margin-right:10px;  
}

.img-item img {
  display: block;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,0.1);
}
.img-item span{
  font-size:16px;
  line-height: 30px;
  display: inline-block;
}
</style>