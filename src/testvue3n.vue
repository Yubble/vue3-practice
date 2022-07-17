<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-06 20:10:13
-->
<template>
  <div>
    <h2>仓库中猫的数量为：{{ 猫咪数量 }}</h2>
    <ul v-for="cat in 幼猫列表">
      <li @click="下架猫咪"></li>
    </ul>
    <ul>{{ 成年猫列表 }}</ul>
    <div>用户预订的猫咪是{{ 预定猫咪 }}</div>
  </div>
</template>

<script>
import 根据用户信息查找预定猫咪 from './获取用户预订猫咪.js'
import 获取所有猫咪 from './获取所有猫咪.js'
import 筛选猫咪类型 from './筛选猫咪类型.js'
import { toRefs } from 'vue'
export default {
  props: ['userId'],
  setup(props) {
    // data
    const { userId } = toRefs(props)

    // 拿到预定猫咪
    const { 预定猫咪 } = 根据用户信息查找预定猫咪(userId)

    // 获取所有猫咪，且触发mounted
    const { 猫咪数量 } = 获取所有猫咪()

    // 筛选猫咪类型
    const { 幼猫列表, 成年猫列表 } = 筛选猫咪类型(猫咪数量)

    return {
      预定猫咪,
      猫咪数量,
      幼猫列表,
      成年猫列表
    }
  }
}
</script>