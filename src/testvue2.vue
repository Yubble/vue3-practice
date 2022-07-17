<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2022-01-06 19:57:43
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
export default {
  props: ['userId'],
  data() {
    return {
      猫咪数量: 0,
      预定猫咪: ''
    }
  },
  watch() {
    userId() {
      this.找到客户预定猫咪()
    }
  },
  computed: {
    幼猫列表() {
      this.猫咪数量.filter()
    },
    成年猫列表() {
      this.猫咪数量.filter()
    }
  },
  methods: {
    获取所有猫咪() { this.猫咪数量 = api() },
    async 找到客户预定猫咪() {
      this.预定猫咪 = await api(this.userId)
    },
    下架猫咪() {}
  },
  mounted() {
    this.获取所有猫咪()
  }
}
</script>