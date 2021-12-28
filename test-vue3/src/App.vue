<!--
 * @Name: 
 * @Description: 
 * @Author: 刘燕保
 * @Date: 2021-12-15 21:41:18
-->
<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="link">
    <router-link to="/baseCount">跳转：baseCount</router-link>
    <router-link to="/repo">跳转：示例_仓库</router-link>
    <router-link to="/note">跳转：示例_记事本</router-link>
  </div>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.link a {
  margin-right: 15px;
}

#content {
  margin-top: 10px;
}
</style>
