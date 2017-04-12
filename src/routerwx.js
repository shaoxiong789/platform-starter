import WxIndex from './views/weixin/index.vue'
import WxHome from './views/weixin/home/home.vue'
import WxRecord from './views/weixin/record/record.vue'
import WxRankingList from './views/weixin/rankingList/rankingList.vue'

const menus = {
    path: '/weixin',
    component: WxIndex,
    children:[
      {
        path:'home',
        component: WxHome
      },
      {
        path:'record',
        component: WxRecord
      },
      {
        path:'rankingList',
        component: WxRankingList
      }
    ]
  }
export default menus