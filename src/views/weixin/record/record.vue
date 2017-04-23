<template>
    <div class="record-wrap">
        <div class="user-info " :class="{'sun':isMorning,'moon':!isMorning}">
            <span class="logo">
                        <img src="../logo.png" alt="logo">
                    </span>
            <span class="user-right"> 
                    <span class="user-name" v-text="result.name"></span>
            <span class="msg-info"
                  v-text="msg"></span>
            </span>
    
            <div class="ds-tabs">
                <span class="sun" :class="{'active':isMorning}" @click="selectTabs('morning')"><span class="icon"></span><em>早起</em></span>
                <span class="moon" :class="{'active':!isMorning}" @click="selectTabs('night')"><span class="icon"></span><em>睡眠</em></span>
            </div>

            <div class="line-chart">
                <IEcharts :option="line"></IEcharts>
            </div>

            <!--<div class="zan-list">
                <span class="zan-ico">赞过我的人</span>
                <ul v-if="">
                    <li v-for=""><img alt=""></li>
                </ul>
                <ul v-else> 暂时无人</span>
            </div>

            <a class="article-link" href="">邀请好友一起打卡</a>-->
        </div>
    
    </div>
</template>
<script>
import IEcharts from 'vue-echarts-v3';
import moment from 'moment';

export default {
    name: 'weixinRecord',
    components: {
        IEcharts
    },   
    data: () => ({
        result: {},
        msg: "今日暂无睡眠数据",
        isMorning:true,
        line: {
            title: {
                text: ''
            },
            color: ["#fff", "#c57bdb"],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                show:false,
                name: "",
                type: 'category',
                boundaryGap: false,
                splitLine: { //网格线
                    show: true,
                    lineStyle: {
                        color: ['#e29132'],
                        type: 'solid'
                    }
                },
                data: ["2017-3-11", "2017-3-12", "2017-3-13", "2017-3-14", "2017-3-15", "2017-3-16",
                    "2017-3-17", "2017-3-18", "2017-3-19", "2017-3-20", "2017-3-21", "2017-3-22",
                    "2017-3-23", "2017-3-24", '2017-3-25', "2017-3-26", "2017-3-27", "2017-3-28",
                    "2017-3-29", "2017-3-30", "2017-3-31", "2017-4-1", "2017-4-2", "2017-4-3"]
            },
            yAxis: {
                name: "",
                type: 'value',
                axisLine:{
                    show:false
                },
                axisTick:{
                    lineStyle:{
                        color:"#fff"
                    }
                },
                axisLabel:{
                    show:true,
                    textStyle:{
                        color:"#fff",
                        fontSize:10
                    }
                    // ,
                    // formatter: function (value, index) {
                    //     // Formatted to be month/day; display year only in the first label
                    //     var date = new Date(value);
                    //     var texts = [(date.getMonth() + 1), date.getDate()];
                    //     if (idx === 0) {
                    //         texts.unshift(date.getYear());
                    //     }
                    //     return texts.join('/');
                    // }
                },
                splitLine: { //网格线
                    show: false,
                    lineStyle: {
                        color: ['#ddd'],
                        type: 'dashed'
                    }
                },
                axisLabel: {
                    formatter: function(value){
                        return value;
                    }
                }
            },
            textStyle:{
                color:"#ccc",
                fontSize:10
            },
            series: [{
                name: '新增',
                type: 'line',
                // smooth: true,
                // symbol: 'circle',
                // symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 1,
                        shadowColor: 'rgba(0,0,0,0.4)',
                        shadowBlur: 10,
                        shadowOffsetY: 10
                    }
                },
                // areaStyle: {
                //     normal: {
                //         // color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                //         //     offset: 0,
                //         //     color: 'rgba(219, 50, 51, 0.3)'
                //         // }, {
                //         //     offset: 0.8,
                //         //     color: 'rgba(219, 50, 51, 0)'
                //         // }], false),
                //         // shadowColor: 'rgba(0, 0, 0, 0.1)',
                //         // shadowBlur: 10
                //     }
                // },               
                data: [5, 20, 36, 10, 10, 20]
            }]
        },        
    }),
    mounted() {
        this.$nextTick(function () {
            this.getDate();
            this.randomData();
        })
    },
    methods: {
        getDate() {
            this.result = {
                name: "叮叮当",// 限制最大字符个数 名字不能太长
                logo: "",
                morn: [ //早上打卡数据 一个月内的数据 或者一周内的数据
                    {
                        name: "",
                        data: ""
                    }
                ],
                night: [ //网上打卡设置
                    {
                        name: "",
                        data: ""
                    }
                ]
            }
            
        },
        randomData() {
            const that = this;
            let data = [];
            for (let i = 0, min = 0, max = 99; i < 24; i++) {
                data.push(parseInt(Math.random() * (max + 1 - min) + min));
            }
            that.loading = !that.loading;
            that.line.series[0].data = data;
        },
        selectTabs(type){
            if(type=="morning"){
                this.isMorning = true;
            }else{
                 this.isMorning = false;
            }
            this.randomData();
        }
    }
}
</script>
<style scoped>
.record-wrap {
    font-family: serif;
}

.user-info {
    text-align: center;
    border-radius: 0px 0px 0% 0%;
    padding: 20px 2% 0px 2%;
}

.user-info .logo {
    display: inline-block;
    vertical-align: middle;
}

.user-info .user-right {
    display: inline-block;
    color: #fff;
    vertical-align: middle;
    text-align: left;
}

.user-info .user-name {
    font-size: 16px;
    display: block;
    line-height: 20px;
}

.user-info .msg-info {
    font-size: 12px;
    display: block
}

.user-info.sun {
    background-color: #e1af46;
}
.user-info.moon {
    background-color: #32a7f6;
}
.logo img {
    width: 55px;
    height: 55px;
}

.ds-tabs {
    display: flex;
    border: 1px solid #e5e5e5;
    border-radius: 4px;
    margin: 20px 0;
    background-color: #ddd;
}

.ds-tabs > span {
    width: 50%;
    line-height: 35px;
    font-size: 14px;  
    border-radius: 4px;
}

.ds-tabs span.active {
    background-color: #fff;
}
.ds-tabs span .icon{
    width:25px;
    height:25px;
    display:inline-block;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 25px;   
    vertical-align:middle;
    margin-right:5px;
}
.ds-tabs span em{
    font-style:normal;
    vertical-align:middle;
}
.ds-tabs span.sun {
     color:#fff;
     background-color: #ddd;   
}
.ds-tabs span.moon {
    color: #fff;
    background-color: #ddd;    
}
.ds-tabs span.sun.active{
    color:#e1af46;
    background-color: #fff;   
}
.ds-tabs span.moon.active {
     color: #32a7f6;
     background-color: #fff; 
}
.ds-tabs span.sun .icon{
    background-image: url("sun2.png");
}
.ds-tabs span.moon .icon{
    background-image: url("moon2.png");
}
.ds-tabs span.sun.active .icon{
    background-image: url("sun1.png");
}
.ds-tabs span.moon.active .icon{
    background-image: url("moon1.png");
}
.line-chart{
    height:200px;
}
</style>