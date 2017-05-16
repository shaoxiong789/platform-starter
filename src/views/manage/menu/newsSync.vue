<template>
<div>
  <el-tabs type="border-card">
        <el-tab-pane label="同步素材" >
        <input type="button"
                class="el-button el-button--primary el-button--small"
                v-bind:disabled="false"
                value="同步"
                @click="sync"  style=""/>
            总数为{{this.countList.news_count}}条数据
            <el-progress type="circle" :percentage="percentage"></el-progress>
            <div class="pagination" style="float:right;display:inline-block;">
                <el-pagination @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="total">
                </el-pagination>
            </div>
        </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
export default {
  data (){
    return {
        percentage:0,
        currentPage: 1,
        pageSize:6,
        total:0,
        loading:true,
        countList:0
    }
  },
  mounted() {
    this.$nextTick(function () {
        this.getCount();
    });
  },
  methods:{
        getCount(){
            axios.get('api/weixin/news/count')
            .then((response) =>{
                console.log(response.data.result);
                if(response.data.code == 1){
                    this.countList = response.data.result;
                    this.total = this.countList.news_count ;
                }
                
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        sync(){
            axios.get('api/weixin/sync/news', {
                params: {
                    currentPage: this.currentPage,
                    pageSize:this.pageSize,
                }
            })
            .then((response) =>{
                console.log(response.data.result);
                if(response.data.code == 1){
                    this.total = response.data.result.total;
                    this.percentage = this.percentage + parseInt(this.pageSize/this.total)*100;
                }
            
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        handleSizeChange(val) {
            //console.log(`每页 ${val} 条`);
            this.sync();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
            this.sync();
        }
    }
}

</script>
<style>

</style>
