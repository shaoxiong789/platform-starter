<template>
  <div class="comm-wrap">
    <el-button type="text"
               size="mini"
               @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回日历</el-button>
    <div class="day-info">
      {{day}}
    </div>
    <h1>过期无法修改 只显示结果图2张</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      day: ""
    }
  },
  mounted() {
    this.$nextTick(function () {
      this.getData();
    });
  },
  methods: {
    getData() {
      this.day = JSON.stringify(this.$route.query.day);
    },
    goBack() {
      this.$router.go(-1);
    },
  }
}
</script>