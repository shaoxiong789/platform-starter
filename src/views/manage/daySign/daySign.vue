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
    title: '完成',
    start: '2017-04-01',
    end: '2017-04-01',
    cssClass: 'done'
  }
];

var daySign = {
  id: "",

}

export default {
  data() {
    return {
      start: "",
      currentDay: new Date(),
      fcEvents: demoEvents
    }
  },
  props: {

  },
  mounted() {
    this.$nextTick(function () {
      this.mockData();
    });
  },
  methods: {
    'changeMonth'(start, end, current) {
      this.start = start;
      // console.log('changeMonth',start, end, current)
      // console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick'(event, jsEvent, pos) {
      //  console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick'(day, jsEvent) {
      // console.log('dayClick', moment(day).format("YYYY-MM-DD hh:mm"), jsEvent)
      //检测过期  在今天之前的 没法修改  显示弹出框 过期无法修改

      if (moment(day).isAfter(this.currentDay)) {
        this.$router.push({
          path: '/manage/daysign/detail',
          query: {
            "day": day
          }
        });
      } else {
        this.$router.push({
          path: '/manage/daysign/detailOld',
          query: {
            "day": day
          }
        })
      }

    },
    'moreClick'(day, events, jsEvent) {
      // console.log('moreCLick', moment(day).format("YYYY-MM-DD hh:mm"), events, jsEvent)
    },
    mockData() {
      this.fcEvents = [];
      for (let i = 0; i < 42; i++) {
        this.fcEvents.push({
          title: '未完',
          start: moment(this.start).add(i,"days"),
          end: moment(this.start).add(i,"days"),
          cssClass: 'undone'
        });
      }
    }
  },
  components: {
    'full-calendar': require('vue-fullcalendar')
  }
}
</script>
<style>
.app {
  color: green;
}

.full-calendar-body .dates .dates-events .events-week .events-day .event-box .event-item {
  display: inline-block;
  padding: 3px !important;
  border-radius: 50%;
  color: #fff!important;
}

.done {
  background-color: #71B02F!important;
}

.undone {
  background-color: gray!important;
}

.fulcalendar-tip {
  font-size: 12px;
}
</style>