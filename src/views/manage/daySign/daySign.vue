<template>
    <div class="comm-wrap">
        <!--<h1>自定义日历</h1>
         - 节假日 
         - 可以显示 是否包含 背景图 和 一句鸡汤-->
      <el-alert
        title="警告"
        type="warning"
        description="日期空白的显示需要添加背景图和每日一言"
        show-icon>
      </el-alert>
      <full-calendar class="test-fc" :events="fcEvents" 
        first-day='1' lang="zh" 
        @changeMonth="changeMonth"
        @eventClick="eventClick"
        @dayClick="dayClick"
        @moreClick="moreClick">
          <template slot="fc-event-card" scope="scope">
              <p><i class="fa">sadfsd</i> {{ scope }} test</p>
          </template>
          
          <template slot="fc-header-left">
            日签管理日历
          </template>
          <template slot="fc-header-right">
            (<span class="fulcalendar-tip"> 友情提示：<span class="tip">点击日历进入详情</span></span>)
          </template>
          <!--<template slot="fc-body-card">
            修改
          </template>-->
      </full-calendar>

    </div>
</template>
<script>
import moment from 'moment';

let demoEvents = [
    {
      title    : '早图',//早安图
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'morningbg',
      id:"",
      type:"A1"
    },{
      title    : '早言',//早安一句话
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'morningword',
      id:"",
      type:"A2"
    },{
      title    : '晚图',//晚安图
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'nightbg',
      id:"",
      type:"B1"
    },{
      title    : '晚言',//晚安一句话
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'nightword',
      id:"",
      type:"B2"
    }
  ];

var daySign = {
  id:"",

}

export default {
	data () {
		return {
            radio:'0',
            name:'',
            fcEvents : demoEvents
        }
	},
  props:{

  },
  watch:{
    'radio'(val, oldVal){
      console.log(val, oldVal)
      // this.fcEvents = demoEvents[0];
    }
  },
  methods : {
    'changeMonth' (start, end, current) {
      // console.log('changeMonth',start, end, current)
      // console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
      //  console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', moment(day).format("YYYY-MM-DD hh:mm"), jsEvent)
      //检测过期  在今天之前的 没法修改  显示弹出框 过期无法修改

      this.$router.push({
            path:'/manage/daysign/detail',
            query:{
              "day":day,
              "id":null
            }
          })
    },
    'moreClick' (day, events, jsEvent) {
      // console.log('moreCLick', moment(day).format("YYYY-MM-DD hh:mm"), events, jsEvent)
    }
  },
  components : {
    'full-calendar' : require('vue-fullcalendar')
  }
}
</script>
<style>
  .app{
    color:green;
  }
  .full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item{
    display:inline-block;
    padding:0 3px !important;
  }
  .morningbg{
    background-color:greenyellow!important;
  }
  .nightbg{
    background-color:#f7ba2a!important;
  }
  .morningword{
    background-color:green!important;
  }
  .nightword{
    background-color:#ab7904!important;
  }
  .fulcalendar-tip{
    font-size:12px;
  }
</style>