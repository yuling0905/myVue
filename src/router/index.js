import Vue from 'vue'
import VueRouter from 'vue-router'
const Layout = () => import('@/layout')
const Workbench = () => import('@/views/workbench.vue')
const Position = () => import('@/views/position.vue')
const Home = () => import('@/views/Home.vue')
const List = () => import('@/views/list/list.vue')
// const User = () => import('@/views/user/index.vue')
const Company = () => import('@/views/user/company.vue')
const auth = () => import('@/views/user/auth.vue')
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
      },
      {
        // 职位
        path: 'Position',
        name: 'Position',
        component: Position,
      },
      {
        name:'Company',
        path: '/company',
        component: Company,
        meta: {
          requiresAuth: true,

        },
      },
      {
        // 权限管理
        name: 'auth',
        path: '/auth',
        component: auth,
        meta: {
          requiresAuth: true,

        },
      },

      // {
      //   // 个人中心
      //   path: 'user',
      //   component: User,
      //   children: [{
      //       path: '',
      //       redirect: '/user/company',
      //       parentName: 'user',
      //     },
      //     {
      //       path: '/company',
      //       component: Company,
      //       parentName: 'user'
      //     },
      //     {
      //       // 权限管理
      //       name: 'auth',
      //       path: '/auth',
      //       component: auth,
      //       meta: {
      //         requiresAuth: true,
      //         parentName: 'user'
      //       },
      //     },
      //   ]
      // }

    ],
  },
  {
    // 工作台
    path: '/Home',
    name: 'Home',
    component: Home,
  },
  {
    // 工作台
    path: '/List',
    name: 'List',
    component: List,
  }

]

const router = new VueRouter({
  routes,
  mode: 'history',
  // base: process.env.BASE_URL,
})

export default router