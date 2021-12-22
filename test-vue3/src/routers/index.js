/**
 * @Name: 路由核心方法
 * @Description: 路由核心方法
 * @Author: 刘燕保
 * @Date: 2021-12-19 21:05:46
 **/
import { createRouter, createWebHistory } from 'vue-router'

const HelloWD = import('../views/HelloWorld')
const example_rops = import('../views/example_repo')

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    { path: '/baseCount', component: () => HelloWD },
    { path: '/repo', component: () => example_rops }
  ]
})

export default router