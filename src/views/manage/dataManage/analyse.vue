<template>
    <div class="comm-wrap">
        <!--<h1>用户数据分析</h1>
        <ul>
            <li> 模仿 微信后台 vue-echart3.0  已引入 <li>
            <li>[折线图]参与活动人数（显示总用户数）  用户增长折线图 按时间搜索 （到昨天位置） <li>
            <li>[饼状图]用户打卡时间段分部  按时间断搜索 </li>
            <li>[柱状图]每日的打卡总次数 平均起床时间 折线 右侧</li>
        </ul>-->
      <div class="echarts echarts300">
            <div class="comm-title">用户增长折线图
                <el-date-picker v-model="dateRange"
                            type="daterange"
                            align="right"
                            placeholder="选择日期范围"
                            :picker-options="pickerOptions">
                </el-date-picker>
                <span class="comm-right-info">总用户人数：{{sumUser}}</span>
            </div>
            
            <IEcharts :option="line"
                      :loading="loading"></IEcharts>
      </div>  
        <br/>
     
        <div class="echarts echarts300">
            <div class="comm-title">用户打卡时间分布图</div> 
            <div class="comm-left">
                <IEcharts :option="piemorn"></IEcharts>
            </div>
            <div class="comm-right">
                <IEcharts :option="pienight"></IEcharts>
            </div>
        </div>    
        <br/>
        <div class="echarts">
            <div class="comm-title">每日的打卡人数分析(取周平均)</div> 
            <IEcharts :option="barweek"></IEcharts>
        </div>  
            
 
    </div>
</template>
<script>
import IEcharts from 'vue-echarts-v3';
import moment from 'moment';

// let 

export default {
    name: 'useranalyse',
    components: {
        IEcharts
    },
    data: () => ({
        sumUser:293838,
        dateRange: '', //日期范围
        pickerOptions: {
            shortcuts: [{
                text: '最近一周',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                    picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近一个月',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                    picker.$emit('pick', [start, end]);
                }
            }, {
                text: '最近三个月',
                onClick(picker) {
                    const end = new Date();
                    const start = new Date();
                    start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                    picker.$emit('pick', [start, end]);
                }
            }]
        },         
        loading: true,
        line: {
            title: {
                text: ''
            },
            color: ["#44B549", "#c57bdb"],
            tooltip: {
                trigger: 'axis'
            },
            xAxis: {
                name: "日期",
                type: 'category',
                boundaryGap: false,
                splitLine: { //网格线
                    show: true,
                    lineStyle: {
                        color: ['#ddd'],
                        type: 'dashed'
                    }
                },
                data: ["2017-3-11", "2017-3-12", "2017-3-13", "2017-3-14", "2017-3-15", "2017-3-16",
                    "2017-3-17", "2017-3-18", "2017-3-19", "2017-3-20", "2017-3-21", "2017-3-22",
                    "2017-3-23", "2017-3-24", '2017-3-25', "2017-3-26", "2017-3-27", "2017-3-28",
                    "2017-3-29", "2017-3-30", "2017-3-31", "2017-4-1", "2017-4-2", "2017-4-3"]
            },
            yAxis: {
                name: "人数",
                type: 'value',
                splitLine: { //网格线
                    show: true,
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
            series: [{
                name: '新增',
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
                        { type: 'average', name: '平均值',
                           label:{
                                formatter: function(value){
                                    return parseInt(value);
                                }
                            }
                          }
                    ]
                }
            }]
        },
        piemorn: {
            title:{
                text:"早起"
            },
            color:['#2f4554', '#61a0a8', '#d48265', '#c23531'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['04:00-05:00','05:00-06:00','06:00-07:00','07:00-08:00']
            },
            series : [
                {
                    name: '早起时间分布',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'04:00-05:00'},
                        {value:310, name:'05:00-06:00'},
                        {value:634, name:'06:00-07:00'},
                        {value:105, name:'07:00-08:00'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, 
        pienight: {
            title:{
                text:"晚安"
            },
            color:['#2f4554', '#61a0a8', '#d48265', '#c23531'],
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                orient: 'vertical',
                left: 'right',
                data: ['21:00-22:00','22:00-23:00','23:00-24:00','>24：00']
            },
            series : [
                {
                    name: '晚睡时间分布',
                    type: 'pie',
                    radius : '55%',
                    center: ['50%', '60%'],
                    data:[
                        {value:335, name:'21:00-22:00'},
                        {value:310, name:'22:00-23:00'},
                        {value:634, name:'23:00-24:00'},
                        {value:105, name:'>24：00'}
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        }, 
        barweek:{
            tooltip: {
                    trigger: 'axis'
                },
            toolbox: {
                feature: {
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    restore: {
                        show: true
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            color:["#44B549","#d48265"],
            grid: {
                containLabel: true
            },
            legend: {
                data: ['早上','晚上']
            },
            xAxis: [{
                type: 'category',
                axisTick: {
                    alignWithLabel: true
                },
                data: ['周一','周二','周三','周四','周五','周六','周日']
            }],
            yAxis: {
                type: 'value',
                name: '打卡人次',
                position: 'left'
            },
            series: [ {
                name: '早上',
                type: 'bar',
                stack: '打卡人数',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop'
                        }
                    },
                data: [209,236,325,439,507,576,722]
            },{
                name: '晚上',
                type: 'bar',
                stack: '打卡人数',
                    label: {
                        normal: {
                            show: true,
                            position: 'insideTop'
                        }
                    },
                data: [938,1851,1931,2198,2349,2460,2735]
            }]
            
        }
    }),
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const that = this;
            let data = [];
            for (let i = 0, min = 0, max = 99; i < 24; i++) {
                data.push(parseInt(Math.random() * (max + 1 - min) + min));
            }
            that.loading = !that.loading;
            that.line.series[0].data = data;
        },
        whiteDate(start,end){
            // return  2个日期之间的 所有日期 2017-2-2
        }
    }
}
</script>
<style scoped>
.comm-right-info{
    float:right;
    margin-right:3%;
    color:orange;
    font-size:18px;
    line-height:36px;
}
.el-date-editor--daterange.el-input{
    margin:0 30px!important;
}
.echarts300{
    height:300px;
    margin-bottom:30px;
}
.echarts .comm-left,
.echarts .comm-right  {
  height:300px;
}

</style>
