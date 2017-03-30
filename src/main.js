import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import router from './router.js'
import fullCalendar from 'vue-fullcalendar'
import moment from 'moment';

Vue.use(ElementUI)
Vue.component('full-calendar', fullCalendar)


new Vue({
  el: '#app',
  data(){
    return {
      title:''
    }
  },
  render: h => h(App),
  router:router(Vue)
})
