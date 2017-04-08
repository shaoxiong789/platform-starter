<template>
    <div>
        <h1>自定义日历</h1>
         - 节假日 
         - 可以显示 是否包含 背景图 和 一句鸡汤
         <div class="comm-wrap">
              <label for="">选择：</label>
              <el-radio class="radio" v-model="radio" label="0">全部</el-radio>
              <el-radio class="radio" v-model="radio" label="1">早安</el-radio>
              <el-radio class="radio" v-model="radio" label="2">晚安</el-radio>                       
         </div>


    <full-calendar class="test-fc" :events="fcEvents" 
      first-day='1' locale="zh" 
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <!--<template slot="fc-event-card" scope="p">
            <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
        </template>
        
        <template slot="fc-header-right">
          fc-header-right
        </template>
        <template slot="fc-body-card">
          修改
        </template>-->
    </full-calendar>
    </div>
</template>
<script>
import moment from 'moment';

let demoEvents = [
    {
      title    : 'A1',//早安图
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'morningbg'
    },{
      title    : 'A2',//早安一句话
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'morningword'
    },{
      title    : 'B1',//晚安图
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'nightbg'
    },{
      title    : 'B2',//晚安一句话
      start    : '2017-04-01',
      end      : '2017-04-01',
      cssClass : 'nightword'
    }
  ];

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
      console.log('changeMonth',start, end, current)
      // console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
      //  console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', moment(day).format("YYYY-MM-DD hh:mm"), jsEvent)
      this.$router.push({
            path:'/manage/daysign/detail',
            query:{
              "day":day,
              "id":null
            }
          })
    },
    'moreClick' (day, events, jsEvent) {
      console.log('moreCLick', moment(day).format("YYYY-MM-DD hh:mm"), events, jsEvent)
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
</style>