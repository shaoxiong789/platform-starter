import weixinMenu from './views/manage/menu.vue'
import subscribe from './views/manage/subscribe.vue'
import daySign from './views/manage/daySign/daySign.vue'
import daySignDetail from './views/manage/daySign/daySignDetail.vue'
import dsTemplate from './views/manage/daySign/dsTemplate.vue'
import dsSetting from './views/manage/daySign/dsSetting.vue'
import dsUploadBg from './views/manage/daySign/dsUploadBg.vue'
import dsSetWord from './views/manage/daySign/dsSetWord.vue'
import dataAnalyse from './views/manage/dataManage/analyse.vue'
import dataExport from './views/manage/dataManage/export.vue'
import dataPersonal from './views/manage/dataManage/personal.vue'
import admin from './views/manage/admin/admin.vue'

const menus = [
  {
    name:"日签管理",
    child:[
      {
        name:'日签管理',
        path:"manage/daysign/",
        icon:'el-icon-picture',
        component:daySign,
        visible:true
      },{
        name:'日签详情',
        path:"manage/daysign/detail",
        icon:'el-icon-picture',
        component:daySignDetail,
        visible:false
      },{
        name:'上传日签背景',
        path:"manage/daysign/uploadbg",
        icon:'el-icon-upload',
        component:dsUploadBg,
        visible:true
      },{
        name:'设置每日一句',
        path:"manage/daysign/setword",
        icon:'el-icon-setting',
        component:dsSetWord,
        visible:true
      },{
        name:'时间设置',
        path:"manage/daysign/setting",
        icon:'el-icon-time',
        component:dsSetting,
        visible:true
      },
      {
        name:'模板管理',
        path:"manage/daysign/template",
        icon:'el-icon-document',
        component:dsTemplate,
        visible:true
      }
    ]
  },{
    name:"用户数据管理",
    child:[
      {
        name:'数据分析',
        path:"manage/datamanage/analyse",
        icon:'el-icon-time',
        component:dataAnalyse,
        visible:true
      },{
        name:'数据导出',
        path:"manage/datamanage/export",
        icon:'el-icon-setting',
        component:dataExport,
        visible:true
      },{
        name:'个人数据详情',
        path:"manage/datamanage/personal",
        icon:'el-icon-setting',
        component:dataPersonal,
        visible:false
      }
    ]
  },{
    name:"微信设置",
    child:[
      {
        name:'菜单设置',
        path:'manage/menu',
        icon:'el-icon-setting',
        component:weixinMenu,
        visible:true
      },
      {
        name:'关注回复',
        path:'manage/subscribe',
        icon:'el-icon-setting',
        component:subscribe,
        visible:true
      }
    ]
  },{
    name:"用户权限管理",
    child:[
      {
        name:'用户权限管理',
        path:'manage/admin',
        icon:'el-icon-setting',
        component:admin,
        visible:true
      }
    ]
  }

]
export default menus
