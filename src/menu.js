import weixinMenu from './views/manage/menu.vue'
import subscribe from './views/manage/subscribe.vue'
import daySign from './views/manage/daySign/daySign.vue'
import daySignDetail from './views/manage/daySign/daySignDetail.vue'
import daySignDetailOld from './views/manage/daySign/daySignDetailOld.vue'
import dsPhotoGallery from './views/manage/daySign/dsPhotoGallery.vue'
import dsTemplate from './views/manage/daySign/dsTemplate.vue'
import dsSetting from './views/manage/daySign/dsSetting.vue'
import drawCanvas from './views/manage/drawCanvas/drawCanvas.vue'
import dataAnalyse from './views/manage/dataManage/analyse.vue'
import dataExport from './views/manage/dataManage/export.vue'
import dexUser from './views/manage/dataManage/tbUser.vue'
import dexRecord from './views/manage/dataManage/tbRecord.vue'
import dataPersonal from './views/manage/dataManage/tbUserPersonal.vue'
import admin from './views/manage/admin/admin.vue'

const menus = [
  {
    name:"日签管理",
    visible:true,
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
        name:'往期日签详情',
        path:"manage/daysign/detailOld",
        icon:'el-icon-picture',
        component:daySignDetailOld,
        visible:false
      },{
        name:'生成日签',
        path:"manage/drawCanvas",
        icon:'el-icon-picture',
        component:drawCanvas,
        visible:false
      },{
        name:'图片库管理',
        path:"manage/daysign/photoGallery",
        icon:'el-icon-picture',
        component:dsPhotoGallery,
        visible:false
      },{
        name:'有效时间设置',
        path:"manage/daysign/datesetting",
        icon:'el-icon-time',
        component:dsSetting,
        visible:true
      },
      {
        name:'模板管理',
        path:"manage/daysign/template",
        icon:'el-icon-document',
        component:dsTemplate,
        visible:false
      }
    ]
  },{
    name:"用户数据管理",
    visible:true,
    child:[
      {
        name:'数据分析',
        path:"manage/datamanage/analyse",
        icon:'el-icon-time',
        component:dataAnalyse,
        visible:true
      },{
        name:'数据查询',
        path:"manage/datamanage/export",
        icon:'el-icon-setting',
        component:dataExport,
        visible:true
      },{
        name:'用户表数据查询',
        path:"manage/datamanage/export/tbUser",
        icon:'el-icon-setting',
        component:dexUser,
        visible:false
      },{
        name:'打卡记录表数据查询',
        path:"manage/datamanage/export/tbRecord",
        icon:'el-icon-setting',
        component:dexRecord,
        visible:false
      },{
        name:'用户个人数据详情',
        path:"manage/datamanage/export/tbUser/personal",
        icon:'el-icon-setting',
        component:dataPersonal,
        visible:false
      }
    ]
  },{
    name:"微信设置",
    visible:true,
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
    visible:false,
    child:[
      {
        name:'用户权限管理',
        path:'manage/admin',
        icon:'el-icon-setting',
        component:admin,
        visible:false
      }
    ]
  }

]
export default menus
