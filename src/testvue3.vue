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
import { reactive, onMounted, watch, toRefs, computed } from 'vue'
export default {
  props: ['userId'],
  setup(props) {
    // data
    const { userId } = toRefs(props)
    const 猫咪数据 = reactive({
      '猫咪数量': 0,
      '预定猫咪': null
    })

    // computed
    const 幼猫列表 = computed(() => { 猫咪数据.猫咪数量.filter() })
    const 成年猫列表 = computed(() => { 猫咪数据.猫咪数量.filter() })

    // methods
    const 获取所有猫咪 = async () => { 猫咪数据.猫咪数量 = await api() }
    const 找到客户预定猫咪 = async () => {
      猫咪数据.预定猫咪 = await api(userId.value)
    }

    // watch
    watch(userId.value, 找到客户预定猫咪)

    // mounted
    onMounted(获取所有猫咪)

    return {
      ...toRefs(猫咪数据),
      幼猫列表,
      成年猫列表
    }
  }
}
</script>