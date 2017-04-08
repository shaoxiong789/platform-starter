<template>
    <div class="comm-wrap">
        <el-button type="text"
                   size="mini"
                   @click="goBack()"><i class="el-icon-d-arrow-left"></i> 返回上一页</el-button>
        <br>
        <div class="comm-left">
             <div class="comm-title">个人信息</div>
            <ul class="user-info">
                <li><label for="">用户微信名：</label><span>{{user.name}}</span></li>
                <li><label for="">注册时间：</label><span>{{user.createTime}}</span></li>
                <li><label for="">早起积分：</label><span>{{user.mornintegral}}</span></li>
                <li><label for="">晚安积分：</label><span>{{user.nightintegral}}</span></li>
                <li><label for="">勋章数：</label><span>{{user.medal}} </span>
                    <span class="tip">🎖（连续打卡22天获得一颗勋章）</span></li>
            </ul>     
        </div>
        <div class="comm-right">
            <div class="comm-title">好友积分排行</div>
            <ul class="ranking" >
                <li v-for="item in rankingInfo">{{item.type}}排行：<span>第{{item.ranking}}位</span> 
                - ( 共{{item.sum}}个好友 )</li>
            </ul>  
            <!--详细排行前10位好友名单-->
        </div>
        <div class="echarts">
            <div class="comm-title">打卡时间折线图</div>
            <IEcharts :option="option"
                      :loading="loading"></IEcharts>
        </div>
    </div>
</template>

<script type="text/babel">
import IEcharts from 'vue-echarts-v3';
import moment from 'moment';

export default {
    name: 'view',
    components: {
        IEcharts
    },
    props: {
    },
    data: () => ({
        user:"",
        rankingInfo:"",
        loading: true,
        option: {
            title: {
                text: ''
            },
            color: ["#44B549", "#c57bdb"],
            legend: {
                data: ['早起', '晚安']
            },
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                name: "日期",
                type: 'category',
                boundaryGap: false,
                data: ["2017-3-11", "2017-3-12", "2017-3-13", "2017-3-14", "2017-3-15", "2017-3-16",
                    "2017-3-17", "2017-3-18", "2017-3-19", "2017-3-20", "2017-3-21", "2017-3-22",
                    "2017-3-23", "2017-3-24", '2017-3-25', "2017-3-26", "2017-3-27", "2017-3-28",
                    "2017-3-29", "2017-3-30", "2017-3-31", "2017-4-1", "2017-4-2", "2017-4-3"]
            },
            yAxis: {
                name: "时刻",
                type: 'value',
                axisLabel: {
                    formatter: function(value){
                        return value;
                    }
                }
            },
            series: [{
                name: '早起',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }, {
                name: '晚安',
                type: 'line',
                data: [5, 20, 36, 10, 10, 20, 0,20],
                markPoint: {
                    data: [
                        { type: 'max', name: '最大值' },
                        { type: 'min', name: '最小值' }
                    ]
                },
                markLine: {
                    data: [
                        { type: 'average', name: '平均值' }
                    ]
                }
            }]
        }
    }),
    mounted() {
        console.log(this.$route.query.id)
        this.getUserInfoById();
        this.getData();
    },
    methods: {
        goBack: function () {
            this.$router.go(-1);
        },
        getUserInfoById(){
           this.user = {
                id:"1",
                createTime: '2016-05-03',
                name: '王小虎0',
                mornintegral: 990,
                nightintegral: 888,
                medal:0
            }
            //获取排行信息
            this.rankingInfo = [
                {
                    type:'早起',
                    ranking:1,
                    sum:2383
                },{
                    type:'晚安',
                    ranking:3,
                    sum:88
                }
            ]

        },
        getData() {
            const that = this;
            that.loading = !that.loading;
            that.option.series[0].data = that.random(50,99);
            that.option.series[1].data = that.random(0,40);
        },
        random(min,max){
            let data = [];
            for (let i = 0; i < 24; i++) {
                data.push(Math.floor(Math.random() * (max + 1 - min) + min));
            }
            return data;
        }
    }
};
</script>
<style>
.comm-left{
    width:48%;
    float:left;
    font-size:14px;
}
.user-info{
}
.comm-right{
    width:48%;
    float:right;
    font-size:14px;
}
.comm-title{
    padding: 5px 15px;
    background: #eee;
    border-left: 2px solid #44b549;
    margin: 15px 0;
    font-size:14px;
}
.tip{
    color:orange;
    font-size:12px;
}
.echarts {
    /*width: 400px;*/
    height: 400px;
    clear:both;
}
</style>