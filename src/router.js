import VueRouter from 'vue-router'
import Bar from './views/main/bar.vue'
import Foo from './views/main/foo.vue'
import Login from './views/login.vue'
import Main from './views/main.vue'
const routers = [
  { path: '/login', component: Login },
  {
    path: '/',
    component: Main,
    children: [
      {
        path: 'bar',
        component: Bar
      },
      {
        path: 'foo',
        component: Foo
      }
    ]
  },
]
const router = (Vue)=>{
  Vue.use(VueRouter)
  return new VueRouter({
    routes:routers
  })
}

export default router
