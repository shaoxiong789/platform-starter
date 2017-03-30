<template>
    <div>
        <h1>自定义日立日立</h1>
         - 节假日 
         - 可以显示 是否包含 背景图 和 一句鸡汤
    <full-calendar class="test-fc" :events="fcEvents" 
      first-day='1' locale="zh"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <template slot="fc-event-card" scope="p">
            <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
        </template>
    </full-calendar>
    </div>
</template>
<script>
import moment from 'moment';

let demoEvents = [
    {
      title    : 'Sunny 725-727',
      start    : '2017-02-25',
      end      : '2017-02-27',
      cssClass : 'family'
    },
    {
      title : 'Lunfel 726-727',
      start : '2017-02-26',
      end : '2017-02-27',
      cssClass : ['home', 'work']
    }
  ];
export default {
	data () {
		return {
            name:'Sunny!',
            fcEvents : demoEvents
        }
	},
  methods : {
    'changeMonth' (start, end, current) {
      console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent) {
      console.log('moreCLick', day, events, jsEvent)
    }
  },
  components : {
    'full-calendar' : require('vue-fullcalendar'),
    'moment' : require('moment')	
  }
}
</script>
<style>
  .app{
    color:green;
  }
</style>