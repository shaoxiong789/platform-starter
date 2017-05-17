<template>
    <div class="comm-wrap">
        <!--<h1>自定义日历</h1>
         - 节假日
         - 可以显示 是否包含 背景图 和 一句鸡汤-->
      <el-alert
        title="警告"
        type="warning"
        description="日期显示【未完】需要添加背景图和每日一言，必须预先设置"
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
            (<span class="fulcalendar-tip"> 提示：<span class="tip">点击日期进入详情</span></span>)
          </template>
          <!--<template slot="fc-body-card">
            修改
          </template>-->
      </full-calendar>

    </div>
</template>
<script>
import moment from 'moment';
import axios from 'axios';

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
      startDay: "",
      endDay:"",
      systemDay: new Date(),//系统创建日期
      currentDay: new Date(),
      fcEvents: demoEvents
    }
  },
  props: {

  },
  mounted() {
    this.$nextTick(function () {
      // this.mockData();
    });
  },
  methods: {
    'changeMonth'(start, end, current) {
      this.startDay = start;
      this.endDay = end;
      this.loadDaySignList();
    },
    'eventClick'(event, jsEvent, pos) {
      //  console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick'(day, jsEvent) {
      // console.log('dayClick', moment(day).format("YYYY-MM-DD hh:mm"), jsEvent)
      //检测过期  在今天之前的 没法修改  显示弹出框 过期无法修改

      // if (!moment(day).isBefore(this.systemDay)) {
      //   if (moment(day).isAfter(this.currentDay)) {
      //     this.$router.push({
      //       path: '/manage/daysign/detail',
      //       query: {
      //         "day": day
      //       }
      //     });
      //   } else {
      //     this.$router.push({
      //       path: '/manage/daysign/detailOld',
      //       query: {
      //         "day": day
      //       }
      //     })
      //   }
      // } else {
      //   this.$message({
      //     type: 'warning',
      //     message: '本系统从'+this.systemDay+"开始启用，之前无数据。"
      //   });
      // }

      this.$router.push({
        path: '/manage/daysign/detail',
        query: {
          "day": moment(day).format("YYYY-MM-DD")
        }
      });



    },
    'moreClick'(day, events, jsEvent) {
      // console.log('moreCLick', moment(day).format("YYYY-MM-DD hh:mm"), events, jsEvent)
    },
    loadDaySignList(){
      console.log(this.startDay,this.endDay)
      axios.get('api/clock/calendar/list',{
            params:{
                startDay:this.startDay,
                endDay:this.endDay
              }
          })
          .then((response) =>{
              // console.log(response.data.result)
              if(response.data.code == 1&&response.status==200){
                  this.createFcEvent(response.data.result);
              }
          })
          .catch(function (error) {
              console.log(error);
          });
      
    },
    createFcEvent(dateList){
       this.fcEvents = [];
      for(var i = 0; i< dateList.length ; i++){
        this.fcEvents.push({
          title: '完成',
          start:  moment(dateList[i].day).format("YYYY-MM-DD"),
          end: moment(dateList[i].day).format("YYYY-MM-DD"),
          cssClass: 'done'
        })
      }
        
    },
    mockData() {
      this.fcEvents = [];
      for (let i = 0; i < 42; i++) {
        const temp = moment(this.start).add(i, "days");
        if (!temp.isBefore(this.systemDay)) {
          this.fcEvents.push({
            title: '未设置',
            start: temp,
            end: temp,
            cssClass: 'undone'
          });
        } else {
          this.fcEvents.push({
            title: '无',
            start: temp,
            end: temp,
            cssClass: 'none'
          });
        }


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

.none {
  background-color: #ddd!important;
}

.fulcalendar-tip {
  font-size: 12px;
}
</style>
