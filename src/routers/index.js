/**
 * @Name: 路由核心方法
 * @Description: 路由核心方法
 * @Author: 刘燕保
 * @Date: 2021-12-19 21:05:46
 **/
import { createRouter, createWebHistory } from 'vue-router'

const HelloWD = import('../views/HelloWorld')
// 仓库实例
const example_rops = import('../views/example_repo')
// 记事本实例
const example_note = import('../views/example_note')

// const exa_note1 = import('../views/example_note1')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/baseCount', component: () => HelloWD },
    { path: '/repo', component: () => example_rops },
    { path: '/note', component: () => example_note }
    // { path: '/note1', component: () => exa_note1 }
  ]
})

export default router