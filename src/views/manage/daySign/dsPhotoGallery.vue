<template>
    <!-- 图片库管理-->
    <div class="comm-wrap">
     <el-tabs type="border-card">
        <el-tab-pane label="图片库管理">
            <ul>
                <li v-for="item in ImagesList" >
                    <input type="button" @click="deleteImage" value="删除">
                    <span>ID:{{item._id}}</span>
                    <!--<img alt="" :src="imgBaseURl+item._id+'.png'" width="64" height="50">-->
                </li>
            </ul> 



        </el-tab-pane>

        <div class="pagination">
                <el-pagination @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="total">
                </el-pagination>
            </div>
    </el-tabs>   

    </div>
</template>

<script>
import axios from 'axios';
  export default {
    data() {
      return {
        imgBaseURl:" http://oo8xbcend.bkt.clouddn.com/",
        dateNow:'',
        ImagesList:[],
        currentPage: 1,
        pageSize:10,
        total:100
        
      };
    },
    mounted:function(){
        this.$nextTick(function(){
            this.init();
            this.dateNow = new Date(); //分上午还是下午
        })
    },
    methods: {
        init:function(){
            this.page();
        },
        page(){
            var vm = this;
            //查询上传的背景图情况
            axios.get('api/imager/list', {
                params: {
                    currentPage: this.currentPage,
                    pageSize:this.pageSize
                }
            })
            .then(function (response) {
                // console.log(response);
                if(response.data.code == 1){
                     vm.ImagesList = response.data.result.content;
                     vm.total = response.data.result.page.total;
                }
               
            })
            .catch(function (error) {
                // console.log(error);
            });
            
        },
        handleSizeChange(val) {
          //console.log(`每页 ${val} 条`);
           this.page();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            // console.log(`当前页: ${val}`);
            this.page();
        },
        deleteImage(_pathname){
            axios.post('api/imager/remove', {
                params: {
                    pathname: _pathname
                }
            })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        }
      
    }
  }
</script>
<style>
.comm-wrap{
    padding:20px 0;
}
 .upload{
     width:500px;
     margin:30px 0;
 }
</style>