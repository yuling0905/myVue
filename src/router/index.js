import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/layout')
const Workbench = () => import('@/views/workbench.vue')
const Home = () => import('@/views/Home.vue')
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Layout,
    children: [{
        path: '',
        redirect: '/workbench',
      },
      {
        // 工作台
        path: 'workbench',
        name: 'workbench',
        component: Workbench,
      }
    ],
  },
  {
    // 工作台
    path: '/Home',
    name: 'Home',
    component: Home,
  }

]

const router = new VueRouter({
  routes,
  // mode: 'history',
  // base: process.env.BASE_URL,
})

export default router