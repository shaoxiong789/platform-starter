import VueRouter from 'vue-router'
import Login from './views/manage/login/login.vue'
import Manage from './views/manage/main.vue'
import menus from './menu.js'
import wxrouter from './routerwx.js'

var menuRouter = [];
const loginVerify = (to, from, next) => {
  if (1==2) {
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
    component: Manage,
    children: menuRouter,
    beforeEnter: loginVerify
  }

]

routers.push(wxrouter);

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
