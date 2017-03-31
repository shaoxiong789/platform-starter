import VueRouter from 'vue-router'
import Bar from './views/manage/bar.vue'
import Foo from './views/manage/foo.vue'
import Login from './views/manage/login/login.vue'
import Main from './views/manage/main.vue'
import WxIndex from './views/weixin/index.vue'
import WxHome from './views/weixin/home/home.vue'
import WxHistory from './views/weixin/history/history.vue'
import WxRankingList from './views/weixin/rankingList/rankingList.vue'

import menus from './menu.js'
var menuRouter = [];

const loginVerify = (to, from, next) => {
  if (!sessionStorage.getItem('accessToken')) {
    next({
      path: '/login',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
}
menus.forEach(function(menu){
  menu.child.forEach(function(menuChild){
    menuRouter.push(
      {
        path:menuChild.path,
        component:menuChild.component,
        beforeEnter: loginVerify,
        name:menuChild.name
      }
    )
  })
})
const routers = [
  {
    path: '/login',
    component: Login ,
    beforeEnter: (to, from , next) =>{
  //    sessionStorage.removeItem('accessToken');
      next();
    }
  },
  {
    path: '/',
    component: Main,
    children: menuRouter,
    beforeEnter: loginVerify
  },
  {
    path: '/weixin',
    component: WxIndex,
    children:[
      {
        path:'home',
        component: WxHome
      },
      {
        path:'history',
        component: WxHistory
      },
      {
        path:'rankingList',
        component: WxRankingList
      }
    ]
  }
]
const router = (Vue)=>{
  Vue.use(VueRouter)
  const vueRouter = new VueRouter({
    routes:routers
  });
  vueRouter.beforeEach((to, from, next) => {
    next();
  })
  return vueRouter
}

export default router
