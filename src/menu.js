import weixinMenu from './views/main/weixin/menu.vue'
import subscribe from './views/main/weixin/subscribe.vue'
const menus = [
  {
    name:"微信设置",
    child:[
      {
        name:'菜单设置',
        path:'weixin/menu',
        icon:'<i class="el-icon-setting"></i>',
        component:weixinMenu
      },
      {
        name:'关注回复',
        path:'weixin/subscribe',
        icon:'<i class="el-icon-setting"></i>',
        component:subscribe
      }
    ]
  }
]
export default menus
