import Vue from 'vue'
import Router from 'vue-router'
import Index from './src/index.vue'
// import store from '../store'

// window.store = store

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: Index,
    },
    // {
    //   path: '/create',
    //   component: ()=>import('@/view/Create/template.vue'),
    //   meta: { requireLogin: true }
    // },
    // {
    //   path: '/detail/:blogId',
    //   component: ()=>import('@/view/Detail/template.vue'),
    //   meta: { requireLogin: true }
    // },
    // {
    //   path: '/edit/:blogId',
    //   component: ()=>import('@/view/Edit/template.vue'),
    //   meta: { requireLogin: true }
    // },
    // {
    //   path: '/login',
    //   component: ()=>import('@/view/Login/template.vue')
    // },
    // {
    //   path: '/my',
    //   component: ()=>import('@/view/My/template.vue'),
    //   meta: { requireLogin: true }
    // },
    // {
    //   path: '/register',
    //   component: ()=>import('@/view/Register/template.vue')
    // },
    // {
    //   path: '/user/:userId',
    //   component: ()=>import('@/view/User/template.vue')
    // }
  ]
})
// 注册一个全局前置守卫，路由正在发生改变。
router.beforeEach((to, from, next) => {
    // 判断页面是否登陆
  if (to.matched.some(record => record.meta.requireLogin)) {
    store.dispatch('checkLogin').then(isLogin => {
      if (!isLogin) {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router
