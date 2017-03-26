import VueRouter from 'vue-router'
import Bar from './views/main/bar.vue'
import Foo from './views/main/foo.vue'
import Login from './views/login.vue'
import Main from './views/main.vue'
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
      sessionStorage.removeItem('accessToken');
      next();
    }
  },
  {
    path: '/',
    component: Main,
    children: menuRouter,
    beforeEnter: loginVerify
  },
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
