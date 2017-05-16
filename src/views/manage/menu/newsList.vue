  <template>
    <!-- 素材列表-->
    <div class="comm-wrap news-list">
     <el-tabs type="border-card">
        <el-tab-pane label="素材列表" >
            <el-input
                placeholder="请输入标题"
                icon="search"
                v-model="newsTitle"
                :on-icon-click="search()" style="width:400px;display:inline-block;">
            </el-input>
            <div class="pagination" style="float:right;display:inline-block;">
                <el-pagination @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="total">
                </el-pagination>
            </div>
            
            <ul class="News-item-list" v-loading.body="loading">
                <li v-for="item in NewsList" >
                    <input type="radio" @change="select(item)" >选中
                    <span>media_id: {{item.media_id}}</span>
                    <span class="gray">更新于：{{item.update_time| Datefilter}}</span>
                    <dl>
                        <dt><a v-bind:href="item.content.news_item.url" alt="" target="_black">{{item.content.news_item.title}}</a></dt>
                        <dd>
                             <img :src="item.content.news_item.thumb_url" style="height:200px;">
                        </dd>
                        <dd>{{item.content.news_item.digest}}</dd>
                    </dl>
                </li>
            </ul> 



        </el-tab-pane>

        
    </el-tabs>   

    </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';
export default {
    data() {
      return {
        NewsList:[],
        newsTitle:"",
        currentPage: 1,
        pageSize:6,
        total:100,
        loading:true
      };
    },
    mounted:function(){
        this.$nextTick(function(){
            this.init();
        })
    },
    methods: {
        init:function(){
            // this.loadData();
        },
        loadData(){
            // this.loading = true;
            axios.get('api/weixin/news/list', {
                params: {
                    currentPage: this.currentPage,
                    pageSize:this.pageSize,
                    title:this.newsTitle
                }
            })
            .then((response) =>{
                console.log(response.data.result.content);
                if(response.status==200 && response.data.code == 1){
                     this.NewsList = response.data.result.content;
                     this.total = response.data.result.page.total;
                     this.loading = false;
                }
               
            })
            .catch(function (error) {
                // console.log(error);
            });
            
        },
        handleSizeChange(val) {
          //console.log(`每页 ${val} 条`);
           this.loadData();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            // console.log(`当前页: ${val}`);
            this.loadData();
        },
        search(){
            this.loadData();
        },
        select(item){

        }
      
    },
    filters:{
        Datefilter:function(value){
            return moment.unix(value).format("YYYY-MM-DD HH:mm");
        }
    }
  }
</script>
<style>
.comm-wrap{
    padding:20px 0;
}
.gray{
    color:#999;
}
.News-item-list{

}
.News-item-list li{
    width:30%;
    display:inline-block;
    border:1px solid #ddd;
    margin:1%;
    color:#999;
    vertical-align:top;
}
.News-item-list li>span{
     display:block;
     padding:10px 10px 0 10px;
     word-break:break-all;
}
.News-item-list li input[type="radio"]{
    width:20px;
    height:20px;
    display:inline-block;
}
.News-item-list li dl{
    padding:10px;
}
.News-item-list li dd,.News-item-list li dt{
    display:block;
    padding:0;
    margin:0;
}
.News-item-list li dt a{
    font-size:16px;
    color:#555;
    text-decoration: underline;
}
.News-item-list li dt a:hover{
    color:orange;
}
.News-item-list li dl img{
    heigh:100%;
    overflow:hidden;
}
</style>
