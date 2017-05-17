  <template>
    <!-- 素材列表-->
    <div class="comm-wrap news-list">
     <el-tabs type="border-card">
        <el-tab-pane label="素材列表" v-loading.body="loading">
            <el-input
                placeholder="请输入标题"
                icon="search"
                v-model="newsTitle"
                :on-icon-click="search" style="width:400px;display:inline-block;">
            </el-input>
            <input type="button"
                class="el-button el-button--primary el-button--small"
                v-bind:disabled="false"
                value="同步"
                @click="btnSync"  style=""/>
            总数为{{this.countList.news_count}}条数据
            <el-progress :percentage="pc" style="width:150px;display:inline-block;"></el-progress>
            <div class="pagination" style="float:right;display:inline-block;">
                <el-pagination @size-change="handleSizeChange"
                            @current-change="handleCurrentChange"
                            :current-page="currentPage"
                            :page-size="pageSize"
                            layout="total,prev, pager, next, jumper"
                            :total="total">
                </el-pagination>
            </div>

            <ul class="News-item-list" >
                <li v-for="item in NewsList" >
                    <input type="radio" @change="select(item)" name="news">选中
                    <span><el-tag type="primary">media_id</el-tag> {{item.media_id}}</span>
                    <span class="gray"><el-tag type="primary">更新时间</el-tag> {{item.update_time| Datefilter}}</span>
                    <dl>
                        <dt><el-tag type="primary">图文标题</el-tag> {{item.content.news_item.title}}</a></dt>
                        <dd>
                             <img :src="item.content.news_item.thumb_url" style="height:150px;">
                        </dd>
                        <dd><el-tag type="primary">图文简介</el-tag> {{item.content.news_item.digest}}</dd>
                    </dl>
                    <span class="bgPreview">
                        <a v-bind:href="item.content.news_item.url" alt="" target="_black">预览文章</a>
                    </span>
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
        countList:0,
        loading:false,
        pc:0,
        sysPage:{
            currentPage: 1,
            pageSize:50,
            total:0,
        }
      };
    },
    mounted:function(){
        this.$nextTick(function(){
            this.init();
        })
    },
    methods: {
        init:function(){
            this.getCount();
            this.loadData();
        },
        loadData(){
            this.loading = true;
            axios.get('/api/weixin/news/list', {
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
                console.log(error);
            });

        },
        handleSizeChange(val) {
          //console.log(`每页 ${val} 条`);
           this.loadData();
        },
        handleCurrentChange(val) {
            this.currentPage = val;
            console.log(`当前页: ${val}`);
            this.loadData();
        },
        search(){
          console.log('11')
          this.loadData()
            // debugger //bug  一只调用
            // this.loadData();
        },
        select(item){

        },
        getCount(){
            this.loading = true;
            axios.get('/api/weixin/news/count')
            .then((response) =>{
                console.log(response.data.result);
                if(response.data.code == 1){
                    this.countList = response.data.result;
                    this.total = this.countList.news_count ;
                    this.sysPage.total = this.countList.news_count;
                    this.loading = false;
                }

            })
            .catch(function (error) {
                console.log(error);
            });
        },
        btnSync(){
            var num = this.sysPage.total/this.sysPage.pageSize;
            console.log(num)
            for(var i = 0; i<num; i++){
                this.syncData();
                this.sysPage.currentPage++;
            }
             this.loadData() ;
        },
        syncData(){
            this.loading = true;
            axios.get('/api/weixin/sync/news', {
                params: {
                    currentPage: this.sysPage.currentPage,
                    pageSize:this.sysPage.pageSize,
                }
            })
            .then((response) =>{
                console.log(response.data.result);
                if(response.data.code == 1){
                    this.sysPage.total = response.data.result.page.total;

                    this.pc = parseInt(this.sysPage.pageSize/this.sysPage.total*100*this.sysPage.currentPage);
                    if(this.pc>100){
                         this.pc = Math.min(100,this.pc);
                    }

                    this.loading = false;
                    console.log(this.sysPage.pageSize/this.sysPage.total,this.pc)

                }

            })
            .catch(function (error) {
                console.log(error);
            });
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
    width:1000px;
    margin:0;
    padding:0;
    overflow:hidden;
}
.News-item-list li{
    position:relative;
    top:0;
    left:0;
    width:30%;
    height:400px;
    float:left;
    display:block;
    border:1px solid #ddd;
    margin:1%;
    color:#999;
    vertical-align:top;
    box-shadow:1px 1px 1px 1px rgba(0,0,0,0.1);
    overflow: hidden;
}
.News-item-list li:hover .bgPreview{
     display:block;
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
    padding:5px 10px;
    margin:0;
}
.News-item-list li dd,.News-item-list li dt{
    display:block;
    padding:0;
    margin:0;
}

.News-item-list li>span.bgPreview{
    display:none;
    position:absolute;
     bottom:0;
     left:0;
     width:100%;
     height:90%;
     background:rgba(0,0,0,0.6);
}
.News-item-list li>span.bgPreview a{
    display:block;
    font-size:34px;
    line-height:300px;
    color:orange;
    text-align:center;
}
.News-item-list li dt{
    /*font-size:1px;*/
}
.News-item-list li dd{
    color:#999;
}
.News-item-list li dt a:hover{
    color:orange;
}
.News-item-list li dl img{
    heigh:100%;
    overflow:hidden;
}
</style>
