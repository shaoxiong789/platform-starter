<template>
<div>
  <el-tabs type="border-card" v-loading.body="loading">
        <el-tab-pane label="同步素材" >
        <input type="button"
                class="el-button el-button--primary el-button--small"
                v-bind:disabled="false"
                value="同步"
                @click="sync"  style=""/>
            总数为{{this.countList.news_count}}条数据
            {{pc}}%
            <el-progress type="circle" :percentage="pc"></el-progress>
            <div class="pagination" style="">
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
        pc:0,
        currentPage: 1,
        pageSize:20,
        total:0,
        loading:true,
        countList:0,
        loading:false
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
            this.loading = true;
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
                    console.log(this.pageSize,this.total)
                    this.pc = this.pc + parseInt(this.pageSize/this.total)*100;
                    this.loading = false;
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
